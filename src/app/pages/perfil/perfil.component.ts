// pages/perfil/perfil.component.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioPerfil, PerfilResponse } from '../../core/services/servicio-perfil';

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
  fotoPreview: string | null = null;
  guardando = false;
  modoEdicion = false;
  mostrarModal = false;
  cargando = false;
  errorMsg = '';

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
    this.cargarPerfil();
  }

  // Trae los datos del perfil del backend
  private cargarPerfil(): void {
    this.cargando = true;
    this.errorMsg = '';
    this.servicioPerfil.obtener().subscribe({
      next: (perfil) => {
        console.log('[Perfil] Respuesta del backend:', perfil);
        this.perfilBD = perfil;
        // Asignamos un objeto nuevo para forzar el change detection de Angular
        this.formulario = {
          nombreCompleto: perfil.nombreCompleto ?? '',
          correo:         perfil.correo ?? '',
          direccion:      perfil.direccion ?? '',
          telefono:       perfil.telefono ?? '',
          dni:            perfil.dni ?? ''
        };
        this.formularioRespaldo = { ...this.formulario };
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
    this.modoEdicion = true;
  }

  cancelarEdicion(): void {
    this.formulario = { ...this.formularioRespaldo };
    this.modoEdicion = false;
  }

  onFotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { this.fotoPreview = reader.result as string; };
    reader.readAsDataURL(file);
  }

  // Envia los cambios al backend (PUT /api/perfil)
  guardar(): void {
    if (!this.formulario.nombreCompleto.trim()) {
      alert('El nombre es obligatorio.');
      return;
    }
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
        // El formulario ya tiene los datos que acabamos de enviar, asi que la vista lectura
        // los muestra inmediatamente. Recargamos del backend en segundo plano para sincronizar.
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