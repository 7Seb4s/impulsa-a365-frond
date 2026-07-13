import {
  ServicioAdmin
} from "./chunk-T5B6REGZ.js";
import {
  ServicioAutenticacion
} from "./chunk-II2C6W3K.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-K5TRC5YK.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgClass,
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
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

// src/app/pages/panel-usuarios/panel-usuarios.component.ts
var _c0 = (a0, a1, a2) => ({ "badge-alta": a0, "badge-media": a1, "badge-baja": a2 });
function PanelUsuariosComponent_img_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 68);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function PanelUsuariosComponent_span_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(((ctx_r0.usuario == null ? null : ctx_r0.usuario.nombre) ?? "U")[0].toUpperCase());
  }
}
function PanelUsuariosComponent_div_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span");
    \u0275\u0275text(2, "Cargando usuarios...");
    \u0275\u0275elementEnd()();
  }
}
function PanelUsuariosComponent_div_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "span");
    \u0275\u0275text(2, "No se encontraron usuarios.");
    \u0275\u0275elementEnd()();
  }
}
function PanelUsuariosComponent_div_102_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 72)(1, "div", 73)(2, "div", 74);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 75);
    \u0275\u0275text(5, "DNI : ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 76);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 77);
    \u0275\u0275listener("click", function PanelUsuariosComponent_div_102_div_1_Template_button_click_10_listener() {
      const u_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.revisarUsuario(u_r3));
    });
    \u0275\u0275text(11, "Revisar");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r3.nombre);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(u_r3.dni);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Cargo: ", u_r3.cargo);
  }
}
function PanelUsuariosComponent_div_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275template(1, PanelUsuariosComponent_div_102_div_1_Template, 12, 3, "div", 71);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.usuariosPaginados);
  }
}
function PanelUsuariosComponent_div_103_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 80);
    \u0275\u0275listener("click", function PanelUsuariosComponent_div_103_button_1_Template_button_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.irAPagina(p_r5));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("pag-activa", p_r5 === ctx_r0.paginaActual);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5);
  }
}
function PanelUsuariosComponent_div_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275template(1, PanelUsuariosComponent_div_103_button_1_Template, 2, 3, "button", 79);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.paginasArray);
  }
}
function PanelUsuariosComponent_div_104_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, "Cargando datos del usuario...");
    \u0275\u0275elementEnd();
  }
}
function PanelUsuariosComponent_div_104_div_10_div_75_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Asignado a: ", ctx_r0.revisionModal.asignadoNombre);
  }
}
function PanelUsuariosComponent_div_104_div_10_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "h3", 94);
    \u0275\u0275text(2, "Ticket activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 108)(4, "div", 109)(5, "span", 110);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 111);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 112)(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, PanelUsuariosComponent_div_104_div_10_div_75_span_12_Template, 2, 1, "span", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", ctx_r0.revisionModal.ticketActivoNumero);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(5, _c0, ctx_r0.revisionModal.ticketActivoPrioridad === "ALTA", ctx_r0.revisionModal.ticketActivoPrioridad === "MEDIA", ctx_r0.revisionModal.ticketActivoPrioridad === "BAJA"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.revisionModal.ticketActivoPrioridad, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Tipo: ", ctx_r0.revisionModal.ticketActivoTipo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.revisionModal.asignadoNombre);
  }
}
function PanelUsuariosComponent_div_104_div_10_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "h3", 94);
    \u0275\u0275text(2, "Ticket activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 113);
    \u0275\u0275text(4, "No tiene tickets activos actualmente.");
    \u0275\u0275elementEnd()();
  }
}
function PanelUsuariosComponent_div_104_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "h3", 94);
    \u0275\u0275text(3, "Datos personales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 95)(5, "div", 96)(6, "span", 97);
    \u0275\u0275text(7, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 98);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 96)(11, "span", 97);
    \u0275\u0275text(12, "DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 98);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 96)(16, "span", 97);
    \u0275\u0275text(17, "Correo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 98);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 96)(21, "span", 97);
    \u0275\u0275text(22, "Tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 98);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 96)(26, "span", 97);
    \u0275\u0275text(27, "Pa\xEDs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 98);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 96)(31, "span", 97);
    \u0275\u0275text(32, "C\xF3digo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 99);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 96)(36, "span", 97);
    \u0275\u0275text(37, "Cargo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 98);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 96)(41, "span", 97);
    \u0275\u0275text(42, "Plataforma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 98);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 93)(46, "h3", 94);
    \u0275\u0275text(47, "Estad\xEDsticas de tickets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 100)(49, "div", 101)(50, "span", 102);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 103);
    \u0275\u0275text(53, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 104)(55, "span", 102);
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 103);
    \u0275\u0275text(58, "Pendientes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 105)(60, "span", 102);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 103);
    \u0275\u0275text(63, "Resueltos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 106)(65, "div", 96)(66, "span", 97);
    \u0275\u0275text(67, "Tiempo de respuesta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 98);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 96)(71, "span", 97);
    \u0275\u0275text(72, "Tiempo total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 98);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(75, PanelUsuariosComponent_div_104_div_10_div_75_Template, 13, 9, "div", 107)(76, PanelUsuariosComponent_div_104_div_10_div_76_Template, 5, 0, "div", 107);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.nombreCompleto || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.usuarioModal == null ? null : ctx_r0.usuarioModal.dni) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.correo || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.telefono || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.pais || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.usuarioModal == null ? null : ctx_r0.usuarioModal.codigo) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.usuarioModal == null ? null : ctx_r0.usuarioModal.cargo) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.plataforma || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.ticketsTotal);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.ticketsPendientes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.ticketsTotal - ctx_r0.revisionModal.ticketsPendientes);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.tiempoRespuesta || "0:00");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.revisionModal.tiempoTotal || "0:00");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.revisionModal.ticketActivoNumero);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.revisionModal.ticketActivoNumero);
  }
}
function PanelUsuariosComponent_div_104_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1, " No se pudieron cargar los datos del usuario. ");
    \u0275\u0275elementEnd();
  }
}
function PanelUsuariosComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275listener("click", function PanelUsuariosComponent_div_104_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275elementStart(1, "div", 82);
    \u0275\u0275listener("click", function PanelUsuariosComponent_div_104_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 83)(3, "h2", 84);
    \u0275\u0275text(4, "Revisi\xF3n de usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 85);
    \u0275\u0275listener("click", function PanelUsuariosComponent_div_104_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 86);
    \u0275\u0275element(7, "line", 87)(8, "line", 88);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, PanelUsuariosComponent_div_104_div_9_Template, 2, 0, "div", 89)(10, PanelUsuariosComponent_div_104_div_10_Template, 77, 15, "div", 90)(11, PanelUsuariosComponent_div_104_div_11_Template, 2, 0, "div", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.cargandoModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.cargandoModal && ctx_r0.revisionModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.cargandoModal && !ctx_r0.revisionModal);
  }
}
var PanelUsuariosComponent = class _PanelUsuariosComponent {
  constructor(servicioAuth, servicioAdmin, router, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioAdmin = servicioAdmin;
    this.router = router;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.tabActiva = "activos";
    this.filtroPorNombre = "";
    this.filtroPorDni = "";
    this.filtroPorCargo = "";
    this.usuariosActivos = [];
    this.usuariosEliminados = [];
    this.cargando = false;
    this.error = "";
    this.paginaActual = 1;
    this.usuariosPorPagina = 9;
    this.mostrarModal = false;
    this.cargandoModal = false;
    this.usuarioModal = null;
    this.revisionModal = null;
    this.exportando = false;
    this.exportandoPdf = false;
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarActivos();
  }
  cargarActivos() {
    this.cargando = true;
    this.error = "";
    this.servicioAdmin.listarUsuariosActivos().subscribe({
      next: (datos) => {
        this.usuariosActivos = datos;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = "No se pudo cargar los usuarios.";
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
  cargarEliminados() {
    if (this.usuariosEliminados.length > 0)
      return;
    this.cargando = true;
    this.servicioAdmin.listarUsuariosEliminados().subscribe({
      next: (datos) => {
        this.usuariosEliminados = datos;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = "No se pudo cargar el historial.";
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
  cambiarTab(tab) {
    this.tabActiva = tab;
    this.paginaActual = 1;
    this.limpiarFiltros();
    if (tab === "eliminados")
      this.cargarEliminados();
  }
  get usuariosFiltrados() {
    const lista = this.tabActiva === "activos" ? this.usuariosActivos : this.usuariosEliminados;
    return lista.filter((u) => {
      const okNombre = !this.filtroPorNombre || (u.nombre ?? "").toLowerCase().includes(this.filtroPorNombre.toLowerCase());
      const okDni = !this.filtroPorDni || (u.dni ?? "").includes(this.filtroPorDni);
      const okCargo = !this.filtroPorCargo || (u.cargo ?? "").toLowerCase().includes(this.filtroPorCargo.toLowerCase());
      return okNombre && okDni && okCargo;
    });
  }
  limpiarFiltros() {
    this.filtroPorNombre = "";
    this.filtroPorDni = "";
    this.filtroPorCargo = "";
  }
  get totalPaginas() {
    return Math.ceil(this.usuariosFiltrados.length / this.usuariosPorPagina);
  }
  get paginasArray() {
    return Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
  }
  get usuariosPaginados() {
    const inicio = (this.paginaActual - 1) * this.usuariosPorPagina;
    return this.usuariosFiltrados.slice(inicio, inicio + this.usuariosPorPagina);
  }
  irAPagina(p) {
    if (p >= 1 && p <= this.totalPaginas)
      this.paginaActual = p;
  }
  revisarUsuario(u) {
    this.usuarioModal = u;
    this.revisionModal = null;
    this.mostrarModal = true;
    this.cargandoModal = true;
    this.servicioAdmin.revisarUsuario(u.id).subscribe({
      next: (datos) => {
        this.revisionModal = datos;
        this.cargandoModal = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cargandoModal = false;
        this.cdr.detectChanges();
      }
    });
  }
  cerrarModal() {
    this.mostrarModal = false;
    this.usuarioModal = null;
    this.revisionModal = null;
  }
  exportarExcel() {
    this.exportando = true;
    const obs$ = this.tabActiva === "activos" ? this.servicioAdmin.exportarUsuariosActivos() : this.servicioAdmin.exportarUsuariosEliminados();
    obs$.subscribe({
      next: (blob) => {
        const nombre = this.tabActiva === "activos" ? "usuarios_activos.xlsx" : "usuarios_eliminados.xlsx";
        this.descargarArchivo(blob, nombre);
        this.exportando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.exportando = false;
        this.cdr.detectChanges();
      }
    });
  }
  exportarPdf() {
    this.exportandoPdf = true;
    const obs$ = this.tabActiva === "activos" ? this.servicioAdmin.exportarUsuariosActivosPdf() : this.servicioAdmin.exportarUsuariosEliminadosPdf();
    obs$.subscribe({
      next: (blob) => {
        const nombre = this.tabActiva === "activos" ? "usuarios_activos.pdf" : "usuarios_eliminados.pdf";
        this.descargarArchivo(blob, nombre);
        this.exportandoPdf = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.exportandoPdf = false;
        this.cdr.detectChanges();
      }
    });
  }
  // â”€â”€ Imprimir: genera el PDF y abre el diÃ¡logo de impresiÃ³n â”€â”€
  imprimir() {
    const obs$ = this.tabActiva === "activos" ? this.servicioAdmin.exportarUsuariosActivosPdf() : this.servicioAdmin.exportarUsuariosEliminadosPdf();
    obs$.subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const ventana = window.open(url);
        if (ventana) {
          ventana.onload = () => {
            ventana.print();
          };
        }
        this.cdr.detectChanges();
      },
      error: () => {
        this.cdr.detectChanges();
      }
    });
  }
  // Helper: descarga un Blob como archivo
  descargarArchivo(blob, nombre) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nombre;
    a.click();
    window.URL.revokeObjectURL(url);
  }
  irAInicio() {
    this.router.navigate(["/dashboard/admin"]);
  }
  irAGestionTickets() {
    this.router.navigate(["/dashboard/gestion-tickets"]);
  }
  irAGestionIncidencias() {
    this.router.navigate(["/dashboard/gestion-incidencias"]);
  }
  irACrearUsuario() {
    this.router.navigate(["/dashboard/usuarios/crear"]);
  }
  irAUsuarios() {
    this.router.navigate(["/dashboard/panel-usuarios"]);
  }
  irAAdministracion() {
    this.router.navigate(["/dashboard/administracion"]);
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  static {
    this.\u0275fac = function PanelUsuariosComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PanelUsuariosComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioAdmin), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PanelUsuariosComponent, selectors: [["app-panel-usuarios"]], decls: 105, vars: 20, consts: [[1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", 1, "sidebar-logo"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "16", "height", "16"], ["d", "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"], ["d", "M9 21V12h6v9"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M16 5V3M8 5V3M2 9h20"], ["d", "M8 13h4M8 17h8"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["cx", "12", "cy", "16", "r", "0.5", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "1"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "16", "y1", "11", "x2", "22", "y2", "11"], [1, "nav-item", "active", 3, "click"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83\n                     2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33\n                     1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09\n                     A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06\n                     a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0\n                     004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0\n                     012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0\n                     00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83\n                     0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3\n                     a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51\n                     1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0\n                     010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0\n                     001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65\n                     0 00-1.51 1z"], [1, "sidebar-spacer"], [1, "main-area"], [1, "topbar"], [1, "page-title"], [1, "topbar-right"], ["title", "Notificaciones", 1, "btn-notif"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "18", "height", "18"], ["d", "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 01-3.46 0"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:36px;height:36px;border-radius:50%;object-fit:cover", 3, "src", 4, "ngIf"], [4, "ngIf"], [1, "content-area"], [1, "panel-card"], [1, "tabs-row"], [1, "tab-btn", 3, "click"], [1, "search-row"], [1, "search-field"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "14", "height", "14", 1, "search-icon"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["type", "text", "placeholder", "Buscar usuario por nombre", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Buscar usuario por DNI", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Buscar usuario por cargo", 3, "ngModelChange", "ngModel"], [1, "btn-exportar", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "15", "height", "15"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["points", "7 10 12 15 17 10"], ["x1", "12", "y1", "15", "x2", "12", "y2", "3"], [1, "btn-exportar", "btn-pdf", 3, "click", "disabled"], ["d", "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"], ["points", "14 2 14 8 20 8"], [1, "btn-exportar", "btn-imprimir", 3, "click"], ["points", "6 9 6 2 18 2 18 9"], ["d", "M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"], ["x", "6", "y", "14", "width", "12", "height", "8"], ["class", "estado-mensaje", 4, "ngIf"], ["class", "usuarios-grid", 4, "ngIf"], ["class", "paginacion-row", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["alt", "avatar", 2, "width", "36px", "height", "36px", "border-radius", "50%", "object-fit", "cover", 3, "src"], [1, "estado-mensaje"], [1, "usuarios-grid"], ["class", "usuario-card", 4, "ngFor", "ngForOf"], [1, "usuario-card"], [1, "card-info"], [1, "card-nombre"], [1, "card-dni"], [1, "card-cargo"], [1, "btn-revisar", 3, "click"], [1, "paginacion-row"], ["class", "pag-btn", 3, "pag-activa", "click", 4, "ngFor", "ngForOf"], [1, "pag-btn", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-contenido", 3, "click"], [1, "modal-header"], [1, "modal-titulo"], [1, "modal-cerrar", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "20", "height", "20"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], ["class", "modal-loading", 4, "ngIf"], ["class", "modal-body", 4, "ngIf"], [1, "modal-loading"], [1, "modal-body"], [1, "seccion"], [1, "seccion-titulo"], [1, "datos-grid"], [1, "dato"], [1, "dato-label"], [1, "dato-valor"], [1, "dato-valor", "dato-codigo"], [1, "stats-grid"], [1, "stat-card", "stat-total"], [1, "stat-numero"], [1, "stat-label"], [1, "stat-card", "stat-pendiente"], [1, "stat-card", "stat-resuelto"], [1, "datos-grid", 2, "margin-top", "12px"], ["class", "seccion", 4, "ngIf"], [1, "ticket-activo-card"], [1, "ticket-activo-header"], [1, "ticket-activo-numero"], [1, "ticket-activo-badge", 3, "ngClass"], [1, "ticket-activo-detalle"], [1, "sin-datos"]], template: function PanelUsuariosComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 5)(6, "a", 6);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_a_click_6_listener() {
          return ctx.irAInicio();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 7);
        \u0275\u0275element(8, "path", 8)(9, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Inicio ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "a", 6);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_a_click_11_listener() {
          return ctx.irAGestionTickets();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 7);
        \u0275\u0275element(13, "rect", 10)(14, "path", 11)(15, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Gesti\xF3n de tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "a", 6);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_a_click_17_listener() {
          return ctx.irAGestionIncidencias();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 7);
        \u0275\u0275element(19, "circle", 13)(20, "line", 14)(21, "circle", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Gesti\xF3n de incidencias ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "a", 6);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_a_click_23_listener() {
          return ctx.irACrearUsuario();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 7);
        \u0275\u0275element(25, "path", 16)(26, "circle", 17)(27, "line", 18)(28, "line", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " Registro de usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "a", 20);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_a_click_30_listener() {
          return ctx.irAUsuarios();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 7);
        \u0275\u0275element(32, "path", 16)(33, "circle", 17)(34, "path", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " Usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "a", 6);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_a_click_36_listener() {
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
        \u0275\u0275text(45, "Panel de usuarios");
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
        \u0275\u0275template(58, PanelUsuariosComponent_img_58_Template, 1, 1, "img", 38)(59, PanelUsuariosComponent_span_59_Template, 2, 1, "span", 39);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "div", 40)(61, "div", 41)(62, "div", 42)(63, "button", 43);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_button_click_63_listener() {
          return ctx.cambiarTab("activos");
        });
        \u0275\u0275text(64, " Usuarios activos ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "button", 43);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_button_click_65_listener() {
          return ctx.cambiarTab("eliminados");
        });
        \u0275\u0275text(66, " Historial de usuarios eliminados ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 44)(68, "div", 45);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(69, "svg", 46);
        \u0275\u0275element(70, "circle", 47)(71, "path", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(72, "input", 49);
        \u0275\u0275twoWayListener("ngModelChange", function PanelUsuariosComponent_Template_input_ngModelChange_72_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filtroPorNombre, $event) || (ctx.filtroPorNombre = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PanelUsuariosComponent_Template_input_ngModelChange_72_listener() {
          return ctx.paginaActual = 1;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 45);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(74, "svg", 46);
        \u0275\u0275element(75, "circle", 47)(76, "path", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(77, "input", 50);
        \u0275\u0275twoWayListener("ngModelChange", function PanelUsuariosComponent_Template_input_ngModelChange_77_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filtroPorDni, $event) || (ctx.filtroPorDni = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PanelUsuariosComponent_Template_input_ngModelChange_77_listener() {
          return ctx.paginaActual = 1;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(78, "div", 45);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(79, "svg", 46);
        \u0275\u0275element(80, "circle", 47)(81, "path", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(82, "input", 51);
        \u0275\u0275twoWayListener("ngModelChange", function PanelUsuariosComponent_Template_input_ngModelChange_82_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filtroPorCargo, $event) || (ctx.filtroPorCargo = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function PanelUsuariosComponent_Template_input_ngModelChange_82_listener() {
          return ctx.paginaActual = 1;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "button", 52);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_button_click_83_listener() {
          return ctx.exportarExcel();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(84, "svg", 53);
        \u0275\u0275element(85, "path", 54)(86, "polyline", 55)(87, "line", 56);
        \u0275\u0275elementEnd();
        \u0275\u0275text(88);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(89, "button", 57);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_button_click_89_listener() {
          return ctx.exportarPdf();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(90, "svg", 53);
        \u0275\u0275element(91, "path", 58)(92, "polyline", 59);
        \u0275\u0275elementEnd();
        \u0275\u0275text(93);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(94, "button", 60);
        \u0275\u0275listener("click", function PanelUsuariosComponent_Template_button_click_94_listener() {
          return ctx.imprimir();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(95, "svg", 53);
        \u0275\u0275element(96, "polyline", 61)(97, "path", 62)(98, "rect", 63);
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " Imprimir ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(100, PanelUsuariosComponent_div_100_Template, 3, 0, "div", 64)(101, PanelUsuariosComponent_div_101_Template, 3, 0, "div", 64)(102, PanelUsuariosComponent_div_102_Template, 2, 1, "div", 65)(103, PanelUsuariosComponent_div_103_Template, 2, 1, "div", 66);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275template(104, PanelUsuariosComponent_div_104_Template, 12, 3, "div", 67);
      }
      if (rf & 2) {
        \u0275\u0275advance(54);
        \u0275\u0275textInterpolate((ctx.usuario == null ? null : ctx.usuario.nombre) ?? "Usuario");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((ctx.usuario == null ? null : ctx.usuario.codigo) ?? "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.fotoUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoUrl);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("tab-active", ctx.tabActiva === "activos");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("tab-active", ctx.tabActiva === "eliminados");
        \u0275\u0275advance(7);
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroPorNombre);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroPorDni);
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.filtroPorCargo);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.exportando || ctx.cargando);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.exportando ? "Exportando..." : "Excel", " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.exportandoPdf || ctx.cargando);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.exportandoPdf ? "Exportando..." : "PDF", " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando && ctx.usuariosFiltrados.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando && ctx.usuariosFiltrados.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.totalPaginas > 1);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarModal);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  min-height: 100vh;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 64px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n  width: calc(100% - 16px);\n  text-align: left;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-notif[_ngcontent-%COMP%] {\n  background: #f0f2f8;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #5a6a8a;\n  transition: background 0.15s;\n}\n.btn-notif[_ngcontent-%COMP%]:hover {\n  background: #e0e4ef;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #1a2b5e;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n}\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n}\n.panel-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  min-height: 500px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.tabs-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  border-bottom: 2px solid #e8eaf0;\n  padding-bottom: 0;\n  margin-bottom: 2px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #8a9ab8;\n  padding: 10px 16px;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.tab-btn.tab-active[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n  font-weight: 700;\n  border-bottom: 2px solid #1a2b5e;\n}\n.search-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f4f6fb;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  padding: 8px 12px;\n  flex: 1;\n  min-width: 180px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: #8a9ab8;\n  flex-shrink: 0;\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 13px;\n  color: #2d3748;\n  width: 100%;\n}\n.search-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #aab4cc;\n}\n.btn-exportar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #217346;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn-exportar[_ngcontent-%COMP%]:hover {\n  background: #1a5c38;\n}\n.btn-exportar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-pdf[_ngcontent-%COMP%] {\n  background: #c0392b;\n}\n.btn-pdf[_ngcontent-%COMP%]:hover {\n  background: #962d22;\n}\n.btn-imprimir[_ngcontent-%COMP%] {\n  background: #1b2559;\n}\n.btn-imprimir[_ngcontent-%COMP%]:hover {\n  background: #131b40;\n}\n@media print {\n  .sidebar[_ngcontent-%COMP%], \n   .search-row[_ngcontent-%COMP%], \n   .paginacion-row[_ngcontent-%COMP%], \n   .tabs-row[_ngcontent-%COMP%], \n   .btn-exportar[_ngcontent-%COMP%], \n   .btn-pdf[_ngcontent-%COMP%], \n   .btn-imprimir[_ngcontent-%COMP%], \n   .modal-overlay[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .contenido-principal[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n}\n.estado-mensaje[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 48px 0;\n  color: #8a9ab8;\n  font-size: 14px;\n}\n.usuarios-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .usuarios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .usuarios-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.usuario-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e8eaf0;\n  border-radius: 10px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.15s;\n}\n.usuario-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 12px rgba(26, 43, 94, 0.10);\n}\n.card-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.card-nombre[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.card-dni[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #4a5568;\n}\n.card-dni[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a2b5e;\n}\n.card-cargo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.btn-revisar[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n  flex-shrink: 0;\n}\n.btn-revisar[_ngcontent-%COMP%]:hover {\n  background: #243d80;\n}\n.paginacion-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  padding-top: 4px;\n}\n.pag-btn[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border: 1px solid #e0e4ef;\n  border-radius: 6px;\n  background: #fff;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.pag-btn[_ngcontent-%COMP%]:hover {\n  background: #eef0f8;\n  border-color: #c0c8e0;\n  color: #1a2b5e;\n}\n.pag-btn.pag-activa[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  border-color: #1a2b5e;\n  color: #fff;\n  font-weight: 700;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n.modal-contenido[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  width: 600px;\n  max-width: 92vw;\n  max-height: 85vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #e9ecf2;\n}\n.modal-titulo[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1b2559;\n  margin: 0;\n}\n.modal-cerrar[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #8f9bb3;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.modal-cerrar[_ngcontent-%COMP%]:hover {\n  background: #f0f2f5;\n  color: #1b2559;\n}\n.modal-loading[_ngcontent-%COMP%] {\n  padding: 48px 24px;\n  text-align: center;\n  color: #8f9bb3;\n  font-size: 14px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px 24px;\n}\n.seccion[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.seccion[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.seccion-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1b2559;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0 0 10px;\n  padding-bottom: 6px;\n  border-bottom: 2px solid #edf0f7;\n}\n.datos-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px 20px;\n}\n.dato[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dato-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8f9bb3;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.dato-valor[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2e3a59;\n  font-weight: 500;\n}\n.dato-codigo[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1b2559;\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}\n.stat-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stat-numero[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 800;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.stat-total[_ngcontent-%COMP%] {\n  background: #edf0f7;\n}\n.stat-total[_ngcontent-%COMP%]   .stat-numero[_ngcontent-%COMP%] {\n  color: #1b2559;\n}\n.stat-total[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #5a6a8a;\n}\n.stat-pendiente[_ngcontent-%COMP%] {\n  background: #fff4e6;\n}\n.stat-pendiente[_ngcontent-%COMP%]   .stat-numero[_ngcontent-%COMP%] {\n  color: #e67e22;\n}\n.stat-pendiente[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #c0792a;\n}\n.stat-resuelto[_ngcontent-%COMP%] {\n  background: #e8f8ef;\n}\n.stat-resuelto[_ngcontent-%COMP%]   .stat-numero[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n.stat-resuelto[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  color: #1e8449;\n}\n.ticket-activo-card[_ngcontent-%COMP%] {\n  background: #f8f9fc;\n  border: 1px solid #e2e6ef;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.ticket-activo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.ticket-activo-numero[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1b2559;\n}\n.ticket-activo-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.badge-alta[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.badge-media[_ngcontent-%COMP%] {\n  background: #fff4e6;\n  color: #e67e22;\n}\n.badge-baja[_ngcontent-%COMP%] {\n  background: #e8f8ef;\n  color: #27ae60;\n}\n.ticket-activo-detalle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #5a6a8a;\n}\n.sin-datos[_ngcontent-%COMP%] {\n  color: #8f9bb3;\n  font-size: 13px;\n  font-style: italic;\n  margin: 0;\n}\n/*# sourceMappingURL=panel-usuarios.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelUsuariosComponent, [{
    type: Component,
    args: [{ selector: "app-panel-usuarios", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- pages/panel-usuarios/panel-usuarios.component.html -->
<div class="app-layout">
  <div class="app-body">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" />
      </div>
      <nav class="sidebar-nav">

        <!-- Inicio -->
        <a class="nav-item" (click)="irAInicio()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
            <path d="M9 21V12h6v9"/>
          </svg>
          Inicio
        </a>

        <!-- Gesti\xF3n de tickets -->
        <a class="nav-item" (click)="irAGestionTickets()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <path d="M16 5V3M8 5V3M2 9h20"/>
            <path d="M8 13h4M8 17h8"/>
          </svg>
          Gesti\xF3n de tickets
        </a>

        <!-- Gesti\xF3n de incidencias -->
        <a class="nav-item" (click)="irAGestionIncidencias()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="1"/>
          </svg>
          Gesti\xF3n de incidencias
        </a>

        <!-- Registro de usuarios -->
        <a class="nav-item" (click)="irACrearUsuario()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="16" y1="11" x2="22" y2="11"/>
          </svg>
          Registro de usuarios
        </a>

        <!-- Usuarios (activo) -->
        <a class="nav-item active" (click)="irAUsuarios()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
          </svg>
          Usuarios
        </a>

        <!-- Administraci\xF3n -->
        <a class="nav-item" (click)="irAAdministracion()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83
                     2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33
                     1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09
                     A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06
                     a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0
                     004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0
                     012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0
                     00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83
                     0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3
                     a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51
                     1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0
                     010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0
                     001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65
                     0 00-1.51 1z"/>
          </svg>
          Administraci\xF3n
        </a>

      </nav>
      <div class="sidebar-spacer"></div>
    </aside>

    <!-- \xC1REA PRINCIPAL -->
    <div class="main-area">

      <!-- TOPBAR -->
      <header class="topbar">
        <h1 class="page-title">Panel de usuarios</h1>
        <div class="topbar-right">
          <button class="btn-notif" title="Notificaciones">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
              <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
          </button>
          <div class="user-chip">
            <div class="user-text">
              <span class="user-name">{{ usuario?.nombre ?? 'Usuario' }}</span>
              <span class="user-code">{{ usuario?.codigo ?? '' }}</span>
            </div>
            <div class="user-avatar">
              <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar" style="width:36px;height:36px;border-radius:50%;object-fit:cover" />
              <span *ngIf="!fotoUrl">{{ (usuario?.nombre ?? 'U')[0].toUpperCase() }}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- CONTENIDO -->
      <div class="content-area">
        <div class="panel-card">

          <!-- TABS -->
          <div class="tabs-row">
            <button class="tab-btn" [class.tab-active]="tabActiva === 'activos'"
                    (click)="cambiarTab('activos')">
              Usuarios activos
            </button>
            <button class="tab-btn" [class.tab-active]="tabActiva === 'eliminados'"
                    (click)="cambiarTab('eliminados')">
              Historial de usuarios eliminados
            </button>
          </div>

          <!-- BARRA DE B\xDASQUEDA + BOT\xD3N EXPORTAR -->
          <div class="search-row">
            <div class="search-field">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" width="14" height="14" class="search-icon">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="Buscar usuario por nombre"
                     [(ngModel)]="filtroPorNombre" (ngModelChange)="paginaActual=1" />
            </div>
            <div class="search-field">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" width="14" height="14" class="search-icon">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="Buscar usuario por DNI"
                     [(ngModel)]="filtroPorDni" (ngModelChange)="paginaActual=1" />
            </div>
            <div class="search-field">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" width="14" height="14" class="search-icon">
                <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="Buscar usuario por cargo"
                     [(ngModel)]="filtroPorCargo" (ngModelChange)="paginaActual=1" />
            </div>
            <button class="btn-exportar" (click)="exportarExcel()" [disabled]="exportando || cargando">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" width="15" height="15">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {{ exportando ? 'Exportando...' : 'Excel' }}
            </button>
            <button class="btn-exportar btn-pdf" (click)="exportarPdf()" [disabled]="exportandoPdf || cargando">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" width="15" height="15">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              {{ exportandoPdf ? 'Exportando...' : 'PDF' }}
            </button>
            <button class="btn-exportar btn-imprimir" (click)="imprimir()">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" width="15" height="15">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
              Imprimir
            </button>
          </div>

          <!-- LOADING -->
          <div *ngIf="cargando" class="estado-mensaje">
            <span>Cargando usuarios...</span>
          </div>

          <!-- SIN RESULTADOS -->
          <div *ngIf="!cargando && usuariosFiltrados.length === 0" class="estado-mensaje">
            <span>No se encontraron usuarios.</span>
          </div>

          <!-- GRID DE TARJETAS -->
          <div *ngIf="!cargando && usuariosFiltrados.length > 0" class="usuarios-grid">
            <div class="usuario-card" *ngFor="let u of usuariosPaginados">
              <div class="card-info">
                <div class="card-nombre">{{ u.nombre }}</div>
                <div class="card-dni">DNI : <strong>{{ u.dni }}</strong></div>
                <div class="card-cargo">Cargo: {{ u.cargo }}</div>
              </div>
              <button class="btn-revisar" (click)="revisarUsuario(u)">Revisar</button>
            </div>
          </div>

          <!-- PAGINACI\xD3N -->
          <div *ngIf="totalPaginas > 1" class="paginacion-row">
            <button class="pag-btn" *ngFor="let p of paginasArray"
                    [class.pag-activa]="p === paginaActual"
                    (click)="irAPagina(p)">{{ p }}</button>
          </div>

        </div>
      </div>
    </div>

  </div>
</div>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<!--  MODAL: REVISI\xD3N DE USUARIO                        -->
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal-overlay" *ngIf="mostrarModal" (click)="cerrarModal()">
  <div class="modal-contenido" (click)="$event.stopPropagation()">

    <!-- Header -->
    <div class="modal-header">
      <h2 class="modal-titulo">Revisi\xF3n de usuario</h2>
      <button class="modal-cerrar" (click)="cerrarModal()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>

    <!-- Loading -->
    <div *ngIf="cargandoModal" class="modal-loading">Cargando datos del usuario...</div>

    <!-- Contenido -->
    <div *ngIf="!cargandoModal && revisionModal" class="modal-body">

      <!-- Datos personales -->
      <div class="seccion">
        <h3 class="seccion-titulo">Datos personales</h3>
        <div class="datos-grid">
          <div class="dato">
            <span class="dato-label">Nombre completo</span>
            <span class="dato-valor">{{ revisionModal.nombreCompleto || '\u2014' }}</span>
          </div>
          <div class="dato">
            <span class="dato-label">DNI</span>
            <span class="dato-valor">{{ usuarioModal?.dni || '\u2014' }}</span>
          </div>
          <div class="dato">
            <span class="dato-label">Correo</span>
            <span class="dato-valor">{{ revisionModal.correo || '\u2014' }}</span>
          </div>
          <div class="dato">
            <span class="dato-label">Tel\xE9fono</span>
            <span class="dato-valor">{{ revisionModal.telefono || '\u2014' }}</span>
          </div>
          <div class="dato">
            <span class="dato-label">Pa\xEDs</span>
            <span class="dato-valor">{{ revisionModal.pais || '\u2014' }}</span>
          </div>
          <div class="dato">
            <span class="dato-label">C\xF3digo</span>
            <span class="dato-valor dato-codigo">{{ usuarioModal?.codigo || '\u2014' }}</span>
          </div>
          <div class="dato">
            <span class="dato-label">Cargo</span>
            <span class="dato-valor">{{ usuarioModal?.cargo || '\u2014' }}</span>
          </div>
          <div class="dato">
            <span class="dato-label">Plataforma</span>
            <span class="dato-valor">{{ revisionModal.plataforma || '\u2014' }}</span>
          </div>
        </div>
      </div>

      <!-- Estad\xEDsticas de tickets -->
      <div class="seccion">
        <h3 class="seccion-titulo">Estad\xEDsticas de tickets</h3>
        <div class="stats-grid">
          <div class="stat-card stat-total">
            <span class="stat-numero">{{ revisionModal.ticketsTotal }}</span>
            <span class="stat-label">Total</span>
          </div>
          <div class="stat-card stat-pendiente">
            <span class="stat-numero">{{ revisionModal.ticketsPendientes }}</span>
            <span class="stat-label">Pendientes</span>
          </div>
          <div class="stat-card stat-resuelto">
            <span class="stat-numero">{{ revisionModal.ticketsTotal - revisionModal.ticketsPendientes }}</span>
            <span class="stat-label">Resueltos</span>
          </div>
        </div>
        <div class="datos-grid" style="margin-top: 12px;">
          <div class="dato">
            <span class="dato-label">Tiempo de respuesta</span>
            <span class="dato-valor">{{ revisionModal.tiempoRespuesta || '0:00' }}</span>
          </div>
          <div class="dato">
            <span class="dato-label">Tiempo total</span>
            <span class="dato-valor">{{ revisionModal.tiempoTotal || '0:00' }}</span>
          </div>
        </div>
      </div>

      <!-- Ticket activo -->
      <div class="seccion" *ngIf="revisionModal.ticketActivoNumero">
        <h3 class="seccion-titulo">Ticket activo</h3>
        <div class="ticket-activo-card">
          <div class="ticket-activo-header">
            <span class="ticket-activo-numero">#{{ revisionModal.ticketActivoNumero }}</span>
            <span class="ticket-activo-badge"
                  [ngClass]="{
                    'badge-alta': revisionModal.ticketActivoPrioridad === 'ALTA',
                    'badge-media': revisionModal.ticketActivoPrioridad === 'MEDIA',
                    'badge-baja': revisionModal.ticketActivoPrioridad === 'BAJA'
                  }">
              {{ revisionModal.ticketActivoPrioridad }}
            </span>
          </div>
          <div class="ticket-activo-detalle">
            <span>Tipo: {{ revisionModal.ticketActivoTipo }}</span>
            <span *ngIf="revisionModal.asignadoNombre">Asignado a: {{ revisionModal.asignadoNombre }}</span>
          </div>
        </div>
      </div>

      <div class="seccion" *ngIf="!revisionModal.ticketActivoNumero">
        <h3 class="seccion-titulo">Ticket activo</h3>
        <p class="sin-datos">No tiene tickets activos actualmente.</p>
      </div>

    </div>

    <!-- Error -->
    <div *ngIf="!cargandoModal && !revisionModal" class="modal-loading">
      No se pudieron cargar los datos del usuario.
    </div>

  </div>
</div>`, styles: ['/* src/app/pages/panel-usuarios/panel-usuarios.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 220px;\n  min-height: 100vh;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 64px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n  width: calc(100% - 16px);\n  text-align: left;\n}\n.nav-item:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #fff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-notif {\n  background: #f0f2f8;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #5a6a8a;\n  transition: background 0.15s;\n}\n.btn-notif:hover {\n  background: #e0e4ef;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #1a2b5e;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 700;\n}\n.content-area {\n  flex: 1;\n  padding: 24px;\n  overflow-y: auto;\n}\n.panel-card {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  min-height: 500px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n.tabs-row {\n  display: flex;\n  gap: 6px;\n  border-bottom: 2px solid #e8eaf0;\n  padding-bottom: 0;\n  margin-bottom: 2px;\n}\n.tab-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  color: #8a9ab8;\n  padding: 10px 16px;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tab-btn:hover {\n  color: #1a2b5e;\n}\n.tab-btn.tab-active {\n  color: #1a2b5e;\n  font-weight: 700;\n  border-bottom: 2px solid #1a2b5e;\n}\n.search-row {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.search-field {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f4f6fb;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  padding: 8px 12px;\n  flex: 1;\n  min-width: 180px;\n}\n.search-icon {\n  color: #8a9ab8;\n  flex-shrink: 0;\n}\n.search-field input {\n  border: none;\n  background: transparent;\n  outline: none;\n  font-size: 13px;\n  color: #2d3748;\n  width: 100%;\n}\n.search-field input::placeholder {\n  color: #aab4cc;\n}\n.btn-exportar {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #217346;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 9px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  flex-shrink: 0;\n  transition: background 0.15s, opacity 0.15s;\n}\n.btn-exportar:hover {\n  background: #1a5c38;\n}\n.btn-exportar:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-pdf {\n  background: #c0392b;\n}\n.btn-pdf:hover {\n  background: #962d22;\n}\n.btn-imprimir {\n  background: #1b2559;\n}\n.btn-imprimir:hover {\n  background: #131b40;\n}\n@media print {\n  .sidebar,\n  .search-row,\n  .paginacion-row,\n  .tabs-row,\n  .btn-exportar,\n  .btn-pdf,\n  .btn-imprimir,\n  .modal-overlay {\n    display: none !important;\n  }\n  .contenido-principal {\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n}\n.estado-mensaje {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 48px 0;\n  color: #8a9ab8;\n  font-size: 14px;\n}\n.usuarios-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .usuarios-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .usuarios-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.usuario-card {\n  background: #fff;\n  border: 1px solid #e8eaf0;\n  border-radius: 10px;\n  padding: 16px 18px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.15s;\n}\n.usuario-card:hover {\n  box-shadow: 0 3px 12px rgba(26, 43, 94, 0.10);\n}\n.card-info {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.card-nombre {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.card-dni {\n  font-size: 13px;\n  color: #4a5568;\n}\n.card-dni strong {\n  font-size: 16px;\n  font-weight: 800;\n  color: #1a2b5e;\n}\n.card-cargo {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.btn-revisar {\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 7px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n  flex-shrink: 0;\n}\n.btn-revisar:hover {\n  background: #243d80;\n}\n.paginacion-row {\n  display: flex;\n  justify-content: flex-end;\n  gap: 6px;\n  padding-top: 4px;\n}\n.pag-btn {\n  width: 32px;\n  height: 32px;\n  border: 1px solid #e0e4ef;\n  border-radius: 6px;\n  background: #fff;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.pag-btn:hover {\n  background: #eef0f8;\n  border-color: #c0c8e0;\n  color: #1a2b5e;\n}\n.pag-btn.pag-activa {\n  background: #1a2b5e;\n  border-color: #1a2b5e;\n  color: #fff;\n  font-weight: 700;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.15s ease;\n}\n.modal-contenido {\n  background: #fff;\n  border-radius: 14px;\n  width: 600px;\n  max-width: 92vw;\n  max-height: 85vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);\n  animation: slideUp 0.2s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #e9ecf2;\n}\n.modal-titulo {\n  font-size: 17px;\n  font-weight: 700;\n  color: #1b2559;\n  margin: 0;\n}\n.modal-cerrar {\n  background: none;\n  border: none;\n  color: #8f9bb3;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 6px;\n  transition: background 0.15s;\n}\n.modal-cerrar:hover {\n  background: #f0f2f5;\n  color: #1b2559;\n}\n.modal-loading {\n  padding: 48px 24px;\n  text-align: center;\n  color: #8f9bb3;\n  font-size: 14px;\n}\n.modal-body {\n  padding: 20px 24px 24px;\n}\n.seccion {\n  margin-bottom: 20px;\n}\n.seccion:last-child {\n  margin-bottom: 0;\n}\n.seccion-titulo {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1b2559;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0 0 10px;\n  padding-bottom: 6px;\n  border-bottom: 2px solid #edf0f7;\n}\n.datos-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px 20px;\n}\n.dato {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.dato-label {\n  font-size: 11px;\n  color: #8f9bb3;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.dato-valor {\n  font-size: 14px;\n  color: #2e3a59;\n  font-weight: 500;\n}\n.dato-codigo {\n  font-weight: 700;\n  color: #1b2559;\n}\n.stats-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n}\n.stat-card {\n  border-radius: 10px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2px;\n}\n.stat-numero {\n  font-size: 26px;\n  font-weight: 800;\n}\n.stat-label {\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.stat-total {\n  background: #edf0f7;\n}\n.stat-total .stat-numero {\n  color: #1b2559;\n}\n.stat-total .stat-label {\n  color: #5a6a8a;\n}\n.stat-pendiente {\n  background: #fff4e6;\n}\n.stat-pendiente .stat-numero {\n  color: #e67e22;\n}\n.stat-pendiente .stat-label {\n  color: #c0792a;\n}\n.stat-resuelto {\n  background: #e8f8ef;\n}\n.stat-resuelto .stat-numero {\n  color: #27ae60;\n}\n.stat-resuelto .stat-label {\n  color: #1e8449;\n}\n.ticket-activo-card {\n  background: #f8f9fc;\n  border: 1px solid #e2e6ef;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.ticket-activo-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n.ticket-activo-numero {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1b2559;\n}\n.ticket-activo-badge {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.badge-alta {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.badge-media {\n  background: #fff4e6;\n  color: #e67e22;\n}\n.badge-baja {\n  background: #e8f8ef;\n  color: #27ae60;\n}\n.ticket-activo-detalle {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #5a6a8a;\n}\n.sin-datos {\n  color: #8f9bb3;\n  font-size: 13px;\n  font-style: italic;\n  margin: 0;\n}\n/*# sourceMappingURL=panel-usuarios.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioAdmin }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PanelUsuariosComponent, { className: "PanelUsuariosComponent", filePath: "src/app/pages/panel-usuarios/panel-usuarios.component.ts", lineNumber: 18 });
})();
export {
  PanelUsuariosComponent
};
//# sourceMappingURL=chunk-P2DNSTGZ.js.map
