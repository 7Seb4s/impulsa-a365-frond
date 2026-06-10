// pages/recuperar/recuperar.component.ts
// Flujo de recuperación de contraseña: solicita código → verifica → navega a /restablecer
import { Component, ChangeDetectorRef } from '@angular/core';
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
    private router: Router,
    private cdr:    ChangeDetectorRef
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
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.cargando = false;
          this.errorMsg = err.status === 404
            ? 'No encontramos una cuenta con ese correo.'
            : 'Error al enviar el código. Intenta de nuevo.';
          this.cdr.detectChanges();
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
          this.cdr.detectChanges();
        },
        error: () => {
          this.cargando = false;
          this.errorMsg = 'Error al reenviar el código.';
          this.cdr.detectChanges();
        }
      });
  }

  // Paso 2: verifica el código y navega a /restablecer pasando correo + codigo
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
        this.cdr.detectChanges();
        this.router.navigate(['/restablecer'], {
          state: {
            correo: this.correo.trim(),
            codigo: this.codigoRecibido.trim()
          }
        });
      },
      error: (err) => {
        this.cargando = false;
        this.errorMsg = err.status === 400
          ? 'El código ingresado es incorrecto o ya expiró.'
          : 'Error al verificar el código. Intenta de nuevo.';
        this.cdr.detectChanges();
      }
    });
  }

  volverLogin(): void {
    this.router.navigate(['/login']);
  }

  private limpiarMensajes(): void {
    this.errorMsg   = '';
    this.successMsg = '';
  }
}
