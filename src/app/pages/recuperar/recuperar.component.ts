import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
  cargandoCorreo = false;
  cargandoCodigo = false;
  errorMsgCorreo = '';
  errorMsgCodigo = '';
  successMsg     = '';

  // Código simulado (cuando haya backend, esto lo genera el servidor)
  private codigoSimulado = '123456';

  constructor(private router: Router) {}

  enviarCodigo(): void {
    this.errorMsgCorreo = '';
    this.successMsg     = '';

    if (!this.correo.trim()) {
      this.errorMsgCorreo = 'Por favor ingresa tu correo electrónico.';
      return;
    }
    if (!this.correo.includes('@')) {
      this.errorMsgCorreo = 'Ingresa un correo electrónico válido.';
      return;
    }

    this.cargandoCorreo = true;

    // Simulación de envío (reemplazar con llamada al backend)
    setTimeout(() => {
      this.cargandoCorreo = false;
      this.successMsg     = `Código enviado a ${this.correo}`;
      console.log(`Código simulado enviado a ${this.correo}: ${this.codigoSimulado}`);
    }, 1200);
  }

  reenviarCodigo(): void {
    this.errorMsgCodigo = '';
    this.cargandoCodigo = true;

    setTimeout(() => {
      this.cargandoCodigo = false;
      alert(`Código reenviado a ${this.correo}`);
    }, 1000);
  }

  continuar(): void {
    this.errorMsgCodigo = '';

    if (!this.codigoRecibido.trim()) {
      this.errorMsgCodigo = 'Por favor ingresa el código recibido.';
      return;
    }

    // Simulación de validación (reemplazar con llamada al backend)
    if (this.codigoRecibido === this.codigoSimulado) {
      alert('Código correcto. Módulo de nueva contraseña en desarrollo.');
      this.router.navigate(['/login']);
    } else {
      this.errorMsgCodigo = 'El código ingresado es incorrecto.';
    }
  }

  volverLogin(): void {
    this.router.navigate(['/login']);
  }
}
