// pages/tecnico/tecnico-perfil.component.ts
// Perfil del TECNICO: reusa ServicioPerfil (misma data real) pero dentro
// del shell del tecnico para que la barra lateral no cambie de estilo.
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-tecnico-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tecnico-perfil.component.html',
  styleUrls: ['./tecnico-panel.css'],
  encapsulation: ViewEncapsulation.None
})
export class TecnicoPerfilComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  perfilBD: PerfilResponse | null = null;
  fotoPreview: string | null = null;
  modoEdicion = false;
  guardando = false;
  subiendoFoto = false;
  errorFoto = '';
  guardado = false;

  private archivoFotoPendiente: File | null = null;

  formulario: FormularioPerfil = { nombreCompleto: '', correo: '', direccion: '', telefono: '', dni: '' };
  private respaldo: FormularioPerfil = { ...this.formulario };

  // Cambio de contraseÃ±a
  mostrarModalPass = false;
  passForm = { actual: '', nueva: '', confirmar: '' };
  passError = '';
  passOk = false;
  passGuardando = false;

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioPerfil: ServicioPerfil,
    private location: Location,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe(url => {
      if (!this.archivoFotoPendiente) {
        this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        this.cdr.detectChanges();
      }
    });
    this.cargarPerfil();
  }

  private cargarPerfil(): void {
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
        this.respaldo = { ...this.formulario };
        if (!this.archivoFotoPendiente) {
          const url = resolverUrlFoto(perfil.fotoUrl);
          this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        }
        this.cdr.detectChanges();
      },
      error: () => this.cdr.detectChanges()
    });
  }

  activarEdicion(): void {
    this.respaldo = { ...this.formulario };
    this.archivoFotoPendiente = null;
    this.errorFoto = '';
    this.modoEdicion = true;
  }

  cancelar(): void {
    this.formulario = { ...this.respaldo };
    this.archivoFotoPendiente = null;
    this.errorFoto = '';
    const url = resolverUrlFoto(this.perfilBD?.fotoUrl);
    this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
    this.modoEdicion = false;
  }

  onFotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const permitidos = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!permitidos.includes(file.type)) { this.errorFoto = 'Solo JPEG, PNG, WEBP o GIF.'; return; }
    if (file.size > 5 * 1024 * 1024) { this.errorFoto = 'La imagen no puede superar 5 MB.'; return; }
    this.errorFoto = '';
    this.archivoFotoPendiente = file;
    const reader = new FileReader();
    reader.onload = () => { this.fotoPreview = reader.result as string; this.cdr.detectChanges(); };
    reader.readAsDataURL(file);
  }

  guardar(): void {
    if (!this.formulario.nombreCompleto.trim()) { alert('El nombre es obligatorio.'); return; }
    if (this.archivoFotoPendiente) this.subirFotoYGuardar();
    else this.guardarDatos();
  }

  private subirFotoYGuardar(): void {
    this.subiendoFoto = true;
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
        this.errorFoto = err?.error?.message || 'No se pudo subir la foto.';
        this.cdr.detectChanges();
      }
    });
  }

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
        this.guardado = true;
        setTimeout(() => { this.guardado = false; this.cdr.detectChanges(); }, 2500);
        this.cdr.detectChanges();
        this.cargarPerfil();
      },
      error: (err) => {
        this.guardando = false;
        alert(err?.error?.message || 'No se pudo actualizar el perfil.');
      }
    });
  }

  // â”€â”€ Cambio de contraseÃ±a â”€â”€
  abrirModalPass(): void {
    this.passForm = { actual: '', nueva: '', confirmar: '' };
    this.passError = '';
    this.passOk = false;
    this.mostrarModalPass = true;
  }

  cerrarModalPass(): void { this.mostrarModalPass = false; }

  cambiarContrasena(): void {
    const { actual, nueva, confirmar } = this.passForm;
    if (!actual || !nueva || !confirmar) { this.passError = 'Completa todos los campos.'; return; }
    if (nueva.length < 4) { this.passError = 'La nueva contraseÃ±a debe tener al menos 4 caracteres.'; return; }
    if (nueva !== confirmar) { this.passError = 'Las contraseÃ±as nuevas no coinciden.'; return; }

    this.passGuardando = true;
    this.passError = '';
    this.servicioPerfil.cambiarContrasena({
      contrasenaActual:    actual,
      nuevaContrasena:     nueva,
      confirmarContrasena: confirmar
    }).subscribe({
      next: () => {
        this.passGuardando = false;
        this.passOk = true;
        this.cdr.detectChanges();
        setTimeout(() => { this.cerrarModalPass(); this.cdr.detectChanges(); }, 1500);
      },
      error: (err) => {
        this.passGuardando = false;
        this.passError = err?.error?.message || err?.error?.error
          || 'No se pudo cambiar la contraseÃ±a. Verifica la actual.';
        this.cdr.detectChanges();
      }
    });
  }

  goBack(): void {
    if (this.modoEdicion) this.cancelar();
    else this.location.back();
  }

  onLogout(): void { this.servicioAuth.logout(); }

  get nombre(): string {
    return this.usuario?.nombre || this.usuario?.codigo || 'Usuario';
  }
}
