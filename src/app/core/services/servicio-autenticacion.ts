// core/services/servicio-autenticacion.ts
// Servicio central de autenticación.
// Gestiona login, logout, token JWT y datos del usuario en localStorage.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/configuracion-entorno';

export interface PeticionLogin {
  codigo: string;
  password: string;
}

export interface RespuestaLogin {
  token: string;  // JWT firmado por el backend
  tipo: string;   // Siempre "Bearer"
  id: number;
  codigo: string;
  nombre: string;
  rol: string;    // 'EMPLEADO' | 'ADMINISTRADOR' | 'GERENTE'
  fotoUrl: string | null;  // URL de la foto de perfil
}

export interface DatosUsuario {
  id: number;
  codigo: string;
  nombre: string;
  rol: string;
}

@Injectable({ providedIn: 'root' })
export class ServicioAutenticacion {

  private readonly URL_API       = environment.apiUrl;
  private readonly CLAVE_TOKEN   = 'a365_token';
  private readonly CLAVE_USUARIO = 'a365_usuario';
  private readonly CLAVE_FOTO    = 'a365_foto';

  // BehaviorSubject: emite la URL de la foto cada vez que cambia.
  // Se inicializa con el valor guardado en localStorage (persiste entre navegaciones).
  private _fotoUrl$ = new BehaviorSubject<string | null>(
    localStorage.getItem(this.CLAVE_FOTO)
  );

  /** Observable de la foto del usuario — suscríbete en cualquier componente */
  readonly fotoUrl$ = this._fotoUrl$.asObservable();

  constructor(
    private http:   HttpClient,
    private router: Router
  ) {}

  // Envía credenciales al backend y guarda token + datos en localStorage
  login(peticion: PeticionLogin): Observable<RespuestaLogin> {
    return this.http
      .post<RespuestaLogin>(`${this.URL_API}/auth/login`, peticion)
      .pipe(
        tap(res => {
          localStorage.setItem(this.CLAVE_TOKEN, res.token);
          const usuario: DatosUsuario = {
            id:     res.id,
            codigo: res.codigo,
            nombre: res.nombre,
            rol:    res.rol
          };
          localStorage.setItem(this.CLAVE_USUARIO, JSON.stringify(usuario));

          // Guardar foto de perfil con URL completa del backend
          if (res.fotoUrl) {
            const baseUrl = this.URL_API.replace('/api', '');
            const fotoCompleta = baseUrl + res.fotoUrl;
            localStorage.setItem(this.CLAVE_FOTO, fotoCompleta);
            this._fotoUrl$.next(fotoCompleta);
          }
        })
      );
  }

  // Borra sesión y redirige al login
  logout(): void {
    localStorage.removeItem(this.CLAVE_TOKEN);
    localStorage.removeItem(this.CLAVE_USUARIO);
    localStorage.removeItem(this.CLAVE_FOTO);
    this._fotoUrl$.next(null);
    this.router.navigate(['/auth/login']);
  }

  // Devuelve el token JWT guardado, o null si no hay sesión
  obtenerToken(): string | null {
    return localStorage.getItem(this.CLAVE_TOKEN);
  }

  // Verifica que el token exista y no haya expirado
  estaAutenticado(): boolean {
    const token = this.obtenerToken();
    if (!token) return false;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  // Devuelve los datos del usuario desde localStorage
  obtenerUsuario(): DatosUsuario | null {
    const datos = localStorage.getItem(this.CLAVE_USUARIO);
    return datos ? JSON.parse(datos) : null;
  }

  // Devuelve el rol del usuario ('EMPLEADO', 'ADMINISTRADOR', 'GERENTE')
  obtenerRol(): string | null {
    return this.obtenerUsuario()?.rol ?? null;
  }

  /** Actualiza la foto en localStorage y notifica a todos los suscriptores.
   *  Llamar desde ServicioPerfil después de subir/cargar la foto. */
  actualizarFoto(url: string | null): void {
    if (url) {
      localStorage.setItem(this.CLAVE_FOTO, url);
    } else {
      localStorage.removeItem(this.CLAVE_FOTO);
    }
    this._fotoUrl$.next(url);
  }
}