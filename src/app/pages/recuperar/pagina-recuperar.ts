// Recuperacion de contrasena: envia codigo al correo, verifica y redirige al login
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

  // Paso 1: envia el correo al backend para que genere un codigo y lo envie por email
  enviarCodigo(): void {
    this.errorMsg   = '';
    this.successMsg = '';

    if (!this.correo.trim()) {
      this.errorMsg = 'Por favor ingresa tu correo electronico.';
      return;
    }
    if (!this.correo.includes('@')) {
      this.errorMsg = 'Ingresa un correo electronico valido.';
      return;
    }

    this.cargando = true;

    // Llama a POST /api/auth/recuperar/solicitar
    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, {
      correo: this.correo.trim()
    }).subscribe({
      next: () => {
        this.cargando      = false;
        this.codigoEnviado = true;
        this.successMsg    = `Codigo enviado a ${this.correo}. Revisa tu bandeja de entrada.`;
      },
      error: (err) => {
        this.cargando = false;
        if (err.status === 404) {
          this.errorMsg = 'No encontramos una cuenta con ese correo.';
        } else {
          this.errorMsg = 'Error al enviar el codigo. Intenta de nuevo.';
        }
      }
    });
  }

  // Reenvia el codigo si el usuario no lo recibio
  reenviarCodigo(): void {
    this.errorMsg = '';
    this.cargando = true;

    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, {
      correo: this.correo.trim()
    }).subscribe({
      next: () => {
        this.cargando   = false;
        this.successMsg = 'Nuevo codigo enviado a tu correo.';
      },
      error: () => {
        this.cargando = false;
        this.errorMsg = 'Error al reenviar el codigo.';
      }
    });
  }

  // Paso 2: verifica el codigo ingresado y redirige al login si es correcto
  continuar(): void {
    this.errorMsg = '';

    if (!this.codigoRecibido.trim()) {
      this.errorMsg = 'Por favor ingresa el codigo recibido.';
      return;
    }

    this.cargando = true;

    // Llama a POST /api/auth/recuperar/verificar
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
        if (err.status === 400) {
          this.errorMsg = 'El codigo ingresado es incorrecto o ya expiro.';
        } else {
          this.errorMsg = 'Error al verificar el codigo. Intenta de nuevo.';
        }
      }
    });
  }

  // Regresa a la pantalla de login
  volverLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}