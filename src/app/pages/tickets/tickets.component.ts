// pages/tickets/tickets.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioTickets, TicketItem, TicketDetalle } from '../../core/services/servicio-tickets';

type TabTicket = 'pendientes' | 'completados' | 'cancelados';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  tabActivo: TabTicket = 'pendientes';

  // Listas separadas por tab (se cargan al cambiar de tab)
  ticketsPendientes:   TicketItem[] = [];
  ticketsCompletados:  TicketItem[] = [];
  ticketsCancelados:   TicketItem[] = [];

  // Estado del modal detalle
  ticketSeleccionado: TicketDetalle | null = null;
  cargandoLista = false;
  cargandoDetalle = false;
  errorMsg = '';

  // Estado modal nuevo ticket
  mostrarNuevoTicket = false;
  guardandoTicket = false;
  errorNuevoTicket = '';
  exitoNuevoTicket = false;
  nuevoTicket = { asunto: '', locacion: '', descripcion: '', prioridad: '' };

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioTickets: ServicioTickets
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.cargarTab('pendientes');
  }

  cambiarTab(tab: TabTicket): void {
    this.tabActivo = tab;
    this.cargarTab(tab);
  }

  // Llama al backend para traer los tickets del tab indicado
  private cargarTab(tab: TabTicket): void {
    this.cargandoLista = true;
    this.errorMsg = '';
    this.servicioTickets.listar(tab).subscribe({
      next: (items) => {
        if      (tab === 'pendientes')  this.ticketsPendientes  = items;
        else if (tab === 'completados') this.ticketsCompletados = items;
        else                            this.ticketsCancelados  = items;
        this.cargandoLista = false;
      },
      error: () => {
        this.errorMsg = 'No se pudieron cargar los tickets.';
        this.cargandoLista = false;
      }
    });
  }

  // Al hacer clic en "Mas informacion" se trae el detalle del backend
  verDetalle(ticket: TicketItem): void {
    this.cargandoDetalle = true;
    this.errorMsg = '';
    this.servicioTickets.obtenerDetalle(ticket.numero).subscribe({
      next: (detalle) => {
        this.ticketSeleccionado = detalle;
        this.cargandoDetalle = false;
      },
      error: () => {
        this.errorMsg = 'No se pudo cargar el detalle del ticket.';
        this.cargandoDetalle = false;
      }
    });
  }

  cerrarModal(): void {
    this.ticketSeleccionado = null;
  }

  abrirNuevoTicket(): void {
    this.nuevoTicket = { asunto: '', locacion: '', descripcion: '', prioridad: '' };
    this.errorNuevoTicket = '';
    this.exitoNuevoTicket = false;
    this.mostrarNuevoTicket = true;
  }

  cerrarNuevoTicket(): void {
    this.mostrarNuevoTicket = false;
  }

  crearTicket(): void {
    if (!this.nuevoTicket.asunto.trim() || !this.nuevoTicket.locacion.trim()) {
      this.errorNuevoTicket = 'El asunto y la locación son obligatorios.';
      return;
    }
    this.guardandoTicket = true;
    this.errorNuevoTicket = '';
    this.servicioTickets.crear(this.nuevoTicket).subscribe({
      next: () => {
        this.guardandoTicket = false;
        this.exitoNuevoTicket = true;
        setTimeout(() => {
          this.cerrarNuevoTicket();
          this.cargarTab(this.tabActivo);
        }, 1500);
      },
      error: () => {
        this.guardandoTicket = false;
        this.errorNuevoTicket = 'No se pudo crear el ticket. Intente nuevamente.';
      }
    });
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}
