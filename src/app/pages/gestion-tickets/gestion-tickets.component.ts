// pages/gestion-tickets/gestion-tickets.component.ts
// Tablero kanban de tickets para el administrador.
// Usa GET /api/admin/tablero y GET /api/admin/tickets/{numero}/modal del backend.
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioAdmin, TableroTicketItem, TicketDetalleAdmin, TicketAdjunto } from '../../core/services/servicio-admin';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

// Modelo local de ticket que usa el HTML del kanban
// Mapea los campos del backend a los nombres que espera la plantilla
export interface TicketAdmin {
  id:            number;
  titulo:        string;   // ← asunto del backend
  descripcion:   string;   // ← previewUltimoMensaje del backend
  diasRestantes: number;   // calculado desde actualizadoEn
  adjuntos:      number;   // 0 hasta que el backend lo exponga
  numero:        string;   // "#XXXX" formateado desde numeroTicket
  estado:        'pendientes' | 'revision' | 'aprobados';
  // Guardamos el original para llamadas al backend
  numeroTicket:  number;
}

// Columnas del kanban mapeadas a los valores del backend
type Columna = 'EN_REVISION' | 'EN_PROCESO_ATENCION' | 'COMPLETADO';

@Component({
  selector: 'app-gestion-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-tickets.component.html',
  styleUrls: ['./gestion-tickets.component.css']
})
export class GestionTicketsComponent implements OnInit {

  usuario:      DatosUsuario | null = null;
  fotoUrl: string | null = null;
  busqueda      = '';
  filtroActivo  = 'Revisa la lista';   // requerido por el HTML
  cargando      = false;
  errorMsg      = '';

  // Columnas del kanban con datos reales del backend
  ticketsPendientes:  TicketAdmin[] = [];
  ticketsRevision:    TicketAdmin[] = [];
  ticketsAprobados:   TicketAdmin[] = [];

  // Modal: ticket seleccionado y su detalle completo
  ticketSeleccionado: TicketAdmin         | null = null;
  detalleModal:       TicketDetalleAdmin  | null = null;
  adjuntosModal:      TicketAdjunto[]     = [];
  cargandoModal       = false;

  constructor(
    private servicioAuth:  ServicioAutenticacion,
    private servicioAdmin: ServicioAdmin,
    private router:        Router,
    private cdr:           ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe(url => { this.fotoUrl = url; this.cdr.detectChanges(); });
    this.cargarTablero();
  }

  // ── CARGA DE DATOS REALES ────────────────────────────────────

