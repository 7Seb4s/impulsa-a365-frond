// core/services/servicio-perfil.ts
// Servicio HTTP para ver y editar el perfil del usuario logueado
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/configuracion-entorno';

// GET /api/perfil
export interface PerfilResponse {
  codigoTrabajador: string;
  nombreCompleto: string;
  correo: string;
  direccion: string | null;
  telefono: string;
  dni: string;
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

@Injectable({ providedIn: 'root' })
export class ServicioPerfil {

  private readonly URL = `${environment.apiUrl}/perfil`;

  constructor(private http: HttpClient) {}

  // GET /api/perfil
  obtener(): Observable<PerfilResponse> {
    return this.http.get<PerfilResponse>(this.URL);
  }

  // PUT /api/perfil
  actualizar(req: ActualizarPerfilRequest): Observable<{ mensaje: string }> {
    return this.http.put<{ mensaje: string }>(this.URL, req);
  }

  // PUT /api/perfil/contrasena
  cambiarContrasena(req: CambiarContrasenaRequest): Observable<{ mensaje: string }> {
    return this.http.put<{ mensaje: string }>(`${this.URL}/contrasena`, req);
  }
}
