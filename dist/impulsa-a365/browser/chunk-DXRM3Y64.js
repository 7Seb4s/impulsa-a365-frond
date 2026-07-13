import {
  ServicioAutenticacion
} from "./chunk-II2C6W3K.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-K5TRC5YK.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgForOf,
  NgIf,
  RouterLink,
  environment,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ASNBX676.js";

// src/app/core/services/servicio-incidencias.ts
var ServicioIncidencias = class _ServicioIncidencias {
  constructor(http) {
    this.http = http;
    this.URL = `${environment.apiUrl}/incidencias`;
  }
  // GET /api/incidencias
  listar() {
    return this.http.get(this.URL);
  }
  // POST /api/incidencias
  crear(req) {
    return this.http.post(this.URL, req);
  }
  // GET /api/incidencias/{id}
  obtenerDetalle(id) {
    return this.http.get(`${this.URL}/${id}`);
  }
  static {
    this.\u0275fac = function ServicioIncidencias_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicioIncidencias)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServicioIncidencias, factory: _ServicioIncidencias.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicioIncidencias, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/pages/incidencias/incidencias.component.ts
function IncidenciasComponent_img_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function IncidenciasComponent__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 30);
    \u0275\u0275element(1, "path", 31);
    \u0275\u0275elementEnd();
  }
}
function IncidenciasComponent_ng_container_35_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "div", 43)(2, "p", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 46);
    \u0275\u0275listener("click", function IncidenciasComponent_ng_container_35_div_11_Template_button_click_6_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.revisar(item_r4));
    });
    \u0275\u0275text(7, " Revisar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275classProp("resaltado", item_r4.resaltado);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Tipo: ", item_r4.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.tema);
    \u0275\u0275advance();
    \u0275\u0275classProp("naranja", item_r4.resaltado);
  }
}
function IncidenciasComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 32)(2, "div", 33)(3, "span", 34);
    \u0275\u0275text(4, "\u2709");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 35);
    \u0275\u0275text(6, "Incidencias");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 36)(8, "h3", 37);
    \u0275\u0275text(9, "Incidencias reportadas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 38);
    \u0275\u0275template(11, IncidenciasComponent_ng_container_35_div_11_Template, 8, 6, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 40)(13, "button", 41);
    \u0275\u0275listener("click", function IncidenciasComponent_ng_container_35_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirFormulario());
    });
    \u0275\u0275text(14, "Nueva incidencia");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("ngForOf", ctx_r0.incidencias);
  }
}
function IncidenciasComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 47)(2, "button", 48);
    \u0275\u0275listener("click", function IncidenciasComponent_ng_container_36_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarFormulario());
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 35);
    \u0275\u0275text(5, "Nueva incidencia");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 49)(7, "div", 50)(8, "label", 51);
    \u0275\u0275text(9, "Asunto ");
    \u0275\u0275elementStart(10, "span", 52);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 53);
    \u0275\u0275twoWayListener("ngModelChange", function IncidenciasComponent_ng_container_36_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.asunto, $event) || (ctx_r0.formulario.asunto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 54)(14, "div", 50)(15, "label", 51);
    \u0275\u0275text(16, "Tipo ");
    \u0275\u0275elementStart(17, "span", 52);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 55)(20, "select", 56);
    \u0275\u0275twoWayListener("ngModelChange", function IncidenciasComponent_ng_container_36_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.tipo, $event) || (ctx_r0.formulario.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 57);
    \u0275\u0275text(22, "Seleccionar...");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 58);
    \u0275\u0275text(24, "Actualizaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 59);
    \u0275\u0275text(26, "Eliminaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 60);
    \u0275\u0275text(28, "Consulta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 61);
    \u0275\u0275text(30, "Error");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 50)(32, "label", 51);
    \u0275\u0275text(33, "C\xF3digo del ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function IncidenciasComponent_ng_container_36_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.numeroTicket, $event) || (ctx_r0.formulario.numeroTicket = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 50)(36, "label", 51);
    \u0275\u0275text(37, "Contenido ");
    \u0275\u0275elementStart(38, "span", 52);
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "textarea", 63);
    \u0275\u0275twoWayListener("ngModelChange", function IncidenciasComponent_ng_container_36_Template_textarea_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.contenido, $event) || (ctx_r0.formulario.contenido = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 64)(42, "span", 65);
    \u0275\u0275text(43, "T");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 65);
    \u0275\u0275text(45, "\u{1F4CE}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 65);
    \u0275\u0275text(47, "\u{1F60A}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 65);
    \u0275\u0275text(49, "\u{1F4CA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 65);
    \u0275\u0275text(51, "\u{1F517}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 66)(53, "button", 67);
    \u0275\u0275listener("click", function IncidenciasComponent_ng_container_36_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.enviarFormulario());
    });
    \u0275\u0275text(54, "Enviar");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.asunto);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.tipo);
    \u0275\u0275advance(14);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.numeroTicket);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.contenido);
  }
}
var IncidenciasComponent = class _IncidenciasComponent {
  constructor(servicioAuth, servicioIncidencias, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioIncidencias = servicioIncidencias;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.mostrarFormulario = false;
    this.cargando = false;
    this.enviando = false;
    this.errorMsg = "";
    this.incidencias = [];
    this.formulario = {
      asunto: "",
      tipo: "",
      numeroTicket: null,
      contenido: ""
    };
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarIncidencias();
  }
  // Trae todas las incidencias del usuario logueado desde el backend
  cargarIncidencias() {
    this.cargando = true;
    this.errorMsg = "";
    this.servicioIncidencias.listar().subscribe({
      next: (items) => {
        this.incidencias = items;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = "No se pudieron cargar las incidencias.";
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
  abrirFormulario() {
    this.resetFormulario();
    this.errorMsg = "";
    this.mostrarFormulario = true;
  }
  cerrarFormulario() {
    this.mostrarFormulario = false;
  }
  revisar(item) {
  }
  // Envia al backend el formulario "Nueva incidencia"
  enviarFormulario() {
    if (!this.formulario.asunto || !this.formulario.tipo || !this.formulario.contenido || !this.formulario.numeroTicket) {
      alert("Por favor completa los campos obligatorios.");
      return;
    }
    this.enviando = true;
    this.servicioIncidencias.crear({
      asunto: this.formulario.asunto,
      tipo: this.formulario.tipo,
      numeroTicket: this.formulario.numeroTicket,
      contenido: this.formulario.contenido
    }).subscribe({
      next: () => {
        this.enviando = false;
        this.mostrarFormulario = false;
        this.resetFormulario();
        this.cargarIncidencias();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.enviando = false;
        this.errorMsg = err?.error?.message || "No se pudo crear la incidencia.";
        alert(this.errorMsg);
        this.cdr.detectChanges();
      }
    });
  }
  resetFormulario() {
    this.formulario = { asunto: "", tipo: "", numeroTicket: null, contenido: "" };
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  static {
    this.\u0275fac = function IncidenciasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IncidenciasComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioIncidencias), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IncidenciasComponent, selectors: [["app-incidencias"]], decls: 47, vars: 6, consts: [[1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "sidebar-logo"], [1, "sidebar-nav"], ["routerLink", "/dashboard/agente", 1, "nav-item"], ["routerLink", "/dashboard/tickets", 1, "nav-item"], [1, "nav-item", "active"], ["routerLink", "/dashboard/reportes", 1, "nav-item"], [1, "sidebar-spacer"], ["routerLink", "/dashboard/perfil", 1, "nav-item"], ["routerLink", "/dashboard/configuracion", 1, "nav-item"], [1, "main-area"], [1, "topbar"], [1, "topbar-right"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:100%;height:100%;object-fit:cover;border-radius:50%;", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26", 4, "ngIf"], [1, "btn-logout-top", 3, "click"], [1, "content"], [4, "ngIf"], [1, "inner-footer"], [1, "footer-icons"], ["href", "#", 1, "footer-icon"], ["alt", "avatar", 2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "50%", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "page-header"], [1, "page-title-row"], [1, "page-icon"], [1, "page-title"], [1, "panel"], [1, "panel-subtitle"], [1, "incidencias-list"], ["class", "incidencia-card", 3, "resaltado", 4, "ngFor", "ngForOf"], [1, "panel-footer"], [1, "btn-nueva", 3, "click"], [1, "incidencia-card"], [1, "incidencia-info"], [1, "incidencia-tipo"], [1, "incidencia-tema"], [1, "btn-revisar", 3, "click"], [1, "page-header", "form-header"], [1, "btn-back", 3, "click"], [1, "panel", "form-panel"], [1, "form-group"], [1, "form-label"], [1, "required"], ["type", "text", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "form-row"], [1, "select-wrapper"], [1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "ACTUALIZACION"], ["value", "ELIMINACION"], ["value", "CONSULTA"], ["value", "ERROR"], ["type", "number", "placeholder", "Ej: 12345", 1, "form-input", 3, "ngModelChange", "ngModel"], ["rows", "8", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "textarea-toolbar"], [1, "toolbar-icon"], [1, "form-footer"], [1, "btn-enviar", 3, "click"]], template: function IncidenciasComponent_Template(rf, ctx) {
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
        \u0275\u0275template(30, IncidenciasComponent_img_30_Template, 1, 1, "img", 21)(31, IncidenciasComponent__svg_svg_31_Template, 2, 0, "svg", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 23);
        \u0275\u0275listener("click", function IncidenciasComponent_Template_button_click_32_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(33, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 24);
        \u0275\u0275template(35, IncidenciasComponent_ng_container_35_Template, 15, 1, "ng-container", 25)(36, IncidenciasComponent_ng_container_36_Template, 55, 4, "ng-container", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "footer", 26)(38, "span");
        \u0275\u0275text(39, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 27)(41, "a", 28);
        \u0275\u0275text(42, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "a", 28);
        \u0275\u0275text(44, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 28);
        \u0275\u0275text(46, "\u25CF");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate((ctx.usuario == null ? null : ctx.usuario.nombre) || (ctx.usuario == null ? null : ctx.usuario.codigo));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.usuario == null ? null : ctx.usuario.codigo);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.fotoUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoUrl);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.mostrarFormulario);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarFormulario);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header[_ngcontent-%COMP%] {\n  padding: 22px 0 18px 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.form-header[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n.page-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-size: 18px;\n  border-radius: 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  padding: 24px 26px;\n}\n.panel-subtitle[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 18px 0;\n}\n.incidencias-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.incidencia-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px 18px;\n  background: #ffffff;\n  transition: box-shadow 0.15s;\n}\n.incidencia-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 10px rgba(26, 43, 94, 0.08);\n}\n.incidencia-card.resaltado[_ngcontent-%COMP%] {\n  border-color: #e07b00;\n  background: #fffbf5;\n}\n.incidencia-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.incidencia-tipo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7a99;\n  margin: 0;\n}\n.incidencia-tema[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-revisar[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 22px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.btn-revisar[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.btn-revisar.naranja[_ngcontent-%COMP%] {\n  background: #e07b00;\n}\n.btn-revisar.naranja[_ngcontent-%COMP%]:hover {\n  background: #c46a00;\n}\n.panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-top: 10px;\n}\n.btn-nueva[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 36px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-nueva[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 28px;\n  color: #1a2b5e;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n  font-weight: 300;\n  transition: color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  color: #e07b00;\n}\n.form-panel[_ngcontent-%COMP%] {\n  padding: 28px 32px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 18px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2d3a58;\n}\n.required[_ngcontent-%COMP%] {\n  color: #e07b00;\n  margin-left: 2px;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 10px 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.select-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.form-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 10px 36px 10px 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  background: #ffffff;\n  appearance: none;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.form-select[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.select-wrapper[_ngcontent-%COMP%]::after {\n  content: "\\25be";\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7a99;\n  pointer-events: none;\n  font-size: 14px;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px 5px 0 0;\n  padding: 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  resize: vertical;\n  outline: none;\n  width: 100%;\n  transition: border-color 0.15s;\n  min-height: 160px;\n}\n.form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.textarea-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  border: 1.5px solid #c8d0e4;\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n  padding: 8px 12px;\n  background: #f7f8fc;\n}\n.toolbar-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7a99;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.toolbar-icon[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n.btn-enviar[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 36px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-enviar[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.inner-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon[_ngcontent-%COMP%]:hover {\n  background: #3a52a0;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .incidencia-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=incidencias.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IncidenciasComponent, [{
    type: Component,
    args: [{ selector: "app-incidencias", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: '<div class="app-layout">\r\n\r\n  <div class="app-body">\r\n\r\n    <!-- SIDEBAR -->\r\n    <aside class="sidebar">\r\n      <div class="sidebar-header">\r\n        <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" loading="lazy" />\r\n      </div>\r\n      <nav class="sidebar-nav">\r\n        <a class="nav-item" routerLink="/dashboard/agente">Inicio</a>\r\n        <a class="nav-item" routerLink="/dashboard/tickets">Tickets</a>\r\n        <a class="nav-item active">Incidencias</a>\r\n        <a class="nav-item" routerLink="/dashboard/reportes">Reportes</a>\r\n      </nav>\r\n      <div class="sidebar-spacer"></div>\r\n      <nav class="sidebar-nav">\r\n        <a class="nav-item" routerLink="/dashboard/perfil">Perfil</a>\r\n        <a class="nav-item" routerLink="/dashboard/configuracion">Configuraci\xF3n</a>\r\n      </nav>\r\n    </aside>\r\n\r\n    <!-- \xC1REA PRINCIPAL -->\r\n    <div class="main-area">\r\n\r\n      <header class="topbar">\r\n        <div class="topbar-right">\r\n          <div class="user-chip">\r\n            <div class="user-text">\r\n              <span class="user-name">{{ usuario?.nombre || usuario?.codigo }}</span>\r\n              <span class="user-code">{{ usuario?.codigo }}</span>\r\n            </div>\r\n            <div class="user-avatar">\r\n              <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar"\r\n                   style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />\r\n              <svg *ngIf="!fotoUrl" viewBox="0 0 24 24" fill="#9aaac5" width="26" height="26">\r\n                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>\r\n              </svg>\r\n            </div>\r\n          </div>\r\n          <button class="btn-logout-top" (click)="onLogout()">Cerrar sesi\xF3n</button>\r\n        </div>\r\n      </header>\r\n\r\n      <div class="content">\r\n\r\n        <!-- VISTA LISTA -->\r\n        <ng-container *ngIf="!mostrarFormulario">\r\n\r\n          <div class="page-header">\r\n            <div class="page-title-row">\r\n              <span class="page-icon">&#9993;</span>\r\n              <h2 class="page-title">Incidencias</h2>\r\n            </div>\r\n          </div>\r\n\r\n          <div class="panel">\r\n            <h3 class="panel-subtitle">Incidencias reportadas</h3>\r\n\r\n            <div class="incidencias-list">\r\n              <div class="incidencia-card" *ngFor="let item of incidencias"\r\n                   [class.resaltado]="item.resaltado">\r\n                <div class="incidencia-info">\r\n                  <p class="incidencia-tipo">Tipo: {{ item.tipo }}</p>\r\n                  <p class="incidencia-tema">{{ item.tema }}</p>\r\n                </div>\r\n                <button class="btn-revisar" [class.naranja]="item.resaltado"\r\n                        (click)="revisar(item)">\r\n                  Revisar\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="panel-footer">\r\n              <button class="btn-nueva" (click)="abrirFormulario()">Nueva incidencia</button>\r\n            </div>\r\n          </div>\r\n\r\n        </ng-container>\r\n\r\n        <!-- VISTA FORMULARIO -->\r\n        <ng-container *ngIf="mostrarFormulario">\r\n\r\n          <div class="page-header form-header">\r\n            <button class="btn-back" (click)="cerrarFormulario()">&#8249;</button>\r\n            <h2 class="page-title">Nueva incidencia</h2>\r\n          </div>\r\n\r\n          <div class="panel form-panel">\r\n            <div class="form-group">\r\n              <label class="form-label">Asunto <span class="required">*</span></label>\r\n              <input class="form-input" type="text" [(ngModel)]="formulario.asunto" />\r\n            </div>\r\n\r\n            <div class="form-row">\r\n              <div class="form-group">\r\n                <label class="form-label">Tipo <span class="required">*</span></label>\r\n                <div class="select-wrapper">\r\n                  <select class="form-select" [(ngModel)]="formulario.tipo">\r\n                    <option value="">Seleccionar...</option>\r\n                    <option value="ACTUALIZACION">Actualizaci\xF3n</option>\r\n                    <option value="ELIMINACION">Eliminaci\xF3n</option>\r\n                    <option value="CONSULTA">Consulta</option>\r\n                    <option value="ERROR">Error</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n\r\n              <div class="form-group">\r\n                <label class="form-label">C\xF3digo del ticket</label>\r\n                <input class="form-input" type="number" [(ngModel)]="formulario.numeroTicket" placeholder="Ej: 12345" />\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-group">\r\n              <label class="form-label">Contenido <span class="required">*</span></label>\r\n              <textarea class="form-textarea" [(ngModel)]="formulario.contenido" rows="8"></textarea>\r\n              <div class="textarea-toolbar">\r\n                <span class="toolbar-icon">T</span>\r\n                <span class="toolbar-icon">&#x1F4CE;</span>\r\n                <span class="toolbar-icon">&#x1F60A;</span>\r\n                <span class="toolbar-icon">&#x1F4CA;</span>\r\n                <span class="toolbar-icon">&#x1F517;</span>\r\n              </div>\r\n            </div>\r\n\r\n            <div class="form-footer">\r\n              <button class="btn-enviar" (click)="enviarFormulario()">Enviar</button>\r\n            </div>\r\n          </div>\r\n\r\n        </ng-container>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <footer class="inner-footer">\r\n    <span>&#169; 2026 Impulsa A365 Todos los derechos reservados por Group16</span>\r\n    <div class="footer-icons">\r\n      <a href="#" class="footer-icon">in</a>\r\n      <a href="#" class="footer-icon">f</a>\r\n      <a href="#" class="footer-icon">&#9679;</a>\r\n    </div>\r\n  </footer>\r\n\r\n</div>', styles: ['/* src/app/pages/incidencias/incidencias.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item:hover {\n  background: #f0f2f8;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header {\n  padding: 22px 0 18px 0;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.form-header {\n  gap: 10px;\n}\n.page-title-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-size: 18px;\n  border-radius: 4px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.panel {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  padding: 24px 26px;\n}\n.panel-subtitle {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 18px 0;\n}\n.incidencias-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.incidencia-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  padding: 14px 18px;\n  background: #ffffff;\n  transition: box-shadow 0.15s;\n}\n.incidencia-card:hover {\n  box-shadow: 0 2px 10px rgba(26, 43, 94, 0.08);\n}\n.incidencia-card.resaltado {\n  border-color: #e07b00;\n  background: #fffbf5;\n}\n.incidencia-info {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.incidencia-tipo {\n  font-size: 12px;\n  color: #6b7a99;\n  margin: 0;\n}\n.incidencia-tema {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-revisar {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 22px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.btn-revisar:hover {\n  background: #253d85;\n}\n.btn-revisar.naranja {\n  background: #e07b00;\n}\n.btn-revisar.naranja:hover {\n  background: #c46a00;\n}\n.panel-footer {\n  display: flex;\n  justify-content: center;\n  padding-top: 10px;\n}\n.btn-nueva {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 36px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-nueva:hover {\n  background: #253d85;\n}\n.btn-back {\n  background: transparent;\n  border: none;\n  font-size: 28px;\n  color: #1a2b5e;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n  font-weight: 300;\n  transition: color 0.15s;\n}\n.btn-back:hover {\n  color: #e07b00;\n}\n.form-panel {\n  padding: 28px 32px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 18px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.form-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2d3a58;\n}\n.required {\n  color: #e07b00;\n  margin-left: 2px;\n}\n.form-input {\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 10px 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.form-input:focus {\n  border-color: #1a2b5e;\n}\n.select-wrapper {\n  position: relative;\n}\n.form-select {\n  width: 100%;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 10px 36px 10px 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  background: #ffffff;\n  appearance: none;\n  outline: none;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.form-select:focus {\n  border-color: #1a2b5e;\n}\n.select-wrapper::after {\n  content: "\\25be";\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #6b7a99;\n  pointer-events: none;\n  font-size: 14px;\n}\n.form-textarea {\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px 5px 0 0;\n  padding: 12px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  resize: vertical;\n  outline: none;\n  width: 100%;\n  transition: border-color 0.15s;\n  min-height: 160px;\n}\n.form-textarea:focus {\n  border-color: #1a2b5e;\n}\n.textarea-toolbar {\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  border: 1.5px solid #c8d0e4;\n  border-top: none;\n  border-radius: 0 0 5px 5px;\n  padding: 8px 12px;\n  background: #f7f8fc;\n}\n.toolbar-icon {\n  font-size: 14px;\n  color: #6b7a99;\n  cursor: pointer;\n  transition: color 0.15s;\n}\n.toolbar-icon:hover {\n  color: #1a2b5e;\n}\n.form-footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n.btn-enviar {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 36px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-enviar:hover {\n  background: #253d85;\n}\n.inner-footer {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon:hover {\n  background: #3a52a0;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .incidencia-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=incidencias.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioIncidencias }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IncidenciasComponent, { className: "IncidenciasComponent", filePath: "src/app/pages/incidencias/incidencias.component.ts", lineNumber: 23 });
})();
export {
  IncidenciasComponent
};
//# sourceMappingURL=chunk-DXRM3Y64.js.map
