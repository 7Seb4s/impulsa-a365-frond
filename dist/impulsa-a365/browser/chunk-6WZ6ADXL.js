import {
  ServicioTickets
} from "./chunk-GQNKRLFD.js";
import {
  ServicioAutenticacion
} from "./chunk-II2C6W3K.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  RouterLink,
  ViewEncapsulation,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ASNBX676.js";

// src/app/pages/dashboard/agente/dashboard-agente.component.ts
function DashboardAgenteComponent_img_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 59);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function DashboardAgenteComponent__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 60);
    \u0275\u0275element(1, "path", 61);
    \u0275\u0275elementEnd();
  }
}
function DashboardAgenteComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r2);
  }
}
function DashboardAgenteComponent_tr_70_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dia_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dia_r3.numero);
  }
}
function DashboardAgenteComponent_tr_70_td_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const dia_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(dia_r3.numero);
  }
}
function DashboardAgenteComponent_tr_70_td_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275template(1, DashboardAgenteComponent_tr_70_td_1_span_1_Template, 2, 1, "span", 63)(2, DashboardAgenteComponent_tr_70_td_1_ng_container_2_Template, 2, 1, "ng-container", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dia_r3 = ctx.$implicit;
    \u0275\u0275classProp("other-month", !dia_r3.delMesActual)("today", dia_r3.esHoy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", dia_r3.esHoy);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !dia_r3.esHoy);
  }
}
function DashboardAgenteComponent_tr_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275template(1, DashboardAgenteComponent_tr_70_td_1_Template, 3, 6, "td", 62);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const semana_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", semana_r4);
  }
}
function DashboardAgenteComponent_ng_container_103_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65)(1, "span", 66);
    \u0275\u0275text(2, "+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "p", 67);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 68);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("Ticket #", ctx_r0.formatear(t_r5.numero), " \u2014 ", t_r5.estado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.locacion);
  }
}
function DashboardAgenteComponent_ng_container_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DashboardAgenteComponent_ng_container_103_div_1_Template, 8, 3, "div", 64);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.ticketsTimeline);
  }
}
function DashboardAgenteComponent_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 69);
    \u0275\u0275text(1, "No tienes tickets pendientes por el momento.");
    \u0275\u0275elementEnd();
  }
}
var DashboardAgenteComponent = class _DashboardAgenteComponent {
  constructor(servicioAuth, servicioTickets, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioTickets = servicioTickets;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.totalPendientes = 0;
    this.totalAtendidos = 0;
    this.totalCancelados = 0;
    this.ticketsTimeline = [];
    this.ticketActivo = null;
    this.fechaActual = /* @__PURE__ */ new Date();
    this.mesMostrado = (/* @__PURE__ */ new Date()).getMonth();
    this.anioMostrado = (/* @__PURE__ */ new Date()).getFullYear();
    this.diasSemana = ["Lu", "Ma", "Mi", "Ju", "Vie", "Sa", "Do"];
    this.meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    this.semanas = [];
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.construirCalendario();
    this.cargarStats();
  }
  // â”€â”€ Carga contadores y timeline desde el backend â”€â”€
  cargarStats() {
    forkJoin({
      pendientes: this.servicioTickets.listar("pendientes"),
      completados: this.servicioTickets.listar("completados"),
      cancelados: this.servicioTickets.listar("cancelados")
    }).subscribe({
      next: (res) => {
        this.totalPendientes = res.pendientes.length;
        this.totalAtendidos = res.completados.length;
        this.totalCancelados = res.cancelados.length;
        this.ticketsTimeline = res.pendientes.slice(0, 4);
        this.ticketActivo = res.pendientes[0] ?? null;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cdr.detectChanges();
      }
    });
  }
  // â”€â”€ Construye la matriz del calendario para el mes mostrado â”€â”€
  construirCalendario() {
    const primerDia = new Date(this.anioMostrado, this.mesMostrado, 1);
    const ultimoDia = new Date(this.anioMostrado, this.mesMostrado + 1, 0);
    let diaSemanaPrimero = primerDia.getDay() - 1;
    if (diaSemanaPrimero < 0)
      diaSemanaPrimero = 6;
    const diasMesAnterior = new Date(this.anioMostrado, this.mesMostrado, 0).getDate();
    const dias = [];
    for (let i = diaSemanaPrimero - 1; i >= 0; i--) {
      dias.push({
        numero: diasMesAnterior - i,
        delMesActual: false,
        esHoy: false
      });
    }
    for (let d = 1; d <= ultimoDia.getDate(); d++) {
      const esHoy = this.esHoy(d);
      dias.push({ numero: d, delMesActual: true, esHoy });
    }
    let siguiente = 1;
    while (dias.length % 7 !== 0) {
      dias.push({
        numero: siguiente++,
        delMesActual: false,
        esHoy: false
      });
    }
    const semanas = [];
    for (let i = 0; i < dias.length; i += 7) {
      semanas.push(dias.slice(i, i + 7));
    }
    this.semanas = semanas;
  }
  // True si el dia mostrado es la fecha actual real
  esHoy(dia) {
    const hoy = /* @__PURE__ */ new Date();
    return dia === hoy.getDate() && this.mesMostrado === hoy.getMonth() && this.anioMostrado === hoy.getFullYear();
  }
  mesAnterior() {
    if (this.mesMostrado === 0) {
      this.mesMostrado = 11;
      this.anioMostrado--;
    } else {
      this.mesMostrado--;
    }
    this.construirCalendario();
  }
  mesSiguiente() {
    if (this.mesMostrado === 11) {
      this.mesMostrado = 0;
      this.anioMostrado++;
    } else {
      this.mesMostrado++;
    }
    this.construirCalendario();
  }
  // â”€â”€ Helpers de usuario â”€â”€
  // Devuelve "Bienvenido, <Nombre>." sin codigo si esta disponible
  get nombreUsuario() {
    return this.usuario?.nombre || this.usuario?.codigo || "Usuario";
  }
  // Iniciales del usuario para el avatar (ej "GG" para Grace Galan)
  get iniciales() {
    const n = this.usuario?.nombre?.trim();
    if (!n)
      return this.usuario?.codigo?.substring(0, 2).toUpperCase() ?? "US";
    const partes = n.split(/\s+/);
    if (partes.length === 1)
      return partes[0].substring(0, 2).toUpperCase();
    return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
  }
  // Convierte el numero a "01", "02", "10", "100"
  formatear(n) {
    return n.toString().padStart(2, "0");
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  static {
    this.\u0275fac = function DashboardAgenteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DashboardAgenteComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioTickets), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardAgenteComponent, selectors: [["app-dashboard-agente"]], decls: 109, vars: 17, consts: [["sinTickets", ""], [1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "sidebar-logo"], [1, "sidebar-nav"], ["routerLink", "/dashboard/agente", 1, "nav-item", "active"], ["routerLink", "/dashboard/tickets", 1, "nav-item"], ["routerLink", "/dashboard/incidencias", 1, "nav-item"], ["routerLink", "/dashboard/reportes", 1, "nav-item"], [1, "sidebar-spacer"], ["routerLink", "/dashboard/perfil", 1, "nav-item"], ["routerLink", "/dashboard/configuracion", 1, "nav-item"], [1, "main-area"], [1, "topbar"], [1, "topbar-right"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:100%;height:100%;object-fit:cover;border-radius:50%;", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26", 4, "ngIf"], [1, "btn-logout-top", 3, "click"], [1, "content"], [1, "welcome-bar"], [1, "welcome-title"], [1, "content-inner"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-label"], [1, "stat-valor"], [1, "bottom-row"], [1, "calendar-card"], [1, "calendar-header"], [1, "calendar-month"], [1, "calendar-nav"], ["type", "button", 1, "cal-btn", 3, "click"], [1, "calendar-table"], [4, "ngFor", "ngForOf"], [1, "tickets-card"], [1, "tickets-title"], [1, "ticket-activo-header"], [1, "ticket-activo-label"], [1, "ticket-activo-id"], [1, "ticket-meta"], [1, "ticket-meta-group"], [1, "ticket-meta-label"], [1, "ticket-tipo"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "14", "height", "14", 2, "color", "#e07b00"], ["d", "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"], [1, "ticket-prioridad", "alta"], [1, "prioridad-dot"], [1, "ticket-asignado"], [1, "asignado-avatar"], [1, "ticket-timeline"], [4, "ngIf", "ngIfElse"], [1, "inner-footer"], ["alt", "avatar", 2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "50%", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [3, "other-month", "today", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "timeline-dot"], [1, "timeline-desc"], [1, "timeline-time"], [1, "sin-tickets"]], template: function DashboardAgenteComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "aside", 3)(3, "div", 4);
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 6)(6, "a", 7);
        \u0275\u0275text(7, "Inicio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 8);
        \u0275\u0275text(9, "Tickets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 9);
        \u0275\u0275text(11, "Incidencias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 10);
        \u0275\u0275text(13, "Reportes");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(14, "div", 11);
        \u0275\u0275elementStart(15, "nav", 6)(16, "a", 12);
        \u0275\u0275text(17, "Perfil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 13);
        \u0275\u0275text(19, "Configuraci\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 14)(21, "header", 15)(22, "div", 16)(23, "div", 17)(24, "div", 18)(25, "span", 19);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 20);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 21);
        \u0275\u0275template(30, DashboardAgenteComponent_img_30_Template, 1, 1, "img", 22)(31, DashboardAgenteComponent__svg_svg_31_Template, 2, 0, "svg", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 24);
        \u0275\u0275listener("click", function DashboardAgenteComponent_Template_button_click_32_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(33, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 25)(35, "div", 26)(36, "h2", 27);
        \u0275\u0275text(37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 28)(39, "div", 29)(40, "div", 30)(41, "span", 31);
        \u0275\u0275text(42, "Tickets pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span", 32);
        \u0275\u0275text(44);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 30)(46, "span", 31);
        \u0275\u0275text(47, "Tickets atendidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "span", 32);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 30)(51, "span", 31);
        \u0275\u0275text(52, "Tickets cancelados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "span", 32);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(55, "div", 33)(56, "div", 34)(57, "div", 35)(58, "span", 36);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 37)(61, "button", 38);
        \u0275\u0275listener("click", function DashboardAgenteComponent_Template_button_click_61_listener() {
          return ctx.mesAnterior();
        });
        \u0275\u0275text(62, "\u2039");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "button", 38);
        \u0275\u0275listener("click", function DashboardAgenteComponent_Template_button_click_63_listener() {
          return ctx.mesSiguiente();
        });
        \u0275\u0275text(64, "\u203A");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(65, "table", 39)(66, "thead")(67, "tr");
        \u0275\u0275template(68, DashboardAgenteComponent_th_68_Template, 2, 1, "th", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "tbody");
        \u0275\u0275template(70, DashboardAgenteComponent_tr_70_Template, 2, 1, "tr", 40);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "div", 41)(72, "h3", 42);
        \u0275\u0275text(73, "Estado de los tickets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div", 43)(75, "span", 44);
        \u0275\u0275text(76, "Ticket Activo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span", 45);
        \u0275\u0275text(78);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 46)(80, "div", 47)(81, "span", 48);
        \u0275\u0275text(82, "Tipo de ticket");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 49);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(84, "svg", 50);
        \u0275\u0275element(85, "path", 51);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(86, "span");
        \u0275\u0275text(87, "Actualizaci\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(88, "div", 47)(89, "span", 48);
        \u0275\u0275text(90, "Prioridad");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 52);
        \u0275\u0275element(92, "span", 53);
        \u0275\u0275text(93, " Alta ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "div", 47)(95, "span", 48);
        \u0275\u0275text(96, "Asignado a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 54)(98, "div", 55);
        \u0275\u0275text(99);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "span");
        \u0275\u0275text(101);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(102, "div", 56);
        \u0275\u0275template(103, DashboardAgenteComponent_ng_container_103_Template, 2, 1, "ng-container", 57)(104, DashboardAgenteComponent_ng_template_104_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(106, "footer", 58)(107, "span");
        \u0275\u0275text(108, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const sinTickets_r6 = \u0275\u0275reference(105);
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.nombreUsuario);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.usuario == null ? null : ctx.usuario.codigo);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.fotoUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoUrl);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("Bienvenido, ", ctx.nombreUsuario, ".");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.formatear(ctx.totalPendientes));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.formatear(ctx.totalAtendidos));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.formatear(ctx.totalCancelados));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate2("", ctx.meses[ctx.mesMostrado], " ", ctx.anioMostrado);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.diasSemana);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.semanas);
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" #", ctx.ticketActivo ? ctx.formatear(ctx.ticketActivo.numero) : "000", " ");
        \u0275\u0275advance(21);
        \u0275\u0275textInterpolate(ctx.iniciales);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.nombreUsuario);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.ticketsTimeline.length > 0)("ngIfElse", sinTickets_r6);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterLink], styles: ['/* src/app/pages/dashboard/agente/dashboard-agente.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item:hover {\n  background: #f0f2f8;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-logout-top {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  background: #eef0f6;\n  overflow-y: auto;\n}\n.welcome-bar {\n  background: #ffffff;\n  padding: 18px 26px;\n  border-left: 4px solid #1a2b5e;\n  margin-bottom: 20px;\n}\n.welcome-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.content-inner {\n  padding: 0 26px 26px 26px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  background: #ffffff;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1.5px solid #dde2ee;\n  border-radius: 6px;\n}\n.stat-label {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.stat-valor {\n  font-size: 20px;\n  font-weight: 800;\n  color: #e07b00;\n}\n.bottom-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  align-items: start;\n}\n.calendar-card {\n  border: 1.5px solid #dde2ee;\n  border-radius: 10px;\n  padding: 24px 28px;\n  background: #ffffff;\n}\n.calendar-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.calendar-month {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.calendar-nav {\n  display: flex;\n  gap: 6px;\n}\n.cal-btn {\n  background: #ffffff;\n  border: 1px solid #dde2ee;\n  border-radius: 5px;\n  width: 30px;\n  height: 30px;\n  font-size: 16px;\n  cursor: pointer;\n  color: #1a2b5e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.cal-btn:hover {\n  background: #eef0f6;\n}\n.calendar-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center;\n}\n.calendar-table th {\n  color: #6b7a99;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 4px 0 14px;\n}\n.calendar-table td {\n  padding: 10px 4px;\n  font-size: 14px;\n  color: #2d3a58;\n  font-weight: 500;\n}\n.calendar-table td.other-month {\n  color: #b0bcd4;\n  background: #f4f6fb;\n}\n.calendar-table td.today span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.tickets-card {\n  border: 1.5px solid #dde2ee;\n  border-radius: 6px;\n  padding: 18px 20px;\n  background: #ffffff;\n}\n.tickets-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 12px;\n  text-align: center;\n}\n.ticket-activo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.ticket-activo-label {\n  font-size: 12px;\n  color: #6b7a99;\n}\n.ticket-activo-id {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a56db;\n}\n.ticket-meta {\n  display: flex;\n  gap: 14px;\n  background: #f7f8fc;\n  border: 1px solid #dde2ee;\n  border-radius: 5px;\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ticket-meta-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ticket-meta-label {\n  font-size: 10px;\n  color: #6b7a99;\n}\n.ticket-tipo {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #2d3a58;\n}\n.ticket-prioridad {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 12px;\n}\n.ticket-prioridad.alta {\n  background: #fff3cd;\n  color: #856404;\n  border: 1px solid #ffe69c;\n}\n.prioridad-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #e07b00;\n  display: inline-block;\n}\n.ticket-asignado {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #2d3a58;\n}\n.asignado-avatar {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #c0392b;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ticket-timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.timeline-item {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n}\n.timeline-dot {\n  color: #1a2b5e;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.3;\n  flex-shrink: 0;\n}\n.timeline-desc {\n  font-size: 12.5px;\n  color: #2d3a58;\n  font-weight: 500;\n  margin: 0;\n}\n.timeline-time {\n  font-size: 11px;\n  color: #9aa3bb;\n  margin: 2px 0 0;\n}\n.inner-footer {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n@media (max-width: 960px) {\n  .bottom-row {\n    grid-template-columns: 1fr;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.sin-tickets {\n  font-size: 13px;\n  color: #8a9ab8;\n  text-align: center;\n  padding: 18px 0;\n  margin: 0;\n  font-style: italic;\n}\n/*# sourceMappingURL=dashboard-agente.component.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardAgenteComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-agente", standalone: true, imports: [CommonModule, RouterLink], encapsulation: ViewEncapsulation.None, template: `<div class="app-layout">\r
\r
  <div class="app-body">\r
\r
    <!-- SIDEBAR -->\r
    <aside class="sidebar">\r
      <div class="sidebar-header">\r
        <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" loading="lazy" />\r
      </div>\r
      <nav class="sidebar-nav">\r
        <a class="nav-item active" routerLink="/dashboard/agente">Inicio</a>\r
        <a class="nav-item" routerLink="/dashboard/tickets">Tickets</a>\r
        <a class="nav-item" routerLink="/dashboard/incidencias">Incidencias</a>\r
        <a class="nav-item" routerLink="/dashboard/reportes">Reportes</a>\r
      </nav>\r
      <div class="sidebar-spacer"></div>\r
      <nav class="sidebar-nav">\r
        <a class="nav-item" routerLink="/dashboard/perfil">Perfil</a>\r
        <a class="nav-item" routerLink="/dashboard/configuracion">Configuraci\xF3n</a>\r
      </nav>\r
    </aside>\r
\r
    <!-- \xC1REA PRINCIPAL -->\r
    <div class="main-area">\r
\r
      <header class="topbar">\r
        <div class="topbar-right">\r
          <div class="user-chip">\r
            <div class="user-text">\r
              <span class="user-name">{{ nombreUsuario }}</span>\r
              <span class="user-code">{{ usuario?.codigo }}</span>\r
            </div>\r
            <div class="user-avatar">\r
              <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar"\r
                   style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />\r
              <svg *ngIf="!fotoUrl" viewBox="0 0 24 24" fill="#9aaac5" width="26" height="26">\r
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>\r
              </svg>\r
            </div>\r
          </div>\r
          <button class="btn-logout-top" (click)="onLogout()">Cerrar sesi\xF3n</button>\r
        </div>\r
      </header>\r
\r
      <div class="content">\r
\r
        <div class="welcome-bar">\r
          <h2 class="welcome-title">Bienvenido, {{ nombreUsuario }}.</h2>\r
        </div>\r
\r
        <div class="content-inner">\r
\r
          <div class="stats-grid">\r
            <div class="stat-card">\r
              <span class="stat-label">Tickets pendientes</span>\r
              <span class="stat-valor">{{ formatear(totalPendientes) }}</span>\r
            </div>\r
            <div class="stat-card">\r
              <span class="stat-label">Tickets atendidos</span>\r
              <span class="stat-valor">{{ formatear(totalAtendidos) }}</span>\r
            </div>\r
            <div class="stat-card">\r
              <span class="stat-label">Tickets cancelados</span>\r
              <span class="stat-valor">{{ formatear(totalCancelados) }}</span>\r
            </div>\r
          </div>\r
\r
          <div class="bottom-row">\r
\r
            <!-- Calendario funcional -->\r
            <div class="calendar-card">\r
              <div class="calendar-header">\r
                <span class="calendar-month">{{ meses[mesMostrado] }} {{ anioMostrado }}</span>\r
                <div class="calendar-nav">\r
                  <button class="cal-btn" (click)="mesAnterior()" type="button">&#8249;</button>\r
                  <button class="cal-btn" (click)="mesSiguiente()" type="button">&#8250;</button>\r
                </div>\r
              </div>\r
              <table class="calendar-table">\r
                <thead>\r
                  <tr>\r
                    <th *ngFor="let d of diasSemana">{{ d }}</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <tr *ngFor="let semana of semanas">\r
                    <td *ngFor="let dia of semana"\r
                        [class.other-month]="!dia.delMesActual"\r
                        [class.today]="dia.esHoy">\r
                      <span *ngIf="dia.esHoy">{{ dia.numero }}</span>\r
                      <ng-container *ngIf="!dia.esHoy">{{ dia.numero }}</ng-container>\r
                    </td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
            </div>\r
\r
            <!-- Estado de tickets -->\r
            <div class="tickets-card">\r
              <h3 class="tickets-title">Estado de los tickets</h3>\r
\r
              <div class="ticket-activo-header">\r
                <span class="ticket-activo-label">Ticket Activo</span>\r
                <span class="ticket-activo-id">\r
                  #{{ ticketActivo ? formatear(ticketActivo.numero) : '000' }}\r
                </span>\r
              </div>\r
\r
              <div class="ticket-meta">\r
                <div class="ticket-meta-group">\r
                  <span class="ticket-meta-label">Tipo de ticket</span>\r
                  <div class="ticket-tipo">\r
                    <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" style="color:#e07b00">\r
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>\r
                    </svg>\r
                    <span>Actualizaci\xF3n</span>\r
                  </div>\r
                </div>\r
                <div class="ticket-meta-group">\r
                  <span class="ticket-meta-label">Prioridad</span>\r
                  <div class="ticket-prioridad alta">\r
                    <span class="prioridad-dot"></span> Alta\r
                  </div>\r
                </div>\r
                <div class="ticket-meta-group">\r
                  <span class="ticket-meta-label">Asignado a</span>\r
                  <div class="ticket-asignado">\r
                    <div class="asignado-avatar">{{ iniciales }}</div>\r
                    <span>{{ nombreUsuario }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="ticket-timeline">\r
                <ng-container *ngIf="ticketsTimeline.length > 0; else sinTickets">\r
                  <div class="timeline-item" *ngFor="let t of ticketsTimeline">\r
                    <span class="timeline-dot">+</span>\r
                    <div>\r
                      <p class="timeline-desc">Ticket #{{ formatear(t.numero) }} \u2014 {{ t.estado }}</p>\r
                      <p class="timeline-time">{{ t.locacion }}</p>\r
                    </div>\r
                  </div>\r
                </ng-container>\r
                <ng-template #sinTickets>\r
                  <p class="sin-tickets">No tienes tickets pendientes por el momento.</p>\r
                </ng-template>\r
              </div>\r
            </div>\r
\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <footer class="inner-footer">\r
    <span>&#169; 2026 Impulsa A365 Todos los derechos reservados por Group16</span>\r
  </footer>\r
\r
</div>`, styles: ['/* src/app/pages/dashboard/agente/dashboard-agente.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item:hover {\n  background: #f0f2f8;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-logout-top {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  background: #eef0f6;\n  overflow-y: auto;\n}\n.welcome-bar {\n  background: #ffffff;\n  padding: 18px 26px;\n  border-left: 4px solid #1a2b5e;\n  margin-bottom: 20px;\n}\n.welcome-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.content-inner {\n  padding: 0 26px 26px 26px;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n.stat-card {\n  background: #ffffff;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1.5px solid #dde2ee;\n  border-radius: 6px;\n}\n.stat-label {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.stat-valor {\n  font-size: 20px;\n  font-weight: 800;\n  color: #e07b00;\n}\n.bottom-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  align-items: start;\n}\n.calendar-card {\n  border: 1.5px solid #dde2ee;\n  border-radius: 10px;\n  padding: 24px 28px;\n  background: #ffffff;\n}\n.calendar-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.calendar-month {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.calendar-nav {\n  display: flex;\n  gap: 6px;\n}\n.cal-btn {\n  background: #ffffff;\n  border: 1px solid #dde2ee;\n  border-radius: 5px;\n  width: 30px;\n  height: 30px;\n  font-size: 16px;\n  cursor: pointer;\n  color: #1a2b5e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.cal-btn:hover {\n  background: #eef0f6;\n}\n.calendar-table {\n  width: 100%;\n  border-collapse: collapse;\n  text-align: center;\n}\n.calendar-table th {\n  color: #6b7a99;\n  font-size: 13px;\n  font-weight: 600;\n  padding: 4px 0 14px;\n}\n.calendar-table td {\n  padding: 10px 4px;\n  font-size: 14px;\n  color: #2d3a58;\n  font-weight: 500;\n}\n.calendar-table td.other-month {\n  color: #b0bcd4;\n  background: #f4f6fb;\n}\n.calendar-table td.today span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.tickets-card {\n  border: 1.5px solid #dde2ee;\n  border-radius: 6px;\n  padding: 18px 20px;\n  background: #ffffff;\n}\n.tickets-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 12px;\n  text-align: center;\n}\n.ticket-activo-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.ticket-activo-label {\n  font-size: 12px;\n  color: #6b7a99;\n}\n.ticket-activo-id {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a56db;\n}\n.ticket-meta {\n  display: flex;\n  gap: 14px;\n  background: #f7f8fc;\n  border: 1px solid #dde2ee;\n  border-radius: 5px;\n  padding: 9px 14px;\n  margin-bottom: 14px;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.ticket-meta-group {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.ticket-meta-label {\n  font-size: 10px;\n  color: #6b7a99;\n}\n.ticket-tipo {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #2d3a58;\n}\n.ticket-prioridad {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 12px;\n}\n.ticket-prioridad.alta {\n  background: #fff3cd;\n  color: #856404;\n  border: 1px solid #ffe69c;\n}\n.prioridad-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #e07b00;\n  display: inline-block;\n}\n.ticket-asignado {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #2d3a58;\n}\n.asignado-avatar {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #c0392b;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ticket-timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.timeline-item {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n}\n.timeline-dot {\n  color: #1a2b5e;\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.3;\n  flex-shrink: 0;\n}\n.timeline-desc {\n  font-size: 12.5px;\n  color: #2d3a58;\n  font-weight: 500;\n  margin: 0;\n}\n.timeline-time {\n  font-size: 11px;\n  color: #9aa3bb;\n  margin: 2px 0 0;\n}\n.inner-footer {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n@media (max-width: 960px) {\n  .bottom-row {\n    grid-template-columns: 1fr;\n  }\n  .stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.sin-tickets {\n  font-size: 13px;\n  color: #8a9ab8;\n  text-align: center;\n  padding: 18px 0;\n  margin: 0;\n  font-style: italic;\n}\n/*# sourceMappingURL=dashboard-agente.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioTickets }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardAgenteComponent, { className: "DashboardAgenteComponent", filePath: "src/app/pages/dashboard/agente/dashboard-agente.component.ts", lineNumber: 23 });
})();
export {
  DashboardAgenteComponent
};
//# sourceMappingURL=chunk-6WZ6ADXL.js.map
