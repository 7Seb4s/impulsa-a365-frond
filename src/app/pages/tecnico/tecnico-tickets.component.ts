// pages/tecnico/tecnico-tickets.component.ts
// Panel de tickets del TECNICO: lista, detalle lateral, modal y aprobacion.
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioTecnico, TecnicoTicket, Prioridad } from '../../core/services/servicio-tecnico';

@Component({
  selector: 'app-tecnico-tickets',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tecnico-tickets.component.html',
  styleUrls: ['./tecnico-panel.css'],
  encapsulation: ViewEncapsulation.None
})
export class TecnicoTicketsComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  fotoUrl: string | null = null;

  busqueda = '';
  tickets: TecnicoTicket[] = [];
  seleccionado: TecnicoTicket | null = null;

  // Modal "Detalle del ticket"
  mostrarModal = false;

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioTecnico: ServicioTecnico,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe(url => { this.fotoUrl = url; this.cdr.detectChanges(); });
    this.cargar();
  }

  // Backend primero; si falla usa los datos semilla (demo/presentacion)
  private cargar(): void {
    this.servicioTecnico.listarTickets().subscribe({
      next: (data) => {
        this.tickets = data && data.length ? data : this.semilla();
        this.cdr.detectChanges();
      },
      error: () => {
        this.tickets = this.semilla();
        this.cdr.detectChanges();
      }
    });
  }

  get ticketsFiltrados(): TecnicoTicket[] {
    const q = this.busqueda.toLowerCase().trim();
    if (!q) return this.tickets;
    return this.tickets.filter(t =>
      t.titulo.toLowerCase().includes(q) ||
      t.ticketId.toLowerCase().includes(q) ||
      t.resumen.toLowerCase().includes(q)
    );
  }

  seleccionar(t: TecnicoTicket): void {
    this.seleccionado = t;
  }

  cerrarDetalle(): void {
    this.seleccionado = null;
  }

  abrirModal(): void { this.mostrarModal = true; }
  cerrarModal(): void { this.mostrarModal = false; }

  cambiarPrioridadModal(p: Prioridad): void {
    if (this.seleccionado) this.seleccionado.prioridad = p;
  }

  // Aprueba el ticket: actualiza el estado al instante y avisa al backend
  aprobar(): void {
    if (!this.seleccionado) return;
    const t = this.seleccionado;
    t.estado = 'aprobado';
    this.servicioTecnico.aprobarTicket(t.id).subscribe({ error: () => {} });
    this.cdr.detectChanges();
  }

  // Rechaza el ticket: actualiza el estado al instante y avisa al backend
  rechazar(): void {
    if (!this.seleccionado) return;
    const t = this.seleccionado;
    t.estado = 'rechazado';
    this.servicioTecnico.rechazarTicket(t.id).subscribe({ error: () => {} });
    this.cdr.detectChanges();
  }

  onLogout(): void { this.servicioAuth.logout(); }

  get nombre(): string {
    return this.usuario?.nombre || this.usuario?.codigo || 'Usuario';
  }

  inicial(txt: string): string {
    return (txt?.trim()?.charAt(0) || '?').toUpperCase();
  }

  // Datos semilla que replican el Figma
  private semilla(): TecnicoTicket[] {
    const cuerpo =
      'Estimado(a) Sr./Sra. del area de Recursos Humanos:\n\n' +
      'Por medio del presente correo, me permito informar que se ha realizado la actualizacion ' +
      'de los datos personales del empleado Juan Perez Lopez dentro del sistema de gestion de la ' +
      'empresa. Esta actualizacion se llevo a cabo con el fin de mantener la informacion ' +
      'institucional correctamente registrada y evitar posibles inconvenientes administrativos ' +
      'en los procesos internos.\n\nAtentamente,\nArea de Administracion\nEmpresa IMPULSA A365';
    const contenido =
      'Estimado Equipo de TI:\n' +
      'Por medio del presente correo, solicito la aprobacion del ticket para proceder con la ' +
      'actualizacion de los datos personales del empleado Juan Perez Lopez dentro del sistema de ' +
      'gestion de la empresa.\n\nAtentamente,\nArea de Trabajadores\nEmpresa IMPULSA A365';
    const adjuntos = [
      { nombre: 'Screenshot02.zip', peso: '246kb' },
      { nombre: 'Description.zip', peso: '246kb' },
    ];
    return [
      {
        id: 1, ticketId: '#56367', codigoInterno: 'ID-#4362',
        titulo: 'Ticket de actualizacion de los datos',
        resumen: 'Estimado(a) Sr./Sra. del area de Recursos Humanos...',
        prioridad: 'Alto', estado: 'pendiente',
        remitente: 'Erik Smit', hora: '13:08 (6 hours ago)',
        asunto: 'Actualizacion de los datos', cuerpo, adjuntos,
        tipo: 'Actualizacion de datos', solicitadoPor: 'Grace Galan', asignadoA: 'Erik Smit',
      },
      {
        id: 2, ticketId: '#56367', codigoInterno: 'ID-#4363',
        titulo: 'Ticket de eliminacion de registros de usuario',
        resumen: 'Estimado(a) Sr./Sra. del area de Administracion...',
        prioridad: 'Medio', estado: 'pendiente',
        remitente: 'Erik Smit', hora: '13:08 (6 hours ago)',
        asunto: 'Eliminacion de registros de usuario', cuerpo, adjuntos,
        tipo: 'Eliminacion de datos', solicitadoPor: 'Grace Galan', asignadoA: 'Erik Smit',
      },
      {
        id: 3, ticketId: '#56367', codigoInterno: 'ID-#4364',
        titulo: 'Revision de solicitudes tecnicas',
        resumen: 'Estimado(a) Sr./Sra. del area de Tecnologia...',
        prioridad: 'Bajo', estado: 'pendiente',
        remitente: 'Erik Smit', hora: '13:08 (6 hours ago)',
        asunto: 'Revision de solicitudes tecnicas', cuerpo, adjuntos,
        tipo: 'Consulta tecnica', solicitadoPor: 'Grace Galan', asignadoA: 'Erik Smit',
      },
    ];
  }
}
