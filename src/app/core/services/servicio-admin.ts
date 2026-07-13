// core/services/servicio-admin.ts
// Servicio HTTP para el panel de administración.
// Habla con los endpoints /api/admin/* del backend Spring Boot.
// El interceptor JWT inyecta el token automáticamente en cada petición.
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/configuracion-entorno';

// ── Resumen mensual de tickets (dashboard principal) ──
// Coincide con AdminDTO.ResumenTicketsMes del backend
export interface ResumenTicketsMes {
  pendientes:    number;
  cancelados:    number;
  atendidos:     number;
  total:         number;
  pctPendientes: number;
  pctCancelados: number;
  pctAtendidos:  number;
}

// ── Resumen semanal de incidencias (gráfico de torta) ──
// Coincide con AdminDTO.ResumenIncidenciasSemana del backend
export interface ResumenIncidenciasSemana {
  reportadas:  number;
  enRevision:  number;
  resueltas:   number;
  total:       number;
}

// ── Resumen semanal de tickets (gráfico de dona) ──
// Coincide con AdminDTO.ResumenTicketsSemana del backend
export interface ResumenTicketsSemana {
  pendientes:  number;
  atendidos:   number;
  enProgreso:  number;
  evaluando:   number;
  total:       number;
}

// ── Ítem del tablero kanban de tickets (admin) ──
// Coincide con AdminDTO.TableroTicketItem del backend
export interface TableroTicketItem {
  numeroTicket:         number;
  asunto:               string;
  actualizadoEn:        string;
  estado:               string;
  subestado:            string;
  previewUltimoMensaje: string;
  totalAdjuntos:        number | null;
}

// ── Detalle de un ticket para el modal (admin) ──
// Coincide con AdminDTO.TicketDetalle del backend
export interface TicketDetalleAdmin {
  idTicket:          number | null;
  numeroTicket:      number;
  asunto:            string;
  descripcion:       string | null;
  tipoTicket:        string | null;
  prioridad:         string;
  estado:            string;
  subestado:         string;
  locacionArea:      string | null;
  creadoEn:          string;
  actualizadoEn:     string | null;
  codigoSolicitante: string | null;
  solicitadoPor:     string;
  codigoAsignado:    string | null;
  asignadoA:         string | null;
}

// ── Adjunto de un ticket ──
// Coincide con AdminDTO.TicketAdjunto del backend
export interface TicketAdjunto {
  idAdjunto:     number | null;
  nombreArchivo: string;
  tamanoKb:      number | null;
  ruta:          string | null;
  creadoEn:      string;
}

// ── Bodies de edición ──
export interface EditarTicketBody {
  asunto:      string;
  tipo:        string;
  prioridad:   string;   // Alta | Media | Baja
  descripcion: string;
}
export interface EditarIncidenciaBody {
  asunto:    string;
  tipo:      string;
  contenido: string;
}

// ── Reportes: KPIs + historial ──
// Coincide con ReportesDTO del backend
export interface ReporteKpis {
  totalResueltos:   number;
  totalPendientes:  number;
  totalIncidencias: number;
  tiempoPromedio:   string;
}
export interface ReporteHistorialItem {
  numero:      string;
  usuario:     string;
  tipo:        string;
  estado:      string;
  estadoClase: string;
  fecha:       string;
  tiempo:      string;
}
export interface ReporteResponse {
  kpis:      ReporteKpis;
  historial: ReporteHistorialItem[];
}

// ── Mensaje de un ticket ──
// Coincide con AdminDTO.TicketMensaje del backend
export interface TicketMensaje {
  idMensaje:       number;
  contenido:       string;
  creadoEn:        string;
  remitenteCodigo: string;
  remitenteNombre: string;
}

// ── Ítem de la lista de incidencias (admin) ──
// Coincide con AdminDTO.IncidenciaAdminItem del backend
export interface IncidenciaAdminItem {
  id:          number;
  tipo:        string;
  tema:        string;
  estado:      string;
  resaltado:   boolean;
  solicitante: string;
  fecha:       string;
}

// ── Detalle de una incidencia para el modal (admin) ──
// Coincide con AdminDTO.IncidenciaAdminDetalle del backend
export interface IncidenciaAdminDetalle {
  id:           number;
  tipo:         string;
  estado:       string;
  solicitante:  string;
  asignadaA:    string;
  fecha:        string;
  contenido:    string;
  numeroTicket: number;
}

