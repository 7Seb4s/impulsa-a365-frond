// pages/gestion-tickets/gestion-tickets.component.ts
// Tablero kanban de tickets para el administrador.
// Usa GET /api/admin/tablero y GET /api/admin/tickets/{numero}/modal del backend.
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioAdmin, TableroTicketItem, TicketDetalleAdmin } from '../../core/services/servicio-admin';
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
  cargandoModal       = false;

  constructor(
    private servicioAuth:  ServicioAutenticacion,
    private servicioAdmin: ServicioAdmin,
    private router:        Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
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
      },
      error: () => {
        this.errorMsg = 'No se pudo cargar el tablero. Verifica la conexión con el backend.';
        this.cargando = false;
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
    this.cargandoModal      = true;

    this.servicioAdmin.obtenerModalTicket(ticket.numeroTicket).subscribe({
      next: (detalle) => {
        this.detalleModal  = detalle;
        this.cargandoModal = false;
      },
      error: () => {
        this.cargandoModal = false;
      }
    });
  }

  cerrarModal(): void {
    this.ticketSeleccionado = null;
    this.detalleModal       = null;
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
