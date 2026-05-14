// pages/dashboard/admin/dashboard-admin.component.ts
// Vista del administrador/gerente: panel con 4 widgets y gráficos Chart.js.
// Chart.js se carga desde CDN en index.html — NO instalar con npm.
import { Component, OnInit, AfterViewInit, OnDestroy, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioAutenticacion, DatosUsuario } from '../../../core/services/servicio-autenticacion';
import { Router } from '@angular/router';

declare const Chart: any;

export interface TicketReporte {
  numero: string;
  asunto: string;
  solicitante: string;
  prioridad: string;
  estado: string;
  fecha: string;
  tiempo: string;
}

@Component({
  selector: 'app-dashboard-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit, AfterViewInit, OnDestroy {

  usuario: DatosUsuario | null = null;

  // Guardamos referencias para destruirlos al salir del componente
  private charts: any[] = [];

  ticketStats = { total: 24, atendidos: 14, pendientes: 8, cancelados: 2, promTiempo: '3.2h' };

  ticketsReporte: TicketReporte[] = [
    { numero: '001', asunto: 'Actualización de datos de usuario',      solicitante: 'Fernando Ramos', prioridad: 'ALTA',  estado: 'ATENDIDO',    fecha: '02/05/2026', tiempo: '1.5h' },
    { numero: '002', asunto: 'Error en módulo de reportes',            solicitante: 'Grace Galán',    prioridad: 'ALTA',  estado: 'PENDIENTE',   fecha: '03/05/2026', tiempo: '–'   },
    { numero: '003', asunto: 'Solicitud de cambio de área',            solicitante: 'Luis Torres',    prioridad: 'MEDIA', estado: 'ATENDIDO',    fecha: '04/05/2026', tiempo: '4.0h' },
    { numero: '004', asunto: 'Revisión de solicitudes técnicas',       solicitante: 'Ana Flores',     prioridad: 'BAJA',  estado: 'EN REVISIÓN', fecha: '05/05/2026', tiempo: '–'   },
    { numero: '005', asunto: 'Eliminación de registros duplicados',    solicitante: 'Carlos Paz',     prioridad: 'ALTA',  estado: 'ATENDIDO',    fecha: '06/05/2026', tiempo: '2.5h' },
    { numero: '006', asunto: 'Acceso denegado al sistema',             solicitante: 'María Quispe',   prioridad: 'ALTA',  estado: 'CANCELADO',   fecha: '07/05/2026', tiempo: '–'   },
    { numero: '007', asunto: 'Configuración de permisos',              solicitante: 'Pedro Vega',     prioridad: 'MEDIA', estado: 'ATENDIDO',    fecha: '08/05/2026', tiempo: '3.0h' },
    { numero: '008', asunto: 'Falla en carga de archivos',             solicitante: 'Sandra León',    prioridad: 'MEDIA', estado: 'PENDIENTE',   fecha: '09/05/2026', tiempo: '–'   },
    { numero: '009', asunto: 'Reporte mensual no generado',            solicitante: 'Jorge Ríos',     prioridad: 'BAJA',  estado: 'ATENDIDO',    fecha: '10/05/2026', tiempo: '5.5h' },
    { numero: '010', asunto: 'Actualización de contraseña masiva',     solicitante: 'Claudia Mena',   prioridad: 'ALTA',  estado: 'PENDIENTE',   fecha: '11/05/2026', tiempo: '–'   },
  ];

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
  }

  ngAfterViewInit(): void {
    // Espera a que Chart.js esté disponible (se carga desde CDN)
    this.esperarChartJS();
  }

  ngOnDestroy(): void {
    // Limpia los gráficos para evitar memory leaks
    this.charts.forEach(c => c.destroy());
    this.charts = [];
  }

  // Reintenta hasta 20 veces (4 segundos) esperando que Chart.js cargue
  private esperarChartJS(intentos = 0): void {
    if (typeof (window as any)['Chart'] !== 'undefined') {
      setTimeout(() => this.initCharts(), 200);
    } else if (intentos < 20) {
      setTimeout(() => this.esperarChartJS(intentos + 1), 200);
    } else {
      console.error('[A365] Chart.js no se cargó. Verifica el <script> en index.html.');
    }
  }

  private initCharts(): void {
    // Ejecutar fuera de la zona Angular para evitar detección de cambios innecesaria
    this.ngZone.runOutsideAngular(() => {
      this.initGraficoIncidencias();
      this.initGraficoTickets();
      this.initGraficoActividad();
    });
  }

  // Gráfico de torta: distribución de incidencias por estado
  private initGraficoIncidencias(): void {
    const canvas = document.getElementById('graficoIncidencias') as HTMLCanvasElement;
    if (!canvas) return;

    const C = (window as any)['Chart'];
    const chart = new C(canvas, {
      type: 'pie',
      data: {
        labels: ['Atendidas', 'Evaluando', 'En progreso', 'Pendientes'],
        datasets: [{
          data: [32, 25, 25, 18],
          backgroundColor: ['#26a69a', '#5c6bc0', '#29b6f6', '#ef5350'],
          borderWidth: 0,
          hoverOffset: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
      },
      plugins: [{
        id: 'etiquetasPie',
        afterDraw(ch: any) {
          const ctx = ch.ctx;
          ch.getDatasetMeta(0).data.forEach((arc: any, i: number) => {
            const pos = arc.tooltipPosition();
            ctx.save();
            ctx.fillStyle    = '#ffffff';
            ctx.font         = 'bold 12px Segoe UI, sans-serif';
            ctx.textAlign    = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(ch.data.datasets[0].data[i] + '%', pos.x, pos.y);
            ctx.restore();
          });
        }
      }]
    });
    this.charts.push(chart);
  }

  // Gráfico de dona: tickets por prioridad
  private initGraficoTickets(): void {
    const canvas = document.getElementById('graficoTickets') as HTMLCanvasElement;
    if (!canvas) return;

    const C = (window as any)['Chart'];
    const chart = new C(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Muy alta', 'Alto', 'Medio', 'Bajo'],
        datasets: [{
          data: [28, 22, 32, 18],
          backgroundColor: ['#ef5350', '#ffa726', '#66bb6a', '#42a5f5'],
          borderWidth: 3,
          borderColor: '#ffffff',
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: { legend: { display: false } }
      }
    });
    this.charts.push(chart);
  }

  // Gráfico de líneas: registro de actividad por mes
  private initGraficoActividad(): void {
    const canvas = document.getElementById('graficoActividad') as HTMLCanvasElement;
    if (!canvas) return;

    const C = (window as any)['Chart'];
    const chart = new C(canvas, {
      type: 'line',
      data: {
        labels: ['Oct 2025', 'Nov 2025', 'Dic 2025', 'Ene 2026', 'Feb 2026', 'Mar 2026'],
        datasets: [
          {
            label: 'Archivados',
            data: [6, 8, 5, 9, 7, 6],
            borderColor: '#ef5350',
            backgroundColor: 'rgba(239,83,80,0.08)',
            borderWidth: 2.5,
            pointBackgroundColor: '#ef5350',
            pointRadius: 4,
            fill: true,
            tension: 0.4
          },
          {
            label: 'En observación',
            data: [7, 6, 8, 5, 7, 5],
            borderColor: '#5c6bc0',
            backgroundColor: 'rgba(92,107,192,0.08)',
            borderWidth: 2.5,
            pointBackgroundColor: '#5c6bc0',
            pointRadius: 4,
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 11 }, color: '#9aa3bb' }
          },
          y: {
            min: 0, max: 12,
            grid: { color: 'rgba(0,0,0,0.05)' },
            ticks: { stepSize: 2, font: { size: 11 }, color: '#9aa3bb' }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1a2b5e',
            titleColor: '#fff',
            bodyColor: '#c8d4f0',
            padding: 10,
            displayColors: true
          }
        }
      }
    });
    this.charts.push(chart);
  }

  irACrearUsuario(): void {
    this.router.navigate(['/dashboard/usuarios/crear']);
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}