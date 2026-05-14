import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicioAutenticacion } from '../../core/services/servicio-autenticacion';
import { environment } from '../../../environments/configuracion-entorno';

declare const google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly GOOGLE_CLIENT_ID = '901867767212-g35510ieasb2uf411lgsinad0u8c36b7.apps.googleusercontent.com';
  private readonly URL_API          = environment.apiUrl;

  codigo            = '';
  contrasena        = '';
  mostrarContrasena = false;
  recuerdame        = false;
  cargando          = false;
  cargandoGoogle    = false;

  errorCodigo     = '';
  errorContrasena = '';
  errorGeneral    = '';

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private router:       Router,
    private ngZone:       NgZone,
    private http:         HttpClient
  ) {}

  ngOnInit(): void {
    this.inicializarGoogle();
  }

  onLogin(): void {
    this.limpiarErrores();

    if (!this.codigo.trim()) {
      this.errorCodigo = 'Por favor ingresa tu código.';
      return;
    }
    if (!this.contrasena.trim()) {
      this.errorContrasena = 'Por favor ingresa tu contraseña.';
      return;
    }

    this.cargando = true;

    this.servicioAuth.login({
      codigo:   this.codigo.trim(),
      password: this.contrasena
    }).subscribe({
      next: (res) => {
        this.cargando = false;
        this.redirigirPorRol(res.rol);
      },
      error: (err) => {
        this.cargando   = false;
        this.contrasena = '';

        if (err.status === 401 || err.status === 403 || err.status === 404) {
          this.errorGeneral = 'Código o contraseña incorrectos.';
        } else if (err.status === 0 || err.status >= 500) {
          this.errorGeneral = 'No se puede conectar con el servidor. Intenta más tarde.';
        } else {
          this.errorGeneral = 'Ocurrió un error inesperado. Intenta de nuevo.';
        }

        setTimeout(() => {
          (document.getElementById('contrasena') as HTMLInputElement)?.focus();
        }, 50);
      }
    });
  }

  // Inicializa el botón de Google en el div#google-login-btn
  private inicializarGoogle(): void {
    const intervalo = setInterval(() => {
      if (typeof google !== 'undefined' && google.accounts) {
        clearInterval(intervalo);
        google.accounts.id.initialize({
          client_id:            this.GOOGLE_CLIENT_ID,
          use_fedcm_for_prompt: false,
          callback: (response: any) => {
            this.ngZone.run(() => this.manejarGoogle(response));
          }
        });
        setTimeout(() => {
          const btn = document.getElementById('google-login-btn');
          if (btn) {
            google.accounts.id.renderButton(btn, {
              theme: 'outline', size: 'large', text: 'signin_with'
            });
          }
        }, 300);
      }
    }, 100);
  }

  private manejarGoogle(response: any): void {
    if (!response.credential) return;

    this.cargandoGoogle = true;
    this.errorGeneral   = '';

    this.http.post<any>(`${this.URL_API}/auth/google`, { credential: response.credential })
      .subscribe({
        next: (res) => {
          localStorage.setItem('a365_token', res.token);
          localStorage.setItem('a365_usuario', JSON.stringify({
            id: res.id, codigo: res.codigo, nombre: res.nombre, rol: res.rol
          }));
          this.cargandoGoogle = false;
          this.redirigirPorRol(res.rol);
        },
        error: (err) => {
          this.cargandoGoogle = false;
          if (err.status === 404) {
            this.errorGeneral = 'Tu correo de Google no está registrado en el sistema.';
          } else if (err.status === 403) {
            this.errorGeneral = 'Tu cuenta está desactivada. Contacta al administrador.';
          } else {
            this.errorGeneral = 'Error al iniciar sesión con Google. Intenta de nuevo.';
          }
        }
      });
  }

  private redirigirPorRol(rol: string): void {
    if (rol === 'ADMINISTRADOR' || rol === 'GERENTE') {
      this.router.navigate(['/dashboard/admin']);
    } else {
      this.router.navigate(['/dashboard/agente']);
    }
  }

  toggleContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  onOlvidaste(): void {
    this.router.navigate(['/auth/recuperar']);
  }

  private limpiarErrores(): void {
    this.errorCodigo     = '';
    this.errorContrasena = '';
    this.errorGeneral    = '';
  }
}
