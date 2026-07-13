// pages/recuperar/recuperar.component.ts
// Flujo de recuperaciÃ³n de contraseÃ±a: solicita cÃ³digo â†’ verifica â†’ navega a /restablecer
import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

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

  // Paso 1: solicita el envÃ­o del cÃ³digo al correo
  enviarCodigo(): void {
    this.limpiarMensajes();

    if (!this.correo.trim()) {
      this.errorMsg = 'Por favor ingresa tu correo electrÃ³nico.';
      return;
    }
    if (!this.correo.includes('@')) {
      this.errorMsg = 'Ingresa un correo electrÃ³nico vÃ¡lido.';
      return;
    }

    this.cargando = true;

    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, { correo: this.correo.trim() })
      .subscribe({
        next: () => {
          this.cargando      = false;
          this.codigoEnviado = true;
          this.successMsg    = `CÃ³digo enviado a ${this.correo}. Revisa tu bandeja de entrada.`;
          this.cdr.detectChanges();
        },
        error: (err) => {
          this.cargando = false;
          this.errorMsg = err.status === 404
            ? 'No encontramos una cuenta con ese correo.'
            : 'Error al enviar el cÃ³digo. Intenta de nuevo.';
          this.cdr.detectChanges();
        }
      });
  }

  // ReenvÃ­a el cÃ³digo si el usuario no lo recibiÃ³
  reenviarCodigo(): void {
    this.limpiarMensajes();
    this.cargando = true;

    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, { correo: this.correo.trim() })
      .subscribe({
        next: () => {
          this.cargando   = false;
          this.successMsg = 'Nuevo cÃ³digo enviado a tu correo.';
          this.cdr.detectChanges();
        },
        error: () => {
          this.cargando = false;
          this.errorMsg = 'Error al reenviar el cÃ³digo.';
          this.cdr.detectChanges();
        }
      });
  }

  // Paso 2: verifica el cÃ³digo y navega a /restablecer pasando correo + codigo
  continuar(): void {
    this.limpiarMensajes();

    if (!this.codigoRecibido.trim()) {
      this.errorMsg = 'Por favor ingresa el cÃ³digo recibido.';
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
          ? 'El cÃ³digo ingresado es incorrecto o ya expirÃ³.'
          : 'Error al verificar el cÃ³digo. Intenta de nuevo.';
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
