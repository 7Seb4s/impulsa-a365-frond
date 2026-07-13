// pages/reportes/reportes.component.ts
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioAdmin, ReporteHistorialItem } from '../../core/services/servicio-admin';

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

  // KPIs y historial cargados desde el backend
  totalResueltos = 0;
  totalPendientes = 0;
  totalIncidencias = 0;
  tiempoPromedio = '—';
  historial: ReporteHistorialItem[] = [];
  cargando = true;

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioAdmin: ServicioAdmin,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe(url => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarReportes();
  }

  private cargarReportes(): void {
    this.servicioAdmin.obtenerReportes().subscribe({
      next: (res) => {
        this.totalResueltos   = res.kpis.totalResueltos;
        this.totalPendientes  = res.kpis.totalPendientes;
        this.totalIncidencias = res.kpis.totalIncidencias;
        this.tiempoPromedio   = res.kpis.tiempoPromedio;
        this.historial        = res.historial ?? [];
        this.cargando         = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}