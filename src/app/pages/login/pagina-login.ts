// -------------------------------------------------------------
// pagina-login.ts
// Componente de la pantalla de inicio de sesión.
// Envía las credenciales al backend y redirige según el rol.
// -------------------------------------------------------------

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutenticacion } from '../../core/services/servicio-autenticacion';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  codigo            = '';
  contrasena        = '';
  recuerdame        = false;
  mostrarContrasena = false;
  cargando          = false;

  // Mensajes de error separados por campo
  errorCodigo     = '';
  errorContrasena = '';
  errorGeneral    = '';

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private router: Router
  ) {}

  // Se ejecuta cuando el usuario presiona "Ingresar".
  // Limpia errores anteriores, valida campos y llama al backend.
  onLogin(): void {
    this.errorCodigo     = '';
    this.errorContrasena = '';
    this.errorGeneral    = '';

    // Validar que el campo código no esté vacío
    if (!this.codigo.trim()) {
      this.errorCodigo = 'Por favor ingresa tu código.';
      return;
    }

    // Validar que el campo contraseña no esté vacío
    if (!this.contrasena.trim()) {
      this.errorContrasena = 'Por favor ingresa tu contraseña.';
      return;
    }

    this.cargando = true;

    this.servicioAuth.login({
      codigo:   this.codigo.trim(),
      password: this.contrasena
    }).subscribe({

      // Login exitoso: redirigir según el rol
      next: (respuesta) => {
        this.cargando = false;
        const rol = respuesta.rol;
        if (rol === 'ADMINISTRADOR' || rol === 'GERENTE') {
          this.router.navigate(['/dashboard/admin']);
        } else {
          this.router.navigate(['/dashboard/agente']);
        }
      },

      error: (err) => {
        this.cargando    = false;
        this.contrasena  = '';  // limpiar contraseña para que el usuario pueda escribir de nuevo

        if (err.status === 401 || err.status === 403 || err.status === 404) {
          // Credenciales incorrectas (cualquier rechazo del backend)
          this.errorGeneral = 'Código o contraseña incorrectos. Intenta de nuevo.';
        } else if (err.status === 0 || err.status === 503 || err.status === 504) {
          // Sin conexión al servidor
          this.errorGeneral = 'No se puede conectar con el servidor. Intenta más tarde.';
        } else {
          this.errorGeneral = 'Ocurrió un error inesperado. Intenta de nuevo.';
        }

        // Enfocar el campo contraseña automáticamente
        setTimeout(() => {
          const campo = document.getElementById('contrasena') as HTMLInputElement;
          if (campo) campo.focus();
        }, 50);
      }
    });
  }

  // Alterna la visibilidad del campo de contraseña.
  toggleContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  // Navega a la pantalla de recuperación de contraseña.
  onOlvidaste(): void {
    this.router.navigate(['/recuperar']);
  }
}
