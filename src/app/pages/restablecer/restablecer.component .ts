// pages/restablecer/restablecer.component.ts
// Pantalla "Restablece tu contraseña" — Paso 3 del flujo de recuperación.
// Recibe correo + codigo desde el estado de navegación (Router state),
// pide la nueva contraseña al usuario y llama a POST /api/auth/recuperar/cambiar.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/configuracion-entorno';

@Component({
  selector: 'app-restablecer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './restablecer.component.html',
  styleUrls: ['./restablecer.component.css']
})
export class RestablecerComponent implements OnInit {

  nuevaPassword    = '';
  confirmarPassword = '';

  // Datos recibidos desde la pantalla /recuperar via router state
  correo = '';
  codigo = '';

  cargando   = false;
  errorMsg   = '';
  successMsg = '';

  mostrarNueva      = false;
  mostrarConfirmar  = false;

  private readonly URL_API = environment.apiUrl;

  constructor(
    private http:   HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // history.state persiste el state pasado por router.navigate
    const state = history.state as { correo?: string; codigo?: string };

    if (state?.correo && state?.codigo) {
      this.correo = state.correo;
      this.codigo = state.codigo;
    } else {
      this.router.navigate(['/auth/recuperar']);
    }
  }

  // Alterna visibilidad del campo nueva contraseña
  toggleNueva(): void {
    this.mostrarNueva = !this.mostrarNueva;
  }

  // Alterna visibilidad del campo confirmar contraseña
  toggleConfirmar(): void {
    this.mostrarConfirmar = !this.mostrarConfirmar;
  }

  // Llama a POST /api/auth/recuperar/cambiar con correo + codigo + nuevaPassword.
  // El backend verifica el código una vez más, encripta con BCrypt y actualiza en BD.
  restablecer(): void {
    this.errorMsg   = '';
    this.successMsg = '';

    if (!this.nuevaPassword.trim()) {
      this.errorMsg = 'Por favor ingresa tu nueva contraseña.';
      return;
    }
    if (this.nuevaPassword.length < 6) {
      this.errorMsg = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }
    if (this.nuevaPassword !== this.confirmarPassword) {
      this.errorMsg = 'Las contraseñas no coinciden.';
      return;
    }

    this.cargando = true;

    this.http.post(`${this.URL_API}/auth/recuperar/cambiar`, {
      correo:          this.correo,
      codigo:          this.codigo,
      nuevaPassword:   this.nuevaPassword
    }).subscribe({
      next: () => {
        this.cargando   = false;
        this.successMsg = '¡Contraseña actualizada! Redirigiendo al inicio de sesión...';
        // Redirige al login después de 2 segundos
        setTimeout(() => this.router.navigate(['/auth/login']), 2000);
      },
      error: (err) => {
        this.cargando = false;
        if (err.status === 400) {
          this.errorMsg = 'El código ha expirado. Por favor inicia el proceso nuevamente.';
        } else {
          this.errorMsg = 'Error al restablecer la contraseña. Intenta de nuevo.';
        }
      }
    });
  }

  volverLogin(): void {
    this.router.navigate(['/login']);
  }
}