  // Carga las 3 columnas del kanban en paralelo desde el backend
  // y mapea cada item al modelo local que usa el HTML
  cargarTablero(): void {
    this.cargando = true;
    this.errorMsg = '';

    forkJoin({
      pendientes: this.servicioAdmin.obtenerColumnaTablero('EN_REVISION',         this.busqueda),
      revision:   this.servicioAdmin.obtenerColumnaTablero('EN_PROCESO_ATENCION', this.busqueda),
      aprobados:  this.servicioAdmin.obtenerColumnaTablero('COMPLETADO',          this.busqueda)
    }).subscribe({
      next: ({ pendientes, revision, aprobados }) => {
        this.ticketsPendientes = pendientes.map(t => this.mapear(t, 'pendientes'));
        this.ticketsRevision   = revision.map(t   => this.mapear(t, 'revision'));
        this.ticketsAprobados  = aprobados.map(t  => this.mapear(t, 'aprobados'));
        this.cargando          = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = 'No se pudo cargar el tablero. Verifica la conexión con el backend.';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  // Convierte un TableroTicketItem del backend al TicketAdmin que usa el HTML
  private mapear(item: TableroTicketItem, estado: 'pendientes' | 'revision' | 'aprobados'): TicketAdmin {
    return {
      id:            item.numeroTicket,
      titulo:        item.asunto,
      descripcion:   item.previewUltimoMensaje || 'Sin mensajes aún.',
      diasRestantes: this.calcularDias(item.actualizadoEn),
      adjuntos:      0,        // se carga al abrir el modal si se necesita
      numero:        `#${item.numeroTicket}`,
      estado,
      numeroTicket:  item.numeroTicket
    };
  }

  // Calcula cuántos días han pasado desde la última actualización
  private calcularDias(fechaStr: string): number {
    if (!fechaStr) return 0;
    const diff = Date.now() - new Date(fechaStr).getTime();
    return Math.max(0, Math.floor(diff / 86400000));
  }

  // ── FILTROS LOCALES ──────────────────────────────────────────

  get pendientesFiltrados():  TicketAdmin[] { return this.filtrar(this.ticketsPendientes); }
  get revisionFiltrados():    TicketAdmin[] { return this.filtrar(this.ticketsRevision);   }
  get aprobadosFiltrados():   TicketAdmin[] { return this.filtrar(this.ticketsAprobados);  }

  private filtrar(lista: TicketAdmin[]): TicketAdmin[] {
    if (!this.busqueda.trim()) return lista;
    const q = this.busqueda.toLowerCase();
    return lista.filter(t =>
      t.titulo.toLowerCase().includes(q) ||
      t.numero.toLowerCase().includes(q)
    );
  }

  // ── MODAL ────────────────────────────────────────────────────

  // Abre el modal y carga el detalle completo del ticket desde el backend
  abrirModal(ticket: TicketAdmin): void {
    this.ticketSeleccionado = ticket;
    this.detalleModal       = null;
    this.adjuntosModal      = [];
    this.cargandoModal      = true;

    // Detalle + adjuntos reales en paralelo
    forkJoin({
      detalle:  this.servicioAdmin.obtenerModalTicket(ticket.numeroTicket),
      adjuntos: this.servicioAdmin.obtenerAdjuntos(ticket.numeroTicket)
    }).subscribe({
      next: ({ detalle, adjuntos }) => {
        this.detalleModal  = detalle;
        this.adjuntosModal = adjuntos ?? [];
        this.cargandoModal = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cargandoModal = false;
        this.cdr.detectChanges();
      }
    });
  }

  cerrarModal(): void {
    this.ticketSeleccionado = null;
    this.detalleModal       = null;
    this.adjuntosModal      = [];
  }

  // ── HELPERS DE FORMATO PARA EL MODAL ────────────────────────

  // Iniciales para el avatar (ej. "Grace Galán" → "G")
  inicial(txt: string | null | undefined): string {
    return (txt?.trim()?.charAt(0) || '?').toUpperCase();
  }

  // Prioridad ALTA/MEDIA/BAJA → texto legible
  prioridadTexto(p: string | null | undefined): string {
    switch ((p || '').toUpperCase()) {
      case 'ALTA': return 'Alta';
      case 'BAJA': return 'Baja';
      case 'MEDIA': return 'Media';
      default: return p || '—';
    }
  }
  prioridadClase(p: string | null | undefined): string {
    switch ((p || '').toUpperCase()) {
      case 'ALTA': return 'badge-alta';
      case 'BAJA': return 'badge-baja';
      default: return 'badge-media';
    }
  }

  // Estado del ticket para el modal (usa estado + subestado)
  estadoTexto(): string {
    const e = (this.detalleModal?.estado || '').toUpperCase();
    if (e === 'CANCELADO') return 'Rechazado';
    if (e === 'ATENDIDO')  return 'Atendido';
    const sub = (this.detalleModal?.subestado || '').toUpperCase();
    return sub === 'EN_REVISION' ? 'Pendiente' : 'En proceso';
  }
  estadoClase(): string {
    const e = (this.detalleModal?.estado || '').toUpperCase();
    if (e === 'CANCELADO') return 'badge-rechazado';
    if (e === 'ATENDIDO')  return 'badge-aprobado';
    return 'badge-pendiente';
  }

  // "2026-03-30T18:58:00" → "Marzo 30, 2026"
  fechaLarga(iso: string | null | undefined): string {
    if (!iso) return '—';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '—';
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return `${meses[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

  // "2026-03-30T18:58:00" → "30 de Marzo de 2026 a las 18:58"
  fechaHoraMeta(iso: string | null | undefined): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const hh = d.getHours().toString().padStart(2, '0');
    const mm = d.getMinutes().toString().padStart(2, '0');
    return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()} a las ${hh}:${mm}`;
  }

  // Formatea el peso del adjunto: 246 → "246 kb"
  pesoAdjunto(kb: number | null): string {
    return (kb != null ? kb : 0) + ' kb';
  }

  // Mueve el ticket a otra columna y recarga el tablero
  moverTicket(numero: number, columna: Columna): void {
    this.servicioAdmin.moverTicket(numero, columna).subscribe({
      next: () => {
        this.cerrarModal();
        this.cargarTablero();
      },
      error: () => {
        this.errorMsg = 'No se pudo mover el ticket.';
        this.cdr.detectChanges();
      }
    });
  }

  // ── NAVEGACIÓN SIDEBAR ──────────────────────────────────────

  irAInicio(): void             { this.router.navigate(['/dashboard/admin']);               }
  irAGestionIncidencias(): void { this.router.navigate(['/dashboard/gestion-incidencias']); }
  irACrearUsuario(): void       { this.router.navigate(['/dashboard/usuarios/crear']);      }
  irAPanelUsuarios(): void      { this.router.navigate(['/dashboard/panel-usuarios']);      }
  irAAdministracion(): void     { this.router.navigate(['/dashboard/administracion']);      }

  onLogout(): void { this.servicioAuth.logout(); }
}
