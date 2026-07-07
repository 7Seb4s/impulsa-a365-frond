// pages/tecnico/tecnico-incidencias.component.ts
// Panel de incidencias del TECNICO: lista, detalle lateral, modal y asignacion/derivacion.
import { Component, OnInit, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioTecnico, TecnicoIncidencia, Prioridad } from '../../core/services/servicio-tecnico';

@Component({
  selector: 'app-tecnico-incidencias',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tecnico-incidencias.component.html',
  styleUrls: ['./tecnico-panel.css'],
  encapsulation: ViewEncapsulation.None
})
export class TecnicoIncidenciasComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  fotoUrl: string | null = null;

  busqueda = '';
  incidencias: TecnicoIncidencia[] = [];
  seleccionada: TecnicoIncidencia | null = null;

  mostrarModal = false;

  // Areas de derivacion disponibles en el dropdown del modal
  areas = ['Area de Tecnologia', 'Area de Administracion', 'Area de Recursos Humanos', 'Area de Soporte'];

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

  private cargar(): void {
    this.servicioTecnico.listarIncidencias().subscribe({
      next: (data) => {
        this.incidencias = data && data.length ? data : this.semilla();
        this.cdr.detectChanges();
      },
      error: () => {
        this.incidencias = this.semilla();
        this.cdr.detectChanges();
      }
    });
  }

  get incidenciasFiltradas(): TecnicoIncidencia[] {
    const q = this.busqueda.toLowerCase().trim();
    if (!q) return this.incidencias;
    return this.incidencias.filter(i =>
      i.incidenciaId.toLowerCase().includes(q) ||
      i.resumen.toLowerCase().includes(q) ||
      i.asunto.toLowerCase().includes(q)
    );
  }

  seleccionar(i: TecnicoIncidencia): void { this.seleccionada = i; }
  cerrarDetalle(): void { this.seleccionada = null; }

  abrirModal(): void { this.mostrarModal = true; }
  cerrarModal(): void { this.mostrarModal = false; }

  cambiarPrioridadModal(p: Prioridad): void {
    if (this.seleccionada) this.seleccionada.prioridad = p;
  }

  // Asigna/deriva la incidencia: actualiza estado al instante y avisa al backend
  asignar(): void {
    if (!this.seleccionada) return;
    const i = this.seleccionada;
    i.estado = 'asignado';
    this.servicioTecnico.asignarIncidencia(i.id, i.derivacion).subscribe({ error: () => {} });
    this.cdr.detectChanges();
  }

  // Reasigna la incidencia a otra area (reusa el mismo endpoint de asignar)
  reasignar(): void {
    this.asignar();
  }

  // Rechaza la incidencia: actualiza estado al instante y avisa al backend
  rechazar(): void {
    if (!this.seleccionada) return;
    const i = this.seleccionada;
    i.estado = 'rechazado';
    this.servicioTecnico.rechazarIncidencia(i.id).subscribe({ error: () => {} });
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
  private semilla(): TecnicoIncidencia[] {
    const cuerpo =
      'Estimado(a) Sr./Sra. del area de Recursos Humanos:\n\n' +
      'Por medio del presente correo, me permito informar que se ha realizado la actualizacion ' +
      'de los datos personales del empleado Juan Perez Lopez dentro del sistema de gestion de la ' +
      'empresa. Esta actualizacion se llevo a cabo con el fin de mantener la informacion ' +
      'institucional correctamente registrada y evitar posibles inconvenientes administrativos ' +
      'en los procesos internos.\n\nAtentamente,\nArea de Administracion\nEmpresa IMPULSA A365';
    const adjuntos = [
      { nombre: 'Screenshot02.zip', peso: '246kb' },
      { nombre: 'Description.zip', peso: '246kb' },
    ];
    return [
      {
        id: 1, incidenciaId: '#34754', codigoInterno: 'ID-#34754',
        resumen: 'Estimado(a) Sr./Sra. del area de Recursos Humanos...',
        prioridad: 'Alto', estado: 'pendiente',
        remitente: 'Erik Smit', hora: '13:08 (6 hours ago)',
        asunto: 'Actualizacion de los datos', cuerpo, adjuntos,
        tipo: 'Actualizacion de datos', solicitadoPor: 'Grace Galan', derivacion: 'Area de Tecnologia',
      },
      {
        id: 2, incidenciaId: '#34234', codigoInterno: 'ID-#34234',
        resumen: 'Estimado(a) Sr./Sra. del area de Administracion...',
        prioridad: 'Medio', estado: 'pendiente',
        remitente: 'Erik Smit', hora: '13:08 (6 hours ago)',
        asunto: 'Eliminacion de registros', cuerpo, adjuntos,
        tipo: 'Eliminacion de datos', solicitadoPor: 'Grace Galan', derivacion: 'Area de Administracion',
      },
      {
        id: 3, incidenciaId: '#34867', codigoInterno: 'ID-#34867',
        resumen: 'Estimado(a) Sr./Sra. del area de Tecnologia...',
        prioridad: 'Bajo', estado: 'pendiente',
        remitente: 'Erik Smit', hora: '13:08 (6 hours ago)',
        asunto: 'Revision de solicitudes tecnicas', cuerpo, adjuntos,
        tipo: 'Consulta tecnica', solicitadoPor: 'Grace Galan', derivacion: 'Area de Tecnologia',
      },
    ];
  }
}
