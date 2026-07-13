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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-K5TRC5YK.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  Router,
  forkJoin,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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

// src/app/pages/gestion-tickets/gestion-tickets.component.ts
function GestionTicketsComponent_img_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 68);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function GestionTicketsComponent__svg_svg_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 69);
    \u0275\u0275element(1, "path", 70);
    \u0275\u0275elementEnd();
  }
}
function GestionTicketsComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_91_Template_div_click_0_listener() {
      const t_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModal(t_r3));
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 75);
    \u0275\u0275element(6, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 78)(11, "span", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 80);
    \u0275\u0275element(13, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 82);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3.titulo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3.diasRestantes, " D\xEDas ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.descripcion);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r3.adjuntos, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ticket ", t_r3.numero);
  }
}
function GestionTicketsComponent_div_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1, "Sin resultados");
    \u0275\u0275elementEnd();
  }
}
function GestionTicketsComponent_div_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_104_Template_div_click_0_listener() {
      const t_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModal(t_r5));
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 74);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 75);
    \u0275\u0275element(6, "path", 76);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "p", 77);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 78)(11, "span", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 80);
    \u0275\u0275element(13, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "span", 82);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5.titulo);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r5.diasRestantes, " D\xEDas ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5.descripcion);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r5.adjuntos, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ticket ", t_r5.numero);
  }
}
function GestionTicketsComponent_div_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1, "Sin resultados");
    \u0275\u0275elementEnd();
  }
}
function GestionTicketsComponent_div_114_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_114_Template_div_click_0_listener() {
      const t_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModal(t_r7));
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "span", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 78)(7, "span", 79);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(8, "svg", 80);
    \u0275\u0275element(9, "path", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "span", 82);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7.titulo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7.descripcion);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r7.adjuntos, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Ticket ", t_r7.numero);
  }
}
function GestionTicketsComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83);
    \u0275\u0275text(1, "Sin resultados");
    \u0275\u0275elementEnd();
  }
}
function GestionTicketsComponent_div_116_span_59_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 118);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 51);
    \u0275\u0275element(2, "path", 119);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", a_r10.ruta, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", a_r10.nombreArchivo, " ");
  }
}
function GestionTicketsComponent_div_116_span_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 115);
    \u0275\u0275template(1, GestionTicketsComponent_div_116_span_59_a_1_Template, 4, 2, "a", 116);
    \u0275\u0275elementStart(2, "button", 117);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_span_59_Template_button_click_2_listener() {
      const a_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.borrarAdjunto(a_r10));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r10.ruta);
  }
}
function GestionTicketsComponent_div_116_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 120);
    \u0275\u0275text(1, "Sin archivos adjuntos");
    \u0275\u0275elementEnd();
  }
}
function GestionTicketsComponent_div_116_ng_container_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 121);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 123)(6, "p", 124);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 125)(9, "button", 126);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_ng_container_69_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.activarEdicion());
    });
    \u0275\u0275text(10, "Editar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 127);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_ng_container_69_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.borrarTicket());
    });
    \u0275\u0275text(12, "Borrar");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Asunto: ", ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.asunto);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.solicitadoPor, " coment\xF3 el ", ctx_r0.fechaHoraMeta(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.creadoEn));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.descripcion) || "Sin contenido.");
  }
}
function GestionTicketsComponent_div_116_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 121);
    \u0275\u0275text(2, "Editar ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 128)(4, "label");
    \u0275\u0275text(5, "Asunto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function GestionTicketsComponent_div_116_ng_container_70_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.asunto, $event) || (ctx_r0.editForm.asunto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "label");
    \u0275\u0275text(8, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function GestionTicketsComponent_div_116_ng_container_70_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.tipo, $event) || (ctx_r0.editForm.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "label");
    \u0275\u0275text(11, "Prioridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 130);
    \u0275\u0275twoWayListener("ngModelChange", function GestionTicketsComponent_div_116_ng_container_70_Template_select_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.prioridad, $event) || (ctx_r0.editForm.prioridad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(13, "option", 131);
    \u0275\u0275text(14, "Alta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "option", 132);
    \u0275\u0275text(16, "Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "option", 133);
    \u0275\u0275text(18, "Baja");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label");
    \u0275\u0275text(20, "Contenido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "textarea", 134);
    \u0275\u0275twoWayListener("ngModelChange", function GestionTicketsComponent_div_116_ng_container_70_Template_textarea_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.editForm.descripcion, $event) || (ctx_r0.editForm.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 125)(23, "button", 135);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_ng_container_70_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.guardarEdicion());
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 136);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_ng_container_70_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelarEdicion());
    });
    \u0275\u0275text(26, "Cancelar");
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
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.prioridad);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.editForm.descripcion);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.guardando ? "Guardando..." : "Guardar");
  }
}
function GestionTicketsComponent_div_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 87)(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 89);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 90);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 91)(10, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 93);
    \u0275\u0275element(12, "path", 94)(13, "line", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "span", 96);
    \u0275\u0275text(15, "Prioridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 93);
    \u0275\u0275element(20, "circle", 14)(21, "polyline", 97);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "span", 96);
    \u0275\u0275text(23, "Estado");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(27, "svg", 93);
    \u0275\u0275element(28, "path", 98)(29, "circle", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(30, "span", 96);
    \u0275\u0275text(31, "Solicitante");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 100)(33, "span", 101);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(37, "svg", 93);
    \u0275\u0275element(38, "path", 98)(39, "circle", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(40, "span", 96);
    \u0275\u0275text(41, "Asignado a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span", 100)(43, "span", 101);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 92);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(47, "svg", 93);
    \u0275\u0275element(48, "rect", 102)(49, "line", 103)(50, "line", 104)(51, "line", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(52, "span", 96);
    \u0275\u0275text(53, "Fecha");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 100);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 106);
    \u0275\u0275text(57, "Archivos adjuntos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 107);
    \u0275\u0275template(59, GestionTicketsComponent_div_116_span_59_Template, 4, 1, "span", 108)(60, GestionTicketsComponent_div_116_span_60_Template, 2, 0, "span", 109);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "div", 110)(62, "label", 111);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(63, "svg", 80);
    \u0275\u0275element(64, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(65, " A\xF1adir archivo ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(66, "input", 112);
    \u0275\u0275listener("change", function GestionTicketsComponent_div_116_Template_input_change_66_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onAdjuntoChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "button", 113);
    \u0275\u0275listener("click", function GestionTicketsComponent_div_116_Template_button_click_67_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.borrarTodosAdjuntos());
    });
    \u0275\u0275text(68, "Eliminar documentos");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(69, GestionTicketsComponent_div_116_ng_container_69_Template, 13, 4, "ng-container", 114)(70, GestionTicketsComponent_div_116_ng_container_70_Template, 27, 6, "ng-container", 114);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Ticket ID-", ctx_r0.ticketSeleccionado == null ? null : ctx_r0.ticketSeleccionado.numero);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Ticket ", ctx_r0.ticketSeleccionado == null ? null : ctx_r0.ticketSeleccionado.numero);
    \u0275\u0275advance(8);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge ", ctx_r0.prioridadClase(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.prioridad)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.prioridadTexto(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.prioridad));
    \u0275\u0275advance(7);
    \u0275\u0275classMap(\u0275\u0275interpolate1("badge ", ctx_r0.estadoClase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.estadoTexto());
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.inicial(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.solicitadoPor));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.solicitadoPor) || "\u2014", " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.inicial((ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.asignadoA) || "Sin asignar"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.asignadoA) || "Sin asignar", " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.fechaLarga(ctx_r0.detalleModal == null ? null : ctx_r0.detalleModal.creadoEn));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r0.adjuntosModal);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.adjuntosModal.length === 0);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r0.adjuntosModal.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.modoEdicion);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.modoEdicion);
  }
}
var GestionTicketsComponent = class _GestionTicketsComponent {
  constructor(servicioAuth, servicioAdmin, router, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioAdmin = servicioAdmin;
    this.router = router;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.busqueda = "";
    this.filtroActivo = "Revisa la lista";
    this.cargando = false;
    this.errorMsg = "";
    this.ticketsPendientes = [];
    this.ticketsRevision = [];
    this.ticketsAprobados = [];
    this.ticketSeleccionado = null;
    this.detalleModal = null;
    this.adjuntosModal = [];
    this.cargandoModal = false;
    this.modoEdicion = false;
    this.guardando = false;
    this.editForm = { asunto: "", tipo: "", prioridad: "MEDIA", descripcion: "" };
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarTablero();
  }
  // â”€â”€ CARGA DE DATOS REALES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Carga las 3 columnas del kanban en paralelo desde el backend
  // y mapea cada item al modelo local que usa el HTML
  cargarTablero() {
    this.cargando = true;
    this.errorMsg = "";
    forkJoin({
      pendientes: this.servicioAdmin.obtenerColumnaTablero("EN_REVISION", this.busqueda),
      revision: this.servicioAdmin.obtenerColumnaTablero("EN_PROCESO_ATENCION", this.busqueda),
      aprobados: this.servicioAdmin.obtenerColumnaTablero("COMPLETADO", this.busqueda)
    }).subscribe({
      next: ({ pendientes, revision, aprobados }) => {
        this.ticketsPendientes = pendientes.map((t) => this.mapear(t, "pendientes"));
        this.ticketsRevision = revision.map((t) => this.mapear(t, "revision"));
        this.ticketsAprobados = aprobados.map((t) => this.mapear(t, "aprobados"));
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = "No se pudo cargar el tablero. Verifica la conexi\xC3\xB3n con el backend.";
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }
  // Convierte un TableroTicketItem del backend al TicketAdmin que usa el HTML
  mapear(item, estado) {
    return {
      id: item.numeroTicket,
      titulo: item.asunto,
      descripcion: item.previewUltimoMensaje || "Sin mensajes a\xC3\xBAn.",
      diasRestantes: this.calcularDias(item.actualizadoEn),
      adjuntos: item.totalAdjuntos ?? 0,
      // conteo real de adjuntos del backend
      numero: `#${item.numeroTicket}`,
      estado,
      numeroTicket: item.numeroTicket
    };
  }
  // Calcula cuÃ¡ntos dÃ­as han pasado desde la Ãºltima actualizaciÃ³n
  calcularDias(fechaStr) {
    if (!fechaStr)
      return 0;
    const diff = Date.now() - new Date(fechaStr).getTime();
    return Math.max(0, Math.floor(diff / 864e5));
  }
  // â”€â”€ FILTROS LOCALES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  get pendientesFiltrados() {
    return this.filtrar(this.ticketsPendientes);
  }
  get revisionFiltrados() {
    return this.filtrar(this.ticketsRevision);
  }
  get aprobadosFiltrados() {
    return this.filtrar(this.ticketsAprobados);
  }
  filtrar(lista) {
    if (!this.busqueda.trim())
      return lista;
    const q = this.busqueda.toLowerCase();
    return lista.filter((t) => t.titulo.toLowerCase().includes(q) || t.numero.toLowerCase().includes(q));
  }
  // â”€â”€ MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Abre el modal y carga el detalle completo del ticket desde el backend
  abrirModal(ticket) {
    this.ticketSeleccionado = ticket;
    this.detalleModal = null;
    this.adjuntosModal = [];
    this.cargandoModal = true;
    forkJoin({
      detalle: this.servicioAdmin.obtenerModalTicket(ticket.numeroTicket),
      adjuntos: this.servicioAdmin.obtenerAdjuntos(ticket.numeroTicket)
    }).subscribe({
      next: ({ detalle, adjuntos }) => {
        this.detalleModal = detalle;
        this.adjuntosModal = adjuntos ?? [];
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
    this.ticketSeleccionado = null;
    this.detalleModal = null;
    this.adjuntosModal = [];
    this.modoEdicion = false;
  }
  activarEdicion() {
    if (!this.detalleModal)
      return;
    this.editForm = {
      asunto: this.detalleModal.asunto || "",
      tipo: this.detalleModal.tipoTicket || "",
      prioridad: (this.detalleModal.prioridad || "MEDIA").toUpperCase(),
      descripcion: this.detalleModal.descripcion || ""
    };
    this.modoEdicion = true;
  }
  cancelarEdicion() {
    this.modoEdicion = false;
  }
  guardarEdicion() {
    if (!this.ticketSeleccionado)
      return;
    this.guardando = true;
    const numero = this.ticketSeleccionado.numeroTicket;
    this.servicioAdmin.editarTicket(numero, this.editForm).subscribe({
      next: () => {
        this.guardando = false;
        this.modoEdicion = false;
        this.servicioAdmin.obtenerModalTicket(numero).subscribe((d) => {
          this.detalleModal = d;
          this.cdr.detectChanges();
        });
        this.cargarTablero();
        this.cdr.detectChanges();
      },
      error: () => {
        this.guardando = false;
        alert("No se pudo guardar el ticket.");
      }
    });
  }
  borrarTicket() {
    if (!this.ticketSeleccionado)
      return;
    if (!confirm("\xC2\xBFSeguro que deseas eliminar este ticket? Esta acci\xC3\xB3n no se puede deshacer."))
      return;
    const numero = this.ticketSeleccionado.numeroTicket;
    this.servicioAdmin.eliminarTicket(numero).subscribe({
      next: () => {
        this.cerrarModal();
        this.cargarTablero();
      },
      error: () => alert("No se pudo eliminar el ticket.")
    });
  }
  onAdjuntoChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file || !this.ticketSeleccionado)
      return;
    const numero = this.ticketSeleccionado.numeroTicket;
    this.servicioAdmin.subirAdjunto(numero, file).subscribe({
      next: () => this.recargarAdjuntos(numero),
      error: (err) => alert(err?.error?.message || "No se pudo subir el archivo.")
    });
    input.value = "";
  }
  borrarAdjunto(a) {
    if (!this.ticketSeleccionado || a.idAdjunto == null)
      return;
    const numero = this.ticketSeleccionado.numeroTicket;
    this.servicioAdmin.eliminarAdjunto(numero, a.idAdjunto).subscribe({
      next: () => this.recargarAdjuntos(numero),
      error: () => alert("No se pudo eliminar el archivo.")
    });
  }
  borrarTodosAdjuntos() {
    if (!this.ticketSeleccionado || this.adjuntosModal.length === 0)
      return;
    if (!confirm("\xC2\xBFEliminar todos los documentos de este ticket?"))
      return;
    const numero = this.ticketSeleccionado.numeroTicket;
    this.servicioAdmin.eliminarTodosAdjuntos(numero).subscribe({
      next: () => this.recargarAdjuntos(numero),
      error: () => alert("No se pudieron eliminar los documentos.")
    });
  }
  recargarAdjuntos(numero) {
    this.servicioAdmin.obtenerAdjuntos(numero).subscribe((a) => {
      this.adjuntosModal = a ?? [];
      this.cdr.detectChanges();
    });
  }
  // â”€â”€ HELPERS DE FORMATO PARA EL MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // Iniciales para el avatar (ej. "Grace GalÃ¡n" â†’ "G")
  inicial(txt) {
    return (txt?.trim()?.charAt(0) || "?").toUpperCase();
  }
  // Prioridad ALTA/MEDIA/BAJA â†’ texto legible
  prioridadTexto(p) {
    switch ((p || "").toUpperCase()) {
      case "ALTA":
        return "Alta";
      case "BAJA":
        return "Baja";
      case "MEDIA":
        return "Media";
      default:
        return p || "\xE2\u20AC\u201D";
    }
  }
  prioridadClase(p) {
    switch ((p || "").toUpperCase()) {
      case "ALTA":
        return "badge-alta";
      case "BAJA":
        return "badge-baja";
      default:
        return "badge-media";
    }
  }
  // Estado del ticket para el modal (usa estado + subestado)
  estadoTexto() {
    const e = (this.detalleModal?.estado || "").toUpperCase();
    if (e === "CANCELADO")
      return "Rechazado";
    if (e === "ATENDIDO")
      return "Atendido";
    const sub = (this.detalleModal?.subestado || "").toUpperCase();
    return sub === "EN_REVISION" ? "Pendiente" : "En proceso";
  }
  estadoClase() {
    const e = (this.detalleModal?.estado || "").toUpperCase();
    if (e === "CANCELADO")
      return "badge-rechazado";
    if (e === "ATENDIDO")
      return "badge-aprobado";
    return "badge-pendiente";
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
  // Formatea el peso del adjunto: 246 â†’ "246 kb"
  pesoAdjunto(kb) {
    return (kb != null ? kb : 0) + " kb";
  }
  // Mueve el ticket a otra columna y recarga el tablero
  moverTicket(numero, columna) {
    this.servicioAdmin.moverTicket(numero, columna).subscribe({
      next: () => {
        this.cerrarModal();
        this.cargarTablero();
      },
      error: () => {
        this.errorMsg = "No se pudo mover el ticket.";
        this.cdr.detectChanges();
      }
    });
  }
  // â”€â”€ NAVEGACIÃ“N SIDEBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  irAInicio() {
    this.router.navigate(["/dashboard/admin"]);
  }
  irAGestionIncidencias() {
    this.router.navigate(["/dashboard/gestion-incidencias"]);
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
    this.\u0275fac = function GestionTicketsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GestionTicketsComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioAdmin), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GestionTicketsComponent, selectors: [["app-gestion-tickets"]], decls: 117, vars: 13, consts: [[1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", 1, "sidebar-logo"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "16", "height", "16"], ["d", "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"], ["d", "M9 21V12h6v9"], [1, "nav-item", "active"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M16 5V3M8 5V3M2 9h20"], ["d", "M8 13h4M8 17h8"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["cx", "12", "cy", "16", "r", "0.5", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "1"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "16", "y1", "11", "x2", "22", "y2", "11"], [1, "nav-item"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], [1, "sidebar-spacer"], [1, "main-area"], [1, "topbar"], [1, "page-title"], [1, "topbar-right"], ["aria-label", "Notificaciones", 1, "btn-notif"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "20", "height", "20"], ["d", "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.73 21a2 2 0 0 1-3.46 0"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:36px;height:36px;border-radius:50%;object-fit:cover", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "22", "height", "22", 4, "ngIf"], [1, "page-content"], [1, "seccion-header"], [1, "seccion-titulo"], [1, "seccion-subtitulo"], [1, "toolbar"], [1, "search-wrapper"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "15", "height", "15", 1, "search-icon"], ["fill-rule", "evenodd", "d", "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z", "clip-rule", "evenodd"], ["type", "text", "placeholder", "Buscar tickets por c\xF3digo", 1, "search-input", 3, "ngModelChange", "ngModel"], [1, "filtro-dropdown"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "14", "height", "14"], ["fill-rule", "evenodd", "d", "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "kanban"], [1, "columna"], [1, "columna-header"], [1, "columna-titulo"], [1, "columna-menu"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "16", "height", "16"], ["d", "M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"], [1, "btn-agregar"], ["fill-rule", "evenodd", "d", "M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z", "clip-rule", "evenodd"], [1, "tarjetas"], ["class", "tarjeta", "style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], ["class", "empty-col", 4, "ngIf"], ["class", "tarjeta tarjeta-aprobada", "style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["alt", "avatar", 2, "width", "36px", "height", "36px", "border-radius", "50%", "object-fit", "cover", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "22", "height", "22"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "tarjeta", 2, "cursor", "pointer", 3, "click"], [1, "tarjeta-header"], [1, "tarjeta-titulo"], [1, "tarjeta-dias"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "12", "height", "12"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z", "clip-rule", "evenodd"], [1, "tarjeta-desc"], [1, "tarjeta-footer"], [1, "tarjeta-adjuntos"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "13", "height", "13"], ["fill-rule", "evenodd", "d", "M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z", "clip-rule", "evenodd"], [1, "tarjeta-numero"], [1, "empty-col"], [1, "tarjeta", "tarjeta-aprobada", 2, "cursor", "pointer", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal-box", 3, "click"], [1, "modal-header"], [1, "modal-ticket-id"], [1, "modal-close", 3, "click"], [1, "modal-titulo"], [1, "modal-campos"], [1, "modal-campo"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#8a9ab8", "stroke-width", "2", "width", "16", "height", "16"], ["d", "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"], ["x1", "7", "y1", "7", "x2", "7.01", "y2", "7"], [1, "campo-label"], ["points", "12 6 12 12 16 14"], ["d", "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"], ["cx", "12", "cy", "7", "r", "4"], [1, "campo-valor"], [1, "avatar-mini"], ["x", "3", "y", "4", "width", "18", "height", "18", "rx", "2", "ry", "2"], ["x1", "16", "y1", "2", "x2", "16", "y2", "6"], ["x1", "8", "y1", "2", "x2", "8", "y2", "6"], ["x1", "3", "y1", "10", "x2", "21", "y2", "10"], [1, "modal-adjuntos-titulo"], [1, "modal-adjuntos"], ["class", "adjunto", 4, "ngFor", "ngForOf"], ["class", "adjunto-vacio", 4, "ngIf"], [1, "modal-adjuntos-acciones"], [1, "btn-anadir-archivo", 2, "cursor", "pointer"], ["type", "file", "hidden", "", 3, "change"], [1, "btn-eliminar-docs", 3, "click", "disabled"], [4, "ngIf"], [1, "adjunto"], ["target", "_blank", "style", "display:inline-flex;align-items:center;gap:6px;color:inherit;text-decoration:none", 3, "href", 4, "ngIf"], ["title", "Eliminar", 1, "adjunto-x", 3, "click"], ["target", "_blank", 2, "display", "inline-flex", "align-items", "center", "gap", "6px", "color", "inherit", "text-decoration", "none", 3, "href"], ["fill-rule", "evenodd", "d", "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z", "clip-rule", "evenodd"], [1, "adjunto-vacio"], [1, "modal-asunto-titulo"], [1, "modal-asunto-meta"], [1, "modal-asunto-cuerpo"], [2, "white-space", "pre-line"], [1, "modal-acciones"], [1, "btn-editar", 3, "click"], [1, "btn-borrar", 3, "click"], [1, "modal-edit"], ["type", "text", 1, "edit-input", 3, "ngModelChange", "ngModel"], [1, "edit-input", 3, "ngModelChange", "ngModel"], ["value", "ALTA"], ["value", "MEDIA"], ["value", "BAJA"], ["rows", "5", 1, "edit-input", 3, "ngModelChange", "ngModel"], [1, "btn-editar", 3, "click", "disabled"], [1, "btn-borrar", 2, "color", "#6b7488", "border-color", "#d5dae6", 3, "click"]], template: function GestionTicketsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 5)(6, "a", 6);
        \u0275\u0275listener("click", function GestionTicketsComponent_Template_a_click_6_listener() {
          return ctx.irAInicio();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 7);
        \u0275\u0275element(8, "path", 8)(9, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Inicio ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 7);
        \u0275\u0275element(13, "rect", 11)(14, "path", 12)(15, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Gesti\xF3n de tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "a", 6);
        \u0275\u0275listener("click", function GestionTicketsComponent_Template_a_click_17_listener() {
          return ctx.irAGestionIncidencias();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 7);
        \u0275\u0275element(19, "circle", 14)(20, "line", 15)(21, "circle", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Gesti\xF3n de incidencias ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "a", 6);
        \u0275\u0275listener("click", function GestionTicketsComponent_Template_a_click_23_listener() {
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
        \u0275\u0275text(45, "Gesti\xF3n de tickets");
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
        \u0275\u0275template(58, GestionTicketsComponent_img_58_Template, 1, 1, "img", 39)(59, GestionTicketsComponent__svg_svg_59_Template, 2, 0, "svg", 40);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "div", 41)(61, "div", 42)(62, "div")(63, "h2", 43);
        \u0275\u0275text(64, "Revisi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p", 44);
        \u0275\u0275text(66, "Edita o modifica los tickets seg\xFAn su estado.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(67, "div", 45)(68, "div", 46);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(69, "svg", 47);
        \u0275\u0275element(70, "path", 48);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(71, "input", 49);
        \u0275\u0275twoWayListener("ngModelChange", function GestionTicketsComponent_Template_input_ngModelChange_71_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.busqueda, $event) || (ctx.busqueda = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "div", 50);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(73, "svg", 51);
        \u0275\u0275element(74, "path", 52);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(75, "span");
        \u0275\u0275text(76);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(77, "svg", 51);
        \u0275\u0275element(78, "path", 53);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(79, "div", 54)(80, "div", 55)(81, "div", 56)(82, "span", 57);
        \u0275\u0275text(83, "Tickets pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "button", 58);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(85, "svg", 59);
        \u0275\u0275element(86, "path", 60);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(87, "button", 61);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(88, "svg", 59);
        \u0275\u0275element(89, "path", 62);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(90, "div", 63);
        \u0275\u0275template(91, GestionTicketsComponent_div_91_Template, 17, 5, "div", 64)(92, GestionTicketsComponent_div_92_Template, 2, 0, "div", 65);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 55)(94, "div", 56)(95, "span", 57);
        \u0275\u0275text(96, "Tickets en revisi\xF3n");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "button", 58);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(98, "svg", 59);
        \u0275\u0275element(99, "path", 60);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(100, "button", 61);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(101, "svg", 59);
        \u0275\u0275element(102, "path", 62);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(103, "div", 63);
        \u0275\u0275template(104, GestionTicketsComponent_div_104_Template, 17, 5, "div", 64)(105, GestionTicketsComponent_div_105_Template, 2, 0, "div", 65);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(106, "div", 55)(107, "div", 56)(108, "span", 57);
        \u0275\u0275text(109, "Tickets aprobados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "button", 58);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(111, "svg", 59);
        \u0275\u0275element(112, "path", 60);
        \u0275\u0275elementEnd()()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(113, "div", 63);
        \u0275\u0275template(114, GestionTicketsComponent_div_114_Template, 13, 4, "div", 66)(115, GestionTicketsComponent_div_115_Template, 2, 0, "div", 65);
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275template(116, GestionTicketsComponent_div_116_Template, 71, 20, "div", 67);
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
        \u0275\u0275advance(12);
        \u0275\u0275twoWayProperty("ngModel", ctx.busqueda);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.filtroActivo);
        \u0275\u0275advance(15);
        \u0275\u0275property("ngForOf", ctx.pendientesFiltrados);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.pendientesFiltrados.length === 0);
        \u0275\u0275advance(12);
        \u0275\u0275property("ngForOf", ctx.revisionFiltrados);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.revisionFiltrados.length === 0);
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", ctx.aprobadosFiltrados);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.aprobadosFiltrados.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ticketSeleccionado);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 220px;\n  min-height: 100vh;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 64px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-notif[_ngcontent-%COMP%] {\n  background: #f0f2f8;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #5a6a8a;\n  transition: background 0.15s;\n}\n.btn-notif[_ngcontent-%COMP%]:hover {\n  background: #e0e4ef;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #e8eaf6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px 28px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  overflow: auto;\n}\n.seccion-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.seccion-titulo[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 4px;\n}\n.seccion-subtitulo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab8;\n  margin: 0;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  max-width: 340px;\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9aaac5;\n  pointer-events: none;\n}\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 12px 9px 34px;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #2d3748;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #b0bdd4;\n}\n.filtro-dropdown[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #4a5568;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.filtro-dropdown[_ngcontent-%COMP%]:hover {\n  border-color: #1a2b5e;\n}\n.kanban[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  flex: 1;\n}\n.columna[_ngcontent-%COMP%] {\n  background: #f0f3fa;\n  border-radius: 12px;\n  padding: 16px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-height: 400px;\n}\n.columna-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.columna-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.columna-menu[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9aaac5;\n  padding: 2px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: color 0.15s;\n}\n.columna-menu[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.btn-agregar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  border: 2px dashed #7ec9a2;\n  border-radius: 8px;\n  background: transparent;\n  color: #7ec9a2;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-agregar[_ngcontent-%COMP%]:hover {\n  background: #e8f7f0;\n  border-color: #4caf7d;\n  color: #4caf7d;\n}\n.tarjetas[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.tarjeta[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 10px;\n  padding: 14px 14px 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n  transition: box-shadow 0.15s, transform 0.15s;\n  cursor: pointer;\n}\n.tarjeta[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 14px rgba(26, 43, 94, 0.12);\n  transform: translateY(-1px);\n}\n.tarjeta-aprobada[_ngcontent-%COMP%] {\n  border-left: 3px solid #7ec9a2;\n}\n.tarjeta-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.tarjeta-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  line-height: 1.3;\n}\n.tarjeta-dias[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #8a9ab8;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.tarjeta-desc[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #8a9ab8;\n  line-height: 1.5;\n  margin: 0 0 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tarjeta-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f0f2f8;\n  padding-top: 8px;\n}\n.tarjeta-adjuntos[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9aaac5;\n}\n.tarjeta-numero[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #b0bdd4;\n}\n.empty-col[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: #b0bdd4;\n  padding: 20px 0;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-box[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n  padding: 28px 32px 24px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.modal-ticket-id[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  color: #8a9ab8;\n  transition: color 0.15s;\n  line-height: 1;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.modal-titulo[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 20px 0;\n}\n.modal-campos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.modal-campo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f0f2f8;\n}\n.modal-campo[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.campo-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #8a9ab8;\n  min-width: 90px;\n}\n.campo-valor[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1a2b5e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.badge-alta[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.badge-media[_ngcontent-%COMP%] {\n  background: #fef3e2;\n  color: #b7720a;\n}\n.badge-baja[_ngcontent-%COMP%] {\n  background: #e7f7ef;\n  color: #1e9e6e;\n}\n.badge-pendiente[_ngcontent-%COMP%] {\n  background: #fef3e2;\n  color: #b7720a;\n}\n.badge-revision[_ngcontent-%COMP%] {\n  background: #e8f4fd;\n  color: #1a6fa8;\n}\n.badge-aprobado[_ngcontent-%COMP%] {\n  background: #e7f7ef;\n  color: #1e9e6e;\n}\n.badge-rechazado[_ngcontent-%COMP%] {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.adjunto-vacio[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9aa3b7;\n  font-style: italic;\n}\n.adjunto[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.adjunto-x[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #c0392b;\n  font-size: 11px;\n  padding: 0 2px;\n  line-height: 1;\n}\n.adjunto-x[_ngcontent-%COMP%]:hover {\n  color: #8e2318;\n}\n.modal-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: 8px 0 16px;\n}\n.modal-edit[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a5468;\n  margin-top: 6px;\n}\n.edit-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  padding: 9px 12px;\n  font-size: 13px;\n  color: #26324c;\n  font-family: inherit;\n  outline: none;\n}\n.edit-input[_ngcontent-%COMP%]:focus {\n  border-color: #b9c9f7;\n}\n.avatar-mini[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #dde3f0;\n  color: #1a2b5e;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-adjuntos-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin-bottom: 8px;\n}\n.modal-adjuntos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.adjunto[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #1a6fa8;\n  cursor: pointer;\n}\n.adjunto[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.modal-adjuntos-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.btn-anadir-archivo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: none;\n  font-size: 12px;\n  color: #1a2b5e;\n  cursor: pointer;\n  font-weight: 600;\n  padding: 0;\n}\n.btn-eliminar-docs[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #c8d0e4;\n  border-radius: 5px;\n  font-size: 12px;\n  color: #4a5568;\n  cursor: pointer;\n  padding: 5px 12px;\n  transition: background 0.15s;\n}\n.btn-eliminar-docs[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.modal-asunto-titulo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin-bottom: 4px;\n}\n.modal-asunto-meta[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8a9ab8;\n  margin-bottom: 10px;\n}\n.modal-asunto-cuerpo[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #2d3748;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.modal-asunto-cuerpo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n}\n.modal-asunto-cuerpo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 8px 0 0 18px;\n  padding: 0;\n}\n.modal-asunto-cuerpo[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.modal-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding-top: 12px;\n  border-top: 1px solid #f0f2f8;\n}\n.btn-editar[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 7px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-editar[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.btn-borrar[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #f5c6c6;\n  border-radius: 5px;\n  padding: 7px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #c0392b;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-borrar[_ngcontent-%COMP%]:hover {\n  background: #fdf0f0;\n}\n/*# sourceMappingURL=gestion-tickets.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestionTicketsComponent, [{
    type: Component,
    args: [{ selector: "app-gestion-tickets", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- pages/gestion-tickets/gestion-tickets.component.html -->
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

        <!-- Gesti\xF3n de tickets \u2014 ACTIVO -->
        <a class="nav-item active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <rect x="2" y="5" width="20" height="14" rx="2"/>
            <path d="M16 5V3M8 5V3M2 9h20"/>
            <path d="M8 13h4M8 17h8"/>
          </svg>
          Gesti\xF3n de tickets
        </a>

        <!-- Gesti\xF3n de incidencias -->
        <a class="nav-item" (click)="irAGestionIncidencias()">
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
        <h1 class="page-title">Gesti\xF3n de tickets</h1>
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

        <!-- CABECERA SECCI\xD3N -->
        <div class="seccion-header">
          <div>
            <h2 class="seccion-titulo">Revisi\xF3n</h2>
            <p class="seccion-subtitulo">Edita o modifica los tickets seg\xFAn su estado.</p>
          </div>
        </div>

        <!-- BARRA DE HERRAMIENTAS -->
        <div class="toolbar">
          <div class="search-wrapper">
            <svg class="search-icon" viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
            </svg>
            <input
              type="text"
              class="search-input"
              placeholder="Buscar tickets por c\xF3digo"
              [(ngModel)]="busqueda"
            />
          </div>
          <div class="filtro-dropdown">
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
            <span>{{ filtroActivo }}</span>
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </div>
        </div>

        <!-- KANBAN -->
        <div class="kanban">

          <!-- COLUMNA: PENDIENTES -->
          <div class="columna">
            <div class="columna-header">
              <span class="columna-titulo">Tickets pendientes</span>
              <button class="columna-menu">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
              </button>
            </div>
            <button class="btn-agregar">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div class="tarjetas">
              <div class="tarjeta" *ngFor="let t of pendientesFiltrados" (click)="abrirModal(t)" style="cursor:pointer">
                <div class="tarjeta-header">
                  <span class="tarjeta-titulo">{{ t.titulo }}</span>
                  <span class="tarjeta-dias">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                    </svg>
                    {{ t.diasRestantes }} D\xEDas
                  </span>
                </div>
                <p class="tarjeta-desc">{{ t.descripcion }}</p>
                <div class="tarjeta-footer">
                  <span class="tarjeta-adjuntos">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                      <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"/>
                    </svg>
                    {{ t.adjuntos }}
                  </span>
                  <span class="tarjeta-numero">Ticket {{ t.numero }}</span>
                </div>
              </div>
              <div class="empty-col" *ngIf="pendientesFiltrados.length === 0">Sin resultados</div>
            </div>
          </div>

          <!-- COLUMNA: EN REVISI\xD3N -->
          <div class="columna">
            <div class="columna-header">
              <span class="columna-titulo">Tickets en revisi\xF3n</span>
              <button class="columna-menu">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
              </button>
            </div>
            <button class="btn-agregar">
              <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
            </button>
            <div class="tarjetas">
              <div class="tarjeta" *ngFor="let t of revisionFiltrados" (click)="abrirModal(t)" style="cursor:pointer">
                <div class="tarjeta-header">
                  <span class="tarjeta-titulo">{{ t.titulo }}</span>
                  <span class="tarjeta-dias">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="12" height="12">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                    </svg>
                    {{ t.diasRestantes }} D\xEDas
                  </span>
                </div>
                <p class="tarjeta-desc">{{ t.descripcion }}</p>
                <div class="tarjeta-footer">
                  <span class="tarjeta-adjuntos">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                      <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"/>
                    </svg>
                    {{ t.adjuntos }}
                  </span>
                  <span class="tarjeta-numero">Ticket {{ t.numero }}</span>
                </div>
              </div>
              <div class="empty-col" *ngIf="revisionFiltrados.length === 0">Sin resultados</div>
            </div>
          </div>

          <!-- COLUMNA: APROBADOS -->
          <div class="columna">
            <div class="columna-header">
              <span class="columna-titulo">Tickets aprobados</span>
              <button class="columna-menu">
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
              </button>
            </div>
            <div class="tarjetas">
              <div class="tarjeta tarjeta-aprobada" *ngFor="let t of aprobadosFiltrados" (click)="abrirModal(t)" style="cursor:pointer">
                <div class="tarjeta-header">
                  <span class="tarjeta-titulo">{{ t.titulo }}</span>
                </div>
                <p class="tarjeta-desc">{{ t.descripcion }}</p>
                <div class="tarjeta-footer">
                  <span class="tarjeta-adjuntos">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                      <path fill-rule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clip-rule="evenodd"/>
                    </svg>
                    {{ t.adjuntos }}
                  </span>
                  <span class="tarjeta-numero">Ticket {{ t.numero }}</span>
                </div>
              </div>
              <div class="empty-col" *ngIf="aprobadosFiltrados.length === 0">Sin resultados</div>
            </div>
          </div>

        </div>
        <!-- /KANBAN -->

      </div>
      <!-- /CONTENIDO -->

    </div>
    <!-- /MAIN AREA -->

  </div>
</div>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 MODAL TICKET \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<div class="modal-overlay" *ngIf="ticketSeleccionado" (click)="cerrarModal()">
  <div class="modal-box" (click)="$event.stopPropagation()">

    <div class="modal-header">
      <span class="modal-ticket-id">Ticket ID-{{ ticketSeleccionado?.numero }}</span>
      <button class="modal-close" (click)="cerrarModal()">&#10005;</button>
    </div>

    <h2 class="modal-titulo">Ticket {{ ticketSeleccionado?.numero }}</h2>

    <div class="modal-campos">
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
        <span class="campo-label">Prioridad</span>
        <span class="badge {{ prioridadClase(detalleModal?.prioridad) }}">{{ prioridadTexto(detalleModal?.prioridad) }}</span>
      </div>
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
        <span class="campo-label">Estado</span>
        <span class="badge {{ estadoClase() }}">{{ estadoTexto() }}</span>
      </div>
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span class="campo-label">Solicitante</span>
        <span class="campo-valor">
          <span class="avatar-mini">{{ inicial(detalleModal?.solicitadoPor) }}</span>
          {{ detalleModal?.solicitadoPor || '\u2014' }}
        </span>
      </div>
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span class="campo-label">Asignado a</span>
        <span class="campo-valor">
          <span class="avatar-mini">{{ inicial(detalleModal?.asignadoA || 'Sin asignar') }}</span>
          {{ detalleModal?.asignadoA || 'Sin asignar' }}
        </span>
      </div>
      <div class="modal-campo">
        <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="16" height="16">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span class="campo-label">Fecha</span>
        <span class="campo-valor">{{ fechaLarga(detalleModal?.creadoEn) }}</span>
      </div>
    </div>

    <div class="modal-adjuntos-titulo">Archivos adjuntos</div>
    <div class="modal-adjuntos">
      <span class="adjunto" *ngFor="let a of adjuntosModal">
        <a *ngIf="a.ruta" [href]="a.ruta" target="_blank" style="display:inline-flex;align-items:center;gap:6px;color:inherit;text-decoration:none">
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd"/></svg>
          {{ a.nombreArchivo }}
        </a>
        <button class="adjunto-x" title="Eliminar" (click)="borrarAdjunto(a)">&#10005;</button>
      </span>
      <span class="adjunto-vacio" *ngIf="adjuntosModal.length === 0">Sin archivos adjuntos</span>
    </div>
    <div class="modal-adjuntos-acciones">
      <label class="btn-anadir-archivo" style="cursor:pointer">
        <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13"><path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/></svg>
        A\xF1adir archivo
        <input type="file" (change)="onAdjuntoChange($event)" hidden />
      </label>
      <button class="btn-eliminar-docs" (click)="borrarTodosAdjuntos()" [disabled]="adjuntosModal.length === 0">Eliminar documentos</button>
    </div>

    <!-- Modo lectura -->
    <ng-container *ngIf="!modoEdicion">
      <div class="modal-asunto-titulo">Asunto: {{ detalleModal?.asunto }}</div>
      <div class="modal-asunto-meta">{{ detalleModal?.solicitadoPor }} coment\xF3 el {{ fechaHoraMeta(detalleModal?.creadoEn) }}</div>
      <div class="modal-asunto-cuerpo">
        <p style="white-space:pre-line">{{ detalleModal?.descripcion || 'Sin contenido.' }}</p>
      </div>
      <div class="modal-acciones">
        <button class="btn-editar" (click)="activarEdicion()">Editar</button>
        <button class="btn-borrar" (click)="borrarTicket()">Borrar</button>
      </div>
    </ng-container>

    <!-- Modo edici\xF3n -->
    <ng-container *ngIf="modoEdicion">
      <div class="modal-asunto-titulo">Editar ticket</div>
      <div class="modal-edit">
        <label>Asunto</label>
        <input class="edit-input" type="text" [(ngModel)]="editForm.asunto" />
        <label>Tipo</label>
        <input class="edit-input" type="text" [(ngModel)]="editForm.tipo" />
        <label>Prioridad</label>
        <select class="edit-input" [(ngModel)]="editForm.prioridad">
          <option value="ALTA">Alta</option>
          <option value="MEDIA">Media</option>
          <option value="BAJA">Baja</option>
        </select>
        <label>Contenido</label>
        <textarea class="edit-input" rows="5" [(ngModel)]="editForm.descripcion"></textarea>
      </div>
      <div class="modal-acciones">
        <button class="btn-editar" (click)="guardarEdicion()" [disabled]="guardando">{{ guardando ? 'Guardando...' : 'Guardar' }}</button>
        <button class="btn-borrar" style="color:#6b7488;border-color:#d5dae6" (click)="cancelarEdicion()">Cancelar</button>
      </div>
    </ng-container>

  </div>
</div>`, styles: ['/* src/app/pages/gestion-tickets/gestion-tickets.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 220px;\n  min-height: 100vh;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.05);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 64px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 40px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n  padding: 6px 0;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n}\n.nav-item:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #fff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 24px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.btn-notif {\n  background: #f0f2f8;\n  border: none;\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #5a6a8a;\n  transition: background 0.15s;\n}\n.btn-notif:hover {\n  background: #e0e4ef;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 12px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #e8eaf6;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.page-content {\n  flex: 1;\n  padding: 28px 28px 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  overflow: auto;\n}\n.seccion-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.seccion-titulo {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 4px;\n}\n.seccion-subtitulo {\n  font-size: 12px;\n  color: #8a9ab8;\n  margin: 0;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.search-wrapper {\n  position: relative;\n  flex: 1;\n  max-width: 340px;\n}\n.search-icon {\n  position: absolute;\n  left: 11px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9aaac5;\n  pointer-events: none;\n}\n.search-input {\n  width: 100%;\n  padding: 9px 12px 9px 34px;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #2d3748;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.search-input:focus {\n  border-color: #1a2b5e;\n}\n.search-input::placeholder {\n  color: #b0bdd4;\n}\n.filtro-dropdown {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 14px;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #4a5568;\n  cursor: pointer;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.filtro-dropdown:hover {\n  border-color: #1a2b5e;\n}\n.kanban {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  flex: 1;\n}\n.columna {\n  background: #f0f3fa;\n  border-radius: 12px;\n  padding: 16px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-height: 400px;\n}\n.columna-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.columna-titulo {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.columna-menu {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #9aaac5;\n  padding: 2px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: color 0.15s;\n}\n.columna-menu:hover {\n  color: #1a2b5e;\n}\n.btn-agregar {\n  width: 100%;\n  padding: 10px;\n  border: 2px dashed #7ec9a2;\n  border-radius: 8px;\n  background: transparent;\n  color: #7ec9a2;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-agregar:hover {\n  background: #e8f7f0;\n  border-color: #4caf7d;\n  color: #4caf7d;\n}\n.tarjetas {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.tarjeta {\n  background: #fff;\n  border-radius: 10px;\n  padding: 14px 14px 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n  transition: box-shadow 0.15s, transform 0.15s;\n  cursor: pointer;\n}\n.tarjeta:hover {\n  box-shadow: 0 4px 14px rgba(26, 43, 94, 0.12);\n  transform: translateY(-1px);\n}\n.tarjeta-aprobada {\n  border-left: 3px solid #7ec9a2;\n}\n.tarjeta-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n.tarjeta-titulo {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  line-height: 1.3;\n}\n.tarjeta-dias {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  color: #8a9ab8;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.tarjeta-desc {\n  font-size: 11.5px;\n  color: #8a9ab8;\n  line-height: 1.5;\n  margin: 0 0 10px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.tarjeta-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: 1px solid #f0f2f8;\n  padding-top: 8px;\n}\n.tarjeta-adjuntos {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #9aaac5;\n}\n.tarjeta-numero {\n  font-size: 11px;\n  font-weight: 600;\n  color: #b0bdd4;\n}\n.empty-col {\n  text-align: center;\n  font-size: 12px;\n  color: #b0bdd4;\n  padding: 20px 0;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 20px;\n}\n.modal-box {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 500px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);\n  padding: 28px 32px 24px;\n}\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n}\n.modal-ticket-id {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.modal-close {\n  background: none;\n  border: none;\n  font-size: 16px;\n  cursor: pointer;\n  color: #8a9ab8;\n  transition: color 0.15s;\n  line-height: 1;\n}\n.modal-close:hover {\n  color: #1a2b5e;\n}\n.modal-titulo {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0 0 20px 0;\n}\n.modal-campos {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 22px;\n}\n.modal-campo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid #f0f2f8;\n}\n.modal-campo:last-child {\n  border-bottom: none;\n  padding-bottom: 0;\n}\n.campo-label {\n  font-size: 13px;\n  color: #8a9ab8;\n  min-width: 90px;\n}\n.campo-valor {\n  font-size: 13px;\n  color: #1a2b5e;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.badge {\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 10px;\n  border-radius: 12px;\n}\n.badge-alta {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.badge-media {\n  background: #fef3e2;\n  color: #b7720a;\n}\n.badge-baja {\n  background: #e7f7ef;\n  color: #1e9e6e;\n}\n.badge-pendiente {\n  background: #fef3e2;\n  color: #b7720a;\n}\n.badge-revision {\n  background: #e8f4fd;\n  color: #1a6fa8;\n}\n.badge-aprobado {\n  background: #e7f7ef;\n  color: #1e9e6e;\n}\n.badge-rechazado {\n  background: #fde8e8;\n  color: #c0392b;\n}\n.adjunto-vacio {\n  font-size: 12px;\n  color: #9aa3b7;\n  font-style: italic;\n}\n.adjunto {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n}\n.adjunto-x {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #c0392b;\n  font-size: 11px;\n  padding: 0 2px;\n  line-height: 1;\n}\n.adjunto-x:hover {\n  color: #8e2318;\n}\n.modal-edit {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin: 8px 0 16px;\n}\n.modal-edit label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a5468;\n  margin-top: 6px;\n}\n.edit-input {\n  width: 100%;\n  border: 1px solid #e0e4ef;\n  border-radius: 8px;\n  padding: 9px 12px;\n  font-size: 13px;\n  color: #26324c;\n  font-family: inherit;\n  outline: none;\n}\n.edit-input:focus {\n  border-color: #b9c9f7;\n}\n.avatar-mini {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #dde3f0;\n  color: #1a2b5e;\n  font-size: 11px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-adjuntos-titulo {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin-bottom: 8px;\n}\n.modal-adjuntos {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.adjunto {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #1a6fa8;\n  cursor: pointer;\n}\n.adjunto:hover {\n  text-decoration: underline;\n}\n.modal-adjuntos-acciones {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.btn-anadir-archivo {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: none;\n  border: none;\n  font-size: 12px;\n  color: #1a2b5e;\n  cursor: pointer;\n  font-weight: 600;\n  padding: 0;\n}\n.btn-eliminar-docs {\n  background: none;\n  border: 1px solid #c8d0e4;\n  border-radius: 5px;\n  font-size: 12px;\n  color: #4a5568;\n  cursor: pointer;\n  padding: 5px 12px;\n  transition: background 0.15s;\n}\n.btn-eliminar-docs:hover {\n  background: #f0f2f8;\n}\n.modal-asunto-titulo {\n  font-size: 13px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin-bottom: 4px;\n}\n.modal-asunto-meta {\n  font-size: 11px;\n  color: #8a9ab8;\n  margin-bottom: 10px;\n}\n.modal-asunto-cuerpo {\n  font-size: 13px;\n  color: #2d3748;\n  line-height: 1.6;\n  margin-bottom: 20px;\n}\n.modal-asunto-cuerpo p {\n  margin: 0 0 8px 0;\n}\n.modal-asunto-cuerpo ul {\n  margin: 8px 0 0 18px;\n  padding: 0;\n}\n.modal-asunto-cuerpo li {\n  margin-bottom: 4px;\n}\n.modal-acciones {\n  display: flex;\n  gap: 10px;\n  padding-top: 12px;\n  border-top: 1px solid #f0f2f8;\n}\n.btn-editar {\n  background: none;\n  border: 1px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 7px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-editar:hover {\n  background: #f0f2f8;\n}\n.btn-borrar {\n  background: none;\n  border: 1px solid #f5c6c6;\n  border-radius: 5px;\n  padding: 7px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #c0392b;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-borrar:hover {\n  background: #fdf0f0;\n}\n/*# sourceMappingURL=gestion-tickets.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioAdmin }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GestionTicketsComponent, { className: "GestionTicketsComponent", filePath: "src/app/pages/gestion-tickets/gestion-tickets.component.ts", lineNumber: 37 });
})();
export {
  GestionTicketsComponent
};
//# sourceMappingURL=chunk-2NZZ4ZWK.js.map
