// core/services/servicio-incidencias.ts
// Servicio HTTP para incidencias del usuario logueado
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/configuracion-entorno';

// Item resumido (GET /api/incidencias)
export interface IncidenciaItem {
  id: number;
  tipo: string;
  tema: string;
  resaltado: boolean;
}

// Payload del formulario "Nueva incidencia" (POST /api/incidencias)
export interface CrearIncidenciaRequest {
  asunto: string;
  tipo: string;
  numeroTicket: number;
  contenido: string;
}

// Detalle (GET /api/incidencias/{id})
export interface IncidenciaDetalle {
  id: number;
  asunto: string;
  tipo: string;
  contenido: string;
  numeroTicket: number;
  estado: string;
  fechaReporte: string;
  codigoUsuario: string;
  correoUsuario: string;
}

@Injectable({ providedIn: 'root' })
export class ServicioIncidencias {

  private readonly URL = `${environment.apiUrl}/incidencias`;

  constructor(private http: HttpClient) {}

  // GET /api/incidencias
  listar(): Observable<IncidenciaItem[]> {
    return this.http.get<IncidenciaItem[]>(this.URL);
  }

  // POST /api/incidencias
  crear(req: CrearIncidenciaRequest): Observable<{ mensaje: string }> {
    return this.http.post<{ mensaje: string }>(this.URL, req);
  }

  // GET /api/incidencias/{id}
  obtenerDetalle(id: number): Observable<IncidenciaDetalle> {
    return this.http.get<IncidenciaDetalle>(`${this.URL}/${id}`);
  }
}
