// core/services/servicio-perfil.ts
// Servicio HTTP para ver y editar el perfil del usuario logueado
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ServicioAutenticacion } from './servicio-autenticacion';

// GET /api/perfil
export interface PerfilResponse {
  codigoTrabajador: string;
  nombreCompleto: string;
  correo: string;
  direccion: string | null;
  telefono: string;
  dni: string;
  fotoUrl: string | null; // URL de la foto guardada en el servidor
}

// PUT /api/perfil
export interface ActualizarPerfilRequest {
  nombreCompleto: string;
  correo: string;
  direccion?: string;
  telefono: string;
  dni: string;
}

// PUT /api/perfil/contrasena
export interface CambiarContrasenaRequest {
  contrasenaActual: string;
  nuevaContrasena: string;
  confirmarContrasena: string;
}

// PUT /api/perfil/foto
export interface FotoResponse {
  mensaje: string;
  fotoUrl: string;
}

// URL base del servidor (sin /api), usada para construir URLs de archivos estÃ¡ticos
// Por ejemplo: http://localhost:8081
const BASE_URL = environment.apiUrl.replace(/\/api$/, '');

/** Convierte una ruta relativa de foto ("/uploads/fotos/xxx.jpg") en URL absoluta.
 *  Si ya es absoluta (empieza con http) la devuelve sin cambios. */
export function resolverUrlFoto(fotoUrl: string | null | undefined): string | null {
  if (!fotoUrl) return null;
  if (fotoUrl.startsWith('http')) return fotoUrl;
  return `${BASE_URL}${fotoUrl}`;
}

@Injectable({ providedIn: 'root' })
export class ServicioPerfil {

  private readonly URL = `${environment.apiUrl}/perfil`;

  constructor(
    private http: HttpClient,
    private servicioAuth: ServicioAutenticacion
  ) {}

  // GET /api/perfil â€” tambiÃ©n sincroniza la foto global al cargar
  obtener(): Observable<PerfilResponse> {
    return this.http.get<PerfilResponse>(this.URL).pipe(
      tap(perfil => {
        const url = resolverUrlFoto(perfil.fotoUrl);
        this.servicioAuth.actualizarFoto(url);
      })
    );
  }

  // PUT /api/perfil
  actualizar(req: ActualizarPerfilRequest): Observable<{ mensaje: string }> {
    return this.http.put<{ mensaje: string }>(this.URL, req);
  }

  // PUT /api/perfil/contrasena
  cambiarContrasena(req: CambiarContrasenaRequest): Observable<{ mensaje: string }> {
    return this.http.put<{ mensaje: string }>(`${this.URL}/contrasena`, req);
  }

  // PUT /api/perfil/foto  (multipart/form-data)
  // IMPORTANTE: NO pongas Content-Type manualmente; el browser agrega el boundary solo
  subirFoto(file: File): Observable<FotoResponse> {
    const formData = new FormData();
    formData.append('foto', file);
    return this.http.put<FotoResponse>(`${this.URL}/foto`, formData).pipe(
      tap(res => {
        const url = resolverUrlFoto(res.fotoUrl);
        this.servicioAuth.actualizarFoto(url);
      })
    );
  }
}