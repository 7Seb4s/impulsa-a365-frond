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
  NgForOf,
  NgIf,
  Router,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ASNBX676.js";

// src/app/pages/gestion-incidencia/gestion-incidencia.component.ts
function GestionIncidenciasComponent_img_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 51);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function GestionIncidenciasComponent__svg_svg_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 52);
    \u0275\u0275element(1, "path", 53);
    \u0275\u0275elementEnd();
  }
}
function GestionIncidenciasComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "div", 55)(2, "p", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 57);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 58);
    \u0275\u0275listener("click", function GestionIncidenciasComponent_div_70_Template_button_click_6_listener() {
      const item_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.revisar(item_r3));
    });
    \u0275\u0275text(7, " Revisar ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275classProp("resaltado", item_r3.resaltado);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Tipo: ", item_r3.tipo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.tema);
    \u0275\u0275advance();
    \u0275\u0275classProp("naranja", item_r3.resaltado);
  }
}
function GestionIncidenciasComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1, " No hay incidencias en esta categor\xEDa. ");
    \u0275\u0275elementEnd();
  }
}
function GestionIncidenciasComponent_div_75_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 85);
    \u0275\u0275text(2, "Contenido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 87)(6, "p", 88);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 89)(9, "button", 90);
    \u0275\u0275listener("click", function GestionIncidenciasComponent_div_75_ng_container_59_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activarEdicion());
    });
    \u0275\u0275text(10, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 91);
    \u0275\u0275listener("click", function GestionIncidenciasComponent_div_75_ng_container_59_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.borrarIncidencia());
    });
    \u0275\u0275text(12, "Borrar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.solicitante, " report\xF3 el ", ctx_r0.fechaHoraMeta(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.fecha));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.contenido) || "Sin contenido.");
  }
}
function GestionIncidenciasComponent_div_75_ng_container_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 85);
    \u0275\u0275text(2, "Editar incidencia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 92)(4, "label");
    \u0275\u0275text(5, "Asunto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function GestionIncidenciasComponent_div_75_ng_container_60_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.asunto, $event) || (ctx_r0.editForm.asunto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 93);
    \u0275\u0275twoWayListener("ngModelChange", function GestionIncidenciasComponent_div_75_ng_container_60_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.tipo, $event) || (ctx_r0.editForm.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Contenido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 94);
    \u0275\u0275twoWayListener("ngModelChange", function GestionIncidenciasComponent_div_75_ng_container_60_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.contenido, $event) || (ctx_r0.editForm.contenido = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 89)(14, "button", 95);
    \u0275\u0275listener("click", function GestionIncidenciasComponent_div_75_ng_container_60_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.guardarEdicion());
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 96);
    \u0275\u0275listener("click", function GestionIncidenciasComponent_div_75_ng_container_60_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelarEdicion());
    });
    \u0275\u0275text(17, "Cancelar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.asunto);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.tipo);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.contenido);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.guardando ? "Guardando..." : "Guardar");
  }
}
function GestionIncidenciasComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function GestionIncidenciasComponent_div_75_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275listener("click", function GestionIncidenciasComponent_div_75_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 62)(3, "span", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 64);
    \u0275\u0275listener("click", function GestionIncidenciasComponent_div_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 65);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 66)(10, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 68);
    \u0275\u0275element(12, "path", 69)(13, "line", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 71);
    \u0275\u0275text(15, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 72);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 68);
    \u0275\u0275element(20, "circle", 14)(21, "polyline", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "span", 71);
    \u0275\u0275text(23, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 68);
    \u0275\u0275element(28, "path", 74)(29, "circle", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "span", 71);
    \u0275\u0275text(31, "Solicitante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 72)(33, "span", 76);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 68);
    \u0275\u0275element(38, "path", 74)(39, "circle", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span", 71);
    \u0275\u0275text(41, "Asignada a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 72);
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 67);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 68);
    \u0275\u0275element(46, "rect", 77)(47, "line", 78)(48, "line", 79)(49, "line", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "span", 71);
    \u0275\u0275text(51, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 72);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 81);
    \u0275\u0275text(55, "Archivos adjuntos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 82)(57, "span", 83);
    \u0275\u0275text(58, "Las incidencias no manejan archivos adjuntos.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(59, GestionIncidenciasComponent_div_75_ng_container_59_Template, 13, 3, "ng-container", 84)(60, GestionIncidenciasComponent_div_75_ng_container_60_Template, 18, 5, "ng-container", 84);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Ticket ID-#", ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.numeroTicket);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Incidencia ID-#", ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.id);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate((ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.tipo) || "\u2014");
    \u0275\u0275advance(7);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge ", ctx_r0.estadoClase(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.estado)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.estadoTexto(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.estado));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.inicial(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.solicitante));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.solicitante) || "\u2014", " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.asignadaA) || "Sin asignar");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.fechaLarga(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.fecha));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r0.modoEdicion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.modoEdicion);
  }
}
var GestionIncidenciasComponent = class _GestionIncidenciasComponent {
  constructor(servicioAuth, servicioAdmin, router, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioAdmin = servicioAdmin;
    this.router = router;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.tabActivo = "pendientes";
    this.cargando = false;
    this.errorMsg = "";
    this.pendientes = [];
    this.revision = [];
    this.atendidas = [];
    this.incidenciaSeleccionada = null;
    this.detalleModal = null;
    this.cargandoModal = false;
    this.modoEdicion = false;
    this.guardando = false;
    this.editForm = { asunto: "", tipo: "", contenido: "" };
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarTab("pendientes");
  }
  // â”€â”€ CARGA DE DATOS REALES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Carga las incidencias del tab activo desde el backend
  cargarTab(tab) {
    this.tabActivo = tab;
    this.cargando = true;
    this.errorMsg = "";
    this.servicioAdmin.listarIncidencias(tab).subscribe({
      next: (datos) => {
        if (tab === "pendientes")
          this.pendientes = datos;
        if (tab === "revision")
          this.revision = datos;
        if (tab === "atendidas")
          this.atendidas = datos;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = "No se pudo cargar las incidencias.";
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
  cambiarTab(tab) {
    const yaHayDatos = tab === "pendientes" && this.pendientes.length > 0 || tab === "revision" && this.revision.length > 0 || tab === "atendidas" && this.atendidas.length > 0;
    this.tabActivo = tab;
    if (!yaHayDatos)
      this.cargarTab(tab);
  }
  get incidenciasActivas() {
    if (this.tabActivo === "pendientes")
      return this.pendientes;
    if (this.tabActivo === "revision")
      return this.revision;
    return this.atendidas;
  }
  // â”€â”€ MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Abre el modal y carga el detalle completo desde el backend
  revisar(item) {
    this.incidenciaSeleccionada = item;
    this.detalleModal = null;
    this.cargandoModal = true;
    this.servicioAdmin.obtenerDetalleIncidencia(item.id).subscribe({
      next: (detalle) => {
        this.detalleModal = detalle;
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
    this.incidenciaSeleccionada = null;
    this.detalleModal = null;
    this.modoEdicion = false;
  }
  activarEdicion() {
    if (!this.detalleModal)
      return;
    this.editForm = {
      asunto: this.detalleModal.asunto || "",
      tipo: this.detalleModal.tipo || "",
      contenido: this.detalleModal.contenido || ""
    };
    this.modoEdicion = true;
  }
  cancelarEdicion() {
    this.modoEdicion = false;
  }
  guardarEdicion() {
    if (!this.detalleModal)
      return;
    this.guardando = true;
    const id = this.detalleModal.id;
    this.servicioAdmin.editarIncidencia(id, this.editForm).subscribe({
      next: () => {
        this.guardando = false;
        this.modoEdicion = false;
        this.servicioAdmin.obtenerDetalleIncidencia(id).subscribe((d) => {
          this.detalleModal = d;
          this.cdr.detectChanges();
        });
        this.recargarLista();
        this.cdr.detectChanges();
      },
      error: () => {
        this.guardando = false;
        alert("No se pudo guardar la incidencia.");
      }
    });
  }
  borrarIncidencia() {
    if (!this.detalleModal)
      return;
    if (!confirm("\xC2\xBFSeguro que deseas eliminar esta incidencia? Esta acci\xC3\xB3n no se puede deshacer."))
      return;
    const id = this.detalleModal.id;
    this.servicioAdmin.eliminarIncidencia(id).subscribe({
      next: () => {
        this.cerrarModal();
        this.recargarLista();
      },
      error: () => alert("No se pudo eliminar la incidencia.")
    });
  }
  recargarLista() {
    this.cargarTab(this.tabActivo);
  }
  // â”€â”€ HELPERS DE FORMATO PARA EL MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Inicial para el avatar (ej. "Grace GalÃ¡n" â†’ "G")
  inicial(txt) {
    return (txt?.trim()?.charAt(0) || "?").toUpperCase();
  }
  // Estado de la incidencia â†’ texto + clase de badge
  estadoTexto(e) {
    switch ((e || "").toUpperCase()) {
      case "REPORTADA":
        return "Pendiente";
      case "EN_REVISION":
        return "Asignada";
      case "RESUELTA":
        return "Resuelta";
      case "RECHAZADA":
        return "Rechazada";
      default:
        return e || "\xE2\u20AC\u201D";
    }
  }
  estadoClase(e) {
    switch ((e || "").toUpperCase()) {
      case "EN_REVISION":
        return "badge-revision";
      case "RESUELTA":
        return "badge-aprobado";
      case "RECHAZADA":
        return "badge-rechazado";
      default:
        return "badge-pendiente";
    }
  }
  // "2026-03-30T18:58:00" â†’ "Marzo 30, 2026"
  fechaLarga(iso) {
    if (!iso)
      return "\xE2\u20AC\u201D";
    const d = new Date(iso);
    if (isNaN(d.getTime()))
      return "\xE2\u20AC\u201D";
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${meses[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }
  // "2026-03-30T18:58:00" â†’ "30 de Marzo de 2026 a las 18:58"
  fechaHoraMeta(iso) {
    if (!iso)
      return "";
    const d = new Date(iso);
    if (isNaN(d.getTime()))
      return "";
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const hh = d.getHours().toString().padStart(2, "0");
    const mm = d.getMinutes().toString().padStart(2, "0");
    return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()} a las ${hh}:${mm}`;
  }
  // â”€â”€ NAVEGACIÃ“N SIDEBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  irAInicio() {
    this.router.navigate(["/dashboard/admin"]);
  }
  irAGestionTickets() {
    this.router.navigate(["/dashboard/gestion-tickets"]);
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
  static {
    this.\u0275fac = function GestionIncidenciasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GestionIncidenciasComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioAdmin), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GestionIncidenciasComponent, selectors: [["app-gestion-incidencias"]], decls: 76, vars: 13, consts: [[1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", 1, "sidebar-logo"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "16", "height", "16"], ["d", "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"], ["d", "M9 21V12h6v9"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M16 5V3M8 5V3M2 9h20"], ["d", "M8 13h4M8 17h8"], [1, "nav-item", "active"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["cx", "12", "cy", "16", "r", "0.5", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "1"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "16", "y1", "11", "x2", "22", "y2", "11"], [1, "nav-item"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], [1, "sidebar-spacer"], [1, "main-area"], [1, "topbar"], [1, "page-title"], [1, "topbar-right"], ["aria-label", "Notificaciones", 1, "btn-notif"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "20", "height", "20"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:36px;height:36px;border-radius:50%;object-fit:cover", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "22", "height", "22", 4, "ngIf"], [1, "page-content"], [1, "panel"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "incidencias-list"], ["class", "incidencia-card", 3, "resaltado", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "panel-footer"], ["disabled", "", "title", "Solo los usuarios pueden crear incidencias", 1, "btn-nueva"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["alt", "avatar", 2, "width", "36px", "height", "36px", "border-radius", "50%", "object-fit", "cover", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "22", "height", "22"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "incidencia-card"], [1, "incidencia-info"], [1, "incidencia-tipo"], [1, "incidencia-tema"], [1, "btn-revisar", 3, "click"], [1, "empty-state"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "modal-ticket-id"], [1, "modal-close", 3, "click"], [1, "modal-titulo"], [1, "modal-campos"], [1, "modal-campo"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#8a9ab8", "stroke-width", "2", "width", "16", "height", "16"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], [1, "campo-label"], [1, "campo-valor"], ["points", "12 6 12 12 16 14"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "avatar-mini"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "modal-adjuntos-titulo"], [1, "modal-adjuntos"], [1, "adjunto-vacio"], [4, "ngIf"], [1, "modal-asunto-titulo"], [1, "modal-asunto-meta"], [1, "modal-asunto-cuerpo"], [2, "white-space", "pre-line"], [1, "modal-acciones"], [1, "btn-editar", 3, "click"], [1, "btn-borrar", 3, "click"], [1, "modal-edit"], ["type", "text", 1, "edit-input", 3, "ngModelChange", "ngModel"], ["rows", "5", 1, "edit-input", 3, "ngModelChange", "ngModel"], [1, "btn-editar", 3, "click", "disabled"], [1, "btn-borrar", 2, "color", "#6b7488", "border-color", "#d5dae6", 3, "click"]], template: function GestionIncidenciasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 5)(6, "a", 6);
        \u0275\u0275listener("click", function GestionIncidenciasComponent_Template_a_click_6_listener() {
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
        \u0275\u0275listener("click", function GestionIncidenciasComponent_Template_a_click_11_listener() {
          return ctx.irAGestionTickets();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 7);
        \u0275\u0275element(13, "rect", 10)(14, "path", 11)(15, "path", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Gesti\xF3n de tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "a", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 7);
        \u0275\u0275element(19, "circle", 14)(20, "line", 15)(21, "circle", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Gesti\xF3n de incidencias ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "a", 6);
        \u0275\u0275listener("click", function GestionIncidenciasComponent_Template_a_click_23_listener() {
          return ctx.irACrearUsuario();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 7);
        \u0275\u0275element(25, "path", 17)(26, "circle", 18)(27, "line", 19)(28, "line", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " Registro de usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 7);
        \u0275\u0275element(32, "path", 17)(33, "circle", 18)(34, "path", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " Usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "a", 21);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 7);
        \u0275\u0275element(38, "circle", 23)(39, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " Administraci\xF3n ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(41, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 26)(43, "header", 27)(44, "h1", 28);
        \u0275\u0275text(45, "Gesti\xF3n de incidencias");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 29)(47, "button", 30);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 31);
        \u0275\u0275element(49, "path", 32)(50, "path", 33);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(51, "div", 34)(52, "div", 35)(53, "span", 36);
        \u0275\u0275text(54);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "span", 37);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 38);
        \u0275\u0275template(58, GestionIncidenciasComponent_img_58_Template, 1, 1, "img", 39)(59, GestionIncidenciasComponent__svg_svg_59_Template, 2, 0, "svg", 40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "div", 41)(61, "div", 42)(62, "nav", 43)(63, "button", 44);
        \u0275\u0275listener("click", function GestionIncidenciasComponent_Template_button_click_63_listener() {
          return ctx.cambiarTab("pendientes");
        });
        \u0275\u0275text(64, " Incidencias pendientes ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "button", 44);
        \u0275\u0275listener("click", function GestionIncidenciasComponent_Template_button_click_65_listener() {
          return ctx.cambiarTab("revision");
        });
        \u0275\u0275text(66, " En revisi\xF3n ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "button", 44);
        \u0275\u0275listener("click", function GestionIncidenciasComponent_Template_button_click_67_listener() {
          return ctx.cambiarTab("atendidas");
        });
        \u0275\u0275text(68, " Incidencias atendidas ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 45);
        \u0275\u0275template(70, GestionIncidenciasComponent_div_70_Template, 8, 6, "div", 46)(71, GestionIncidenciasComponent_div_71_Template, 2, 0, "div", 47);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 48)(73, "button", 49);
        \u0275\u0275text(74, " Nueva incidencia ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(75, GestionIncidenciasComponent_div_75_Template, 61, 13, "div", 50);
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
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.tabActivo === "pendientes");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tabActivo === "revision");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tabActivo === "atendidas");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.incidenciasActivas);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.incidenciasActivas.length === 0);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.incidenciaSeleccionada);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  min-height: 100vh;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 64px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-notif[_ngcontent-%COMP%] {\n  background: #f0f2f8;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #5a6a8a;\n  transition: background 0.15s;\n}\n.btn-notif[_ngcontent-%COMP%]:hover {\n  background: #e0e4ef;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #e8eaf6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 14px;\n  padding: 24px 28px 28px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 2px solid #e8eaf0;\n  margin-bottom: 24px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #8a9ab8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n  font-weight: 700;\n  border-bottom-color: #1a2b5e;\n}\n.incidencias-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  flex: 1;\n}\n.incidencia-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border: 1px solid #e8eaf0;\n  border-radius: 10px;\n  background: #fff;\n  transition: box-shadow 0.15s;\n}\n.incidencia-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 3px 12px rgba(26, 43, 94, 0.09);\n}\n.incidencia-card.resaltado[_ngcontent-%COMP%] {\n  border-color: #e8a020;\n  border-width: 1.5px;\n}\n.incidencia-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.incidencia-tipo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab8;\n  margin: 0 0 4px;\n}\n.incidencia-tema[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-revisar[_ngcontent-%COMP%] {\n  padding: 9px 22px;\n  border: none;\n  border-radius: 7px;\n  background: #1a2b5e;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.btn-revisar[_ngcontent-%COMP%]:hover {\n  background: #253d82;\n}\n.btn-revisar.naranja[_ngcontent-%COMP%] {\n  background: #e8a020;\n}\n.btn-revisar.naranja[_ngcontent-%COMP%]:hover {\n  background: #c98c18;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #b0bdd4;\n  font-size: 13px;\n  padding: 40px 0;\n}\n.panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  padding-top: 20px;\n  border-top: 1px solid #f0f2f8;\n}\n.btn-nueva[_ngcontent-%COMP%] {\n  padding: 11px 36px;\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-nueva[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #253d82;\n}\n.btn-nueva[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n  padding: 28px 32px 24px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.modal-ticket-id[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  color: #8a9ab8;\n  transition: color 0.15s;\n  line-height: 1;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.modal-titulo[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 20px 0;\n}\n.modal-campos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.modal-campo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f0f2f8;\n}\n.modal-campo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.campo-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab8;\n  min-width: 90px;\n}\n.campo-valor[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1a2b5e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.badge-pendiente[_ngcontent-%COMP%] {\n  background: #fef3e2;\n  color: #b7720a;\n}\n.badge-revision[_ngcontent-%COMP%] {\n  background: #e8f4fd;\n  color: #1a6fa8;\n}\n.badge-aprobado[_ngcontent-%COMP%] {\n  background: #e7f7ef;\n  color: #1e9e6e;\n}\n.badge-rechazado[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.adjunto-vacio[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa3b7;\n  font-style: italic;\n}\n.modal-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: 8px 0 16px;\n}\n.modal-edit[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a5468;\n  margin-top: 6px;\n}\n.edit-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  padding: 9px 12px;\n  font-size: 13px;\n  color: #26324c;\n  font-family: inherit;\n  outline: none;\n}\n.edit-input[_ngcontent-%COMP%]:focus {\n  border-color: #b9c9f7;\n}\n.avatar-mini[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #dde3f0;\n  color: #1a2b5e;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-adjuntos-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin-bottom: 8px;\n}\n.modal-adjuntos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.adjunto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #1a6fa8;\n  cursor: pointer;\n}\n.adjunto[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.modal-adjuntos-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.btn-anadir-archivo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: none;\n  font-size: 12px;\n  color: #1a2b5e;\n  cursor: pointer;\n  font-weight: 600;\n  padding: 0;\n}\n.btn-eliminar-docs[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #c8d0e4;\n  border-radius: 5px;\n  font-size: 12px;\n  color: #4a5568;\n  cursor: pointer;\n  padding: 5px 12px;\n}\n.btn-eliminar-docs[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.modal-asunto-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin-bottom: 4px;\n}\n.modal-asunto-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9ab8;\n  margin-bottom: 10px;\n}\n.modal-asunto-cuerpo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2d3748;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.modal-asunto-cuerpo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n}\n.modal-asunto-cuerpo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 0 18px;\n  padding: 0;\n}\n.modal-asunto-cuerpo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.modal-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding-top: 12px;\n  border-top: 1px solid #f0f2f8;\n}\n.btn-editar[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 7px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-editar[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.btn-borrar[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #f5c6c6;\n  border-radius: 5px;\n  padding: 7px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #c0392b;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-borrar[_ngcontent-%COMP%]:hover {\n  background: #fdf0f0;\n}\n/*# sourceMappingURL=gestion-incidencias.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestionIncidenciasComponent, [{
    type: Component,
    args: [{ selector: "app-gestion-incidencias", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- pages/gestion-incidencias/gestion-incidencias.component.html -->
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
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
            <path d="M9 21V12h6v9"/>
          </svg>
          Inicio
        </a>

        <!-- Gesti\xF3n de tickets -->
        <a class="nav-item" (click)="irAGestionTickets()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <path d="M16 5V3M8 5V3M2 9h20"/>
            <path d="M8 13h4M8 17h8"/>
          </svg>
          Gesti\xF3n de tickets
        </a>

        <!-- Gesti\xF3n de incidencias \u2014 ACTIVO -->
        <a class="nav-item active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="1"/>
          </svg>
          Gesti\xF3n de incidencias
        </a>

        <!-- Registro de usuarios -->
        <a class="nav-item" (click)="irACrearUsuario()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <line x1="19" y1="8" x2="19" y2="14"/>
            <line x1="16" y1="11" x2="22" y2="11"/>
          </svg>
          Registro de usuarios
        </a>

        <!-- Usuarios -->
        <a class="nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
          </svg>
          Usuarios
        </a>

        <!-- Administraci\xF3n -->
        <a class="nav-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
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
        <h1 class="page-title">Gesti\xF3n de incidencias</h1>
        <div class="topbar-right">
          <button class="btn-notif" aria-label="Notificaciones">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <div class="user-chip">
            <div class="user-text">
              <span class="user-name">{{ usuario?.nombre || usuario?.codigo }}</span>
              <span class="user-code">{{ usuario?.codigo }}</span>
            </div>
            <div class="user-avatar">
              <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar" style="width:36px;height:36px;border-radius:50%;object-fit:cover" />
              <svg *ngIf="!fotoUrl" viewBox="0 0 24 24" fill="#9aaac5" width="22" height="22">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <!-- CONTENIDO -->
      <div class="page-content">
        <div class="panel">

          <!-- TABS -->
          <nav class="tabs">
            <button class="tab-btn" [class.active]="tabActivo === 'pendientes'" (click)="cambiarTab('pendientes')">
              Incidencias pendientes
            </button>
            <button class="tab-btn" [class.active]="tabActivo === 'revision'" (click)="cambiarTab('revision')">
              En revisi\xF3n
            </button>
            <button class="tab-btn" [class.active]="tabActivo === 'atendidas'" (click)="cambiarTab('atendidas')">
              Incidencias atendidas
            </button>
          </nav>

          <!-- LISTA -->
          <div class="incidencias-list">
            <div
              class="incidencia-card"
              *ngFor="let item of incidenciasActivas"
              [class.resaltado]="item.resaltado"
            >
              <div class="incidencia-info">
                <p class="incidencia-tipo">Tipo: {{ item.tipo }}</p>
                <p class="incidencia-tema">{{ item.tema }}</p>
              </div>
              <button class="btn-revisar" [class.naranja]="item.resaltado" (click)="revisar(item)">
                Revisar
              </button>
            </div>

            <div class="empty-state" *ngIf="incidenciasActivas.length === 0">
              No hay incidencias en esta categor\xEDa.
            </div>
          </div>

          <!-- FOOTER -->
          <div class="panel-footer">
            <button class="btn-nueva" disabled title="Solo los usuarios pueden crear incidencias">
              Nueva incidencia
            </button>
          </div>

        </div>
      </div>

    </div>
  </div>
</div>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL INCIDENCIA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal-overlay" *ngIf="incidenciaSeleccionada" (click)="cerrarModal()">
  <div class="modal-box" (click)="$event.stopPropagation()">

    <div class="modal-header">
      <span class="modal-ticket-id">Ticket ID-#{{ detalleModal?.numeroTicket }}</span>
      <button class="modal-close" (click)="cerrarModal()">&#10005;</button>
    </div>

    <h2 class="modal-titulo">Incidencia ID-#{{ detalleModal?.id }}</h2>

    <div class="modal-campos">
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
        <span class="campo-label">Tipo</span>
        <span class="campo-valor">{{ detalleModal?.tipo || '\u2014' }}</span>
      </div>
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <span class="campo-label">Estado</span>
        <span class="badge {{ estadoClase(detalleModal?.estado) }}">{{ estadoTexto(detalleModal?.estado) }}</span>
      </div>
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span class="campo-label">Solicitante</span>
        <span class="campo-valor">
          <span class="avatar-mini">{{ inicial(detalleModal?.solicitante) }}</span>
          {{ detalleModal?.solicitante || '\u2014' }}
        </span>
      </div>
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span class="campo-label">Asignada a</span>
        <span class="campo-valor">{{ detalleModal?.asignadaA || 'Sin asignar' }}</span>
      </div>
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span class="campo-label">Fecha</span>
        <span class="campo-valor">{{ fechaLarga(detalleModal?.fecha) }}</span>
      </div>
    </div>

    <div class="modal-adjuntos-titulo">Archivos adjuntos</div>
    <div class="modal-adjuntos">
      <span class="adjunto-vacio">Las incidencias no manejan archivos adjuntos.</span>
    </div>

    <!-- Modo lectura -->
    <ng-container *ngIf="!modoEdicion">
      <div class="modal-asunto-titulo">Contenido</div>
      <div class="modal-asunto-meta">{{ detalleModal?.solicitante }} report\xF3 el {{ fechaHoraMeta(detalleModal?.fecha) }}</div>
      <div class="modal-asunto-cuerpo">
        <p style="white-space:pre-line">{{ detalleModal?.contenido || 'Sin contenido.' }}</p>
      </div>
      <div class="modal-acciones">
        <button class="btn-editar" (click)="activarEdicion()">Editar</button>
        <button class="btn-borrar" (click)="borrarIncidencia()">Borrar</button>
      </div>
    </ng-container>

    <!-- Modo edici\xF3n -->
    <ng-container *ngIf="modoEdicion">
      <div class="modal-asunto-titulo">Editar incidencia</div>
      <div class="modal-edit">
        <label>Asunto</label>
        <input class="edit-input" type="text" [(ngModel)]="editForm.asunto" />
        <label>Tipo</label>
        <input class="edit-input" type="text" [(ngModel)]="editForm.tipo" />
        <label>Contenido</label>
        <textarea class="edit-input" rows="5" [(ngModel)]="editForm.contenido"></textarea>
      </div>
      <div class="modal-acciones">
        <button class="btn-editar" (click)="guardarEdicion()" [disabled]="guardando">{{ guardando ? 'Guardando...' : 'Guardar' }}</button>
        <button class="btn-borrar" style="color:#6b7488;border-color:#d5dae6" (click)="cancelarEdicion()">Cancelar</button>
      </div>
    </ng-container>

  </div>
</div>`, styles: ['/* src/app/pages/gestion-incidencia/gestion-incidencias.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 220px;\n  min-height: 100vh;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 64px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #fff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-notif {\n  background: #f0f2f8;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #5a6a8a;\n  transition: background 0.15s;\n}\n.btn-notif:hover {\n  background: #e0e4ef;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #e8eaf6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-content {\n  flex: 1;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n}\n.panel {\n  background: #fff;\n  border-radius: 14px;\n  padding: 24px 28px 28px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.tabs {\n  display: flex;\n  border-bottom: 2px solid #e8eaf0;\n  margin-bottom: 24px;\n}\n.tab-btn {\n  background: none;\n  border: none;\n  padding: 12px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  color: #8a9ab8;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  margin-bottom: -2px;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tab-btn:hover {\n  color: #1a2b5e;\n}\n.tab-btn.active {\n  color: #1a2b5e;\n  font-weight: 700;\n  border-bottom-color: #1a2b5e;\n}\n.incidencias-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  flex: 1;\n}\n.incidencia-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border: 1px solid #e8eaf0;\n  border-radius: 10px;\n  background: #fff;\n  transition: box-shadow 0.15s;\n}\n.incidencia-card:hover {\n  box-shadow: 0 3px 12px rgba(26, 43, 94, 0.09);\n}\n.incidencia-card.resaltado {\n  border-color: #e8a020;\n  border-width: 1.5px;\n}\n.incidencia-info {\n  flex: 1;\n}\n.incidencia-tipo {\n  font-size: 12px;\n  color: #8a9ab8;\n  margin: 0 0 4px;\n}\n.incidencia-tema {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-revisar {\n  padding: 9px 22px;\n  border: none;\n  border-radius: 7px;\n  background: #1a2b5e;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.btn-revisar:hover {\n  background: #253d82;\n}\n.btn-revisar.naranja {\n  background: #e8a020;\n}\n.btn-revisar.naranja:hover {\n  background: #c98c18;\n}\n.empty-state {\n  text-align: center;\n  color: #b0bdd4;\n  font-size: 13px;\n  padding: 40px 0;\n}\n.panel-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  padding-top: 20px;\n  border-top: 1px solid #f0f2f8;\n}\n.btn-nueva {\n  padding: 11px 36px;\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-nueva:hover:not(:disabled) {\n  background: #253d82;\n}\n.btn-nueva:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-box {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n  padding: 28px 32px 24px;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.modal-ticket-id {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.modal-close {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  color: #8a9ab8;\n  transition: color 0.15s;\n  line-height: 1;\n}\n.modal-close:hover {\n  color: #1a2b5e;\n}\n.modal-titulo {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 20px 0;\n}\n.modal-campos {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.modal-campo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f0f2f8;\n}\n.modal-campo:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.campo-label {\n  font-size: 13px;\n  color: #8a9ab8;\n  min-width: 90px;\n}\n.campo-valor {\n  font-size: 13px;\n  color: #1a2b5e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.badge {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.badge-pendiente {\n  background: #fef3e2;\n  color: #b7720a;\n}\n.badge-revision {\n  background: #e8f4fd;\n  color: #1a6fa8;\n}\n.badge-aprobado {\n  background: #e7f7ef;\n  color: #1e9e6e;\n}\n.badge-rechazado {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.adjunto-vacio {\n  font-size: 12px;\n  color: #9aa3b7;\n  font-style: italic;\n}\n.modal-edit {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: 8px 0 16px;\n}\n.modal-edit label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a5468;\n  margin-top: 6px;\n}\n.edit-input {\n  width: 100%;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  padding: 9px 12px;\n  font-size: 13px;\n  color: #26324c;\n  font-family: inherit;\n  outline: none;\n}\n.edit-input:focus {\n  border-color: #b9c9f7;\n}\n.avatar-mini {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #dde3f0;\n  color: #1a2b5e;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-adjuntos-titulo {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin-bottom: 8px;\n}\n.modal-adjuntos {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.adjunto {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #1a6fa8;\n  cursor: pointer;\n}\n.adjunto:hover {\n  text-decoration: underline;\n}\n.modal-adjuntos-acciones {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.btn-anadir-archivo {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: none;\n  font-size: 12px;\n  color: #1a2b5e;\n  cursor: pointer;\n  font-weight: 600;\n  padding: 0;\n}\n.btn-eliminar-docs {\n  background: none;\n  border: 1px solid #c8d0e4;\n  border-radius: 5px;\n  font-size: 12px;\n  color: #4a5568;\n  cursor: pointer;\n  padding: 5px 12px;\n}\n.btn-eliminar-docs:hover {\n  background: #f0f2f8;\n}\n.modal-asunto-titulo {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin-bottom: 4px;\n}\n.modal-asunto-meta {\n  font-size: 11px;\n  color: #8a9ab8;\n  margin-bottom: 10px;\n}\n.modal-asunto-cuerpo {\n  font-size: 13px;\n  color: #2d3748;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.modal-asunto-cuerpo p {\n  margin: 0 0 8px 0;\n}\n.modal-asunto-cuerpo ul {\n  margin: 8px 0 0 18px;\n  padding: 0;\n}\n.modal-asunto-cuerpo li {\n  margin-bottom: 4px;\n}\n.modal-acciones {\n  display: flex;\n  gap: 10px;\n  padding-top: 12px;\n  border-top: 1px solid #f0f2f8;\n}\n.btn-editar {\n  background: none;\n  border: 1px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 7px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-editar:hover {\n  background: #f0f2f8;\n}\n.btn-borrar {\n  background: none;\n  border: 1px solid #f5c6c6;\n  border-radius: 5px;\n  padding: 7px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #c0392b;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-borrar:hover {\n  background: #fdf0f0;\n}\n/*# sourceMappingURL=gestion-incidencias.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioAdmin }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GestionIncidenciasComponent, { className: "GestionIncidenciasComponent", filePath: "src/app/pages/gestion-incidencia/gestion-incidencia.component.ts", lineNumber: 20 });
})();
export {
  GestionIncidenciasComponent
};
//# sourceMappingURL=chunk-SLSWCOG5.js.map