// ── Perfil completo de un usuario para la vista Revisar ──
// Coincide con AdminDTO.RevisionUsuario del backend
export interface RevisionUsuario {
  nombreCompleto:        string;
  pais:                  string;
  telefono:              string;
  correo:                string;
  locacion:              string;
  plataforma:            string;
  ticketsTotal:          number;
  ticketsPendientes:     number;
  tiempoRespuesta:       string;
  tiempoTotal:           string;
  ticketActivoNumero:    number | null;
  ticketActivoTipo:      string | null;
  ticketActivoPrioridad: string | null;
  asignadoCodigo:        string | null;
  asignadoNombre:        string | null;
}

// ── Ítem del panel de usuarios ──
// Coincide con UsuarioDTO.PanelItem del backend
export interface UsuarioPanelItem {
  id:     number;
  nombre: string;
  dni:    string;
  cargo:  string;
  codigo: string;
  correo: string;
  rol:    string;
}

// ── Respuesta genérica de operaciones admin ──
export interface OperacionResponse {
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class ServicioAdmin {

  private readonly URL = `${environment.apiUrl}/admin`;

  constructor(private http: HttpClient) {}

  // ── Gráficos del dashboard ──────────────────────────────────

  // GET /api/admin/dashboard/tickets-mes?anio=&mes=
  // Devuelve el resumen mensual para el reporte de tickets del dashboard
  obtenerResumenTicketsMes(anio?: number, mes?: number): Observable<ResumenTicketsMes> {
    let params = new HttpParams();
    if (anio) params = params.set('anio', anio);
    if (mes)  params = params.set('mes',  mes);
    return this.http.get<ResumenTicketsMes>(`${this.URL}/dashboard/tickets-mes`, { params });
  }

  // GET /api/admin/dashboard/incidencias-semana
  // Devuelve el resumen semanal para el gráfico de torta de incidencias
  obtenerResumenIncidenciasSemana(): Observable<ResumenIncidenciasSemana> {
    return this.http.get<ResumenIncidenciasSemana>(`${this.URL}/dashboard/incidencias-semana`);
  }

  // GET /api/admin/dashboard/tickets-semana
  // Devuelve el resumen semanal para el gráfico de dona de tickets
  obtenerResumenTicketsSemana(): Observable<ResumenTicketsSemana> {
    return this.http.get<ResumenTicketsSemana>(`${this.URL}/dashboard/tickets-semana`);
  }

  // ── Tablero kanban de tickets ───────────────────────────────

  // GET /api/admin/tablero?columna=EN_REVISION&texto=
  // Devuelve los tickets de una columna con filtro de texto opcional
  obtenerColumnaTablero(
    columna: 'EN_REVISION' | 'EN_PROCESO_ATENCION' | 'COMPLETADO',
    texto = ''
  ): Observable<TableroTicketItem[]> {
    const params = new HttpParams().set('columna', columna).set('texto', texto);
    return this.http.get<TableroTicketItem[]>(`${this.URL}/tablero`, { params });
  }

  // GET /api/admin/tickets/{numero}/modal
  // Vista rápida del ticket para el modal del tablero
  obtenerModalTicket(numero: number): Observable<TicketDetalleAdmin> {
    return this.http.get<TicketDetalleAdmin>(`${this.URL}/tickets/${numero}/modal`);
  }

  // GET /api/admin/reportes
  // KPIs + historial de tickets cerrados
  obtenerReportes(): Observable<ReporteResponse> {
    return this.http.get<ReporteResponse>(`${this.URL}/reportes`);
  }

  // GET /api/admin/tickets/{numero}/adjuntos
  // Lista los archivos adjuntos reales de un ticket
  obtenerAdjuntos(numero: number): Observable<TicketAdjunto[]> {
    return this.http.get<TicketAdjunto[]>(`${this.URL}/tickets/${numero}/adjuntos`);
  }

  // ── ACCIONES: editar / eliminar / adjuntos ──

  editarTicket(numero: number, body: EditarTicketBody): Observable<{ mensaje: string }> {
    return this.http.put<{ mensaje: string }>(`${this.URL}/tickets/${numero}`, body);
  }

  eliminarTicket(numero: number): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.URL}/tickets/${numero}`);
  }

  subirAdjunto(numero: number, archivo: File): Observable<any> {
    const fd = new FormData();
    fd.append('archivo', archivo);
    return this.http.post<any>(`${this.URL}/tickets/${numero}/adjuntos`, fd);
  }

  eliminarAdjunto(numero: number, idAdjunto: number): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.URL}/tickets/${numero}/adjuntos/${idAdjunto}`);
  }

  eliminarTodosAdjuntos(numero: number): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.URL}/tickets/${numero}/adjuntos`);
  }

  editarIncidencia(id: number, body: EditarIncidenciaBody): Observable<{ mensaje: string }> {
    return this.http.put<{ mensaje: string }>(`${this.URL}/incidencias/${id}`, body);
  }

  eliminarIncidencia(id: number): Observable<{ mensaje: string }> {
    return this.http.delete<{ mensaje: string }>(`${this.URL}/incidencias/${id}`);
  }

  // PUT /api/admin/tickets/{numero}/mover
  // Mueve el ticket entre columnas del kanban
  moverTicket(numero: number, columna: string): Observable<OperacionResponse> {
    return this.http.put<OperacionResponse>(
      `${this.URL}/tickets/${numero}/mover`,
      { columna }
    );
  }

  // GET /api/admin/tickets/{numero}/mensajes
  // Hilo de mensajes de un ticket
  obtenerMensajes(numero: number): Observable<TicketMensaje[]> {
    return this.http.get<TicketMensaje[]>(`${this.URL}/tickets/${numero}/mensajes`);
  }

  // POST /api/admin/tickets/{numero}/mensajes
  // Envía un mensaje en el hilo de un ticket
  enviarMensaje(numero: number, contenido: string): Observable<OperacionResponse> {
    return this.http.post<OperacionResponse>(
      `${this.URL}/tickets/${numero}/mensajes`,
      { contenido }
    );
  }

  // ── Gestión de incidencias ──────────────────────────────────

  // GET /api/admin/incidencias?tab=pendientes|revision|atendidas
  // Lista incidencias filtradas por tab
  listarIncidencias(
    tab: 'pendientes' | 'revision' | 'atendidas'
  ): Observable<IncidenciaAdminItem[]> {
    const params = new HttpParams().set('tab', tab);
    return this.http.get<IncidenciaAdminItem[]>(`${this.URL}/incidencias`, { params });
  }

  // GET /api/admin/incidencias/{id}
  // Detalle completo de una incidencia para el modal
  obtenerDetalleIncidencia(id: number): Observable<IncidenciaAdminDetalle> {
    return this.http.get<IncidenciaAdminDetalle>(`${this.URL}/incidencias/${id}`);
  }

  // ── Gestión de usuarios ─────────────────────────────────────

  // GET /api/usuarios
  // Lista todos los usuarios activos
  listarUsuariosActivos(): Observable<UsuarioPanelItem[]> {
    return this.http.get<UsuarioPanelItem[]>(`${environment.apiUrl}/usuarios`);
  }

  // GET /api/usuarios/eliminados
  // Lista todos los usuarios desactivados (historial)
  listarUsuariosEliminados(): Observable<UsuarioPanelItem[]> {
    return this.http.get<UsuarioPanelItem[]>(`${environment.apiUrl}/usuarios/eliminados`);
  }

  // GET /api/admin/usuarios/{id}/revision
  // Perfil completo del usuario para la vista Revisar
  revisarUsuario(id: number): Observable<RevisionUsuario> {
    return this.http.get<RevisionUsuario>(`${this.URL}/usuarios/${id}/revision`);
  }

  // PUT /api/admin/usuarios/{id}/desactivar
  // Desactiva (soft delete) un usuario
  desactivarUsuario(id: number): Observable<OperacionResponse> {
    return this.http.put<OperacionResponse>(`${this.URL}/usuarios/${id}/desactivar`, {});
  }

  // PUT /api/admin/usuarios/{id}/activar
  // Reactiva un usuario desactivado
  activarUsuario(id: number): Observable<OperacionResponse> {
    return this.http.put<OperacionResponse>(`${this.URL}/usuarios/${id}/activar`, {});
  }

  // PUT /api/admin/usuarios/{id}/rol
  // Cambia el rol de un usuario
  cambiarRol(id: number, rol: string): Observable<OperacionResponse> {
    return this.http.put<OperacionResponse>(`${this.URL}/usuarios/${id}/rol`, { rol });
  }

  // ── Exportación a Excel (Apache POI en el backend) ─────────

  // GET /api/exportar/usuarios-activos
  // Descarga el Excel de usuarios activos como Blob
  exportarUsuariosActivos(): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/exportar/usuarios-activos`, {
      responseType: 'blob'
    });
  }

  // GET /api/exportar/usuarios-eliminados
  // Descarga el Excel de usuarios eliminados como Blob
  exportarUsuariosEliminados(): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/exportar/usuarios-eliminados`, {
      responseType: 'blob'
    });
  }

  // GET /api/exportar/usuarios-activos-pdf
  exportarUsuariosActivosPdf(): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/exportar/usuarios-activos-pdf`, {
      responseType: 'blob'
    });
  }

  // GET /api/exportar/usuarios-eliminados-pdf
  exportarUsuariosEliminadosPdf(): Observable<Blob> {
    return this.http.get(`${environment.apiUrl}/exportar/usuarios-eliminados-pdf`, {
      responseType: 'blob'
    });
  }
}
