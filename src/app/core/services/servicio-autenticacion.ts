// ─────────────────────────────────────────────────────────────
// servicio-autenticacion.ts
// Maneja el login, logout y estado de sesión del usuario.
// Se comunica con el backend Spring Boot mediante HTTP + JWT.
// ─────────────────────────────────────────────────────────────

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/configuracion-entorno';

// ── Modelos de datos ─────────────────────────────────────────

// Lo que enviamos al backend para hacer login
export interface PeticionLogin {
  codigo: string;
  password: string;
}

// Lo que nos responde el backend tras un login exitoso
export interface RespuestaLogin {
  token: string;   // JWT firmado por el backend
  tipo: string;    // Siempre "Bearer"
  id: number;
  codigo: string;
  nombre: string;
  rol: string;     // "EMPLEADO" | "ADMINISTRADOR" | "GERENTE"
}

// Datos del usuario que guardamos en localStorage
export interface DatosUsuario {
  id: number;
  codigo: string;
  nombre: string;
  rol: string;
}

@Injectable({ providedIn: 'root' })
export class ServicioAutenticacion {

  // URL base tomada del archivo de entorno
  private readonly URL_API = environment.apiUrl;

  // Claves usadas para guardar datos en el navegador
  private readonly CLAVE_TOKEN   = 'a365_token';
  private readonly CLAVE_USUARIO = 'a365_usuario';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // ── LOGIN ────────────────────────────────────────────────────
  // Envía el código y contraseña al endpoint POST /api/auth/login.
  // Si es correcto, guarda el token y los datos del usuario.
  login(peticion: PeticionLogin): Observable<RespuestaLogin> {
    return this.http
      .post<RespuestaLogin>(`${this.URL_API}/auth/login`, peticion)
      .pipe(
        tap(respuesta => {
          // Guardar el token JWT para usarlo en futuras peticiones
          localStorage.setItem(this.CLAVE_TOKEN, respuesta.token);

          // Guardar los datos básicos del usuario para mostrarlos en pantalla
          const usuario: DatosUsuario = {
            id:     respuesta.id,
            codigo: respuesta.codigo,
            nombre: respuesta.nombre,
            rol:    respuesta.rol
          };
          localStorage.setItem(this.CLAVE_USUARIO, JSON.stringify(usuario));
        })
      );
  }

  // ── LOGOUT ───────────────────────────────────────────────────
  // Elimina el token y los datos del usuario del navegador,
  // luego redirige a la pantalla de login.
  logout(): void {
    localStorage.removeItem(this.CLAVE_TOKEN);
    localStorage.removeItem(this.CLAVE_USUARIO);
    this.router.navigate(['/auth/login']);
  }

  // ── OBTENER TOKEN ────────────────────────────────────────────
  // Retorna el JWT guardado, o null si no hay sesión activa.
  // Lo usa el interceptor para agregar el header Authorization.
  obtenerToken(): string | null {
    return localStorage.getItem(this.CLAVE_TOKEN);
  }

  // ── VERIFICAR SESIÓN ─────────────────────────────────────────
  // Comprueba si hay un token válido y que no haya expirado.
  // Lo usa el guard para proteger las rutas privadas.
  estaAutenticado(): boolean {
    const token = this.obtenerToken();
    if (!token) return false;

    try {
      // Decodificar el payload del JWT (parte central en base64)
      const payload = JSON.parse(atob(token.split('.')[1]));

      // Comparar la fecha de expiración (exp está en segundos, Date.now() en ms)
      return payload.exp * 1000 > Date.now();
    } catch {
      // Si el token está malformado, consideramos que no hay sesión
      return false;
    }
  }

  // ── OBTENER USUARIO ──────────────────────────────────────────
  // Retorna los datos del usuario guardados en localStorage.
  obtenerUsuario(): DatosUsuario | null {
    const datos = localStorage.getItem(this.CLAVE_USUARIO);
    return datos ? JSON.parse(datos) : null;
  }

  // ── OBTENER ROL ──────────────────────────────────────────────
  // Retorna el rol del usuario (EMPLEADO, ADMINISTRADOR, GERENTE).
  // Útil para mostrar u ocultar secciones según el rol.
  obtenerRol(): string | null {
    return this.obtenerUsuario()?.rol ?? null;
  }
}
