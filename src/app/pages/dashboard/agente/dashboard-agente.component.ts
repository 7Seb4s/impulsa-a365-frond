// pages/dashboard/agente/dashboard-agente.component.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../../core/services/servicio-autenticacion';
import { ServicioTickets, TicketItem } from '../../../core/services/servicio-tickets';
import { forkJoin } from 'rxjs';

interface DiaCalendario {
  numero: number;
  delMesActual: boolean;
  esHoy: boolean;
}

@Component({
  selector: 'app-dashboard-agente',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard-agente.component.html',
  styleUrls: ['./dashboard-agente.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardAgenteComponent implements OnInit {

  usuario: DatosUsuario | null = null;

  // Contadores de tickets (vienen del backend)
  totalPendientes = 0;
  totalAtendidos  = 0;
  totalCancelados = 0;

  // Lista de tickets pendientes para mostrar en el timeline (max 4)
  ticketsTimeline: TicketItem[] = [];
  ticketActivo: TicketItem | null = null;

  // ── Estado del calendario ──
  fechaActual = new Date();
  mesMostrado = new Date().getMonth();   // 0-11
  anioMostrado = new Date().getFullYear();
  diasSemana = ['Lu', 'Ma', 'Mi', 'Ju', 'Vie', 'Sa', 'Do'];
  meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  semanas: DiaCalendario[][] = [];

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioTickets: ServicioTickets
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.construirCalendario();
    this.cargarStats();
  }

  // ── Carga contadores y timeline desde el backend ──
  private cargarStats(): void {
    forkJoin({
      pendientes:  this.servicioTickets.listar('pendientes'),
      completados: this.servicioTickets.listar('completados'),
      cancelados:  this.servicioTickets.listar('cancelados')
    }).subscribe({
      next: (res) => {
        this.totalPendientes = res.pendientes.length;
        this.totalAtendidos  = res.completados.length;
        this.totalCancelados = res.cancelados.length;

        // Timeline: primeros 4 pendientes
        this.ticketsTimeline = res.pendientes.slice(0, 4);
        this.ticketActivo    = res.pendientes[0] ?? null;
      },
      error: () => {
        // si falla simplemente quedan en 0
      }
    });
  }

  // ── Construye la matriz del calendario para el mes mostrado ──
  construirCalendario(): void {
    const primerDia = new Date(this.anioMostrado, this.mesMostrado, 1);
    const ultimoDia = new Date(this.anioMostrado, this.mesMostrado + 1, 0);

    // En JS getDay(): 0=Domingo, 1=Lunes...
    // El calendario empieza en Lunes, asi que ajustamos
    let diaSemanaPrimero = primerDia.getDay() - 1;
    if (diaSemanaPrimero < 0) diaSemanaPrimero = 6;

    const diasMesAnterior = new Date(this.anioMostrado, this.mesMostrado, 0).getDate();

    const dias: DiaCalendario[] = [];

    // Dias del mes anterior (rellenan la primera fila)
    for (let i = diaSemanaPrimero - 1; i >= 0; i--) {
      dias.push({
        numero: diasMesAnterior - i,
        delMesActual: false,
        esHoy: false
      });
    }

    // Dias del mes actual
    for (let d = 1; d <= ultimoDia.getDate(); d++) {
      const esHoy = this.esHoy(d);
      dias.push({ numero: d, delMesActual: true, esHoy });
    }

    // Dias del mes siguiente (completar hasta multiplo de 7)
    let siguiente = 1;
    while (dias.length % 7 !== 0) {
      dias.push({
        numero: siguiente++,
        delMesActual: false,
        esHoy: false
      });
    }

    // Dividir en semanas de 7
    const semanas: DiaCalendario[][] = [];
    for (let i = 0; i < dias.length; i += 7) {
      semanas.push(dias.slice(i, i + 7));
    }
    this.semanas = semanas;
  }

  // True si el dia mostrado es la fecha actual real
  private esHoy(dia: number): boolean {
    const hoy = new Date();
    return dia === hoy.getDate()
        && this.mesMostrado  === hoy.getMonth()
        && this.anioMostrado === hoy.getFullYear();
  }

  mesAnterior(): void {
    if (this.mesMostrado === 0) {
      this.mesMostrado = 11;
      this.anioMostrado--;
    } else {
      this.mesMostrado--;
    }
    this.construirCalendario();
  }

  mesSiguiente(): void {
    if (this.mesMostrado === 11) {
      this.mesMostrado = 0;
      this.anioMostrado++;
    } else {
      this.mesMostrado++;
    }
    this.construirCalendario();
  }

  // ── Helpers de usuario ──

  // Devuelve "Bienvenido, <Nombre>." sin codigo si esta disponible
  get nombreUsuario(): string {
    return this.usuario?.nombre || this.usuario?.codigo || 'Usuario';
  }

  // Iniciales del usuario para el avatar (ej "GG" para Grace Galan)
  get iniciales(): string {
    const n = this.usuario?.nombre?.trim();
    if (!n) return this.usuario?.codigo?.substring(0, 2).toUpperCase() ?? 'US';
    const partes = n.split(/\s+/);
    if (partes.length === 1) return partes[0].substring(0, 2).toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  }

  // Convierte el numero a "01", "02", "10", "100"
  formatear(n: number): string {
    return n.toString().padStart(2, '0');
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}