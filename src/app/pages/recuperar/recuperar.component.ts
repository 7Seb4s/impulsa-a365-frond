// pages/recuperar/recuperar.component.ts
// Pantalla de recuperación de contraseña en dos pasos:
// 1) El usuario ingresa su correo → backend envía código por email
// 2) El usuario ingresa el código → backend lo verifica → redirige al login
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

  correo         = '';
  codigoRecibido = '';
  codigoEnviado  = false;
  cargando       = false;
  errorMsg       = '';
  successMsg     = '';

  private readonly URL_API = environment.apiUrl;

  constructor(
    private http:   HttpClient,
    private router: Router
  ) {}

  // Paso 1: solicita el envío del código al correo
  enviarCodigo(): void {
    this.limpiarMensajes();

    if (!this.correo.trim()) {
      this.errorMsg = 'Por favor ingresa tu correo electrónico.';
      return;
    }
    if (!this.correo.includes('@')) {
      this.errorMsg = 'Ingresa un correo electrónico válido.';
      return;
    }

    this.cargando = true;

    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, { correo: this.correo.trim() })
      .subscribe({
        next: () => {
          this.cargando      = false;
          this.codigoEnviado = true;
          this.successMsg    = `Código enviado a ${this.correo}. Revisa tu bandeja de entrada.`;
        },
        error: (err) => {
          this.cargando = false;
          this.errorMsg = err.status === 404
            ? 'No encontramos una cuenta con ese correo.'
            : 'Error al enviar el código. Intenta de nuevo.';
        }
      });
  }

  // Reenvía el código si el usuario no lo recibió
  reenviarCodigo(): void {
    this.limpiarMensajes();
    this.cargando = true;

    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, { correo: this.correo.trim() })
      .subscribe({
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

  // Paso 2: verifica el código ingresado
  continuar(): void {
    this.limpiarMensajes();

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
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        this.cargando = false;
        this.errorMsg = err.status === 400
          ? 'El código ingresado es incorrecto o ya expiró.'
          : 'Error al verificar el código. Intenta de nuevo.';
      }
    });
  }

  volverLogin(): void {
    this.router.navigate(['/auth/login']);
  }

  private limpiarMensajes(): void {
    this.errorMsg   = '';
    this.successMsg = '';
  }
}
