// pages/dashboard/admin/dashboard-admin.component.ts
// Vista del administrador/gerente: panel con 4 widgets y gráficos Chart.js.
// Chart.js se carga desde CDN en index.html — NO instalar con npm.
import { Component, OnInit, AfterViewInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioAutenticacion, DatosUsuario } from '../../../core/services/servicio-autenticacion';
import { ServicioAdmin, ResumenTicketsMes, ResumenIncidenciasSemana, ResumenTicketsSemana } from '../../../core/services/servicio-admin';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

declare const Chart: any;

export interface TicketReporte {
  numero:      string;
  asunto:      string;
  solicitante: string;
  prioridad:   string;
  estado:      string;
  fecha:       string;
  tiempo:      string;
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
  fotoUrl: string | null = null;

  // Guardamos referencias para destruirlos al salir del componente
  private charts: any[] = [];

  // Stats del backend (se pueblan en ngOnInit)
  ticketStats = { total: 0, atendidos: 0, pendientes: 0, cancelados: 0, promTiempo: '—' };

  // Datos reales para los gráficos (se pueblan antes de inicializar Chart.js)
  private datosIncidencias: number[] = [0, 0, 0, 0];
  private datosTicketsSemana: number[] = [0, 0, 0, 0];

  // Tabla del reporte de tickets (se puebla con los datos del mes)
  ticketsReporte: TicketReporte[] = [];

  constructor(
    private servicioAuth:  ServicioAutenticacion,
    private servicioAdmin: ServicioAdmin,
    private ngZone:        NgZone,
    private router:        Router,
    private cdr:           ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe(url => { this.fotoUrl = url; this.cdr.detectChanges(); });
    this.cargarDatos();
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

  // ── CARGA DE DATOS REALES ────────────────────────────────────

  // Llama en paralelo a los 3 endpoints de gráficos del dashboard
  private cargarDatos(): void {
    forkJoin({
      ticketsMes:          this.servicioAdmin.obtenerResumenTicketsMes(),
      incidenciasSemana:   this.servicioAdmin.obtenerResumenIncidenciasSemana(),
      ticketsSemana:       this.servicioAdmin.obtenerResumenTicketsSemana()
    }).subscribe({
      next: ({ ticketsMes, incidenciasSemana, ticketsSemana }) => {
        this.aplicarResumenMes(ticketsMes);
        this.aplicarIncidencias(incidenciasSemana);
        this.aplicarTicketsSemana(ticketsSemana);
        // Reinicia los gráficos con datos reales si ya están montados
        this.reiniciarGraficos();
        this.cdr.detectChanges();
      },
      error: () => {
        // Si falla la carga los gráficos quedan con ceros (sin romper la vista)
        console.warn('[A365] No se pudieron cargar los datos del dashboard');
        this.cdr.detectChanges();
      }
    });
  }

  // Puebla los stats de la tabla y los widgets superiores
  private aplicarResumenMes(datos: ResumenTicketsMes): void {
    this.ticketStats = {
      total:      datos.total,
      atendidos:  datos.atendidos,
      pendientes: datos.pendientes,
      cancelados: datos.cancelados,
      promTiempo: '—'    // el backend no calcula esto aún
    };
  }

  // Arma los datos del gráfico de torta de incidencias
  // Orden: [Atendidas/Resueltas, Evaluando/EnRevision, EnProgreso, Pendientes/Reportadas]
  private aplicarIncidencias(datos: ResumenIncidenciasSemana): void {
    const total = datos.total || 1;  // evitar división por cero
    this.datosIncidencias = [
      Math.round(datos.resueltas  / total * 100),
      Math.round(datos.enRevision / total * 100),
      0,   // "En progreso" no existe aún en la BD
      Math.round(datos.reportadas / total * 100)
    ];
  }

  // Arma los datos del gráfico de dona de tickets por estado
  // Orden: [Pendientes, Evaluando, EnProgreso, Atendidos]
  private aplicarTicketsSemana(datos: ResumenTicketsSemana): void {
    const total = datos.total || 1;
    this.datosTicketsSemana = [
      Math.round(datos.pendientes / total * 100),
      Math.round(datos.evaluando  / total * 100),
      Math.round(datos.enProgreso / total * 100),
      Math.round(datos.atendidos  / total * 100)
    ];
  }

  // Destruye y vuelve a crear los gráficos cuando llegan datos nuevos
  private reiniciarGraficos(): void {
    this.charts.forEach(c => c.destroy());
    this.charts = [];
    if (typeof (window as any)['Chart'] !== 'undefined') {
      this.ngZone.runOutsideAngular(() => {
        this.initGraficoIncidencias();
        this.initGraficoTickets();
        this.initGraficoActividad();
      });
    }
  }

  // ── NAVEGACIÓN SIDEBAR ──────────────────────────────────────

  irAGestionTickets(): void {
    this.router.navigate(['/dashboard/gestion-tickets']);
  }

  irAIncidencias(): void {
    this.router.navigate(['/dashboard/incidencias']);
  }

  irAGestionIncidencias(): void {
    this.router.navigate(['/dashboard/gestion-incidencias']);
  }

  irAReportes(): void {
    this.router.navigate(['/dashboard/reportes']);
  }

  irACrearUsuario(): void {
    this.router.navigate(['/dashboard/usuarios/crear']);
  }

  irAPanelUsuarios(): void {
    this.router.navigate(['/dashboard/panel-usuarios']);
  }

  irAAdministracion(): void {
    this.router.navigate(['/dashboard/administracion']);
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }

  // ── GRÁFICOS ────────────────────────────────────────────────

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
    this.ngZone.runOutsideAngular(() => {
      this.initGraficoIncidencias();
      this.initGraficoTickets();
      this.initGraficoActividad();
    });
  }

  // Gráfico de torta: distribución de incidencias por estado (datos reales)
  private initGraficoIncidencias(): void {
    const canvas = document.getElementById('graficoIncidencias') as HTMLCanvasElement;
    if (!canvas) return;

    const C = (window as any)['Chart'];
    const chart = new C(canvas, {
      type: 'pie',
      data: {
        labels: ['Atendidas', 'Evaluando', 'En progreso', 'Pendientes'],
        datasets: [{
          data: this.datosIncidencias,
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
            const val = ch.data.datasets[0].data[i];
            if (val === 0) return;
            const pos = arc.tooltipPosition();
            ctx.save();
            ctx.fillStyle    = '#ffffff';
            ctx.font         = 'bold 12px Segoe UI, sans-serif';
            ctx.textAlign    = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(val + '%', pos.x, pos.y);
            ctx.restore();
          });
        }
      }]
    });
    this.charts.push(chart);
  }

  // Gráfico de dona: tickets por estado en la semana (datos reales)
  private initGraficoTickets(): void {
    const canvas = document.getElementById('graficoTickets') as HTMLCanvasElement;
    if (!canvas) return;

    const C = (window as any)['Chart'];
    const chart = new C(canvas, {
      type: 'doughnut',
      data: {
        labels: ['Pendientes', 'Evaluando', 'En progreso', 'Atendidos'],
        datasets: [{
          data: this.datosTicketsSemana,
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

  // Gráfico de líneas: registro de actividad por mes (datos estáticos por ahora)
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
}
