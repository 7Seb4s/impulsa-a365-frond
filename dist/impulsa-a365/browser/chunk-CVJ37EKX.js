import {
  ServicioAdmin
} from "./chunk-T5B6REGZ.js";
import {
  ServicioAutenticacion
} from "./chunk-II2C6W3K.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  NgZone,
  Router,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ASNBX676.js";

// src/app/pages/dashboard/admin/dashboard-admin.component.ts
function DashboardAdminComponent_img_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 91);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function DashboardAdminComponent__svg_svg_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 92);
    \u0275\u0275element(1, "path", 93);
    \u0275\u0275elementEnd();
  }
}
function DashboardAdminComponent_tr_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 94);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 95);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 94);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 96);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td")(11, "span", 97);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "td", 94);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 98);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275classProp("fila-alt", i_r3 % 2 !== 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.numero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.asunto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.solicitante);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "p-" + t_r2.prioridad.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.prioridad);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", "e-" + t_r2.estado.toLowerCase().replace(" ", ""));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2.estado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.fecha);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r2.tiempo);
  }
}
var DashboardAdminComponent = class _DashboardAdminComponent {
  constructor(servicioAuth, servicioAdmin, ngZone, router, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioAdmin = servicioAdmin;
    this.ngZone = ngZone;
    this.router = router;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.charts = [];
    this.ticketStats = { total: 0, atendidos: 0, pendientes: 0, cancelados: 0, promTiempo: "\xE2\u20AC\u201D" };
    this.datosIncidencias = [0, 0, 0, 0];
    this.datosTicketsSemana = [0, 0, 0, 0];
    this.ticketsReporte = [];
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarDatos();
  }
  ngAfterViewInit() {
    this.esperarChartJS();
  }
  ngOnDestroy() {
    this.charts.forEach((c) => c.destroy());
    this.charts = [];
  }
  // â”€â”€ CARGA DE DATOS REALES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Llama en paralelo a los 3 endpoints de grÃ¡ficos del dashboard
  cargarDatos() {
    forkJoin({
      ticketsMes: this.servicioAdmin.obtenerResumenTicketsMes(),
      incidenciasSemana: this.servicioAdmin.obtenerResumenIncidenciasSemana(),
      ticketsSemana: this.servicioAdmin.obtenerResumenTicketsSemana()
    }).subscribe({
      next: ({ ticketsMes, incidenciasSemana, ticketsSemana }) => {
        this.aplicarResumenMes(ticketsMes);
        this.aplicarIncidencias(incidenciasSemana);
        this.aplicarTicketsSemana(ticketsSemana);
        this.reiniciarGraficos();
        this.cdr.detectChanges();
      },
      error: () => {
        console.warn("[A365] No se pudieron cargar los datos del dashboard");
        this.cdr.detectChanges();
      }
    });
  }
  // Puebla los stats de la tabla y los widgets superiores
  aplicarResumenMes(datos) {
    this.ticketStats = {
      total: datos.total,
      atendidos: datos.atendidos,
      pendientes: datos.pendientes,
      cancelados: datos.cancelados,
      promTiempo: "\xE2\u20AC\u201D"
      // el backend no calcula esto aÃºn
    };
  }
  // Arma los datos del grÃ¡fico de torta de incidencias
  // Orden: [Atendidas/Resueltas, Evaluando/EnRevision, EnProgreso, Pendientes/Reportadas]
  aplicarIncidencias(datos) {
    const total = datos.total || 1;
    this.datosIncidencias = [
      Math.round(datos.resueltas / total * 100),
      Math.round(datos.enRevision / total * 100),
      0,
      // "En progreso" no existe aÃºn en la BD
      Math.round(datos.reportadas / total * 100)
    ];
  }
  // Arma los datos del grÃ¡fico de dona de tickets por estado
  // Orden: [Pendientes, Evaluando, EnProgreso, Atendidos]
  aplicarTicketsSemana(datos) {
    const total = datos.total || 1;
    this.datosTicketsSemana = [
      Math.round(datos.pendientes / total * 100),
      Math.round(datos.evaluando / total * 100),
      Math.round(datos.enProgreso / total * 100),
      Math.round(datos.atendidos / total * 100)
    ];
  }
  // Destruye y vuelve a crear los grÃ¡ficos cuando llegan datos nuevos
  reiniciarGraficos() {
    this.charts.forEach((c) => c.destroy());
    this.charts = [];
    if (typeof window["Chart"] !== "undefined") {
      this.ngZone.runOutsideAngular(() => {
        this.initGraficoIncidencias();
        this.initGraficoTickets();
        this.initGraficoActividad();
      });
    }
  }
  // â”€â”€ NAVEGACIÃ“N SIDEBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  irAGestionTickets() {
    this.router.navigate(["/dashboard/gestion-tickets"]);
  }
  irAIncidencias() {
    this.router.navigate(["/dashboard/incidencias"]);
  }
  irAGestionIncidencias() {
    this.router.navigate(["/dashboard/gestion-incidencias"]);
  }
  irAReportes() {
    this.router.navigate(["/dashboard/reportes"]);
  }
  irACrearUsuario() {
    this.router.navigate(["/dashboard/usuarios/crear"]);
  }
  irAPanelUsuarios() {
    this.router.navigate(["/dashboard/panel-usuarios"]);
  }
  irAAdministracion() {
    this.router.navigate(["/dashboard/administracion"]);
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  // â”€â”€ GRÃFICOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Reintenta hasta 20 veces (4 segundos) esperando que Chart.js cargue
  esperarChartJS(intentos = 0) {
    if (typeof window["Chart"] !== "undefined") {
      setTimeout(() => this.initCharts(), 200);
    } else if (intentos < 20) {
      setTimeout(() => this.esperarChartJS(intentos + 1), 200);
    } else {
      console.error("[A365] Chart.js no se carg\xC3\xB3. Verifica el <script> en index.html.");
    }
  }
  initCharts() {
    this.ngZone.runOutsideAngular(() => {
      this.initGraficoIncidencias();
      this.initGraficoTickets();
      this.initGraficoActividad();
    });
  }
  // GrÃ¡fico de torta: distribuciÃ³n de incidencias por estado (datos reales)
  initGraficoIncidencias() {
    const canvas = document.getElementById("graficoIncidencias");
    if (!canvas)
      return;
    const C = window["Chart"];
    const chart = new C(canvas, {
      type: "pie",
      data: {
        labels: ["Atendidas", "Evaluando", "En progreso", "Pendientes"],
        datasets: [{
          data: this.datosIncidencias,
          backgroundColor: ["#26a69a", "#5c6bc0", "#29b6f6", "#ef5350"],
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
        id: "etiquetasPie",
        afterDraw(ch) {
          const ctx = ch.ctx;
          ch.getDatasetMeta(0).data.forEach((arc, i) => {
            const val = ch.data.datasets[0].data[i];
            if (val === 0)
              return;
            const pos = arc.tooltipPosition();
            ctx.save();
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 12px Segoe UI, sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(val + "%", pos.x, pos.y);
            ctx.restore();
          });
        }
      }]
    });
    this.charts.push(chart);
  }
  // GrÃ¡fico de dona: tickets por estado en la semana (datos reales)
  initGraficoTickets() {
    const canvas = document.getElementById("graficoTickets");
    if (!canvas)
      return;
    const C = window["Chart"];
    const chart = new C(canvas, {
      type: "doughnut",
      data: {
        labels: ["Pendientes", "Evaluando", "En progreso", "Atendidos"],
        datasets: [{
          data: this.datosTicketsSemana,
          backgroundColor: ["#ef5350", "#ffa726", "#66bb6a", "#42a5f5"],
          borderWidth: 3,
          borderColor: "#ffffff",
          hoverOffset: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "65%",
        plugins: { legend: { display: false } }
      }
    });
    this.charts.push(chart);
  }
  // GrÃ¡fico de lÃ­neas: registro de actividad por mes (datos estÃ¡ticos por ahora)
  initGraficoActividad() {
    const canvas = document.getElementById("graficoActividad");
    if (!canvas)
      return;
    const C = window["Chart"];
    const chart = new C(canvas, {
      type: "line",
      data: {
        labels: ["Oct 2025", "Nov 2025", "Dic 2025", "Ene 2026", "Feb 2026", "Mar 2026"],
        datasets: [
          {
            label: "Archivados",
            data: [6, 8, 5, 9, 7, 6],
            borderColor: "#ef5350",
            backgroundColor: "rgba(239,83,80,0.08)",
            borderWidth: 2.5,
            pointBackgroundColor: "#ef5350",
            pointRadius: 4,
            fill: true,
            tension: 0.4
          },
          {
            label: "En observaci\xC3\xB3n",
            data: [7, 6, 8, 5, 7, 5],
            borderColor: "#5c6bc0",
            backgroundColor: "rgba(92,107,192,0.08)",
            borderWidth: 2.5,
            pointBackgroundColor: "#5c6bc0",
            pointRadius: 4,
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: "index", intersect: false },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { size: 11 }, color: "#9aa3bb" }
          },
          y: {
            min: 0,
            max: 12,
            grid: { color: "rgba(0,0,0,0.05)" },
            ticks: { stepSize: 2, font: { size: 11 }, color: "#9aa3bb" }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "#1a2b5e",
            titleColor: "#fff",
            bodyColor: "#c8d4f0",
            padding: 10,
            displayColors: true
          }
        }
      }
    });
    this.charts.push(chart);
  }
  static {
    this.\u0275fac = function DashboardAdminComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardAdminComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioAdmin), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardAdminComponent, selectors: [["app-dashboard-admin"]], decls: 200, vars: 11, consts: [[1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", 1, "sidebar-logo"], [1, "sidebar-nav"], [1, "nav-item", "active"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "16", "height", "16"], ["d", "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"], ["d", "M9 21V12h6v9"], [1, "nav-item", 3, "click"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M16 5V3M8 5V3M2 9h20"], ["d", "M8 13h4M8 17h8"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["cx", "12", "cy", "16", "r", "0.5", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "1"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "16", "y1", "11", "x2", "22", "y2", "11"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], [1, "sidebar-spacer"], [1, "main-area"], [1, "topbar"], [1, "page-title"], [1, "topbar-right"], ["aria-label", "Notificaciones", 1, "btn-notif"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "20", "height", "20"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:36px;height:36px;border-radius:50%;object-fit:cover", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "22", "height", "22", 4, "ngIf"], [1, "btn-logout", 3, "click"], [1, "content"], [1, "content-inner"], [1, "dashboard-grid"], [1, "panel", "panel-ancho"], [1, "panel-header"], [1, "panel-title"], [1, "panel-meta"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "14", "height", "14", 2, "color", "#6b7a99"], ["fill-rule", "evenodd", "d", "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z", "clip-rule", "evenodd"], [1, "meta-txt"], [1, "reporte-stats"], [1, "rstat"], [1, "rstat-lbl"], [1, "rstat-val"], [1, "rstat-val", "success"], [1, "rstat-val", "warning"], [1, "rstat-val", "danger"], [1, "reporte-tabla-wrap"], [1, "reporte-tabla"], [1, "align-right"], [3, "fila-alt", 4, "ngFor", "ngForOf"], ["colspan", "4", 1, "foot-txt"], [1, "foot-txt"], [1, "align-right", "foot-txt"], [1, "reporte-leyenda"], [1, "leg-dot", 2, "background", "#1d9e75"], [1, "leg-dot", 2, "background", "#ba7517"], [1, "leg-dot", 2, "background", "#e24b4a"], [1, "leg-dot", 2, "background", "#378add"], [1, "panel"], [1, "btn-periodo"], [1, "chart-wrap"], ["id", "graficoIncidencias"], [1, "leyenda"], [1, "leg-item"], [1, "leg-dot", 2, "background", "#26a69a"], [1, "leg-dot", 2, "background", "#5c6bc0"], [1, "leg-dot", 2, "background", "#29b6f6"], [1, "leg-dot", 2, "background", "#ef5350"], [1, "chart-wrap", "donut"], ["id", "graficoTickets"], [1, "leyenda-bloque"], [1, "leyenda-titulo"], [1, "leg-dot", 2, "background", "#ffa726"], [1, "leg-dot", 2, "background", "#66bb6a"], [1, "leg-dot", 2, "background", "#42a5f5"], [1, "leyenda", 2, "justify-content", "flex-end", "margin-bottom", "8px"], [1, "chart-wrap", "linea"], ["id", "graficoActividad"], [1, "footer"], ["alt", "avatar", 2, "width", "36px", "height", "36px", "border-radius", "50%", "object-fit", "cover", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "22", "height", "22"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "txt-muted"], [1, "txt-asunto"], [1, "badge-prioridad", 3, "ngClass"], [1, "badge-estado", 3, "ngClass"], [1, "align-right", "txt-muted"]], template: function DashboardAdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 5)(6, "a", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 7);
        \u0275\u0275element(8, "path", 8)(9, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Inicio ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "a", 10);
        \u0275\u0275listener("click", function DashboardAdminComponent_Template_a_click_11_listener() {
          return ctx.irAGestionTickets();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 7);
        \u0275\u0275element(13, "rect", 11)(14, "path", 12)(15, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Gesti\xF3n de tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "a", 10);
        \u0275\u0275listener("click", function DashboardAdminComponent_Template_a_click_17_listener() {
          return ctx.irAGestionIncidencias();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 7);
        \u0275\u0275element(19, "circle", 14)(20, "line", 15)(21, "circle", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Gesti\xF3n de incidencias ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "a", 10);
        \u0275\u0275listener("click", function DashboardAdminComponent_Template_a_click_23_listener() {
          return ctx.irACrearUsuario();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 7);
        \u0275\u0275element(25, "path", 17)(26, "circle", 18)(27, "line", 19)(28, "line", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " Registro de usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "a", 10);
        \u0275\u0275listener("click", function DashboardAdminComponent_Template_a_click_30_listener() {
          return ctx.irAPanelUsuarios();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 7);
        \u0275\u0275element(32, "path", 17)(33, "circle", 18)(34, "path", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " Usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "a", 10);
        \u0275\u0275listener("click", function DashboardAdminComponent_Template_a_click_36_listener() {
          return ctx.irAAdministracion();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 7);
        \u0275\u0275element(38, "circle", 22)(39, "path", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " Administraci\xF3n ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(41, "div", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 25)(43, "header", 26)(44, "h1", 27);
        \u0275\u0275text(45, "Inicio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 28)(47, "button", 29);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 30);
        \u0275\u0275element(49, "path", 31)(50, "path", 32);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "div", 33)(52, "div", 34)(53, "span", 35);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 36);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 37);
        \u0275\u0275template(58, DashboardAdminComponent_img_58_Template, 1, 1, "img", 38)(59, DashboardAdminComponent__svg_svg_59_Template, 2, 0, "svg", 39);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "button", 40);
        \u0275\u0275listener("click", function DashboardAdminComponent_Template_button_click_60_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(61, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "div", 41)(63, "div", 42)(64, "div", 43)(65, "div", 44)(66, "div", 45)(67, "span", 46);
        \u0275\u0275text(68, "Reporte de Tickets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 47);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(70, "svg", 48);
        \u0275\u0275element(71, "path", 49);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(72, "span", 50);
        \u0275\u0275text(73, "Mes actual");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(74, "div", 51)(75, "div", 52)(76, "span", 53);
        \u0275\u0275text(77, "Total");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "span", 54);
        \u0275\u0275text(79);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 52)(81, "span", 53);
        \u0275\u0275text(82, "Atendidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "span", 55);
        \u0275\u0275text(84);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 52)(86, "span", 53);
        \u0275\u0275text(87, "Pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "span", 56);
        \u0275\u0275text(89);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 52)(91, "span", 53);
        \u0275\u0275text(92, "Cancelados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "span", 57);
        \u0275\u0275text(94);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(95, "div", 58)(96, "table", 59)(97, "thead")(98, "tr")(99, "th");
        \u0275\u0275text(100, "#");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "th");
        \u0275\u0275text(102, "Asunto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "th");
        \u0275\u0275text(104, "Solicitante");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "th");
        \u0275\u0275text(106, "Prioridad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "th");
        \u0275\u0275text(108, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "th");
        \u0275\u0275text(110, "Fecha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "th", 60);
        \u0275\u0275text(112, "T. Respuesta");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(113, "tbody");
        \u0275\u0275template(114, DashboardAdminComponent_tr_114_Template, 17, 11, "tr", 61);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "tfoot")(116, "tr")(117, "td", 62);
        \u0275\u0275text(118, "TOTALES");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "td", 63);
        \u0275\u0275text(120);
        \u0275\u0275elementEnd();
        \u0275\u0275element(121, "td");
        \u0275\u0275elementStart(122, "td", 64);
        \u0275\u0275text(123);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(124, "div", 65)(125, "span");
        \u0275\u0275element(126, "span", 66);
        \u0275\u0275text(127, "Atendido");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "span");
        \u0275\u0275element(129, "span", 67);
        \u0275\u0275text(130, "Pendiente");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "span");
        \u0275\u0275element(132, "span", 68);
        \u0275\u0275text(133, "Cancelado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "span");
        \u0275\u0275element(135, "span", 69);
        \u0275\u0275text(136, "En revisi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(137, "div", 70)(138, "div", 45)(139, "span", 46);
        \u0275\u0275text(140, "Incidencias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "button", 71);
        \u0275\u0275text(142, "Esta semana");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "div", 72);
        \u0275\u0275element(144, "canvas", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "div", 74)(146, "div", 75);
        \u0275\u0275element(147, "span", 76);
        \u0275\u0275text(148, "Atendidas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "div", 75);
        \u0275\u0275element(150, "span", 77);
        \u0275\u0275text(151, "Evaluando");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "div", 75);
        \u0275\u0275element(153, "span", 78);
        \u0275\u0275text(154, "En progreso");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 75);
        \u0275\u0275element(156, "span", 79);
        \u0275\u0275text(157, "Pendientes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(158, "div", 70)(159, "div", 45)(160, "span", 46);
        \u0275\u0275text(161, "Gesti\xF3n de Tickets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "button", 71);
        \u0275\u0275text(163, "Esta semana");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "div", 80);
        \u0275\u0275element(165, "canvas", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "div", 82)(167, "p", 83);
        \u0275\u0275text(168, "Prioridad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "div", 74)(170, "div", 75);
        \u0275\u0275element(171, "span", 79);
        \u0275\u0275text(172, "Muy alta");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 75);
        \u0275\u0275element(174, "span", 84);
        \u0275\u0275text(175, "Alto");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "div", 75);
        \u0275\u0275element(177, "span", 85);
        \u0275\u0275text(178, "Medio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "div", 75);
        \u0275\u0275element(180, "span", 86);
        \u0275\u0275text(181, "Bajo");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(182, "div", 44)(183, "div", 45)(184, "span", 46);
        \u0275\u0275text(185, "Registro de actividad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(186, "button", 71);
        \u0275\u0275text(187, "Esta semana");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(188, "div", 87)(189, "div", 75);
        \u0275\u0275element(190, "span", 79);
        \u0275\u0275text(191, "Archivados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "div", 75);
        \u0275\u0275element(193, "span", 77);
        \u0275\u0275text(194, "En observaci\xF3n");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(195, "div", 88);
        \u0275\u0275element(196, "canvas", 89);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(197, "footer", 90)(198, "span");
        \u0275\u0275text(199, "\xA9 2026 Impulsa A365. Todos los derechos reservados por Group16.");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(54);
        \u0275\u0275textInterpolate((ctx.usuario == null ? null : ctx.usuario.nombre) || (ctx.usuario == null ? null : ctx.usuario.codigo));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.usuario == null ? null : ctx.usuario.codigo);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.fotoUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoUrl);
        \u0275\u0275advance(20);
        \u0275\u0275textInterpolate(ctx.ticketStats.total);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.ticketStats.atendidos);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.ticketStats.pendientes);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.ticketStats.cancelados);
        \u0275\u0275advance(20);
        \u0275\u0275property("ngForOf", ctx.ticketsReporte);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.ticketStats.total, " tickets");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Prom: ", ctx.ticketStats.promTiempo);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  min-height: 100vh;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 64px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-notif[_ngcontent-%COMP%] {\n  background: #f0f2f8;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #5a6a8a;\n  transition: background 0.15s;\n}\n.btn-notif[_ngcontent-%COMP%]:hover {\n  background: #e0e4ef;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-logout[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 8px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n.content-inner[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid #e0e4ef;\n  box-shadow: 0 2px 8px rgba(26, 43, 94, 0.06);\n}\n.panel-ancho[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.panel-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.meta-txt[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.btn-periodo[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: none;\n  border-radius: 20px;\n  padding: 5px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n}\n.reporte-preview[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}\n.reporte-doc[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 380px;\n  border: 1px solid #e0e4ef;\n  border-radius: 6px;\n  padding: 10px 12px;\n  background: #fafbff;\n}\n.doc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.doc-logo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 18px;\n  background: #c62828;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.doc-lines[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.doc-line[_ngcontent-%COMP%] {\n  height: 4px;\n  border-radius: 2px;\n  background: #d0d5e8;\n}\n.doc-line.lg[_ngcontent-%COMP%] {\n  width: 90%;\n}\n.doc-line.sm[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.doc-tabla[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n.doc-fila[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n  margin-bottom: 2px;\n}\n.dc[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #e8eaf0;\n  border-radius: 1px;\n}\n.dc.h[_ngcontent-%COMP%] {\n  background: #b0b8d0;\n  height: 9px;\n}\n.dc.t[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  opacity: 0.5;\n}\n.doc-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  margin-top: 6px;\n}\n.form-fila[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.form-lbl[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 5px;\n  background: #c8cede;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.form-inp[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 10px;\n  background: #eef0f8;\n  border: 1px solid #d0d5e8;\n  border-radius: 2px;\n}\n.chart-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n}\n.chart-wrap.donut[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.chart-wrap.linea[_ngcontent-%COMP%] {\n  height: 180px;\n}\n.leyenda[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  margin-top: 10px;\n}\n.leg-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #4a5568;\n}\n.leg-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.leyenda-bloque[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10px;\n}\n.leyenda-titulo[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #8a9ab8;\n  margin: 0 0 6px;\n}\n.leyenda-bloque[_ngcontent-%COMP%]   .leyenda[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 10px 24px;\n  text-align: left;\n}\n.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n@media (max-width: 900px) {\n  .dashboard-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .panel-ancho[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n}\n.reporte-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.rstat[_ngcontent-%COMP%] {\n  background: #f7f8fc;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.rstat-lbl[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9ab8;\n}\n.rstat-val[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  color: #1a2b5e;\n}\n.rstat-val.success[_ngcontent-%COMP%] {\n  color: #0f6e56;\n}\n.rstat-val.warning[_ngcontent-%COMP%] {\n  color: #854f0b;\n}\n.rstat-val.danger[_ngcontent-%COMP%] {\n  color: #a32d2d;\n}\n.reporte-tabla-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-bottom: 12px;\n}\n.reporte-tabla[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n  table-layout: fixed;\n}\n.reporte-tabla[_ngcontent-%COMP%]   colgroup[_ngcontent-%COMP%] {\n  display: none;\n}\n.reporte-tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: left;\n  font-weight: 500;\n  font-size: 11.5px;\n  color: #8a9ab8;\n  background: #f7f8fc;\n  border-bottom: 1px solid #e0e4ef;\n}\n.reporte-tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 7px 10px;\n  border-bottom: 0.5px solid #e8eaf0;\n  color: #2d3a58;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.reporte-tabla[_ngcontent-%COMP%]   .fila-alt[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: #fafbff;\n}\n.reporte-tabla[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.txt-muted[_ngcontent-%COMP%] {\n  color: #8a9ab8 !important;\n}\n.txt-asunto[_ngcontent-%COMP%] {\n  color: #1a2b5e !important;\n  font-weight: 500;\n  max-width: 220px;\n}\n.badge-prioridad[_ngcontent-%COMP%], \n.badge-estado[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.p-alta[_ngcontent-%COMP%] {\n  color: #a32d2d;\n  background: #fcebeb;\n}\n.p-media[_ngcontent-%COMP%] {\n  color: #854f0b;\n  background: #faeeda;\n}\n.p-baja[_ngcontent-%COMP%] {\n  color: #0f6e56;\n  background: #e1f5ee;\n}\n.e-atendido[_ngcontent-%COMP%] {\n  color: #0f6e56;\n  background: #e1f5ee;\n}\n.e-pendiente[_ngcontent-%COMP%] {\n  color: #854f0b;\n  background: #faeeda;\n}\n.e-cancelado[_ngcontent-%COMP%] {\n  color: #a32d2d;\n  background: #fcebeb;\n}\n.e-enrevisi\\f3n[_ngcontent-%COMP%] {\n  color: #185fa5;\n  background: #e6f1fb;\n}\n.reporte-tabla[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  border-top: 1px solid #e0e4ef;\n  background: #f7f8fc;\n}\n.foot-txt[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  color: #1a2b5e;\n}\n.reporte-leyenda[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #8a9ab8;\n  padding-top: 8px;\n  border-top: 0.5px solid #e8eaf0;\n}\n.reporte-leyenda[_ngcontent-%COMP%]   .leg-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=dashboard-admin.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardAdminComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-admin", standalone: true, imports: [CommonModule], template: `<!-- pages/dashboard/admin/dashboard-admin.component.html -->\r
<div class="app-layout">\r
  <div class="app-body">\r
\r
    <!-- SIDEBAR -->\r
    <aside class="sidebar">\r
      <div class="sidebar-header">\r
        <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" />\r
      </div>\r
      <nav class="sidebar-nav">\r
\r
        <!-- Inicio -->\r
        <a class="nav-item active">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>\r
            <path d="M9 21V12h6v9"/>\r
          </svg>\r
          Inicio\r
        </a>\r
\r
        <!-- Gesti\xF3n de tickets -->\r
        <a class="nav-item" (click)="irAGestionTickets()">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
            <rect x="2" y="5" width="20" height="14" rx="2"/>\r
            <path d="M16 5V3M8 5V3M2 9h20"/>\r
            <path d="M8 13h4M8 17h8"/>\r
          </svg>\r
          Gesti\xF3n de tickets\r
        </a>\r
\r
        <!-- Gesti\xF3n de incidencias -->\r
        <a class="nav-item" (click)="irAGestionIncidencias()">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
            <circle cx="12" cy="12" r="10"/>\r
            <line x1="12" y1="8" x2="12" y2="12"/>\r
            <circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="1"/>\r
          </svg>\r
          Gesti\xF3n de incidencias\r
        </a>\r
\r
        <!-- Registro de usuarios \u2192 va a Agregar usuario -->\r
        <a class="nav-item" (click)="irACrearUsuario()">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>\r
            <circle cx="9" cy="7" r="4"/>\r
            <line x1="19" y1="8" x2="19" y2="14"/>\r
            <line x1="16" y1="11" x2="22" y2="11"/>\r
          </svg>\r
          Registro de usuarios\r
        </a>\r
\r
        <!-- Usuarios \u2192 navega al panel de usuarios -->\r
        <a class="nav-item" (click)="irAPanelUsuarios()">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>\r
            <circle cx="9" cy="7" r="4"/>\r
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>\r
          </svg>\r
          Usuarios\r
        </a>\r
\r
        <!-- Administraci\xF3n -->\r
        <a class="nav-item" (click)="irAAdministracion()">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
            <circle cx="12" cy="12" r="3"/>\r
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>\r
          </svg>\r
          Administraci\xF3n\r
        </a>\r
\r
      </nav>\r
      <div class="sidebar-spacer"></div>\r
    </aside>\r
\r
    <!-- \xC1REA PRINCIPAL -->\r
    <div class="main-area">\r
\r
      <!-- TOPBAR -->\r
      <header class="topbar">\r
        <h1 class="page-title">Inicio</h1>\r
        <div class="topbar-right">\r
          <button class="btn-notif" aria-label="Notificaciones">\r
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">\r
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>\r
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>\r
            </svg>\r
          </button>\r
          <div class="user-chip">\r
            <div class="user-text">\r
              <span class="user-name">{{ usuario?.nombre || usuario?.codigo }}</span>\r
              <span class="user-code">{{ usuario?.codigo }}</span>\r
            </div>\r
            <div class="user-avatar">
              <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar" style="width:36px;height:36px;border-radius:50%;object-fit:cover" />\r
              <svg *ngIf="!fotoUrl" viewBox="0 0 24 24" fill="#9aaac5" width="22" height="22">\r
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>\r
              </svg>\r
            </div>\r
          </div>\r
          <button class="btn-logout" (click)="onLogout()">Cerrar sesi\xF3n</button>\r
        </div>\r
      </header>\r
\r
      <!-- CONTENIDO -->\r
      <div class="content">\r
        <div class="content-inner">\r
          <div class="dashboard-grid">\r
\r
            <!-- Panel: Reportes de Tickets -->\r
            <div class="panel panel-ancho">\r
              <div class="panel-header">\r
                <span class="panel-title">Reporte de Tickets</span>\r
                <div class="panel-meta">\r
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" style="color:#6b7a99">\r
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>\r
                  </svg>\r
                  <span class="meta-txt">Mes actual</span>\r
                </div>\r
              </div>\r
\r
              <!-- Tarjetas resumen -->\r
              <div class="reporte-stats">\r
                <div class="rstat">\r
                  <span class="rstat-lbl">Total</span>\r
                  <span class="rstat-val">{{ ticketStats.total }}</span>\r
                </div>\r
                <div class="rstat">\r
                  <span class="rstat-lbl">Atendidos</span>\r
                  <span class="rstat-val success">{{ ticketStats.atendidos }}</span>\r
                </div>\r
                <div class="rstat">\r
                  <span class="rstat-lbl">Pendientes</span>\r
                  <span class="rstat-val warning">{{ ticketStats.pendientes }}</span>\r
                </div>\r
                <div class="rstat">\r
                  <span class="rstat-lbl">Cancelados</span>\r
                  <span class="rstat-val danger">{{ ticketStats.cancelados }}</span>\r
                </div>\r
              </div>\r
\r
              <!-- Tabla de tickets -->\r
              <div class="reporte-tabla-wrap">\r
                <table class="reporte-tabla">\r
                  <thead>\r
                    <tr>\r
                      <th>#</th>\r
                      <th>Asunto</th>\r
                      <th>Solicitante</th>\r
                      <th>Prioridad</th>\r
                      <th>Estado</th>\r
                      <th>Fecha</th>\r
                      <th class="align-right">T. Respuesta</th>\r
                    </tr>\r
                  </thead>\r
                  <tbody>\r
                    <tr *ngFor="let t of ticketsReporte; let i = index" [class.fila-alt]="i % 2 !== 0">\r
                      <td class="txt-muted">{{ t.numero }}</td>\r
                      <td class="txt-asunto">{{ t.asunto }}</td>\r
                      <td class="txt-muted">{{ t.solicitante }}</td>\r
                      <td>\r
                        <span class="badge-prioridad" [ngClass]="'p-' + t.prioridad.toLowerCase()">{{ t.prioridad }}</span>\r
                      </td>\r
                      <td>\r
                        <span class="badge-estado" [ngClass]="'e-' + t.estado.toLowerCase().replace(' ', '')">{{ t.estado }}</span>\r
                      </td>\r
                      <td class="txt-muted">{{ t.fecha }}</td>\r
                      <td class="align-right txt-muted">{{ t.tiempo }}</td>\r
                    </tr>\r
                  </tbody>\r
                  <tfoot>\r
                    <tr>\r
                      <td colspan="4" class="foot-txt">TOTALES</td>\r
                      <td class="foot-txt">{{ ticketStats.total }} tickets</td>\r
                      <td></td>\r
                      <td class="align-right foot-txt">Prom: {{ ticketStats.promTiempo }}</td>\r
                    </tr>\r
                  </tfoot>\r
                </table>\r
              </div>\r
\r
              <!-- Leyenda -->\r
              <div class="reporte-leyenda">\r
                <span><span class="leg-dot" style="background:#1d9e75"></span>Atendido</span>\r
                <span><span class="leg-dot" style="background:#ba7517"></span>Pendiente</span>\r
                <span><span class="leg-dot" style="background:#e24b4a"></span>Cancelado</span>\r
                <span><span class="leg-dot" style="background:#378add"></span>En revisi\xF3n</span>\r
              </div>\r
            </div>\r
\r
            <!-- Panel: Incidencias -->\r
            <div class="panel">\r
              <div class="panel-header">\r
                <span class="panel-title">Incidencias</span>\r
                <button class="btn-periodo">Esta semana</button>\r
              </div>\r
              <div class="chart-wrap">\r
                <canvas id="graficoIncidencias"></canvas>\r
              </div>\r
              <div class="leyenda">\r
                <div class="leg-item"><span class="leg-dot" style="background:#26a69a"></span>Atendidas</div>\r
                <div class="leg-item"><span class="leg-dot" style="background:#5c6bc0"></span>Evaluando</div>\r
                <div class="leg-item"><span class="leg-dot" style="background:#29b6f6"></span>En progreso</div>\r
                <div class="leg-item"><span class="leg-dot" style="background:#ef5350"></span>Pendientes</div>\r
              </div>\r
            </div>\r
\r
            <!-- Panel: Gesti\xF3n de Tickets -->\r
            <div class="panel">\r
              <div class="panel-header">\r
                <span class="panel-title">Gesti\xF3n de Tickets</span>\r
                <button class="btn-periodo">Esta semana</button>\r
              </div>\r
              <div class="chart-wrap donut">\r
                <canvas id="graficoTickets"></canvas>\r
              </div>\r
              <div class="leyenda-bloque">\r
                <p class="leyenda-titulo">Prioridad</p>\r
                <div class="leyenda">\r
                  <div class="leg-item"><span class="leg-dot" style="background:#ef5350"></span>Muy alta</div>\r
                  <div class="leg-item"><span class="leg-dot" style="background:#ffa726"></span>Alto</div>\r
                  <div class="leg-item"><span class="leg-dot" style="background:#66bb6a"></span>Medio</div>\r
                  <div class="leg-item"><span class="leg-dot" style="background:#42a5f5"></span>Bajo</div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- Panel: Registro de actividad (ocupa toda la fila) -->\r
            <div class="panel panel-ancho">\r
              <div class="panel-header">\r
                <span class="panel-title">Registro de actividad</span>\r
                <button class="btn-periodo">Esta semana</button>\r
              </div>\r
              <div class="leyenda" style="justify-content:flex-end;margin-bottom:8px">\r
                <div class="leg-item"><span class="leg-dot" style="background:#ef5350"></span>Archivados</div>\r
                <div class="leg-item"><span class="leg-dot" style="background:#5c6bc0"></span>En observaci\xF3n</div>\r
              </div>\r
              <div class="chart-wrap linea">\r
                <canvas id="graficoActividad"></canvas>\r
              </div>\r
            </div>\r
\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- FOOTER -->\r
  <footer class="footer">\r
    <span>\xA9 2026 Impulsa A365. Todos los derechos reservados por Group16.</span>\r
  </footer>\r
</div>`, styles: ['/* src/app/pages/dashboard/admin/dashboard-admin.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 220px;\n  min-height: 100vh;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 64px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #fff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-notif {\n  background: #f0f2f8;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #5a6a8a;\n  transition: background 0.15s;\n}\n.btn-notif:hover {\n  background: #e0e4ef;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-logout {\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 8px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  overflow-y: auto;\n}\n.content-inner {\n  padding: 20px;\n}\n.dashboard-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.panel {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  border: 1px solid #e0e4ef;\n  box-shadow: 0 2px 8px rgba(26, 43, 94, 0.06);\n}\n.panel-ancho {\n  grid-column: 1 / -1;\n}\n.panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.panel-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.panel-meta {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n.meta-txt {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.btn-periodo {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: none;\n  border-radius: 20px;\n  padding: 5px 14px;\n  font-size: 11px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n}\n.reporte-preview {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}\n.reporte-doc {\n  width: 100%;\n  max-width: 380px;\n  border: 1px solid #e0e4ef;\n  border-radius: 6px;\n  padding: 10px 12px;\n  background: #fafbff;\n}\n.doc-header {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.doc-logo {\n  width: 32px;\n  height: 18px;\n  background: #c62828;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.doc-lines {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.doc-line {\n  height: 4px;\n  border-radius: 2px;\n  background: #d0d5e8;\n}\n.doc-line.lg {\n  width: 90%;\n}\n.doc-line.sm {\n  width: 50%;\n}\n.doc-tabla {\n  margin-bottom: 6px;\n}\n.doc-fila {\n  display: flex;\n  gap: 2px;\n  margin-bottom: 2px;\n}\n.dc {\n  flex: 1;\n  height: 8px;\n  background: #e8eaf0;\n  border-radius: 1px;\n}\n.dc.h {\n  background: #b0b8d0;\n  height: 9px;\n}\n.dc.t {\n  background: #1a2b5e;\n  opacity: 0.5;\n}\n.doc-form {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  margin-top: 6px;\n}\n.form-fila {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.form-lbl {\n  width: 60px;\n  height: 5px;\n  background: #c8cede;\n  border-radius: 2px;\n  flex-shrink: 0;\n}\n.form-inp {\n  flex: 1;\n  height: 10px;\n  background: #eef0f8;\n  border: 1px solid #d0d5e8;\n  border-radius: 2px;\n}\n.chart-wrap {\n  position: relative;\n  height: 180px;\n}\n.chart-wrap.donut {\n  display: flex;\n  justify-content: center;\n}\n.chart-wrap.linea {\n  height: 180px;\n}\n.leyenda {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 14px;\n  margin-top: 10px;\n}\n.leg-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: #4a5568;\n}\n.leg-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n.leyenda-bloque {\n  text-align: center;\n  margin-top: 10px;\n}\n.leyenda-titulo {\n  font-size: 11px;\n  font-weight: 600;\n  color: #8a9ab8;\n  margin: 0 0 6px;\n}\n.leyenda-bloque .leyenda {\n  justify-content: center;\n}\n.footer {\n  background: #1a2b5e;\n  padding: 10px 24px;\n  text-align: left;\n}\n.footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n@media (max-width: 900px) {\n  .dashboard-grid {\n    grid-template-columns: 1fr;\n  }\n  .panel-ancho {\n    grid-column: 1;\n  }\n}\n.reporte-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  margin-bottom: 16px;\n}\n.rstat {\n  background: #f7f8fc;\n  border-radius: 8px;\n  padding: 10px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.rstat-lbl {\n  font-size: 11px;\n  color: #8a9ab8;\n}\n.rstat-val {\n  font-size: 20px;\n  font-weight: 500;\n  color: #1a2b5e;\n}\n.rstat-val.success {\n  color: #0f6e56;\n}\n.rstat-val.warning {\n  color: #854f0b;\n}\n.rstat-val.danger {\n  color: #a32d2d;\n}\n.reporte-tabla-wrap {\n  overflow-x: auto;\n  margin-bottom: 12px;\n}\n.reporte-tabla {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n  table-layout: fixed;\n}\n.reporte-tabla colgroup {\n  display: none;\n}\n.reporte-tabla th {\n  padding: 8px 10px;\n  text-align: left;\n  font-weight: 500;\n  font-size: 11.5px;\n  color: #8a9ab8;\n  background: #f7f8fc;\n  border-bottom: 1px solid #e0e4ef;\n}\n.reporte-tabla td {\n  padding: 7px 10px;\n  border-bottom: 0.5px solid #e8eaf0;\n  color: #2d3a58;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.reporte-tabla .fila-alt td {\n  background: #fafbff;\n}\n.reporte-tabla .align-right {\n  text-align: right;\n}\n.txt-muted {\n  color: #8a9ab8 !important;\n}\n.txt-asunto {\n  color: #1a2b5e !important;\n  font-weight: 500;\n  max-width: 220px;\n}\n.badge-prioridad,\n.badge-estado {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.p-alta {\n  color: #a32d2d;\n  background: #fcebeb;\n}\n.p-media {\n  color: #854f0b;\n  background: #faeeda;\n}\n.p-baja {\n  color: #0f6e56;\n  background: #e1f5ee;\n}\n.e-atendido {\n  color: #0f6e56;\n  background: #e1f5ee;\n}\n.e-pendiente {\n  color: #854f0b;\n  background: #faeeda;\n}\n.e-cancelado {\n  color: #a32d2d;\n  background: #fcebeb;\n}\n.e-enrevisi\\f3n {\n  color: #185fa5;\n  background: #e6f1fb;\n}\n.reporte-tabla tfoot td {\n  padding: 8px 10px;\n  border-top: 1px solid #e0e4ef;\n  background: #f7f8fc;\n}\n.foot-txt {\n  font-weight: 500;\n  font-size: 12px;\n  color: #1a2b5e;\n}\n.reporte-leyenda {\n  display: flex;\n  gap: 16px;\n  font-size: 11px;\n  color: #8a9ab8;\n  padding-top: 8px;\n  border-top: 0.5px solid #e8eaf0;\n}\n.reporte-leyenda .leg-dot {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  margin-right: 4px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=dashboard-admin.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioAdmin }, { type: NgZone }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardAdminComponent, { className: "DashboardAdminComponent", filePath: "src/app/pages/dashboard/admin/dashboard-admin.component.ts", lineNumber: 30 });
})();
export {
  DashboardAdminComponent
};
//# sourceMappingURL=chunk-CVJ37EKX.js.map
