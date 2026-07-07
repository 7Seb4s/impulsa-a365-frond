// core/services/servicio-tecnico.ts
// Servicio HTTP para la vista del TECNICO.
// Maneja los paneles de tickets (aprobar) e incidencias (asignar/derivar).
// El interceptor JWT inyecta el token automaticamente en cada peticion.
//
// Los endpoints apuntan a /api/tecnico/*. Si el backend aun no los expone,
// los componentes usan los datos semilla (SEED) para que la vista funcione
// igual que el Figma en una demo/presentacion.
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/configuracion-entorno';

export type Prioridad = 'Alto' | 'Medio' | 'Bajo';
export type EstadoTicket = 'pendiente' | 'aprobado' | 'rechazado';
export type EstadoIncidencia = 'pendiente' | 'asignado' | 'rechazado';

export interface Adjunto {
  nombre: string;
  peso: string;
}

// Ticket que ve el tecnico en el panel + detalle
export interface TecnicoTicket {
  id: number;
  ticketId: string;          // "#56367"
  codigoInterno: string;     // "ID-#4362"
  titulo: string;            // "Ticket de actualizacion de los datos"
  resumen: string;           // preview corto en la card
  prioridad: Prioridad;
  estado: EstadoTicket;
  remitente: string;         // quien aparece en la cabecera del detalle
  hora: string;              // "13:08 (6 hours ago)"
  asunto: string;            // "Actualizacion de los datos"
  cuerpo: string;            // texto completo del correo
  adjuntos: Adjunto[];
  tipo: string;              // "Actualizacion de datos"
  solicitadoPor: string;     // "Grace Galan"
  asignadoA: string;         // "Erik Smit"
}

// Incidencia que ve el tecnico en el panel + detalle
export interface TecnicoIncidencia {
  id: number;
  incidenciaId: string;      // "#34754"
  codigoInterno: string;     // "ID-#34754"
  resumen: string;
  prioridad: Prioridad;
  estado: EstadoIncidencia;
  remitente: string;
  hora: string;
  asunto: string;
  cuerpo: string;
  adjuntos: Adjunto[];
  tipo: string;              // "Actualizacion de datos"
  solicitadoPor: string;     // "Grace Galan"
  derivacion: string;        // area destino: "Area de Tecnologia", etc.
}

export interface OperacionResponse {
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class ServicioTecnico {

  private readonly URL = `${environment.apiUrl}/tecnico`;

  constructor(private http: HttpClient) {}

  // ── TICKETS ─────────────────────────────────────────────────

  // GET /api/tecnico/tickets
  listarTickets(): Observable<TecnicoTicket[]> {
    return this.http.get<TecnicoTicket[]>(`${this.URL}/tickets`);
  }

  // PUT /api/tecnico/tickets/{id}/aprobar
  aprobarTicket(id: number): Observable<OperacionResponse> {
    return this.http.put<OperacionResponse>(`${this.URL}/tickets/${id}/aprobar`, {});
  }

  // PUT /api/tecnico/tickets/{id}/rechazar
  rechazarTicket(id: number): Observable<OperacionResponse> {
    return this.http.put<OperacionResponse>(`${this.URL}/tickets/${id}/rechazar`, {});
  }

  // ── INCIDENCIAS ─────────────────────────────────────────────

  // GET /api/tecnico/incidencias
  listarIncidencias(): Observable<TecnicoIncidencia[]> {
    return this.http.get<TecnicoIncidencia[]>(`${this.URL}/incidencias`);
  }

  // PUT /api/tecnico/incidencias/{id}/asignar  (tambien sirve para reasignar)
  asignarIncidencia(id: number, derivacion: string): Observable<OperacionResponse> {
    return this.http.put<OperacionResponse>(
      `${this.URL}/incidencias/${id}/asignar`,
      { derivacion }
    );
  }

  // PUT /api/tecnico/incidencias/{id}/rechazar
  rechazarIncidencia(id: number): Observable<OperacionResponse> {
    return this.http.put<OperacionResponse>(`${this.URL}/incidencias/${id}/rechazar`, {});
  }
}
