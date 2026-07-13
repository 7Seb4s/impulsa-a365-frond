// pages/restablecer/restablecer.component.ts
// Pantalla "Restablece tu contraseÃ±a" â€” Paso 3 del flujo de recuperaciÃ³n.
// Recibe correo + codigo desde el estado de navegaciÃ³n (Router state),
// pide la nueva contraseÃ±a al usuario y llama a POST /api/auth/recuperar/cambiar.
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

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
    private router: Router,
    private cdr:    ChangeDetectorRef
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

  // Alterna visibilidad del campo nueva contraseÃ±a
  toggleNueva(): void {
    this.mostrarNueva = !this.mostrarNueva;
  }

  // Alterna visibilidad del campo confirmar contraseÃ±a
  toggleConfirmar(): void {
    this.mostrarConfirmar = !this.mostrarConfirmar;
  }

  // Llama a POST /api/auth/recuperar/cambiar con correo + codigo + nuevaPassword.
  // El backend verifica el cÃ³digo una vez mÃ¡s, encripta con BCrypt y actualiza en BD.
  restablecer(): void {
    this.errorMsg   = '';
    this.successMsg = '';

    if (!this.nuevaPassword.trim()) {
      this.errorMsg = 'Por favor ingresa tu nueva contraseÃ±a.';
      return;
    }
    if (this.nuevaPassword.length < 8) {
      this.errorMsg = 'MÃ­nimo 8 caracteres.';
      return;
    }
    if (!/[\p{Lu}]/u.test(this.nuevaPassword)) {
      this.errorMsg = 'Debe incluir al menos 1 letra mayÃºscula.';
      return;
    }
    if (!/[0-9]/.test(this.nuevaPassword)) {
      this.errorMsg = 'Debe incluir al menos 1 nÃºmero.';
      return;
    }
    if (!/[^a-zA-Z0-9]/.test(this.nuevaPassword)) {
      this.errorMsg = 'Debe incluir al menos 1 carÃ¡cter especial (!@#$...).';
      return;
    }
    if (this.nuevaPassword !== this.confirmarPassword) {
      this.errorMsg = 'Las contraseÃ±as no coinciden.';
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
        this.successMsg = 'Â¡ContraseÃ±a actualizada! Redirigiendo al inicio de sesiÃ³n...';
        // Redirige al login despuÃ©s de 2 segundos
        setTimeout(() => this.router.navigate(['/auth/login']), 2000);
      },
      error: (err) => {
        this.cargando = false;
        this.cdr.detectChanges();
        if (err.status === 400) {
          this.errorMsg = 'El cÃ³digo ha expirado. Por favor inicia el proceso nuevamente.';
        } else {
          this.errorMsg = 'Error al restablecer la contraseÃ±a. Intenta de nuevo.';
        }
      }
    });
  }

  volverLogin(): void {
    this.router.navigate(['/login']);
  }
}