// pages/administracion/administracion.component.ts
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioPerfil } from '../../core/services/servicio-perfil';

type Vista = 'menu' | 'contrasena' | 'perfil';

@Component({
  selector: 'app-administracion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.css']
})
export class AdministracionComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  vista: Vista = 'menu';
  guardando    = false;
  mostrarModal = false;
  mensajeModal = '';

  // Toggle ojos
  mostrarActual    = false;
  mostrarNueva     = false;
  mostrarConfirmar = false;

  // Errores contraseña
  errorConfirmar = false;
  errorMsg       = '';

  // Validaciones en tiempo real de la nueva contraseña
  requisitos = {
    longitud:   false,   // mínimo 8 caracteres
    mayuscula:  false,   // al menos 1 letra mayúscula
    numero:     false,   // al menos 1 dígito
    especial:   false,   // al menos 1 carácter especial
  };

  // Formulario contraseña
  form = { actual: '', nueva: '', confirmar: '' };

  // Foto perfil
  fotoPreview: string | null = null;

  // Formulario perfil
  perfil = { nombreCompleto: '', correo: '', direccion: '', telefono: '', dni: '' };

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioPerfil: ServicioPerfil,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.cargarPerfil();
  }

  // ── NAVEGACIÓN SIDEBAR ──────────────────────────────────────
  irAInicio(): void            { this.router.navigate(['/dashboard/admin']); }
  irAGestionTickets(): void    { this.router.navigate(['/dashboard/gestion-tickets']); }
  irAGestionIncidencias(): void { this.router.navigate(['/dashboard/gestion-incidencias']); }
  irACrearUsuario(): void      { this.router.navigate(['/dashboard/usuarios/crear']); }
  irAPanelUsuarios(): void     { this.router.navigate(['/dashboard/panel-usuarios']); }

  private cargarPerfil(): void {
    this.servicioPerfil.obtener().subscribe({
      next: (p) => {
        this.perfil = {
          nombreCompleto: p.nombreCompleto ?? '',
          correo:         p.correo         ?? '',
          direccion:      p.direccion       ?? '',
          telefono:       p.telefono        ?? '',
          dni:            p.dni             ?? ''
        };
        this.cdr.detectChanges();
      },
      error: () => { this.cdr.detectChanges(); }
    });
  }

  // Valida requisitos en tiempo real mientras el usuario escribe
  onNuevaContrasenaChange(): void {
    const v = this.form.nueva;
    this.requisitos.longitud  = v.length >= 8;
    this.requisitos.mayuscula = /[A-Z]/.test(v);
    this.requisitos.numero    = /[0-9]/.test(v);
    this.requisitos.especial  = /[^a-zA-Z0-9]/.test(v);
    // Resetea el error de confirmación cuando cambia la nueva contraseña
    this.errorConfirmar = false;
  }

  get requisitosOk(): boolean {
    return this.requisitos.longitud && this.requisitos.mayuscula && this.requisitos.numero && this.requisitos.especial;
  }

  // ── Cambiar contraseña ──
  actualizarContrasena(): void {
    this.errorConfirmar = false;
    this.errorMsg = '';

    if (!this.form.actual || !this.form.nueva || !this.form.confirmar) {
      this.errorMsg = 'Completa todos los campos.'; return;
    }
    if (!this.requisitosOk) {
      this.errorMsg = 'La nueva contraseña no cumple los requisitos.'; return;
    }
    if (this.form.nueva !== this.form.confirmar) {
      this.errorConfirmar = true; return;
    }

    this.guardando = true;
    this.servicioPerfil.cambiarContrasena({
      contrasenaActual:    this.form.actual,
      nuevaContrasena:     this.form.nueva,
      confirmarContrasena: this.form.confirmar
    }).subscribe({
      next: () => {
        this.guardando = false;
        this.cdr.detectChanges();
        this.form = { actual: '', nueva: '', confirmar: '' };
        this.requisitos = { longitud: false, mayuscula: false, numero: false, especial: false };
        this.vista = 'menu';
        this.mensajeModal = 'Tu contraseña ha sido actualizada correctamente.';
        this.mostrarModal = true;
      },
      error: (err) => {
        this.guardando = false;
        this.cdr.detectChanges();
        this.errorMsg = err?.error?.message || 'No se pudo actualizar la contraseña.';
      }
    });
  }

  // ── Guardar perfil ──
  guardarPerfil(): void {
    if (!this.perfil.nombreCompleto.trim()) { this.errorMsg = 'El nombre es obligatorio.'; return; }
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
        this.errorMsg = err?.error?.message || 'No se pudo actualizar el perfil.';
      }
    });
  }

  onFotoChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file  = input.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => { this.fotoPreview = reader.result as string; };
    reader.readAsDataURL(file);
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}