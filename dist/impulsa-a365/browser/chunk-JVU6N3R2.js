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
  RouterLink,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate
} from "./chunk-ASNBX676.js";

// src/app/pages/reportes/reportes.component.ts
function ReportesComponent_img_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 57);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function ReportesComponent__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 58);
    \u0275\u0275element(1, "path", 59);
    \u0275\u0275elementEnd();
  }
}
function ReportesComponent_tr_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 60);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.numero);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.usuario);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", item_r2.estadoClase);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.estado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.fecha);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.tiempo);
  }
}
function ReportesComponent_tr_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, "No hay tickets cerrados todav\xEDa.");
    \u0275\u0275elementEnd()();
  }
}
var ReportesComponent = class _ReportesComponent {
  constructor(servicioAuth, servicioAdmin, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioAdmin = servicioAdmin;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.totalResueltos = 0;
    this.totalPendientes = 0;
    this.totalIncidencias = 0;
    this.tiempoPromedio = "\xE2\u20AC\u201D";
    this.historial = [];
    this.cargando = true;
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarReportes();
  }
  cargarReportes() {
    this.servicioAdmin.obtenerReportes().subscribe({
      next: (res) => {
        this.totalResueltos = res.kpis.totalResueltos;
        this.totalPendientes = res.kpis.totalPendientes;
        this.totalIncidencias = res.kpis.totalIncidencias;
        this.tiempoPromedio = res.kpis.tiempoPromedio;
        this.historial = res.historial ?? [];
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  static {
    this.\u0275fac = function ReportesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ReportesComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioAdmin), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportesComponent, selectors: [["app-reportes"]], decls: 117, vars: 10, consts: [[1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "sidebar-logo"], [1, "sidebar-nav"], ["routerLink", "/dashboard/agente", 1, "nav-item"], ["routerLink", "/dashboard/tickets", 1, "nav-item"], ["routerLink", "/dashboard/incidencias", 1, "nav-item"], [1, "nav-item", "active"], [1, "sidebar-spacer"], ["routerLink", "/dashboard/perfil", 1, "nav-item"], ["routerLink", "/dashboard/configuracion", 1, "nav-item"], [1, "main-area"], [1, "topbar"], [1, "topbar-right"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:100%;height:100%;object-fit:cover;border-radius:50%;", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26", 4, "ngIf"], [1, "btn-logout-top", 3, "click"], [1, "content"], [1, "page-header"], [1, "page-title-row"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#ffffff", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "page-icon"], ["x1", "18", "y1", "20", "x2", "18", "y2", "10"], ["x1", "12", "y1", "20", "x2", "12", "y2", "4"], ["x1", "6", "y1", "20", "x2", "6", "y2", "14"], [1, "page-title"], [1, "metricas-grid"], [1, "metrica-card", "azul"], [1, "metrica-info"], [1, "metrica-label"], [1, "metrica-valor"], [1, "metrica-icon-wrap"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "28", "height", "28"], ["points", "20 6 9 17 4 12"], [1, "metrica-card", "naranja"], ["cx", "12", "cy", "12", "r", "10"], ["points", "12 6 12 12 16 14"], [1, "metrica-card", "verde"], ["d", "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"], [1, "metrica-card", "gris"], [1, "panel"], [1, "panel-header"], [1, "panel-titulo"], [1, "panel-subtitulo"], [1, "tabla-wrapper"], [1, "tabla"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "inner-footer"], [1, "footer-icons"], ["href", "#", 1, "footer-icon"], ["alt", "avatar", 2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "50%", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "ticket-id"], [1, "badge", 3, "ngClass"], ["colspan", "6", 2, "text-align", "center", "color", "#9aa3b7", "padding", "24px"]], template: function ReportesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 5)(6, "a", 6);
        \u0275\u0275text(7, "Inicio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 7);
        \u0275\u0275text(9, "Tickets");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 8);
        \u0275\u0275text(11, "Incidencias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "a", 9);
        \u0275\u0275text(13, "Reportes");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(14, "div", 10);
        \u0275\u0275elementStart(15, "nav", 5)(16, "a", 11);
        \u0275\u0275text(17, "Perfil");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "a", 12);
        \u0275\u0275text(19, "Configuraci\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 13)(21, "header", 14)(22, "div", 15)(23, "div", 16)(24, "div", 17)(25, "span", 18);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span", 19);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 20);
        \u0275\u0275template(30, ReportesComponent_img_30_Template, 1, 1, "img", 21)(31, ReportesComponent__svg_svg_31_Template, 2, 0, "svg", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 23);
        \u0275\u0275listener("click", function ReportesComponent_Template_button_click_32_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(33, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "div", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 27);
        \u0275\u0275element(38, "line", 28)(39, "line", 29)(40, "line", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(41, "h2", 31);
        \u0275\u0275text(42, "Reportes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 32)(44, "div", 33)(45, "div", 34)(46, "p", 35);
        \u0275\u0275text(47, "Tickets resueltos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "p", 36);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 37);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(51, "svg", 38);
        \u0275\u0275element(52, "polyline", 39);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(53, "div", 40)(54, "div", 34)(55, "p", 35);
        \u0275\u0275text(56, "Tickets pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "p", 36);
        \u0275\u0275text(58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 37);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(60, "svg", 38);
        \u0275\u0275element(61, "circle", 41)(62, "polyline", 42);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(63, "div", 43)(64, "div", 34)(65, "p", 35);
        \u0275\u0275text(66, "Incidencias atendidas");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "p", 36);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 37);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(70, "svg", 38);
        \u0275\u0275element(71, "path", 44);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(72, "div", 45)(73, "div", 34)(74, "p", 35);
        \u0275\u0275text(75, "Tiempo promedio");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p", 36);
        \u0275\u0275text(77);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 37);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(79, "svg", 38);
        \u0275\u0275element(80, "circle", 41)(81, "polyline", 42);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(82, "div", 46)(83, "div", 47)(84, "h3", 48);
        \u0275\u0275text(85, "Historial de tickets atendidos");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "span", 49);
        \u0275\u0275text(87, "\xDAltimo mes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(88, "div", 50)(89, "table", 51)(90, "thead")(91, "tr")(92, "th");
        \u0275\u0275text(93, "N\xB0 Ticket");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "th");
        \u0275\u0275text(95, "Usuario");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "th");
        \u0275\u0275text(97, "Tipo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "th");
        \u0275\u0275text(99, "Estado");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "th");
        \u0275\u0275text(101, "Fecha");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "th");
        \u0275\u0275text(103, "Tiempo");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(104, "tbody");
        \u0275\u0275template(105, ReportesComponent_tr_105_Template, 14, 7, "tr", 52)(106, ReportesComponent_tr_106_Template, 3, 0, "tr", 53);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(107, "footer", 54)(108, "span");
        \u0275\u0275text(109, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 55)(111, "a", 56);
        \u0275\u0275text(112, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "a", 56);
        \u0275\u0275text(114, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "a", 56);
        \u0275\u0275text(116, "\u25CF");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.usuario == null ? null : ctx.usuario.nombre);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.usuario == null ? null : ctx.usuario.codigo);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.fotoUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoUrl);
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.totalResueltos);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.totalPendientes);
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.totalIncidencias);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.tiempoPromedio);
        \u0275\u0275advance(28);
        \u0275\u0275property("ngForOf", ctx.historial);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando && ctx.historial.length === 0);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, RouterLink], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-logout-top[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header[_ngcontent-%COMP%] {\n  padding: 22px 0 18px;\n}\n.page-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: #1a2b5e;\n  border-radius: 4px;\n  padding: 6px;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.metricas-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 22px;\n}\n.metrica-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  padding: 20px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #ffffff;\n}\n.metrica-card.azul[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n}\n.metrica-card.naranja[_ngcontent-%COMP%] {\n  background: #e07b00;\n}\n.metrica-card.verde[_ngcontent-%COMP%] {\n  background: #1a7a4a;\n}\n.metrica-card.gris[_ngcontent-%COMP%] {\n  background: #4a5568;\n}\n.metrica-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.metrica-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n  opacity: 0.85;\n  margin: 0;\n}\n.metrica-valor[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  line-height: 1;\n}\n.metrica-icon-wrap[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 22px;\n  border-bottom: 1.5px solid #e8eaf0;\n}\n.panel-titulo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.panel-subtitulo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.tabla-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.tabla[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.tabla[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: #f7f8fc;\n}\n.tabla[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 18px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 700;\n  color: #6b7a99;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1.5px solid #e8eaf0;\n  white-space: nowrap;\n}\n.tabla[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 13px 18px;\n  color: #2d3a58;\n  border-bottom: 1px solid #f0f2f8;\n}\n.tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.tabla[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #f7f8fc;\n}\n.ticket-id[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1a56db;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-verde[_ngcontent-%COMP%] {\n  background: #d4f0e0;\n  color: #1a7a4a;\n}\n.badge-naranja[_ngcontent-%COMP%] {\n  background: #fff0d4;\n  color: #e07b00;\n}\n.badge-rojo[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.inner-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon[_ngcontent-%COMP%]:hover {\n  background: #3a52a0;\n}\n@media (max-width: 900px) {\n  .metricas-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=reportes.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportesComponent, [{
    type: Component,
    args: [{ selector: "app-reportes", standalone: true, imports: [CommonModule, RouterLink], template: '<div class="app-layout">\n\n  <div class="app-body">\n\n    <!-- SIDEBAR -->\n    <aside class="sidebar">\n      <div class="sidebar-header">\n        <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" loading="lazy" />\n      </div>\n      <nav class="sidebar-nav">\n        <a class="nav-item" routerLink="/dashboard/agente">Inicio</a>\n        <a class="nav-item" routerLink="/dashboard/tickets">Tickets</a>\n        <a class="nav-item" routerLink="/dashboard/incidencias">Incidencias</a>\n        <a class="nav-item active">Reportes</a>\n      </nav>\n      <div class="sidebar-spacer"></div>\n      <nav class="sidebar-nav">\n        <a class="nav-item" routerLink="/dashboard/perfil">Perfil</a>\n        <a class="nav-item" routerLink="/dashboard/configuracion">Configuraci\xF3n</a>\n      </nav>\n    </aside>\n\n    <!-- \xC1REA PRINCIPAL -->\n    <div class="main-area">\n\n      <header class="topbar">\n        <div class="topbar-right">\n          <div class="user-chip">\n            <div class="user-text">\n              <span class="user-name">{{ usuario?.nombre }}</span>\n              <span class="user-code">{{ usuario?.codigo }}</span>\n            </div>\n            <div class="user-avatar">\n              <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar"\n                   style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />\n              <svg *ngIf="!fotoUrl" viewBox="0 0 24 24" fill="#9aaac5" width="26" height="26">\n                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>\n              </svg>\n            </div>\n          </div>\n          <button class="btn-logout-top" (click)="onLogout()">Cerrar sesi\xF3n</button>\n        </div>\n      </header>\n\n      <div class="content">\n\n        <div class="page-header">\n          <div class="page-title-row">\n            <svg class="page-icon" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n              <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>\n              <line x1="6" y1="20" x2="6" y2="14"/>\n            </svg>\n            <h2 class="page-title">Reportes</h2>\n          </div>\n        </div>\n\n        <!-- Tarjetas de m\xE9tricas -->\n        <div class="metricas-grid">\n          <div class="metrica-card azul">\n            <div class="metrica-info">\n              <p class="metrica-label">Tickets resueltos</p>\n              <p class="metrica-valor">{{ totalResueltos }}</p>\n            </div>\n            <div class="metrica-icon-wrap">\n              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28">\n                <polyline points="20 6 9 17 4 12"/>\n              </svg>\n            </div>\n          </div>\n\n          <div class="metrica-card naranja">\n            <div class="metrica-info">\n              <p class="metrica-label">Tickets pendientes</p>\n              <p class="metrica-valor">{{ totalPendientes }}</p>\n            </div>\n            <div class="metrica-icon-wrap">\n              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28">\n                <circle cx="12" cy="12" r="10"/>\n                <polyline points="12 6 12 12 16 14"/>\n              </svg>\n            </div>\n          </div>\n\n          <div class="metrica-card verde">\n            <div class="metrica-info">\n              <p class="metrica-label">Incidencias atendidas</p>\n              <p class="metrica-valor">{{ totalIncidencias }}</p>\n            </div>\n            <div class="metrica-icon-wrap">\n              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28">\n                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>\n              </svg>\n            </div>\n          </div>\n\n          <div class="metrica-card gris">\n            <div class="metrica-info">\n              <p class="metrica-label">Tiempo promedio</p>\n              <p class="metrica-valor">{{ tiempoPromedio }}</p>\n            </div>\n            <div class="metrica-icon-wrap">\n              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="28" height="28">\n                <circle cx="12" cy="12" r="10"/>\n                <polyline points="12 6 12 12 16 14"/>\n              </svg>\n            </div>\n          </div>\n        </div>\n\n        <!-- Tabla historial -->\n        <div class="panel">\n          <div class="panel-header">\n            <h3 class="panel-titulo">Historial de tickets atendidos</h3>\n            <span class="panel-subtitulo">\xDAltimo mes</span>\n          </div>\n\n          <div class="tabla-wrapper">\n            <table class="tabla">\n              <thead>\n                <tr>\n                  <th>N\xB0 Ticket</th>\n                  <th>Usuario</th>\n                  <th>Tipo</th>\n                  <th>Estado</th>\n                  <th>Fecha</th>\n                  <th>Tiempo</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor="let item of historial">\n                  <td class="ticket-id">{{ item.numero }}</td>\n                  <td>{{ item.usuario }}</td>\n                  <td>{{ item.tipo }}</td>\n                  <td>\n                    <span class="badge" [ngClass]="item.estadoClase">{{ item.estado }}</span>\n                  </td>\n                  <td>{{ item.fecha }}</td>\n                  <td>{{ item.tiempo }}</td>\n                </tr>\n                <tr *ngIf="!cargando && historial.length === 0">\n                  <td colspan="6" style="text-align:center;color:#9aa3b7;padding:24px">No hay tickets cerrados todav\xEDa.</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <footer class="inner-footer">\n    <span>&#169; 2026 Impulsa A365 Todos los derechos reservados por Group16</span>\n    <div class="footer-icons">\n      <a href="#" class="footer-icon">in</a>\n      <a href="#" class="footer-icon">f</a>\n      <a href="#" class="footer-icon">&#9679;</a>\n    </div>\n  </footer>\n\n</div>', styles: ['/* src/app/pages/reportes/reportes.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item:hover {\n  background: #f0f2f8;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.btn-logout-top {\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header {\n  padding: 22px 0 18px;\n}\n.page-title-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  width: 36px;\n  height: 36px;\n  background: #1a2b5e;\n  border-radius: 4px;\n  padding: 6px;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.metricas-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 22px;\n}\n.metrica-card {\n  border-radius: 8px;\n  padding: 20px 22px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: #ffffff;\n}\n.metrica-card.azul {\n  background: #1a2b5e;\n}\n.metrica-card.naranja {\n  background: #e07b00;\n}\n.metrica-card.verde {\n  background: #1a7a4a;\n}\n.metrica-card.gris {\n  background: #4a5568;\n}\n.metrica-info {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.metrica-label {\n  font-size: 12px;\n  font-weight: 500;\n  opacity: 0.85;\n  margin: 0;\n}\n.metrica-valor {\n  font-size: 28px;\n  font-weight: 800;\n  margin: 0;\n  line-height: 1;\n}\n.metrica-icon-wrap {\n  opacity: 0.6;\n}\n.panel {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.panel-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 22px;\n  border-bottom: 1.5px solid #e8eaf0;\n}\n.panel-titulo {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.panel-subtitulo {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.tabla-wrapper {\n  overflow-x: auto;\n}\n.tabla {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n.tabla thead tr {\n  background: #f7f8fc;\n}\n.tabla th {\n  padding: 12px 18px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 700;\n  color: #6b7a99;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 1.5px solid #e8eaf0;\n  white-space: nowrap;\n}\n.tabla td {\n  padding: 13px 18px;\n  color: #2d3a58;\n  border-bottom: 1px solid #f0f2f8;\n}\n.tabla tbody tr:last-child td {\n  border-bottom: none;\n}\n.tabla tbody tr:hover {\n  background: #f7f8fc;\n}\n.ticket-id {\n  font-weight: 700;\n  color: #1a56db;\n}\n.badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.badge-verde {\n  background: #d4f0e0;\n  color: #1a7a4a;\n}\n.badge-naranja {\n  background: #fff0d4;\n  color: #e07b00;\n}\n.badge-rojo {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.inner-footer {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon:hover {\n  background: #3a52a0;\n}\n@media (max-width: 900px) {\n  .metricas-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .sidebar {\n    display: none;\n  }\n}\n/*# sourceMappingURL=reportes.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioAdmin }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportesComponent, { className: "ReportesComponent", filePath: "src/app/pages/reportes/reportes.component.ts", lineNumber: 15 });
})();
export {
  ReportesComponent
};
//# sourceMappingURL=chunk-JVU6N3R2.js.map
