// pages/perfil/perfil.component.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioPerfil, PerfilResponse, resolverUrlFoto } from '../../core/services/servicio-perfil';

interface FormularioPerfil {
  nombreCompleto: string;
  correo: string;
  direccion: string;
  telefono: string;
  dni: string;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  perfilBD: PerfilResponse | null = null;
  fotoPreview: string | null = null;   // preview local (base64) o URL del servidor
  guardando = false;
  subiendoFoto = false;                // spinner mientras sube la foto
  errorFoto = '';                      // mensaje de error al subir foto
  modoEdicion = false;
  mostrarModal = false;
  cargando = false;
  errorMsg = '';

  // Archivo seleccionado pendiente de subir
  private archivoFotoPendiente: File | null = null;

  formulario: FormularioPerfil = {
    nombreCompleto: '',
    correo: '',
    direccion: '',
    telefono: '',
    dni: ''
  };

  private formularioRespaldo: FormularioPerfil = { ...this.formulario };

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioPerfil: ServicioPerfil,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    // Mostrar foto guardada inmediatamente mientras carga del backend
    this.servicioAuth.fotoUrl$.subscribe(url => {
      if (!this.archivoFotoPendiente) {
        this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        this.cdr.detectChanges();
      }
    });
    this.cargarPerfil();
  }

  // Trae los datos del perfil del backend
  private cargarPerfil(): void {
    this.cargando = true;
    this.errorMsg = '';
    this.servicioPerfil.obtener().subscribe({
      next: (perfil) => {
        this.perfilBD = perfil;
        this.formulario = {
          nombreCompleto: perfil.nombreCompleto ?? '',
          correo:         perfil.correo ?? '',
          direccion:      perfil.direccion ?? '',
          telefono:       perfil.telefono ?? '',
          dni:            perfil.dni ?? ''
        };
        this.formularioRespaldo = { ...this.formulario };
        // La foto ya fue actualizada globalmente por servicioPerfil.obtener() via tap()
        // Solo actualizamos el preview local si no hay archivo pendiente
        if (!this.archivoFotoPendiente) {
          const url = resolverUrlFoto(perfil.fotoUrl);
          this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        }
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('[Perfil] Error al cargar:', err);
        this.errorMsg = 'No se pudo cargar el perfil.';
        this.cargando = false;
      }
    });
  }

  activarEdicion(): void {
    this.formularioRespaldo = { ...this.formulario };
    this.archivoFotoPendiente = null;
    this.errorFoto = '';
    this.modoEdicion = true;
  }

  cancelarEdicion(): void {
    this.formulario = { ...this.formularioRespaldo };
    this.archivoFotoPendiente = null;
    this.errorFoto = '';
    // Restaurar foto del servidor al cancelar
    const url = resolverUrlFoto(this.perfilBD?.fotoUrl);
    this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
    this.modoEdicion = false;
  }

  // El usuario elige una imagen: hacemos preview local y guardamos el File
  onFotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;

    // Validar tipo antes de mostrar preview
    const tiposPermitidos = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!tiposPermitidos.includes(file.type)) {
      this.errorFoto = 'Solo se permiten imÃ¡genes JPEG, PNG, WEBP o GIF.';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.errorFoto = 'La imagen no puede superar 5 MB.';
      return;
    }

    this.errorFoto = '';
    this.archivoFotoPendiente = file;

    // Preview inmediato sin esperar al servidor
    const reader = new FileReader();
    reader.onload = () => {
      this.fotoPreview = reader.result as string;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  // Guarda los datos del perfil. Si hay foto pendiente, la sube primero.
  guardar(): void {
    if (!this.formulario.nombreCompleto.trim()) {
      alert('El nombre es obligatorio.');
      return;
    }

    if (this.archivoFotoPendiente) {
      this.subirFotoYLuegoGuardar();
    } else {
      this.guardarDatos();
    }
  }

  // Sube la foto al backend y luego guarda los datos del formulario
  private subirFotoYLuegoGuardar(): void {
    this.subiendoFoto = true;
    this.errorFoto = '';
    // subirFoto ya llama actualizarFoto() internamente via tap()
    this.servicioPerfil.subirFoto(this.archivoFotoPendiente!).subscribe({
      next: (res) => {
        this.subiendoFoto = false;
        this.archivoFotoPendiente = null;
        const url = resolverUrlFoto(res.fotoUrl);
        this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        this.cdr.detectChanges();
        this.guardarDatos();
      },
      error: (err) => {
        this.subiendoFoto = false;
        this.errorFoto = err?.error?.message || 'No se pudo subir la foto. Intenta de nuevo.';
        this.cdr.detectChanges();
      }
    });
  }

  // EnvÃ­a los datos de texto al backend (PUT /api/perfil)
  private guardarDatos(): void {
    this.guardando = true;
    this.servicioPerfil.actualizar({
      nombreCompleto: this.formulario.nombreCompleto.trim(),
      correo:         this.formulario.correo.trim(),
      direccion:      this.formulario.direccion?.trim() || undefined,
      telefono:       this.formulario.telefono.trim(),
      dni:            this.formulario.dni.trim()
    }).subscribe({
      next: () => {
        this.guardando = false;
        this.modoEdicion = false;
        this.mostrarModal = true;
        this.cdr.detectChanges();
        this.cargarPerfil();
      },
      error: (err) => {
        this.guardando = false;
        console.error('Error al guardar perfil:', err);
        alert(err?.error?.message || err?.message || 'No se pudo actualizar el perfil.');
      }
    });
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  goBack(): void {
    if (this.modoEdicion) this.cancelarEdicion();
    else this.location.back();
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}