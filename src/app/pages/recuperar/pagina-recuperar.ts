// ─────────────────────────────────────────────────────────────
// pagina-recuperar.ts
// Pantalla de recuperación de contraseña.
// Llama al backend para generar y verificar el código de recuperación.
// El backend usa los stored procedures: sp_reset_generar_codigo
// y sp_reset_obtener_vigente para manejar los códigos.
// ─────────────────────────────────────────────────────────────

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/configuracion-entorno';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent {

  // Campos del formulario
  correo         = '';
  codigoRecibido = '';
  codigoEnviado  = false;
  cargando       = false;
  errorMsg       = '';
  successMsg     = '';

  // URL base del backend
  private readonly URL_API = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // ── PASO 1: ENVIAR CÓDIGO AL CORREO ──────────────────────────
  // Llama al backend POST /api/auth/recuperar/solicitar
  // El backend genera un código, lo guarda en BD y lo envía por correo.
  enviarCodigo(): void {
    this.errorMsg   = '';
    this.successMsg = '';

    // Validaciones del campo de correo
    if (!this.correo.trim()) {
      this.errorMsg = 'Por favor ingresa tu correo electrónico.';
      return;
    }
    if (!this.correo.includes('@')) {
      this.errorMsg = 'Ingresa un correo electrónico válido.';
      return;
    }

    this.cargando = true;

    // Llamada real al backend
    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, {
      correo: this.correo.trim()
    }).subscribe({

      next: () => {
        this.cargando     = false;
        this.codigoEnviado = true;
        this.successMsg   = `Código enviado a ${this.correo}. Revisa tu bandeja de entrada.`;
      },

      error: (err) => {
        this.cargando = false;
        if (err.status === 404) {
          this.errorMsg = 'No encontramos una cuenta con ese correo.';
        } else {
          this.errorMsg = 'Error al enviar el código. Intenta de nuevo.';
        }
      }
    });
  }

  // ── REENVIAR CÓDIGO ──────────────────────────────────────────
  // Vuelve a llamar al mismo endpoint para generar un nuevo código.
  // El backend invalida el anterior (sp_reset_generar_codigo).
  reenviarCodigo(): void {
    this.errorMsg = '';
    this.cargando = true;

    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, {
      correo: this.correo.trim()
    }).subscribe({
      next: () => {
        this.cargando   = false;
        this.successMsg = 'Nuevo código enviado a tu correo.';
      },
      error: () => {
        this.cargando = false;
        this.errorMsg = 'Error al reenviar el código.';
      }
    });
  }

  // ── PASO 2: VERIFICAR CÓDIGO ─────────────────────────────────
  // Envía el código ingresado al backend para verificarlo.
  // Llama al endpoint POST /api/auth/recuperar/verificar
  // El backend valida con sp_reset_obtener_vigente.
  continuar(): void {
    this.errorMsg = '';

    if (!this.codigoRecibido.trim()) {
      this.errorMsg = 'Por favor ingresa el código recibido.';
      return;
    }

    this.cargando = true;

    this.http.post(`${this.URL_API}/auth/recuperar/verificar`, {
      correo: this.correo.trim(),
      codigo: this.codigoRecibido.trim()
    }).subscribe({
      next: () => {
        this.cargando = false;
        // Aquí puedes navegar a una pantalla de "nueva contraseña"
        // Por ahora redirige al login
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.cargando = false;
        if (err.status === 400) {
          this.errorMsg = 'El código ingresado es incorrecto o ya expiró.';
        } else {
          this.errorMsg = 'Error al verificar el código. Intenta de nuevo.';
        }
      }
    });
  }

  // ── VOLVER AL LOGIN ──────────────────────────────────────────
  volverLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
