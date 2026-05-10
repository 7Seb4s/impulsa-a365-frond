// Servicio de autenticacion: login, logout, verificacion de sesion y lectura de datos del usuario
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/configuracion-entorno';

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

  // URL del backend tomada del archivo de entorno
  private readonly URL_API = environment.apiUrl;

  // Claves para guardar datos en localStorage del navegador
  private readonly CLAVE_TOKEN   = 'a365_token';
  private readonly CLAVE_USUARIO = 'a365_usuario';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  // Login: envia codigo + contrasena al backend y guarda el token si es correcto
  login(peticion: PeticionLogin): Observable<RespuestaLogin> {
    return this.http
      .post<RespuestaLogin>(`${this.URL_API}/auth/login`, peticion)
      .pipe(
        tap(respuesta => {
          // Guarda el token JWT para enviarlo en futuras peticiones
          localStorage.setItem(this.CLAVE_TOKEN, respuesta.token);

          // Guarda los datos del usuario para mostrarlos en la interfaz
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

  // Logout: borra el token y los datos del usuario, y redirige al login
  logout(): void {
    localStorage.removeItem(this.CLAVE_TOKEN);
    localStorage.removeItem(this.CLAVE_USUARIO);
    this.router.navigate(['/auth/login']);
  }

  // Devuelve el token JWT guardado, o null si no hay sesion
  obtenerToken(): string | null {
    return localStorage.getItem(this.CLAVE_TOKEN);
  }

  // Verifica si el token es valido y no ha expirado
  // Se usa en el guard para proteger las rutas privadas
  estaAutenticado(): boolean {
    const token = this.obtenerToken();
    if (!token) return false;

    try {
      // Decodifica el payload del JWT (parte central en base64)
      const payload = JSON.parse(atob(token.split('.')[1]));

      // Compara la fecha de expiracion con la fecha actual
      // exp esta en segundos, Date.now() esta en milisegundos
      return payload.exp * 1000 > Date.now();
    } catch {
      // Si el token esta malformado, consideramos que no hay sesion
      return false;
    }
  }

  // Devuelve los datos del usuario guardados en localStorage
  obtenerUsuario(): DatosUsuario | null {
    const datos = localStorage.getItem(this.CLAVE_USUARIO);
    return datos ? JSON.parse(datos) : null;
  }

  // Devuelve el rol del usuario (EMPLEADO, ADMINISTRADOR, GERENTE)
  obtenerRol(): string | null {
    return this.obtenerUsuario()?.rol ?? null;
  }
}
