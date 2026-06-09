// pages/configuracion/configuracion.component.ts
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioPerfil } from '../../core/services/servicio-perfil';

type Vista = 'menu' | 'contrasena' | 'perfil';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  vista: Vista = 'menu';
  guardando = false;
  mostrarModal = false;
  mensajeModal = '';

  // Toggle ojos
  mostrarActual = false;
  mostrarNueva = false;
  mostrarConfirmar = false;
  errorConfirmar = false;
  errorMsg = '';

  // Formulario contrasena
  form = { actual: '', nueva: '', confirmar: '' };

  // Foto perfil
  fotoPreview: string | null = null;

  // Formulario perfil (usa los nombres del backend)
  perfil = { nombreCompleto: '', correo: '', direccion: '', telefono: '', dni: '' };

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioPerfil: ServicioPerfil,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.cargarPerfil();
  }

  // Trae los datos del perfil para pre-llenar la vista de edicion
  private cargarPerfil(): void {
    this.servicioPerfil.obtener().subscribe({
      next: (p) => {
        this.perfil = {
          nombreCompleto: p.nombreCompleto ?? '',
          correo:         p.correo ?? '',
          direccion:      p.direccion ?? '',
          telefono:       p.telefono ?? '',
          dni:            p.dni ?? ''
        };
        this.cdr.detectChanges();
      },
      error: () => { this.cdr.detectChanges(); }
    });
  }

  // ── Cambiar contrasena ──
  // Envia el formulario al backend (PUT /api/perfil/contrasena)
  actualizarContrasena(): void {
    this.errorConfirmar = false;
    this.errorMsg = '';
    if (!this.form.actual || !this.form.nueva || !this.form.confirmar) {
      alert('Completa todos los campos.'); return;
    }
    if (this.form.nueva.length < 8) {
      this.errorMsg = 'Mínimo 8 caracteres.'; alert(this.errorMsg); return;
    }
    if (!/[A-Z]/.test(this.form.nueva)) {
      this.errorMsg = 'Debe incluir al menos 1 mayúscula.'; alert(this.errorMsg); return;
    }
    if (!/[0-9]/.test(this.form.nueva)) {
      this.errorMsg = 'Debe incluir al menos 1 número.'; alert(this.errorMsg); return;
    }
    if (!/[^a-zA-Z0-9]/.test(this.form.nueva)) {
      this.errorMsg = 'Debe incluir al menos 1 carácter especial (!@#$...).'; alert(this.errorMsg); return;
    }
    if (this.form.nueva !== this.form.confirmar) {
      this.errorConfirmar = true; return;
    }
    this.guardando = true;
    this.servicioPerfil.cambiarContrasena({
      contrasenaActual: this.form.actual,
      nuevaContrasena: this.form.nueva,
      confirmarContrasena: this.form.confirmar
    }).subscribe({
      next: () => {
        this.guardando = false;
        this.cdr.detectChanges();
        this.form = { actual: '', nueva: '', confirmar: '' };
        this.vista = 'menu';
        this.mensajeModal = 'Tu contraseña ha sido actualizada correctamente.';
        this.mostrarModal = true;
      },
      error: (err) => {
        this.guardando = false;
        this.cdr.detectChanges();
        this.errorMsg = err?.error?.message || 'No se pudo actualizar la contraseña.';
        alert(this.errorMsg);
      }
    });
  }

  // ── Guardar perfil ──
  // Envia el formulario al backend (PUT /api/perfil)
  guardarPerfil(): void {
    if (!this.perfil.nombreCompleto.trim()) { alert('El nombre es obligatorio.'); return; }
    this.guardando = true;
    this.servicioPerfil.actualizar({
      nombreCompleto: this.perfil.nombreCompleto.trim(),
      correo:         this.perfil.correo.trim(),
      direccion:      this.perfil.direccion?.trim() || undefined,
      telefono:       this.perfil.telefono.trim(),
      dni:            this.perfil.dni.trim()
    }).subscribe({
      next: () => {
        this.guardando = false;
        this.cdr.detectChanges();
        this.vista = 'menu';
        this.mensajeModal = 'Tu perfil ha sido actualizado correctamente.';
        this.mostrarModal = true;
      },
      error: (err) => {
        this.guardando = false;
        this.cdr.detectChanges();
        alert(err?.error?.message || 'No se pudo actualizar el perfil.');
      }
    });
  }

  onFotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { this.fotoPreview = reader.result as string; };
    reader.readAsDataURL(file);
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}
