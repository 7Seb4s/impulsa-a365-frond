import {
  ServicioTecnico
} from "./chunk-FB5KRYSP.js";
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
  RouterLink,
  ViewEncapsulation,
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

// src/app/pages/tecnico/tecnico-tickets.component.ts
function TecnicoTicketsComponent_img_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 46);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function TecnicoTicketsComponent__svg_svg_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 47);
    \u0275\u0275element(1, "path", 48);
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_55_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "Aprobacion pendiente");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_55_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "Aprobado");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_55_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1, "Rechazado");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_55_Template_div_click_0_listener() {
      const t_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.seleccionar(t_r3));
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 52)(5, "p", 53);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 54);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 55);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 56)(12, "span", 57);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, TecnicoTicketsComponent_div_55_span_14_Template, 2, 0, "span", 58)(15, TecnicoTicketsComponent_div_55_span_15_Template, 2, 0, "span", 59)(16, TecnicoTicketsComponent_div_55_span_16_Template, 2, 0, "span", 60);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("activa", (ctx_r0.seleccionado == null ? null : ctx_r0.seleccionado.id) === t_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.inicial(t_r3.titulo));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3.titulo);
    \u0275\u0275advance();
    \u0275\u0275classProp("alto", t_r3.prioridad === "Alto")("medio", t_r3.prioridad === "Medio")("bajo", t_r3.prioridad === "Bajo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r3.prioridad);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3.resumen);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Ticket ID: ", t_r3.ticketId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r3.estado === "pendiente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r3.estado === "aprobado");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", t_r3.estado === "rechazado");
  }
}
function TecnicoTicketsComponent_div_56_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "div", 91);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 7);
    \u0275\u0275element(3, "path", 92)(4, "path", 93);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "div")(6, "div", 94);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(a_r5.nombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.peso);
  }
}
function TecnicoTicketsComponent_div_56_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 96);
    \u0275\u0275text(1, "Aprobacion pendiente");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_56_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 97);
    \u0275\u0275text(1, "Aprobado");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_56_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1, "Rechazado");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_56_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 99);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_56_button_39_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.rechazar());
    });
    \u0275\u0275text(1, "Rechazar");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_56_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 100);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_56_button_40_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.aprobar());
    });
    \u0275\u0275text(1, "Aprobar");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65)(2, "div", 66)(3, "div", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 68)(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 54);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 69);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_56_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarDetalle());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(13, "svg", 7);
    \u0275\u0275element(14, "path", 70);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "div", 71)(16, "div", 72)(17, "p", 73);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 74)(20, "span", 75);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(23, "svg", 7);
    \u0275\u0275element(24, "path", 77);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(25, "button", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(26, "svg", 7);
    \u0275\u0275element(27, "path", 78);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(28, "p", 79);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 80);
    \u0275\u0275template(31, TecnicoTicketsComponent_div_56_div_31_Template, 10, 2, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 82);
    \u0275\u0275template(33, TecnicoTicketsComponent_div_56_span_33_Template, 2, 0, "span", 83)(34, TecnicoTicketsComponent_div_56_span_34_Template, 2, 0, "span", 84)(35, TecnicoTicketsComponent_div_56_span_35_Template, 2, 0, "span", 85);
    \u0275\u0275elementStart(36, "div", 86)(37, "button", 87);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_56_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModal());
    });
    \u0275\u0275text(38, "Detalles del ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, TecnicoTicketsComponent_div_56_button_39_Template, 2, 0, "button", 88)(40, TecnicoTicketsComponent_div_56_button_40_Template, 2, 0, "button", 89);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.inicial(ctx_r0.seleccionado.remitente));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.seleccionado.remitente);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Ticket ID: ", ctx_r0.seleccionado.ticketId.replace("#", ""));
    \u0275\u0275advance();
    \u0275\u0275classProp("alto", ctx_r0.seleccionado.prioridad === "Alto")("medio", ctx_r0.seleccionado.prioridad === "Medio")("bajo", ctx_r0.seleccionado.prioridad === "Bajo");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.seleccionado.prioridad);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("Asunto: ", ctx_r0.seleccionado.asunto);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.seleccionado.hora);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.seleccionado.cuerpo);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.seleccionado.adjuntos);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.seleccionado.estado === "pendiente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.seleccionado.estado === "aprobado");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.seleccionado.estado === "rechazado");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.seleccionado.estado === "pendiente");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.seleccionado.estado === "pendiente");
  }
}
function TecnicoTicketsComponent_div_67_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 125);
    \u0275\u0275text(1, "Aprobado");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_67_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 126);
    \u0275\u0275text(1, "Rechazado");
    \u0275\u0275elementEnd();
  }
}
function TecnicoTicketsComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_67_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275elementStart(1, "div", 102);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_67_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 103)(3, "span", 104);
    \u0275\u0275text(4, "Detalle del ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 105);
    \u0275\u0275template(6, TecnicoTicketsComponent_div_67_span_6_Template, 2, 0, "span", 106)(7, TecnicoTicketsComponent_div_67_span_7_Template, 2, 0, "span", 107);
    \u0275\u0275elementStart(8, "button", 108);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_67_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(9, "\u2715");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 109)(11, "label");
    \u0275\u0275text(12, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function TecnicoTicketsComponent_div_67_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.seleccionado.codigoInterno, $event) || (ctx_r0.seleccionado.codigoInterno = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 109)(15, "label");
    \u0275\u0275text(16, "Prioridad ");
    \u0275\u0275elementStart(17, "span", 111);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 112)(20, "button", 113);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_67_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPrioridadModal("Alto"));
    });
    \u0275\u0275text(21, "Alto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 114);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_67_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPrioridadModal("Medio"));
    });
    \u0275\u0275text(23, "Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 115);
    \u0275\u0275listener("click", function TecnicoTicketsComponent_div_67_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarPrioridadModal("Bajo"));
    });
    \u0275\u0275text(25, "Baja");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 109)(27, "label");
    \u0275\u0275text(28, "Tipo de ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function TecnicoTicketsComponent_div_67_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.seleccionado.tipo, $event) || (ctx_r0.seleccionado.tipo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 117)(31, "div", 109)(32, "label");
    \u0275\u0275text(33, "Solicitado por");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 118)(35, "div", 119);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 109)(40, "label");
    \u0275\u0275text(41, "Asignado a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "select", 120);
    \u0275\u0275twoWayListener("ngModelChange", function TecnicoTicketsComponent_div_67_Template_select_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.seleccionado.asignadoA, $event) || (ctx_r0.seleccionado.asignadoA = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(43, "option", 121);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 109)(46, "label");
    \u0275\u0275text(47, "Contenido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 122)(49, "div", 123);
    \u0275\u0275text(50, " De ");
    \u0275\u0275elementStart(51, "div", 119);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "b");
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "p", 124);
    \u0275\u0275text(56, "Estimado Equipo de TI:\nPor medio del presente correo, solicito la aprobacion del ticket para proceder con la actualizacion de los datos personales del empleado Juan Perez Lopez dentro del sistema de gestion de la empresa. Atentamente,\nArea de Trabajadores\nEmpresa IMPULSA A365");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.seleccionado.estado === "aprobado");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.seleccionado.estado === "rechazado");
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.seleccionado.codigoInterno);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("sel", ctx_r0.seleccionado.prioridad === "Alto");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sel", ctx_r0.seleccionado.prioridad === "Medio");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("sel", ctx_r0.seleccionado.prioridad === "Bajo");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.seleccionado.tipo);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.inicial(ctx_r0.seleccionado.solicitadoPor));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.seleccionado.solicitadoPor);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.seleccionado.asignadoA);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.seleccionado.asignadoA);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.seleccionado.asignadoA);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.inicial(ctx_r0.seleccionado.solicitadoPor));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.seleccionado.solicitadoPor);
  }
}
var TecnicoTicketsComponent = class _TecnicoTicketsComponent {
  constructor(servicioAuth, servicioTecnico, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioTecnico = servicioTecnico;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.busqueda = "";
    this.tickets = [];
    this.seleccionado = null;
    this.mostrarModal = false;
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargar();
  }
  // Backend primero; si falla usa los datos semilla (demo/presentacion)
  cargar() {
    this.servicioTecnico.listarTickets().subscribe({
      next: (data) => {
        this.tickets = data && data.length ? data : this.semilla();
        this.cdr.detectChanges();
      },
      error: () => {
        this.tickets = this.semilla();
        this.cdr.detectChanges();
      }
    });
  }
  get ticketsFiltrados() {
    const q = this.busqueda.toLowerCase().trim();
    if (!q)
      return this.tickets;
    return this.tickets.filter((t) => t.titulo.toLowerCase().includes(q) || t.ticketId.toLowerCase().includes(q) || t.resumen.toLowerCase().includes(q));
  }
  seleccionar(t) {
    this.seleccionado = t;
  }
  cerrarDetalle() {
    this.seleccionado = null;
  }
  abrirModal() {
    this.mostrarModal = true;
  }
  cerrarModal() {
    this.mostrarModal = false;
  }
  cambiarPrioridadModal(p) {
    if (this.seleccionado)
      this.seleccionado.prioridad = p;
  }
  // Aprueba el ticket: actualiza el estado al instante y avisa al backend
  aprobar() {
    if (!this.seleccionado)
      return;
    const t = this.seleccionado;
    t.estado = "aprobado";
    this.servicioTecnico.aprobarTicket(t.id).subscribe({ error: () => {
    } });
    this.cdr.detectChanges();
  }
  // Rechaza el ticket: actualiza el estado al instante y avisa al backend
  rechazar() {
    if (!this.seleccionado)
      return;
    const t = this.seleccionado;
    t.estado = "rechazado";
    this.servicioTecnico.rechazarTicket(t.id).subscribe({ error: () => {
    } });
    this.cdr.detectChanges();
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  get nombre() {
    return this.usuario?.nombre || this.usuario?.codigo || "Usuario";
  }
  inicial(txt) {
    return (txt?.trim()?.charAt(0) || "?").toUpperCase();
  }
  // Datos semilla que replican el Figma
  semilla() {
    const cuerpo = "Estimado(a) Sr./Sra. del area de Recursos Humanos:\n\nPor medio del presente correo, me permito informar que se ha realizado la actualizacion de los datos personales del empleado Juan Perez Lopez dentro del sistema de gestion de la empresa. Esta actualizacion se llevo a cabo con el fin de mantener la informacion institucional correctamente registrada y evitar posibles inconvenientes administrativos en los procesos internos.\n\nAtentamente,\nArea de Administracion\nEmpresa IMPULSA A365";
    const contenido = "Estimado Equipo de TI:\nPor medio del presente correo, solicito la aprobacion del ticket para proceder con la actualizacion de los datos personales del empleado Juan Perez Lopez dentro del sistema de gestion de la empresa.\n\nAtentamente,\nArea de Trabajadores\nEmpresa IMPULSA A365";
    const adjuntos = [
      { nombre: "Screenshot02.zip", peso: "246kb" },
      { nombre: "Description.zip", peso: "246kb" }
    ];
    return [
      {
        id: 1,
        ticketId: "#56367",
        codigoInterno: "ID-#4362",
        titulo: "Ticket de actualizacion de los datos",
        resumen: "Estimado(a) Sr./Sra. del area de Recursos Humanos...",
        prioridad: "Alto",
        estado: "pendiente",
        remitente: "Erik Smit",
        hora: "13:08 (6 hours ago)",
        asunto: "Actualizacion de los datos",
        cuerpo,
        adjuntos,
        tipo: "Actualizacion de datos",
        solicitadoPor: "Grace Galan",
        asignadoA: "Erik Smit"
      },
      {
        id: 2,
        ticketId: "#56367",
        codigoInterno: "ID-#4363",
        titulo: "Ticket de eliminacion de registros de usuario",
        resumen: "Estimado(a) Sr./Sra. del area de Administracion...",
        prioridad: "Medio",
        estado: "pendiente",
        remitente: "Erik Smit",
        hora: "13:08 (6 hours ago)",
        asunto: "Eliminacion de registros de usuario",
        cuerpo,
        adjuntos,
        tipo: "Eliminacion de datos",
        solicitadoPor: "Grace Galan",
        asignadoA: "Erik Smit"
      },
      {
        id: 3,
        ticketId: "#56367",
        codigoInterno: "ID-#4364",
        titulo: "Revision de solicitudes tecnicas",
        resumen: "Estimado(a) Sr./Sra. del area de Tecnologia...",
        prioridad: "Bajo",
        estado: "pendiente",
        remitente: "Erik Smit",
        hora: "13:08 (6 hours ago)",
        asunto: "Revision de solicitudes tecnicas",
        cuerpo,
        adjuntos,
        tipo: "Consulta tecnica",
        solicitadoPor: "Grace Galan",
        asignadoA: "Erik Smit"
      }
    ];
  }
  static {
    this.\u0275fac = function TecnicoTicketsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TecnicoTicketsComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioTecnico), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TecnicoTicketsComponent, selectors: [["app-tecnico-tickets"]], decls: 68, vars: 10, consts: [[1, "tec-layout"], [1, "tec-body"], [1, "tec-sidebar"], [1, "tec-sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "tec-sidebar-logo"], [1, "tec-nav"], [1, "tec-nav-item", "active"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "M22 7l-10 6L2 7"], ["routerLink", "/dashboard/tecnico/incidencias", 1, "tec-nav-item"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], [1, "tec-sidebar-spacer"], [1, "tec-sidebar-foot"], ["routerLink", "/dashboard/tecnico/perfil", 1, "tec-admin-link"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"], [1, "tec-main"], [1, "tec-topbar"], [1, "tec-welcome"], [1, "tec-user-chip"], [1, "tec-user-avatar"], ["alt", "avatar", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "24", "height", "24", 4, "ngIf"], [1, "tec-user-name"], [1, "tec-logout", 3, "click"], [1, "tec-panel-title-bar"], [1, "tec-panel-title"], [1, "tec-split"], [1, "tec-list-col"], [1, "tec-toolbar"], [1, "tec-search"], ["cx", "11", "cy", "11", "r", "8"], ["d", "M21 21l-4.35-4.35"], ["type", "text", "placeholder", "Buscar Ticket ID, Nombre o por Fecha", 3, "ngModelChange", "ngModel"], [1, "tec-filtro"], ["points", "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"], [1, "tec-list"], ["class", "tec-card", 3, "activa", "click", 4, "ngFor", "ngForOf"], ["class", "tec-detalle", 4, "ngIf"], [1, "tec-footer"], [1, "tec-footer-icons"], ["href", "#", 1, "tec-footer-icon"], ["class", "tec-modal-overlay", 3, "click", 4, "ngIf"], ["alt", "avatar", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "24", "height", "24"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "tec-card", 3, "click"], [1, "tec-card-avatar"], [1, "tec-card-body"], [1, "tec-card-title-row"], [1, "tec-card-title"], [1, "tec-pri"], [1, "tec-card-sub"], [1, "tec-card-meta"], [1, "tec-card-id"], ["class", "tec-estado-txt", 4, "ngIf"], ["class", "tec-estado-badge", 4, "ngIf"], ["class", "tec-estado-badge rojo", 4, "ngIf"], [1, "tec-estado-txt"], [1, "tec-estado-badge"], [1, "tec-estado-badge", "rojo"], [1, "tec-detalle"], [1, "tec-detalle-top"], [1, "tec-detalle-remitente"], [1, "tec-mini-avatar"], [1, "tec-detalle-right"], [1, "tec-icon-btn", 3, "click"], ["d", "M18 6L6 18M6 6l12 12"], [1, "tec-detalle-cuerpo"], [1, "tec-asunto-row"], [1, "tec-asunto"], [1, "tec-asunto-tools"], [1, "tec-hora"], [1, "tec-icon-btn"], ["d", "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"], ["d", "M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"], [1, "tec-texto"], [1, "tec-adjuntos"], ["class", "tec-adjunto", 4, "ngFor", "ngForOf"], [1, "tec-detalle-acciones"], ["class", "tec-estado-pill pendiente", 4, "ngIf"], ["class", "tec-estado-pill aprobado", 4, "ngIf"], ["class", "tec-estado-pill rechazado", 4, "ngIf"], [1, "tec-btn-row"], [1, "tec-btn", "tec-btn-outline", 3, "click"], ["class", "tec-btn tec-btn-danger", 3, "click", 4, "ngIf"], ["class", "tec-btn tec-btn-primary", 3, "click", 4, "ngIf"], [1, "tec-adjunto"], [1, "tec-adjunto-ico"], ["d", "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"], ["d", "M7 10l5 5 5-5M12 15V3"], [1, "tec-adjunto-nombre"], [1, "tec-adjunto-peso"], [1, "tec-estado-pill", "pendiente"], [1, "tec-estado-pill", "aprobado"], [1, "tec-estado-pill", "rechazado"], [1, "tec-btn", "tec-btn-danger", 3, "click"], [1, "tec-btn", "tec-btn-primary", 3, "click"], [1, "tec-modal-overlay", 3, "click"], [1, "tec-modal", 3, "click"], [1, "tec-modal-head"], [1, "tec-modal-title"], [1, "tec-modal-head-right"], ["class", "tec-estado-pill aprobado", "style", "padding:5px 16px;font-size:11.5px", 4, "ngIf"], ["class", "tec-estado-pill rechazado", "style", "padding:5px 16px;font-size:11.5px", 4, "ngIf"], [1, "tec-modal-close", 3, "click"], [1, "tec-field"], ["type", "text", 1, "tec-input", 3, "ngModelChange", "ngModel"], [1, "req"], [1, "tec-pri-choices"], [1, "tec-pri-choice", "alto", 3, "click"], [1, "tec-pri-choice", "medio", 3, "click"], [1, "tec-pri-choice", "bajo", 3, "click"], ["type", "text", "placeholder", "Actualizacion de datos", 1, "tec-input", 3, "ngModelChange", "ngModel"], [1, "tec-field-row"], [1, "tec-chip-person"], [1, "tec-chip-avatar"], [1, "tec-select", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "tec-contenido-box"], [1, "tec-contenido-de"], [1, "tec-contenido-texto"], [1, "tec-estado-pill", "aprobado", 2, "padding", "5px 16px", "font-size", "11.5px"], [1, "tec-estado-pill", "rechazado", 2, "padding", "5px 16px", "font-size", "11.5px"]], template: function TecnicoTicketsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "aside", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 5)(6, "a", 6);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 7);
        \u0275\u0275element(8, "rect", 8)(9, "path", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "Tickets");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "a", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(13, "svg", 7);
        \u0275\u0275element(14, "path", 11)(15, "circle", 12)(16, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "span");
        \u0275\u0275text(18, "Incidencias");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(19, "div", 14);
        \u0275\u0275elementStart(20, "div", 15)(21, "button", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(22, "svg", 7);
        \u0275\u0275element(23, "circle", 17)(24, "path", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(25, "span");
        \u0275\u0275text(26, "Administracion");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 19)(28, "header", 20)(29, "h1", 21);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 22)(32, "div", 23);
        \u0275\u0275template(33, TecnicoTicketsComponent_img_33_Template, 1, 1, "img", 24)(34, TecnicoTicketsComponent__svg_svg_34_Template, 2, 0, "svg", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 26);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 27);
        \u0275\u0275listener("click", function TecnicoTicketsComponent_Template_button_click_37_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(38, "Cerrar sesion");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 28)(40, "h2", 29);
        \u0275\u0275text(41, "Panel de tickets");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 30)(43, "div", 31)(44, "div", 32)(45, "div", 33);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 7);
        \u0275\u0275element(47, "circle", 34)(48, "path", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "input", 36);
        \u0275\u0275twoWayListener("ngModelChange", function TecnicoTicketsComponent_Template_input_ngModelChange_49_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.busqueda, $event) || (ctx.busqueda = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "button", 37);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(51, "svg", 7);
        \u0275\u0275element(52, "polygon", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275text(53, " Filtrar por fecha ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(54, "div", 39);
        \u0275\u0275template(55, TecnicoTicketsComponent_div_55_Template, 17, 16, "div", 40);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(56, TecnicoTicketsComponent_div_56_Template, 41, 19, "div", 41);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(57, "footer", 42)(58, "span");
        \u0275\u0275text(59, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 43)(61, "a", 44);
        \u0275\u0275text(62, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "a", 44);
        \u0275\u0275text(64, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "a", 44);
        \u0275\u0275text(66, "\u25CF");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(67, TecnicoTicketsComponent_div_67_Template, 57, 17, "div", 45);
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate1("Bienvenido, ", ctx.nombre, ".");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.fotoUrl);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoUrl);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.nombre);
        \u0275\u0275advance(7);
        \u0275\u0275classProp("con-detalle", ctx.seleccionado);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.busqueda);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.ticketsFiltrados);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.seleccionado);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.mostrarModal && ctx.seleccionado);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['/* src/app/pages/tecnico/tecnico-panel.css */\n* {\n  box-sizing: border-box;\n}\n.tec-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #1f2a44;\n}\n.tec-body {\n  display: flex;\n  flex: 1;\n}\n.tec-sidebar {\n  width: 210px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #eef0f5;\n  padding: 0 14px;\n}\n.tec-sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 20px 6px 26px 6px;\n}\n.tec-sidebar-logo {\n  height: 44px;\n  width: auto;\n  object-fit: contain;\n}\n.tec-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tec-sidebar-spacer {\n  flex: 1;\n}\n.tec-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  color: #7b8699;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  border-radius: 10px;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s, color 0.15s;\n}\n.tec-nav-item svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.tec-nav-item:hover {\n  background: #f4f6fb;\n  color: #1f2a44;\n}\n.tec-nav-item.active {\n  background: #e8f0fe;\n  color: #2563eb;\n  font-weight: 700;\n}\n.tec-sidebar-foot {\n  padding: 16px 6px 22px 6px;\n}\n.tec-admin-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #aab2c2;\n  font-size: 13px;\n  font-weight: 600;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n}\n.tec-admin-link svg {\n  width: 17px;\n  height: 17px;\n}\n.tec-admin-link:hover {\n  color: #6b7488;\n}\n.tec-admin-link.active {\n  color: #2563eb;\n}\n.tec-perfil-card {\n  display: flex;\n  gap: 40px;\n  background: #ffffff;\n  border: 1px solid #eef0f5;\n  border-radius: 14px;\n  padding: 32px;\n  max-width: 1100px;\n}\n.tec-perfil-avatar-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-width: 160px;\n}\n.tec-perfil-avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  background: #eef1f6;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-perfil-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tec-perfil-nombre {\n  font-size: 15px;\n  color: #26324c;\n}\n.tec-perfil-cambiar-foto {\n  font-size: 12px;\n  font-weight: 600;\n  color: #2563eb;\n  cursor: pointer;\n}\n.tec-perfil-cambiar-foto:hover {\n  text-decoration: underline;\n}\n.tec-perfil-error {\n  font-size: 11px;\n  color: #d64545;\n  text-align: center;\n}\n.tec-perfil-datos {\n  flex: 1;\n  min-width: 0;\n}\n.tec-perfil-datos .tec-input.readonly {\n  background: #f7f9fc;\n  color: #4a5468;\n  cursor: default;\n}\n.tec-perfil-acciones {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n@media (max-width: 700px) {\n  .tec-perfil-card {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.tec-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.tec-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 30px;\n  border-bottom: 1px solid #eef0f5;\n  flex-shrink: 0;\n}\n.tec-welcome {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2a44;\n  margin: 0;\n}\n.tec-user-chip {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tec-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2a44;\n}\n.tec-user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #e2e7f2;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-user-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tec-logout {\n  background: none;\n  border: 1px solid #e0e4ef;\n  color: #6b7488;\n  border-radius: 7px;\n  padding: 7px 14px;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 6px;\n  transition: background 0.15s;\n}\n.tec-logout:hover {\n  background: #f4f6fb;\n}\n.tec-panel-title-bar {\n  padding: 18px 30px;\n  background: #f7f9fc;\n  border-bottom: 1px solid #eef0f5;\n}\n.tec-panel-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2a44;\n  margin: 0;\n}\n.tec-split {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.tec-list-col {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid #eef0f5;\n}\n.tec-list-col.con-detalle {\n  max-width: 460px;\n}\n.tec-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 26px 14px 26px;\n}\n.tec-search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #ffffff;\n  border: 1px solid #e6e9f1;\n  border-radius: 9px;\n  padding: 10px 14px;\n}\n.tec-search svg {\n  width: 15px;\n  height: 15px;\n  color: #aeb6c6;\n  flex-shrink: 0;\n}\n.tec-search input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 13px;\n  color: #4a5468;\n  background: transparent;\n  font-family: inherit;\n}\n.tec-search input::placeholder {\n  color: #b3bacb;\n}\n.tec-filtro {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #ffffff;\n  border: 1px solid #e6e9f1;\n  border-radius: 9px;\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7488;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: inherit;\n}\n.tec-filtro svg {\n  width: 14px;\n  height: 14px;\n}\n.tec-filtro:hover {\n  background: #f4f6fb;\n}\n.tec-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 12px 20px 12px;\n}\n.tec-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 14px;\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.tec-card:hover {\n  background: #f9fafd;\n}\n.tec-card.activa {\n  background: #f2f6ff;\n}\n.tec-card-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f0f2f8;\n  color: #9aa3b7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.tec-card-body {\n  flex: 1;\n  min-width: 0;\n}\n.tec-card-title-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.tec-card-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #26324c;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tec-card-sub {\n  font-size: 12.5px;\n  color: #98a1b3;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tec-card-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n  text-align: right;\n}\n.tec-card-id {\n  font-size: 12px;\n  color: #aab2c2;\n}\n.tec-pri {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.tec-pri::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.tec-pri.alto {\n  background: #fdeceb;\n  color: #e15b52;\n}\n.tec-pri.alto::before {\n  background: #e15b52;\n}\n.tec-pri.medio {\n  background: #fef4e6;\n  color: #e0a13a;\n}\n.tec-pri.medio::before {\n  background: #e0a13a;\n}\n.tec-pri.bajo {\n  background: #e7f7ef;\n  color: #34b37a;\n}\n.tec-pri.bajo::before {\n  background: #34b37a;\n}\n.tec-estado-txt {\n  font-size: 12px;\n  color: #b0b8c7;\n}\n.tec-estado-badge {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: #e7f7ef;\n  color: #34b37a;\n}\n.tec-detalle {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow-y: auto;\n}\n.tec-detalle-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.tec-detalle-remitente {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tec-mini-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #fbe3e3;\n  color: #d9756e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n.tec-detalle-remitente b {\n  font-size: 13.5px;\n  color: #26324c;\n}\n.tec-detalle-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tec-detalle-right .tec-card-id {\n  font-size: 12px;\n}\n.tec-detalle-cuerpo {\n  padding: 20px 24px;\n  flex: 1;\n}\n.tec-asunto-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.tec-asunto {\n  font-size: 15px;\n  font-weight: 700;\n  color: #26324c;\n  margin: 0;\n}\n.tec-asunto-tools {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.tec-hora {\n  font-size: 11.5px;\n  color: #aab2c2;\n  white-space: nowrap;\n}\n.tec-icon-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #b8c0cf;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.tec-icon-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.tec-icon-btn:hover {\n  color: #7b8699;\n}\n.tec-texto {\n  font-size: 12.5px;\n  line-height: 1.75;\n  color: #6b7488;\n  margin: 14px 0 20px 0;\n  white-space: pre-line;\n}\n.tec-adjuntos {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.tec-adjunto {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  background: #f7f9fc;\n  border: 1px solid #eef0f5;\n  border-radius: 9px;\n  padding: 8px 12px;\n  min-width: 150px;\n}\n.tec-adjunto-ico {\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8f0fe;\n  color: #2563eb;\n}\n.tec-adjunto-ico svg {\n  width: 15px;\n  height: 15px;\n}\n.tec-adjunto-nombre {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a5468;\n}\n.tec-adjunto-peso {\n  font-size: 10.5px;\n  color: #aab2c2;\n}\n.tec-detalle-acciones {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n  margin-top: auto;\n}\n.tec-estado-pill {\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 22px;\n  border-radius: 20px;\n}\n.tec-estado-pill.pendiente {\n  background: #fbe1e0;\n  color: #d9756e;\n}\n.tec-estado-pill.aprobado,\n.tec-estado-pill.asignado {\n  background: #c9f0dd;\n  color: #2f9e6c;\n}\n.tec-estado-pill.rechazado {\n  background: #fbdcda;\n  color: #d64545;\n}\n.tec-estado-badge.rojo {\n  background: #fbdcda;\n  color: #d64545;\n}\n.tec-btn-row {\n  display: flex;\n  gap: 14px;\n}\n.tec-btn {\n  border: none;\n  border-radius: 22px;\n  padding: 11px 26px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, opacity 0.15s;\n}\n.tec-btn-primary {\n  background: #2563eb;\n  color: #ffffff;\n}\n.tec-btn-primary:hover {\n  background: #1d4fd0;\n}\n.tec-btn-outline {\n  background: #ffffff;\n  color: #2563eb;\n  border: 1px solid #cddafc;\n}\n.tec-btn-outline:hover {\n  background: #f2f6ff;\n}\n.tec-btn-danger {\n  background: #ffffff;\n  color: #d64545;\n  border: 1px solid #f3c9c6;\n}\n.tec-btn-danger:hover {\n  background: #fdf2f1;\n}\n.tec-btn-ok {\n  background: #c9f0dd;\n  color: #2f9e6c;\n  cursor: default;\n}\n.tec-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  color: #b3bacb;\n  gap: 12px;\n  padding: 40px;\n  text-align: center;\n}\n.tec-empty svg {\n  width: 46px;\n  height: 46px;\n  opacity: 0.5;\n}\n.tec-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.tec-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(20, 28, 48, 0.28);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 70px 20px;\n  z-index: 60;\n}\n.tec-modal {\n  background: #ffffff;\n  border-radius: 14px;\n  width: 400px;\n  max-width: 100%;\n  max-height: 82vh;\n  overflow-y: auto;\n  box-shadow: 0 18px 50px rgba(20, 28, 48, 0.22);\n  padding: 22px 22px 26px 22px;\n}\n.tec-modal-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.tec-modal-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #26324c;\n}\n.tec-modal-head-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tec-modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #b8c0cf;\n  font-size: 16px;\n  line-height: 1;\n}\n.tec-modal-close:hover {\n  color: #7b8699;\n}\n.tec-field {\n  margin-bottom: 16px;\n}\n.tec-field label {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #4a5468;\n  margin-bottom: 7px;\n}\n.tec-field label .req {\n  color: #e15b52;\n}\n.tec-input,\n.tec-select {\n  width: 100%;\n  border: 1px solid #e6e9f1;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #4a5468;\n  font-family: inherit;\n  background: #ffffff;\n  outline: none;\n}\n.tec-input:focus,\n.tec-select:focus {\n  border-color: #b9c9f7;\n}\n.tec-input::placeholder {\n  color: #b3bacb;\n}\n.tec-pri-choices {\n  display: flex;\n  gap: 10px;\n}\n.tec-pri-choice {\n  flex: 1;\n  border: 1px solid #e6e9f1;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 8px 0;\n  font-size: 12px;\n  font-weight: 700;\n  color: #98a1b3;\n  cursor: pointer;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.tec-pri-choice::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.tec-pri-choice.sel.alto {\n  background: #fdeceb;\n  color: #e15b52;\n  border-color: #f6d3d0;\n}\n.tec-pri-choice.sel.medio {\n  background: #fef4e6;\n  color: #e0a13a;\n  border-color: #f6e4c3;\n}\n.tec-pri-choice.sel.bajo {\n  background: #e7f7ef;\n  color: #34b37a;\n  border-color: #c8ebd7;\n}\n.tec-field-row {\n  display: flex;\n  gap: 14px;\n}\n.tec-field-row .tec-field {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.tec-chip-person {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e6e9f1;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.tec-chip-avatar {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #dfe6f5;\n  color: #7b8699;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-chip-person span {\n  font-size: 12.5px;\n  color: #4a5468;\n  font-weight: 600;\n}\n.tec-contenido-box {\n  margin-top: 4px;\n}\n.tec-contenido-de {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #98a1b3;\n  margin-bottom: 10px;\n}\n.tec-contenido-de b {\n  color: #4a5468;\n}\n.tec-contenido-texto {\n  font-size: 12px;\n  line-height: 1.7;\n  color: #7b8699;\n  white-space: pre-line;\n}\n.tec-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 30px;\n  border-top: 1px solid #eef0f5;\n  font-size: 12px;\n  color: #aab2c2;\n}\n.tec-footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.tec-footer-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f0f2f8;\n  color: #7b8699;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  text-decoration: none;\n}\n@media (max-width: 900px) {\n  .tec-list-col.con-detalle {\n    max-width: none;\n  }\n  .tec-split {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=tecnico-panel.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TecnicoTicketsComponent, [{
    type: Component,
    args: [{ selector: "app-tecnico-tickets", standalone: true, imports: [CommonModule, FormsModule, RouterLink], encapsulation: ViewEncapsulation.None, template: `<div class="tec-layout">
  <div class="tec-body">

    <!-- SIDEBAR -->
    <aside class="tec-sidebar">
      <div class="tec-sidebar-header">
        <img src="assets/logo-a365.jpg" alt="A365" class="tec-sidebar-logo" loading="lazy" />
      </div>

      <nav class="tec-nav">
        <a class="tec-nav-item active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>
          <span>Tickets</span>
        </a>
        <a class="tec-nav-item" routerLink="/dashboard/tecnico/incidencias">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
          <span>Incidencias</span>
        </a>
      </nav>

      <div class="tec-sidebar-spacer"></div>

      <div class="tec-sidebar-foot">
        <button class="tec-admin-link" routerLink="/dashboard/tecnico/perfil">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
          <span>Administracion</span>
        </button>
      </div>
    </aside>

    <!-- MAIN -->
    <div class="tec-main">

      <!-- Topbar: bienvenida + usuario -->
      <header class="tec-topbar">
        <h1 class="tec-welcome">Bienvenido, {{ nombre }}.</h1>
        <div class="tec-user-chip">
          <div class="tec-user-avatar">
            <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar" />
            <svg *ngIf="!fotoUrl" viewBox="0 0 24 24" fill="#9aaac5" width="24" height="24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
          </div>
          <span class="tec-user-name">{{ nombre }}</span>
          <button class="tec-logout" (click)="onLogout()">Cerrar sesion</button>
        </div>
      </header>

      <!-- Titulo del panel -->
      <div class="tec-panel-title-bar">
        <h2 class="tec-panel-title">Panel de tickets</h2>
      </div>

      <!-- Split: lista + detalle -->
      <div class="tec-split">

        <!-- Columna lista -->
        <div class="tec-list-col" [class.con-detalle]="seleccionado">

          <div class="tec-toolbar">
            <div class="tec-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
              <input type="text" [(ngModel)]="busqueda" placeholder="Buscar Ticket ID, Nombre o por Fecha" />
            </div>
            <button class="tec-filtro">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              Filtrar por fecha
            </button>
          </div>

          <div class="tec-list">
            <div class="tec-card" *ngFor="let t of ticketsFiltrados"
                 [class.activa]="seleccionado?.id === t.id"
                 (click)="seleccionar(t)">
              <div class="tec-card-avatar">{{ inicial(t.titulo) }}</div>
              <div class="tec-card-body">
                <div class="tec-card-title-row">
                  <p class="tec-card-title">{{ t.titulo }}</p>
                  <span class="tec-pri"
                        [class.alto]="t.prioridad==='Alto'"
                        [class.medio]="t.prioridad==='Medio'"
                        [class.bajo]="t.prioridad==='Bajo'">{{ t.prioridad }}</span>
                </div>
                <p class="tec-card-sub">{{ t.resumen }}</p>
              </div>
              <div class="tec-card-meta">
                <span class="tec-card-id">Ticket ID: {{ t.ticketId }}</span>
                <span *ngIf="t.estado==='pendiente'" class="tec-estado-txt">Aprobacion pendiente</span>
                <span *ngIf="t.estado==='aprobado'" class="tec-estado-badge">Aprobado</span>
                <span *ngIf="t.estado==='rechazado'" class="tec-estado-badge rojo">Rechazado</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna detalle -->
        <div class="tec-detalle" *ngIf="seleccionado">
          <div class="tec-detalle-top">
            <div class="tec-detalle-remitente">
              <div class="tec-mini-avatar">{{ inicial(seleccionado.remitente) }}</div>
              <b>{{ seleccionado.remitente }}</b>
            </div>
            <div class="tec-detalle-right">
              <span class="tec-card-id">Ticket ID: {{ seleccionado.ticketId.replace('#','') }}</span>
              <span class="tec-pri"
                    [class.alto]="seleccionado.prioridad==='Alto'"
                    [class.medio]="seleccionado.prioridad==='Medio'"
                    [class.bajo]="seleccionado.prioridad==='Bajo'">{{ seleccionado.prioridad }}</span>
              <button class="tec-icon-btn" (click)="cerrarDetalle()">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            </div>
          </div>

          <div class="tec-detalle-cuerpo">
            <div class="tec-asunto-row">
              <p class="tec-asunto">Asunto: {{ seleccionado.asunto }}</p>
              <div class="tec-asunto-tools">
                <span class="tec-hora">{{ seleccionado.hora }}</span>
                <button class="tec-icon-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></button>
                <button class="tec-icon-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6"/></svg></button>
              </div>
            </div>

            <p class="tec-texto">{{ seleccionado.cuerpo }}</p>

            <div class="tec-adjuntos">
              <div class="tec-adjunto" *ngFor="let a of seleccionado.adjuntos">
                <div class="tec-adjunto-ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path d="M7 10l5 5 5-5M12 15V3"/></svg>
                </div>
                <div>
                  <div class="tec-adjunto-nombre">{{ a.nombre }}</div>
                  <div class="tec-adjunto-peso">{{ a.peso }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="tec-detalle-acciones">
            <span *ngIf="seleccionado.estado==='pendiente'" class="tec-estado-pill pendiente">Aprobacion pendiente</span>
            <span *ngIf="seleccionado.estado==='aprobado'" class="tec-estado-pill aprobado">Aprobado</span>
            <span *ngIf="seleccionado.estado==='rechazado'" class="tec-estado-pill rechazado">Rechazado</span>
            <div class="tec-btn-row">
              <button class="tec-btn tec-btn-outline" (click)="abrirModal()">Detalles del ticket</button>
              <button *ngIf="seleccionado.estado==='pendiente'" class="tec-btn tec-btn-danger" (click)="rechazar()">Rechazar</button>
              <button *ngIf="seleccionado.estado==='pendiente'" class="tec-btn tec-btn-primary" (click)="aprobar()">Aprobar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

  <footer class="tec-footer">
    <span>&#169; 2026 Impulsa A365 Todos los derechos reservados por Group16</span>
    <div class="tec-footer-icons">
      <a href="#" class="tec-footer-icon">in</a>
      <a href="#" class="tec-footer-icon">f</a>
      <a href="#" class="tec-footer-icon">&#9679;</a>
    </div>
  </footer>
</div>

<!-- MODAL: Detalle del ticket -->
<div class="tec-modal-overlay" *ngIf="mostrarModal && seleccionado" (click)="cerrarModal()">
  <div class="tec-modal" (click)="$event.stopPropagation()">
    <div class="tec-modal-head">
      <span class="tec-modal-title">Detalle del ticket</span>
      <div class="tec-modal-head-right">
        <span *ngIf="seleccionado.estado==='aprobado'" class="tec-estado-pill aprobado" style="padding:5px 16px;font-size:11.5px">Aprobado</span>
        <span *ngIf="seleccionado.estado==='rechazado'" class="tec-estado-pill rechazado" style="padding:5px 16px;font-size:11.5px">Rechazado</span>
        <button class="tec-modal-close" (click)="cerrarModal()">&#10005;</button>
      </div>
    </div>

    <div class="tec-field">
      <label>ID</label>
      <input class="tec-input" type="text" [(ngModel)]="seleccionado.codigoInterno" />
    </div>

    <div class="tec-field">
      <label>Prioridad <span class="req">*</span></label>
      <div class="tec-pri-choices">
        <button class="tec-pri-choice alto"  [class.sel]="seleccionado.prioridad==='Alto'"  (click)="cambiarPrioridadModal('Alto')">Alto</button>
        <button class="tec-pri-choice medio" [class.sel]="seleccionado.prioridad==='Medio'" (click)="cambiarPrioridadModal('Medio')">Media</button>
        <button class="tec-pri-choice bajo"  [class.sel]="seleccionado.prioridad==='Bajo'"  (click)="cambiarPrioridadModal('Bajo')">Baja</button>
      </div>
    </div>

    <div class="tec-field">
      <label>Tipo de ticket</label>
      <input class="tec-input" type="text" [(ngModel)]="seleccionado.tipo" placeholder="Actualizacion de datos" />
    </div>

    <div class="tec-field-row">
      <div class="tec-field">
        <label>Solicitado por</label>
        <div class="tec-chip-person">
          <div class="tec-chip-avatar">{{ inicial(seleccionado.solicitadoPor) }}</div>
          <span>{{ seleccionado.solicitadoPor }}</span>
        </div>
      </div>
      <div class="tec-field">
        <label>Asignado a</label>
        <select class="tec-select" [(ngModel)]="seleccionado.asignadoA">
          <option [value]="seleccionado.asignadoA">{{ seleccionado.asignadoA }}</option>
        </select>
      </div>
    </div>

    <div class="tec-field">
      <label>Contenido</label>
      <div class="tec-contenido-box">
        <div class="tec-contenido-de">
          De <div class="tec-chip-avatar">{{ inicial(seleccionado.solicitadoPor) }}</div> <b>{{ seleccionado.solicitadoPor }}</b>
        </div>
        <p class="tec-contenido-texto">Estimado Equipo de TI:
Por medio del presente correo, solicito la aprobacion del ticket para proceder con la actualizacion de los datos personales del empleado Juan Perez Lopez dentro del sistema de gestion de la empresa.

Atentamente,
Area de Trabajadores
Empresa IMPULSA A365</p>
      </div>
    </div>
  </div>
</div>
`, styles: ['/* src/app/pages/tecnico/tecnico-panel.css */\n* {\n  box-sizing: border-box;\n}\n.tec-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #1f2a44;\n}\n.tec-body {\n  display: flex;\n  flex: 1;\n}\n.tec-sidebar {\n  width: 210px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #eef0f5;\n  padding: 0 14px;\n}\n.tec-sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 20px 6px 26px 6px;\n}\n.tec-sidebar-logo {\n  height: 44px;\n  width: auto;\n  object-fit: contain;\n}\n.tec-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tec-sidebar-spacer {\n  flex: 1;\n}\n.tec-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  color: #7b8699;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  border-radius: 10px;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s, color 0.15s;\n}\n.tec-nav-item svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.tec-nav-item:hover {\n  background: #f4f6fb;\n  color: #1f2a44;\n}\n.tec-nav-item.active {\n  background: #e8f0fe;\n  color: #2563eb;\n  font-weight: 700;\n}\n.tec-sidebar-foot {\n  padding: 16px 6px 22px 6px;\n}\n.tec-admin-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #aab2c2;\n  font-size: 13px;\n  font-weight: 600;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n}\n.tec-admin-link svg {\n  width: 17px;\n  height: 17px;\n}\n.tec-admin-link:hover {\n  color: #6b7488;\n}\n.tec-admin-link.active {\n  color: #2563eb;\n}\n.tec-perfil-card {\n  display: flex;\n  gap: 40px;\n  background: #ffffff;\n  border: 1px solid #eef0f5;\n  border-radius: 14px;\n  padding: 32px;\n  max-width: 1100px;\n}\n.tec-perfil-avatar-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-width: 160px;\n}\n.tec-perfil-avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  background: #eef1f6;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-perfil-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tec-perfil-nombre {\n  font-size: 15px;\n  color: #26324c;\n}\n.tec-perfil-cambiar-foto {\n  font-size: 12px;\n  font-weight: 600;\n  color: #2563eb;\n  cursor: pointer;\n}\n.tec-perfil-cambiar-foto:hover {\n  text-decoration: underline;\n}\n.tec-perfil-error {\n  font-size: 11px;\n  color: #d64545;\n  text-align: center;\n}\n.tec-perfil-datos {\n  flex: 1;\n  min-width: 0;\n}\n.tec-perfil-datos .tec-input.readonly {\n  background: #f7f9fc;\n  color: #4a5468;\n  cursor: default;\n}\n.tec-perfil-acciones {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n@media (max-width: 700px) {\n  .tec-perfil-card {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.tec-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.tec-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 30px;\n  border-bottom: 1px solid #eef0f5;\n  flex-shrink: 0;\n}\n.tec-welcome {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2a44;\n  margin: 0;\n}\n.tec-user-chip {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tec-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2a44;\n}\n.tec-user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #e2e7f2;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-user-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tec-logout {\n  background: none;\n  border: 1px solid #e0e4ef;\n  color: #6b7488;\n  border-radius: 7px;\n  padding: 7px 14px;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 6px;\n  transition: background 0.15s;\n}\n.tec-logout:hover {\n  background: #f4f6fb;\n}\n.tec-panel-title-bar {\n  padding: 18px 30px;\n  background: #f7f9fc;\n  border-bottom: 1px solid #eef0f5;\n}\n.tec-panel-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2a44;\n  margin: 0;\n}\n.tec-split {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.tec-list-col {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid #eef0f5;\n}\n.tec-list-col.con-detalle {\n  max-width: 460px;\n}\n.tec-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 26px 14px 26px;\n}\n.tec-search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #ffffff;\n  border: 1px solid #e6e9f1;\n  border-radius: 9px;\n  padding: 10px 14px;\n}\n.tec-search svg {\n  width: 15px;\n  height: 15px;\n  color: #aeb6c6;\n  flex-shrink: 0;\n}\n.tec-search input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 13px;\n  color: #4a5468;\n  background: transparent;\n  font-family: inherit;\n}\n.tec-search input::placeholder {\n  color: #b3bacb;\n}\n.tec-filtro {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #ffffff;\n  border: 1px solid #e6e9f1;\n  border-radius: 9px;\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7488;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: inherit;\n}\n.tec-filtro svg {\n  width: 14px;\n  height: 14px;\n}\n.tec-filtro:hover {\n  background: #f4f6fb;\n}\n.tec-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 12px 20px 12px;\n}\n.tec-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 14px;\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.tec-card:hover {\n  background: #f9fafd;\n}\n.tec-card.activa {\n  background: #f2f6ff;\n}\n.tec-card-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f0f2f8;\n  color: #9aa3b7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.tec-card-body {\n  flex: 1;\n  min-width: 0;\n}\n.tec-card-title-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.tec-card-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #26324c;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tec-card-sub {\n  font-size: 12.5px;\n  color: #98a1b3;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tec-card-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n  text-align: right;\n}\n.tec-card-id {\n  font-size: 12px;\n  color: #aab2c2;\n}\n.tec-pri {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.tec-pri::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.tec-pri.alto {\n  background: #fdeceb;\n  color: #e15b52;\n}\n.tec-pri.alto::before {\n  background: #e15b52;\n}\n.tec-pri.medio {\n  background: #fef4e6;\n  color: #e0a13a;\n}\n.tec-pri.medio::before {\n  background: #e0a13a;\n}\n.tec-pri.bajo {\n  background: #e7f7ef;\n  color: #34b37a;\n}\n.tec-pri.bajo::before {\n  background: #34b37a;\n}\n.tec-estado-txt {\n  font-size: 12px;\n  color: #b0b8c7;\n}\n.tec-estado-badge {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: #e7f7ef;\n  color: #34b37a;\n}\n.tec-detalle {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow-y: auto;\n}\n.tec-detalle-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.tec-detalle-remitente {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tec-mini-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #fbe3e3;\n  color: #d9756e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n.tec-detalle-remitente b {\n  font-size: 13.5px;\n  color: #26324c;\n}\n.tec-detalle-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tec-detalle-right .tec-card-id {\n  font-size: 12px;\n}\n.tec-detalle-cuerpo {\n  padding: 20px 24px;\n  flex: 1;\n}\n.tec-asunto-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.tec-asunto {\n  font-size: 15px;\n  font-weight: 700;\n  color: #26324c;\n  margin: 0;\n}\n.tec-asunto-tools {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.tec-hora {\n  font-size: 11.5px;\n  color: #aab2c2;\n  white-space: nowrap;\n}\n.tec-icon-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #b8c0cf;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.tec-icon-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.tec-icon-btn:hover {\n  color: #7b8699;\n}\n.tec-texto {\n  font-size: 12.5px;\n  line-height: 1.75;\n  color: #6b7488;\n  margin: 14px 0 20px 0;\n  white-space: pre-line;\n}\n.tec-adjuntos {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.tec-adjunto {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  background: #f7f9fc;\n  border: 1px solid #eef0f5;\n  border-radius: 9px;\n  padding: 8px 12px;\n  min-width: 150px;\n}\n.tec-adjunto-ico {\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8f0fe;\n  color: #2563eb;\n}\n.tec-adjunto-ico svg {\n  width: 15px;\n  height: 15px;\n}\n.tec-adjunto-nombre {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a5468;\n}\n.tec-adjunto-peso {\n  font-size: 10.5px;\n  color: #aab2c2;\n}\n.tec-detalle-acciones {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n  margin-top: auto;\n}\n.tec-estado-pill {\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 22px;\n  border-radius: 20px;\n}\n.tec-estado-pill.pendiente {\n  background: #fbe1e0;\n  color: #d9756e;\n}\n.tec-estado-pill.aprobado,\n.tec-estado-pill.asignado {\n  background: #c9f0dd;\n  color: #2f9e6c;\n}\n.tec-estado-pill.rechazado {\n  background: #fbdcda;\n  color: #d64545;\n}\n.tec-estado-badge.rojo {\n  background: #fbdcda;\n  color: #d64545;\n}\n.tec-btn-row {\n  display: flex;\n  gap: 14px;\n}\n.tec-btn {\n  border: none;\n  border-radius: 22px;\n  padding: 11px 26px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, opacity 0.15s;\n}\n.tec-btn-primary {\n  background: #2563eb;\n  color: #ffffff;\n}\n.tec-btn-primary:hover {\n  background: #1d4fd0;\n}\n.tec-btn-outline {\n  background: #ffffff;\n  color: #2563eb;\n  border: 1px solid #cddafc;\n}\n.tec-btn-outline:hover {\n  background: #f2f6ff;\n}\n.tec-btn-danger {\n  background: #ffffff;\n  color: #d64545;\n  border: 1px solid #f3c9c6;\n}\n.tec-btn-danger:hover {\n  background: #fdf2f1;\n}\n.tec-btn-ok {\n  background: #c9f0dd;\n  color: #2f9e6c;\n  cursor: default;\n}\n.tec-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  color: #b3bacb;\n  gap: 12px;\n  padding: 40px;\n  text-align: center;\n}\n.tec-empty svg {\n  width: 46px;\n  height: 46px;\n  opacity: 0.5;\n}\n.tec-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.tec-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(20, 28, 48, 0.28);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 70px 20px;\n  z-index: 60;\n}\n.tec-modal {\n  background: #ffffff;\n  border-radius: 14px;\n  width: 400px;\n  max-width: 100%;\n  max-height: 82vh;\n  overflow-y: auto;\n  box-shadow: 0 18px 50px rgba(20, 28, 48, 0.22);\n  padding: 22px 22px 26px 22px;\n}\n.tec-modal-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.tec-modal-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #26324c;\n}\n.tec-modal-head-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tec-modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #b8c0cf;\n  font-size: 16px;\n  line-height: 1;\n}\n.tec-modal-close:hover {\n  color: #7b8699;\n}\n.tec-field {\n  margin-bottom: 16px;\n}\n.tec-field label {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #4a5468;\n  margin-bottom: 7px;\n}\n.tec-field label .req {\n  color: #e15b52;\n}\n.tec-input,\n.tec-select {\n  width: 100%;\n  border: 1px solid #e6e9f1;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #4a5468;\n  font-family: inherit;\n  background: #ffffff;\n  outline: none;\n}\n.tec-input:focus,\n.tec-select:focus {\n  border-color: #b9c9f7;\n}\n.tec-input::placeholder {\n  color: #b3bacb;\n}\n.tec-pri-choices {\n  display: flex;\n  gap: 10px;\n}\n.tec-pri-choice {\n  flex: 1;\n  border: 1px solid #e6e9f1;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 8px 0;\n  font-size: 12px;\n  font-weight: 700;\n  color: #98a1b3;\n  cursor: pointer;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.tec-pri-choice::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.tec-pri-choice.sel.alto {\n  background: #fdeceb;\n  color: #e15b52;\n  border-color: #f6d3d0;\n}\n.tec-pri-choice.sel.medio {\n  background: #fef4e6;\n  color: #e0a13a;\n  border-color: #f6e4c3;\n}\n.tec-pri-choice.sel.bajo {\n  background: #e7f7ef;\n  color: #34b37a;\n  border-color: #c8ebd7;\n}\n.tec-field-row {\n  display: flex;\n  gap: 14px;\n}\n.tec-field-row .tec-field {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.tec-chip-person {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e6e9f1;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.tec-chip-avatar {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #dfe6f5;\n  color: #7b8699;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-chip-person span {\n  font-size: 12.5px;\n  color: #4a5468;\n  font-weight: 600;\n}\n.tec-contenido-box {\n  margin-top: 4px;\n}\n.tec-contenido-de {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #98a1b3;\n  margin-bottom: 10px;\n}\n.tec-contenido-de b {\n  color: #4a5468;\n}\n.tec-contenido-texto {\n  font-size: 12px;\n  line-height: 1.7;\n  color: #7b8699;\n  white-space: pre-line;\n}\n.tec-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 30px;\n  border-top: 1px solid #eef0f5;\n  font-size: 12px;\n  color: #aab2c2;\n}\n.tec-footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.tec-footer-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f0f2f8;\n  color: #7b8699;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  text-decoration: none;\n}\n@media (max-width: 900px) {\n  .tec-list-col.con-detalle {\n    max-width: none;\n  }\n  .tec-split {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=tecnico-panel.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioTecnico }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TecnicoTicketsComponent, { className: "TecnicoTicketsComponent", filePath: "src/app/pages/tecnico/tecnico-tickets.component.ts", lineNumber: 18 });
})();
export {
  TecnicoTicketsComponent
};
//# sourceMappingURL=chunk-NOVBGR6Y.js.map
