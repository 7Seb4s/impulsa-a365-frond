// Login con codigo + contrasena y login con Google Sign-In
import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
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
  private readonly URL_API = environment.apiUrl;

  codigo            = '';
  contrasena        = '';
  recuerdame        = false;
  mostrarContrasena = false;
  cargando          = false;
  cargandoGoogle    = false;

  errorCodigo     = '';
  errorContrasena = '';
  errorGeneral    = '';

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private router:       Router,
    private ngZone:       NgZone,
    private cdr:          ChangeDetectorRef,
    private http:         HttpClient
  ) {}

  ngOnInit(): void {
    // Inicializa Google Sign-In cuando se carga la pagina
    this.inicializarGoogle();
  }

  // Login normal: valida los campos, llama al backend y redirige al dashboard
  onLogin(): void {
    this.errorCodigo     = '';
    this.errorContrasena = '';
    this.errorGeneral    = '';

    if (!this.codigo.trim()) {
      this.errorCodigo = 'Por favor ingresa tu codigo.';
      return;
    }
    if (!this.contrasena.trim()) {
      this.errorContrasena = 'Por favor ingresa tu contrasena.';
      return;
    }

    this.cargando = true;

    // Llama al servicio que conecta con POST /api/auth/login
    this.servicioAuth.login({
      codigo:   this.codigo.trim(),
      password: this.contrasena
    }).subscribe({
      next: (respuesta) => {
        this.cargando = false;
        this.cdr.detectChanges();
        this.redirigirPorRol(respuesta.rol);
      },
      error: (err) => {
        this.cargando   = false;
        this.contrasena = '';

        if (err.status === 401 || err.status === 403 || err.status === 404) {
          this.errorGeneral = 'Codigo o contrasena incorrectos. Intenta de nuevo.';
        } else if (err.status === 0 || err.status === 503 || err.status === 504) {
          this.errorGeneral = 'No se puede conectar con el servidor. Intenta mas tarde.';
        } else {
          this.errorGeneral = 'Ocurrio un error inesperado. Intenta de nuevo.';
        }

        setTimeout(() => {
          const campo = document.getElementById('contrasena') as HTMLInputElement;
          if (campo) campo.focus();
        }, 50);
      }
    });
  }

  // Configura el boton de Google Sign-In en el div con id="google-login-btn"
  private inicializarGoogle(): void {
    const intervalo = setInterval(() => {
      if (typeof google !== 'undefined' && google.accounts) {
        clearInterval(intervalo);

        // Configura el callback que se ejecuta cuando el usuario selecciona su cuenta
        google.accounts.id.initialize({
          client_id:            this.GOOGLE_CLIENT_ID,
          use_fedcm_for_prompt: false,
          callback: (response: any) => {
            this.ngZone.run(() => this.manejarGoogle(response));
          }
        });

        // Renderiza el boton de Google en el HTML
        setTimeout(() => {
          const btn = document.getElementById('google-login-btn');
          if (btn) {
            google.accounts.id.renderButton(btn, {
              theme: 'outline',
              size:  'large',
              text:  'signin_with'
            });
          }
        }, 300);
      }
    }, 100);
  }

  // Procesa la respuesta de Google: envia el credential al backend y guarda el token
  private manejarGoogle(response: any): void {
    if (!response.credential) return;

    this.cargandoGoogle = true;
    this.errorGeneral   = '';

    // Envia el credential de Google al backend POST /api/auth/google
    this.http.post<any>(`${this.URL_API}/auth/google`, { credential: response.credential }).subscribe({
      next: (respuesta) => {
        // Guarda el token y los datos del usuario en localStorage con las claves correctas
        localStorage.setItem('a365_token', respuesta.token);
        localStorage.setItem('a365_usuario', JSON.stringify({
          id:     respuesta.id,
          codigo: respuesta.codigo,
          nombre: respuesta.nombre,
          rol:    respuesta.rol
        }));

        // Guardar foto de perfil con URL completa del backend
        if (respuesta.fotoUrl) {
          const baseUrl = this.URL_API.replace('/api', '');
          const fotoCompleta = baseUrl + respuesta.fotoUrl;
          localStorage.setItem('a365_foto', fotoCompleta);
          this.servicioAuth.actualizarFoto(fotoCompleta);
        }

        this.cargandoGoogle = false;
        this.redirigirPorRol(respuesta.rol);
      },
      error: (err) => {
        this.cargandoGoogle = false;
        if (err.status === 404) {
          this.errorGeneral = 'Tu correo de Google no esta registrado en el sistema.';
        } else if (err.status === 403) {
          this.errorGeneral = 'Tu cuenta esta desactivada. Contacta al administrador.';
        } else {
          this.errorGeneral = 'Error al iniciar sesion con Google. Intenta de nuevo.';
        }
      }
    });
  }

  // Redirige al dashboard segun el rol del usuario
  private redirigirPorRol(rol: string): void {
    if (rol === 'ADMINISTRADOR' || rol === 'GERENTE') {
      this.router.navigate(['/dashboard/admin']);
    } else {
      this.router.navigate(['/dashboard/agente']);
    }
  }

  // Alterna la visibilidad de la contrasena
  toggleContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  // Navega a la pantalla de recuperar contrasena
  onOlvidaste(): void {
    this.router.navigate(['/recuperar']);
  }
}