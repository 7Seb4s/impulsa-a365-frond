// pages/reportes/reportes.component.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';

interface HistorialTicket {
  numero: string;
  usuario: string;
  tipo: string;
  estado: string;
  estadoClase: string;
  fecha: string;
  tiempo: string;
}

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  fotoUrl: string | null = null;

  totalResueltos = 24;
  totalPendientes = 3;
  totalIncidencias = 8;
  tiempoPromedio = '18 min';

  historial: HistorialTicket[] = [
    { numero: '#123456', usuario: 'Erick Smit',    tipo: 'Actualización', estado: 'Resuelto',  estadoClase: 'badge-verde',   fecha: '25/05/2026', tiempo: '12 min' },
    { numero: '#123455', usuario: 'María López',   tipo: 'Eliminación',   estado: 'Resuelto',  estadoClase: 'badge-verde',   fecha: '24/05/2026', tiempo: '20 min' },
    { numero: '#123454', usuario: 'Carlos Ruiz',   tipo: 'Consulta',      estado: 'Pendiente', estadoClase: 'badge-naranja', fecha: '24/05/2026', tiempo: '—' },
    { numero: '#123453', usuario: 'Ana Torres',    tipo: 'Error',         estado: 'Resuelto',  estadoClase: 'badge-verde',   fecha: '23/05/2026', tiempo: '35 min' },
    { numero: '#123452', usuario: 'Luis Paredes',  tipo: 'Actualización', estado: 'Cancelado', estadoClase: 'badge-rojo',    fecha: '22/05/2026', tiempo: '—' },
    { numero: '#123451', usuario: 'Rosa Mendoza',  tipo: 'Consulta',      estado: 'Resuelto',  estadoClase: 'badge-verde',   fecha: '21/05/2026', tiempo: '10 min' },
    { numero: '#123450', usuario: 'Jorge Castillo',tipo: 'Eliminación',   estado: 'Resuelto',  estadoClase: 'badge-verde',   fecha: '20/05/2026', tiempo: '25 min' },
    { numero: '#123449', usuario: 'Patricia Vega', tipo: 'Error',         estado: 'Pendiente', estadoClase: 'badge-naranja', fecha: '19/05/2026', tiempo: '—' },
  ];

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe(url => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}