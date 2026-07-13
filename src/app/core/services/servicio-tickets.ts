// core/services/servicio-tickets.ts
// Servicio HTTP para tickets. Habla con el backend Spring Boot.
// El interceptor JWT inyecta el token automaticamente en cada peticion.
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

// Item resumido para las cards (lo que devuelve GET /api/tickets)
export interface TicketItem {
  numero: number;
  estado: string;
  locacion: string;
  resaltado: boolean;
}

// Detalle completo para el modal (lo que devuelve GET /api/tickets/{numero})
export interface TicketDetalle {
  usuarioNombre: string;
  usuarioPais: string;
  tickets: number;
  ticketsPendientes: number;
  tiempoRespuesta: string;
  tiempoTotal: string;
  telefono: string;
  email: string;
  pais: string;
  plataforma: string;
  velocidadRespuesta: string;
  ticketActivoId: string;
  tipoTicket: string;
  prioridad: string;
  asignadoA: string;
}

@Injectable({ providedIn: 'root' })
export class ServicioTickets {

  private readonly URL = `${environment.apiUrl}/tickets`;

  constructor(private http: HttpClient) {}

  // GET /api/tickets?tab=pendientes|completados|cancelados
  listar(tab: 'pendientes' | 'completados' | 'cancelados'): Observable<TicketItem[]> {
    const params = new HttpParams().set('tab', tab);
    return this.http.get<TicketItem[]>(this.URL, { params });
  }

  // GET /api/tickets/{numero}
  obtenerDetalle(numero: number): Observable<TicketDetalle> {
    return this.http.get<TicketDetalle>(`${this.URL}/${numero}`);
  }

  // POST /api/tickets — crea un nuevo ticket
  crear(datos: { asunto: string; locacion: string; descripcion: string; prioridad: string }): Observable<TicketItem> {
    return this.http.post<TicketItem>(this.URL, datos);
  }
}