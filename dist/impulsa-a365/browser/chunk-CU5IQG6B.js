import {
  ServicioTickets
} from "./chunk-GQNKRLFD.js";
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
  ɵɵgetCurrentView,
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

// src/app/pages/tickets/tickets.component.ts
function TicketsComponent_img_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 39);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function TicketsComponent__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "path", 41);
    \u0275\u0275elementEnd();
  }
}
function TicketsComponent_ng_container_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "p", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5, "Estado : ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275listener("click", function TicketsComponent_ng_container_49_div_1_Template_button_click_10_listener() {
      const ticket_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.verDetalle(ticket_r3));
    });
    \u0275\u0275text(11, "M\xE1s informaci\xF3n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ticket_r3 = ctx.$implicit;
    \u0275\u0275classProp("resaltado", ticket_r3.resaltado);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pendiente No. ", ticket_r3.numero);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ticket_r3.estado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Locaci\xF3n: ", ticket_r3.locacion);
    \u0275\u0275advance();
    \u0275\u0275classProp("naranja", ticket_r3.resaltado);
  }
}
function TicketsComponent_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TicketsComponent_ng_container_49_div_1_Template, 12, 7, "div", 42);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.ticketsPendientes);
  }
}
function TicketsComponent_ng_container_50_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "p", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5, "Estado : ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275listener("click", function TicketsComponent_ng_container_50_div_1_Template_button_click_10_listener() {
      const ticket_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.verDetalle(ticket_r5));
    });
    \u0275\u0275text(11, "M\xE1s informaci\xF3n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ticket_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pendiente No. ", ticket_r5.numero);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ticket_r5.estado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Locaci\xF3n: ", ticket_r5.locacion);
  }
}
function TicketsComponent_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TicketsComponent_ng_container_50_div_1_Template, 12, 3, "div", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.ticketsCompletados);
  }
}
function TicketsComponent_ng_container_51_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "p", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 46);
    \u0275\u0275text(5, "Estado : ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 47);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 48);
    \u0275\u0275listener("click", function TicketsComponent_ng_container_51_div_1_Template_button_click_10_listener() {
      const ticket_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.verDetalle(ticket_r7));
    });
    \u0275\u0275text(11, "M\xE1s informaci\xF3n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ticket_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Pendiente No. ", ticket_r7.numero);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ticket_r7.estado);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Locaci\xF3n: ", ticket_r7.locacion);
  }
}
function TicketsComponent_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, TicketsComponent_ng_container_51_div_1_Template, 12, 3, "div", 49);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.ticketsCancelados);
  }
}
function TicketsComponent_button_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function TicketsComponent_button_53_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirNuevoTicket());
    });
    \u0275\u0275text(1, "Nuevo ticket");
    \u0275\u0275elementEnd();
  }
}
function TicketsComponent_div_64_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorNuevoTicket);
  }
}
function TicketsComponent_div_64_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275text(1, "\xA1Ticket creado correctamente!");
    \u0275\u0275elementEnd();
  }
}
function TicketsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function TicketsComponent_div_64_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarNuevoTicket());
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275listener("click", function TicketsComponent_div_64_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "span", 54);
    \u0275\u0275text(4, "Nuevo ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 55);
    \u0275\u0275listener("click", function TicketsComponent_div_64_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarNuevoTicket());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 56)(8, "div", 57)(9, "label");
    \u0275\u0275text(10, "Asunto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function TicketsComponent_div_64_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoTicket.asunto, $event) || (ctx_r0.nuevoTicket.asunto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 57)(13, "label");
    \u0275\u0275text(14, "Locaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function TicketsComponent_div_64_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoTicket.locacion, $event) || (ctx_r0.nuevoTicket.locacion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 57)(17, "label");
    \u0275\u0275text(18, "Descripci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "textarea", 60);
    \u0275\u0275twoWayListener("ngModelChange", function TicketsComponent_div_64_Template_textarea_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoTicket.descripcion, $event) || (ctx_r0.nuevoTicket.descripcion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 57)(21, "label");
    \u0275\u0275text(22, "Prioridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function TicketsComponent_div_64_Template_select_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.nuevoTicket.prioridad, $event) || (ctx_r0.nuevoTicket.prioridad = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(24, "option", 62);
    \u0275\u0275text(25, "Seleccione prioridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 63);
    \u0275\u0275text(27, "Baja");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 64);
    \u0275\u0275text(29, "Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 65);
    \u0275\u0275text(31, "Alta");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, TicketsComponent_div_64_div_32_Template, 2, 1, "div", 66)(33, TicketsComponent_div_64_div_33_Template, 2, 0, "div", 67);
    \u0275\u0275elementStart(34, "div", 68)(35, "button", 69);
    \u0275\u0275listener("click", function TicketsComponent_div_64_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarNuevoTicket());
    });
    \u0275\u0275text(36, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 70);
    \u0275\u0275listener("click", function TicketsComponent_div_64_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.crearTicket());
    });
    \u0275\u0275text(38);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoTicket.asunto);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoTicket.locacion);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoTicket.descripcion);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.nuevoTicket.prioridad);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r0.errorNuevoTicket);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.exitoNuevoTicket);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.guardandoTicket);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.guardandoTicket ? "Creando..." : "Crear ticket", " ");
  }
}
function TicketsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function TicketsComponent_div_65_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275elementStart(1, "div", 73);
    \u0275\u0275listener("click", function TicketsComponent_div_65_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "span", 54);
    \u0275\u0275text(4, "Estado del ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 74);
    \u0275\u0275text(6, "Actualizar detalles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 55);
    \u0275\u0275listener("click", function TicketsComponent_div_65_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(8, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 75)(10, "div", 76);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 77)(13, "span", 78);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 79);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 80)(18, "div", 81)(19, "span", 82);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 83);
    \u0275\u0275text(22, "Tickets");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 81)(24, "span", 82);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 83);
    \u0275\u0275text(27, "Tickets pendientes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 81)(29, "span", 82);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 83);
    \u0275\u0275text(32, "Tiempo de respuesta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 81)(34, "span", 82);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 83);
    \u0275\u0275text(37, "Tiempo total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 84);
    \u0275\u0275text(39, "Detalles del usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 85)(41, "div", 86)(42, "span", 87);
    \u0275\u0275text(43, "N\xFAmero de tel\xE9fono");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 88);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 86)(47, "span", 87);
    \u0275\u0275text(48, "Direcci\xF3n de email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 88);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 86)(52, "span", 87);
    \u0275\u0275text(53, "Locaci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 88);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 86)(57, "span", 87);
    \u0275\u0275text(58, "Plataforma");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span", 88);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 86)(62, "span", 87);
    \u0275\u0275text(63, "Tiempo de respuesta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 89);
    \u0275\u0275element(65, "span", 90);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 91)(68, "span", 92);
    \u0275\u0275text(69, "Ticket Activo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 93);
    \u0275\u0275text(71);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 94)(73, "div", 95)(74, "span", 96);
    \u0275\u0275text(75, "Tipo de ticket");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "div", 97)(77, "span", 98);
    \u0275\u0275text(78, "\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span");
    \u0275\u0275text(80);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "div", 95)(82, "span", 96);
    \u0275\u0275text(83, "Prioridad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 99);
    \u0275\u0275element(85, "span", 100);
    \u0275\u0275text(86);
    \u0275\u0275elementStart(87, "span", 101);
    \u0275\u0275text(88, "\u2039");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "div", 95)(90, "span", 96);
    \u0275\u0275text(91, "Asignado a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 102)(93, "div", 103);
    \u0275\u0275text(94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span");
    \u0275\u0275text(96);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.usuarioNombre.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.usuarioNombre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.usuarioPais);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.tickets.toString().padStart(2, "0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.ticketsPendientes.toString().padStart(2, "0"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.tiempoRespuesta);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.tiempoTotal);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.telefono);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.pais);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.plataforma);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" + ", ctx_r0.ticketSeleccionado.velocidadRespuesta, " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.ticketActivoId);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.tipoTicket);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ticketSeleccionado.prioridad, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.asignadoA.charAt(0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ticketSeleccionado.asignadoA);
  }
}
var TicketsComponent = class _TicketsComponent {
  constructor(servicioAuth, servicioTickets, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioTickets = servicioTickets;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.tabActivo = "pendientes";
    this.ticketsPendientes = [];
    this.ticketsCompletados = [];
    this.ticketsCancelados = [];
    this.ticketSeleccionado = null;
    this.cargandoLista = false;
    this.cargandoDetalle = false;
    this.errorMsg = "";
    this.mostrarNuevoTicket = false;
    this.guardandoTicket = false;
    this.errorNuevoTicket = "";
    this.exitoNuevoTicket = false;
    this.nuevoTicket = { asunto: "", locacion: "", descripcion: "", prioridad: "" };
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarTab("pendientes");
  }
  cambiarTab(tab) {
    this.tabActivo = tab;
    this.cargarTab(tab);
  }
  // Llama al backend para traer los tickets del tab indicado
  cargarTab(tab) {
    this.cargandoLista = true;
    this.errorMsg = "";
    this.servicioTickets.listar(tab).subscribe({
      next: (items) => {
        if (tab === "pendientes")
          this.ticketsPendientes = items;
        else if (tab === "completados")
          this.ticketsCompletados = items;
        else
          this.ticketsCancelados = items;
        this.cargandoLista = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = "No se pudieron cargar los tickets.";
        this.cargandoLista = false;
        this.cdr.detectChanges();
      }
    });
  }
  // Al hacer clic en "Mas informacion" se trae el detalle del backend
  verDetalle(ticket) {
    this.cargandoDetalle = true;
    this.errorMsg = "";
    this.servicioTickets.obtenerDetalle(ticket.numero).subscribe({
      next: (detalle) => {
        this.ticketSeleccionado = detalle;
        this.cargandoDetalle = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = "No se pudo cargar el detalle del ticket.";
        this.cargandoDetalle = false;
        this.cdr.detectChanges();
      }
    });
  }
  cerrarModal() {
    this.ticketSeleccionado = null;
  }
  abrirNuevoTicket() {
    this.nuevoTicket = { asunto: "", locacion: "", descripcion: "", prioridad: "" };
    this.errorNuevoTicket = "";
    this.exitoNuevoTicket = false;
    this.mostrarNuevoTicket = true;
  }
  cerrarNuevoTicket() {
    this.mostrarNuevoTicket = false;
  }
  crearTicket() {
    if (!this.nuevoTicket.asunto.trim() || !this.nuevoTicket.locacion.trim()) {
      this.errorNuevoTicket = "El asunto y la locaci\xC3\xB3n son obligatorios.";
      return;
    }
    this.guardandoTicket = true;
    this.errorNuevoTicket = "";
    this.servicioTickets.crear(this.nuevoTicket).subscribe({
      next: () => {
        this.guardandoTicket = false;
        this.exitoNuevoTicket = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.cerrarNuevoTicket();
          this.cargarTab(this.tabActivo);
        }, 1500);
      },
      error: () => {
        this.guardandoTicket = false;
        this.errorNuevoTicket = "No se pudo crear el ticket. Intente nuevamente.";
        this.cdr.detectChanges();
      }
    });
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  static {
    this.\u0275fac = function TicketsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TicketsComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioTickets), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TicketsComponent, selectors: [["app-tickets"]], decls: 66, vars: 16, consts: [[1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "sidebar-logo"], [1, "sidebar-nav"], ["routerLink", "/dashboard/agente", 1, "nav-item"], [1, "nav-item", "active"], ["routerLink", "/dashboard/incidencias", 1, "nav-item"], ["routerLink", "/dashboard/reportes", 1, "nav-item"], [1, "sidebar-spacer"], ["routerLink", "/dashboard/perfil", 1, "nav-item"], ["routerLink", "/dashboard/configuracion", 1, "nav-item"], [1, "main-area"], [1, "topbar"], [1, "topbar-right"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:100%;height:100%;object-fit:cover;border-radius:50%;", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26", 4, "ngIf"], [1, "btn-logout-top", 3, "click"], [1, "content"], [1, "page-header"], [1, "page-title-row"], [1, "page-icon"], [1, "page-title"], [1, "tabs-bar"], [1, "tab-btn", 3, "click"], [1, "tickets-list"], [4, "ngIf"], [1, "nuevo-ticket-row"], ["class", "btn-nuevo-ticket", 3, "click", 4, "ngIf"], [1, "inner-footer"], [1, "footer-icons"], ["href", "#", 1, "footer-icon"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], ["alt", "avatar", 2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "50%", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], ["class", "ticket-card", 3, "resaltado", 4, "ngFor", "ngForOf"], [1, "ticket-card"], [1, "ticket-info"], [1, "ticket-numero"], [1, "ticket-estado"], [1, "ticket-locacion"], [1, "btn-mas-info", 3, "click"], ["class", "ticket-card", 4, "ngFor", "ngForOf"], [1, "btn-nuevo-ticket", 3, "click"], [1, "modal-overlay", 3, "click"], [1, "modal", "modal-nuevo", 3, "click"], [1, "modal-header"], [1, "modal-titulo"], [1, "modal-close", 3, "click"], [1, "nuevo-ticket-form"], [1, "form-group"], ["type", "text", "placeholder", "Ingrese el asunto", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Ingrese la locaci\xF3n", 1, "form-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Describa el problema...", "rows", "4", 1, "form-textarea", 3, "ngModelChange", "ngModel"], [1, "form-input", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "baja"], ["value", "media"], ["value", "alta"], ["class", "error-msg", 4, "ngIf"], ["class", "exito-msg", 4, "ngIf"], [1, "nuevo-ticket-actions"], [1, "btn-cancelar", 3, "click"], [1, "btn-crear", 3, "click", "disabled"], [1, "error-msg"], [1, "exito-msg"], [1, "modal", 3, "click"], [1, "modal-btn-actualizar"], [1, "modal-usuario"], [1, "usuario-avatar"], [1, "usuario-info"], [1, "usuario-nombre"], [1, "usuario-pais"], [1, "modal-stats"], [1, "stat-item"], [1, "stat-val"], [1, "stat-lbl"], [1, "modal-section-titulo"], [1, "modal-detalles"], [1, "detalle-fila"], [1, "detalle-label"], [1, "detalle-valor"], [1, "detalle-valor", "velocidad"], [1, "velocidad-barra"], [1, "modal-ticket-activo"], [1, "ticket-activo-label"], [1, "ticket-activo-id"], [1, "modal-ticket-meta"], [1, "meta-item"], [1, "meta-label"], [1, "meta-tipo"], [1, "tipo-icon"], [1, "meta-prioridad"], [1, "prioridad-dot"], [1, "prioridad-chevron"], [1, "meta-asignado"], [1, "asignado-avatar"]], template: function TicketsComponent_Template(rf, ctx) {
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
        \u0275\u0275template(30, TicketsComponent_img_30_Template, 1, 1, "img", 21)(31, TicketsComponent__svg_svg_31_Template, 2, 0, "svg", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 23);
        \u0275\u0275listener("click", function TicketsComponent_Template_button_click_32_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(33, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "div", 26)(37, "span", 27);
        \u0275\u0275text(38, "\u2605");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h2", 28);
        \u0275\u0275text(40, "Tickets");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "div", 29)(42, "button", 30);
        \u0275\u0275listener("click", function TicketsComponent_Template_button_click_42_listener() {
          return ctx.cambiarTab("pendientes");
        });
        \u0275\u0275text(43, "Pendientes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 30);
        \u0275\u0275listener("click", function TicketsComponent_Template_button_click_44_listener() {
          return ctx.cambiarTab("completados");
        });
        \u0275\u0275text(45, "Completados");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "button", 30);
        \u0275\u0275listener("click", function TicketsComponent_Template_button_click_46_listener() {
          return ctx.cambiarTab("cancelados");
        });
        \u0275\u0275text(47, "Cancelados");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 31);
        \u0275\u0275template(49, TicketsComponent_ng_container_49_Template, 2, 1, "ng-container", 32)(50, TicketsComponent_ng_container_50_Template, 2, 1, "ng-container", 32)(51, TicketsComponent_ng_container_51_Template, 2, 1, "ng-container", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 33);
        \u0275\u0275template(53, TicketsComponent_button_53_Template, 2, 0, "button", 34);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "footer", 35)(55, "span");
        \u0275\u0275text(56, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 36)(58, "a", 37);
        \u0275\u0275text(59, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "a", 37);
        \u0275\u0275text(61, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "a", 37);
        \u0275\u0275text(63, "\u25CF");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(64, TicketsComponent_div_64_Template, 39, 8, "div", 38)(65, TicketsComponent_div_65_Template, 97, 17, "div", 38);
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
        \u0275\u0275advance(11);
        \u0275\u0275classProp("active", ctx.tabActivo === "pendientes");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tabActivo === "completados");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.tabActivo === "cancelados");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.tabActivo === "pendientes");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tabActivo === "completados");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.tabActivo === "cancelados");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.tabActivo === "pendientes");
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.mostrarNuevoTicket);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.ticketSeleccionado);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #ffffff;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header[_ngcontent-%COMP%] {\n  padding: 22px 0 10px 0;\n  border-bottom: 1px solid #e0e4ef;\n  margin-bottom: 0;\n}\n.page-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-size: 18px;\n  border-radius: 4px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #e0e4ef;\n  margin-top: 20px;\n  margin-bottom: 22px;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  padding: 10px 20px 12px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6b7a99;\n  cursor: pointer;\n  font-family: inherit;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n  border-bottom-color: #1a2b5e;\n}\n.tickets-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ticket-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  padding: 16px 20px;\n  transition: box-shadow 0.15s;\n}\n.ticket-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 10px rgba(26, 43, 94, 0.08);\n}\n.ticket-card.resaltado[_ngcontent-%COMP%] {\n  border-color: #e07b00;\n  background: #fffbf5;\n}\n.ticket-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ticket-numero[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0;\n}\n.ticket-estado[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #2d3a58;\n  margin: 0;\n}\n.ticket-estado[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n}\n.ticket-locacion[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0;\n}\n.btn-mas-info[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.btn-mas-info[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.btn-mas-info.naranja[_ngcontent-%COMP%] {\n  background: #e07b00;\n}\n.btn-mas-info.naranja[_ngcontent-%COMP%]:hover {\n  background: #c46a00;\n}\n.inner-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon[_ngcontent-%COMP%]:hover {\n  background: #3a52a0;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tabs-bar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .tab-btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 8px 12px;\n  }\n  .ticket-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  width: 480px;\n  max-width: 95vw;\n  padding: 22px 24px 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  position: relative;\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.modal-titulo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n  flex: 1;\n}\n.modal-btn-actualizar[_ngcontent-%COMP%] {\n  background: #1a56db;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.modal-btn-actualizar[_ngcontent-%COMP%]:hover {\n  background: #1344b8;\n}\n.modal-close[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  color: #6b7a99;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n  color: #1a2b5e;\n}\n.modal-usuario[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.usuario-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.usuario-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n}\n.usuario-nombre[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.usuario-pais[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.modal-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  background: #f7f8fc;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 16px;\n}\n.stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n}\n.stat-val[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 800;\n  color: #1a2b5e;\n}\n.stat-lbl[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n  line-height: 1.2;\n}\n.modal-section-titulo[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #2d3a58;\n  margin-bottom: 8px;\n}\n.modal-detalles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.detalle-fila[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.detalle-label[_ngcontent-%COMP%] {\n  color: #6b7a99;\n}\n.detalle-valor[_ngcontent-%COMP%] {\n  color: #2d3a58;\n  font-weight: 500;\n}\n.velocidad[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #c0392b;\n  font-weight: 600;\n}\n.velocidad-barra[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 6px;\n  border-radius: 3px;\n  background:\n    linear-gradient(\n      to right,\n      #e74c3c 60%,\n      #f0c0b8 60%);\n}\n.modal-ticket-activo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.ticket-activo-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7a99;\n}\n.ticket-activo-id[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 800;\n  color: #1a56db;\n  letter-spacing: 0.5px;\n}\n.modal-ticket-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  background: #f7f8fc;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 10px 14px;\n  align-items: center;\n}\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.meta-tipo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #2d3a58;\n  font-weight: 600;\n}\n.tipo-icon[_ngcontent-%COMP%] {\n  color: #e07b00;\n  font-size: 13px;\n}\n.meta-prioridad[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  background: #fff0e0;\n  color: #e07b00;\n  border: 1px solid #f5c07a;\n  border-radius: 12px;\n  padding: 3px 10px;\n}\n.prioridad-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #e07b00;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.prioridad-chevron[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 300;\n  margin-left: 2px;\n}\n.meta-asignado[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #2d3a58;\n  font-weight: 600;\n}\n.asignado-avatar[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #8e44ad;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nuevo-ticket-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  padding-bottom: 10px;\n}\n.btn-nuevo-ticket[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 6px;\n  padding: 11px 36px;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-nuevo-ticket[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.modal-nuevo[_ngcontent-%COMP%] {\n  max-width: 480px;\n  width: 90%;\n}\n.nuevo-ticket-form[_ngcontent-%COMP%] {\n  padding: 0 4px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.form-input[_ngcontent-%COMP%], \n.form-textarea[_ngcontent-%COMP%] {\n  border: 1.5px solid #dde2ee;\n  border-radius: 6px;\n  padding: 9px 12px;\n  font-size: 14px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  font-family: inherit;\n}\n.form-input[_ngcontent-%COMP%]:focus, \n.form-textarea[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.form-textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #c0392b;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.exito-msg[_ngcontent-%COMP%] {\n  color: #27ae60;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.nuevo-ticket-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 8px;\n}\n.btn-cancelar[_ngcontent-%COMP%] {\n  background: transparent;\n  color: #1a2b5e;\n  border: 1.5px solid #1a2b5e;\n  border-radius: 6px;\n  padding: 9px 24px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-cancelar[_ngcontent-%COMP%]:hover {\n  background: #f0f3fa;\n}\n.btn-crear[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 9px 24px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-crear[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-crear[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=tickets.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TicketsComponent, [{
    type: Component,
    args: [{ selector: "app-tickets", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="app-layout">\r
\r
  <div class="app-body">\r
\r
    <!-- SIDEBAR -->\r
    <aside class="sidebar">\r
      <div class="sidebar-header">\r
        <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" loading="lazy" />\r
      </div>\r
      <nav class="sidebar-nav">\r
        <a class="nav-item" routerLink="/dashboard/agente">Inicio</a>\r
        <a class="nav-item active">Tickets</a>\r
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
              <span class="user-name">{{ usuario?.nombre || usuario?.codigo }}</span>\r
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
        <!-- Cabecera -->\r
        <div class="page-header">\r
          <div class="page-title-row">\r
            <span class="page-icon">&#9733;</span>\r
            <h2 class="page-title">Tickets</h2>\r
          </div>\r
        </div>\r
\r
        <!-- Tabs -->\r
        <div class="tabs-bar">\r
          <button class="tab-btn" [class.active]="tabActivo === 'pendientes'" (click)="cambiarTab('pendientes')">Pendientes</button>\r
          <button class="tab-btn" [class.active]="tabActivo === 'completados'" (click)="cambiarTab('completados')">Completados</button>\r
          <button class="tab-btn" [class.active]="tabActivo === 'cancelados'" (click)="cambiarTab('cancelados')">Cancelados</button>\r
        </div>\r
\r
        <!-- Lista de tickets -->\r
        <div class="tickets-list">\r
\r
          <ng-container *ngIf="tabActivo === 'pendientes'">\r
            <div class="ticket-card" *ngFor="let ticket of ticketsPendientes" [class.resaltado]="ticket.resaltado">\r
              <div class="ticket-info">\r
                <p class="ticket-numero">Pendiente No. {{ ticket.numero }}</p>\r
                <p class="ticket-estado">Estado : <strong>{{ ticket.estado }}</strong></p>\r
                <p class="ticket-locacion">Locaci\xF3n: {{ ticket.locacion }}</p>\r
              </div>\r
              <button class="btn-mas-info" [class.naranja]="ticket.resaltado" (click)="verDetalle(ticket)">M\xE1s informaci\xF3n</button>\r
            </div>\r
          </ng-container>\r
\r
          <ng-container *ngIf="tabActivo === 'completados'">\r
            <div class="ticket-card" *ngFor="let ticket of ticketsCompletados">\r
              <div class="ticket-info">\r
                <p class="ticket-numero">Pendiente No. {{ ticket.numero }}</p>\r
                <p class="ticket-estado">Estado : <strong>{{ ticket.estado }}</strong></p>\r
                <p class="ticket-locacion">Locaci\xF3n: {{ ticket.locacion }}</p>\r
              </div>\r
              <button class="btn-mas-info" (click)="verDetalle(ticket)">M\xE1s informaci\xF3n</button>\r
            </div>\r
          </ng-container>\r
\r
          <ng-container *ngIf="tabActivo === 'cancelados'">\r
            <div class="ticket-card" *ngFor="let ticket of ticketsCancelados">\r
              <div class="ticket-info">\r
                <p class="ticket-numero">Pendiente No. {{ ticket.numero }}</p>\r
                <p class="ticket-estado">Estado : <strong>{{ ticket.estado }}</strong></p>\r
                <p class="ticket-locacion">Locaci\xF3n: {{ ticket.locacion }}</p>\r
              </div>\r
              <button class="btn-mas-info" (click)="verDetalle(ticket)">M\xE1s informaci\xF3n</button>\r
            </div>\r
          </ng-container>\r
\r
        </div>\r
\r
        <!-- Bot\xF3n Nuevo Ticket -->\r
        <div class="nuevo-ticket-row">\r
          <button class="btn-nuevo-ticket" *ngIf="tabActivo === 'pendientes'" (click)="abrirNuevoTicket()">Nuevo ticket</button>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </div>\r
\r
  <footer class="inner-footer">\r
    <span>&#169; 2026 Impulsa A365 Todos los derechos reservados por Group16</span>\r
    <div class="footer-icons">\r
      <a href="#" class="footer-icon">in</a>\r
      <a href="#" class="footer-icon">f</a>\r
      <a href="#" class="footer-icon">&#9679;</a>\r
    </div>\r
  </footer>\r
\r
</div>\r
\r
<!-- MODAL NUEVO TICKET -->\r
<div class="modal-overlay" *ngIf="mostrarNuevoTicket" (click)="cerrarNuevoTicket()">\r
  <div class="modal modal-nuevo" (click)="$event.stopPropagation()">\r
    <div class="modal-header">\r
      <span class="modal-titulo">Nuevo ticket</span>\r
      <button class="modal-close" (click)="cerrarNuevoTicket()">&#10005;</button>\r
    </div>\r
\r
    <div class="nuevo-ticket-form">\r
      <div class="form-group">\r
        <label>Asunto</label>\r
        <input type="text" [(ngModel)]="nuevoTicket.asunto" placeholder="Ingrese el asunto" class="form-input" />\r
      </div>\r
      <div class="form-group">\r
        <label>Locaci\xF3n</label>\r
        <input type="text" [(ngModel)]="nuevoTicket.locacion" placeholder="Ingrese la locaci\xF3n" class="form-input" />\r
      </div>\r
      <div class="form-group">\r
        <label>Descripci\xF3n</label>\r
        <textarea [(ngModel)]="nuevoTicket.descripcion" placeholder="Describa el problema..." class="form-textarea" rows="4"></textarea>\r
      </div>\r
      <div class="form-group">\r
        <label>Prioridad</label>\r
        <select [(ngModel)]="nuevoTicket.prioridad" class="form-input">\r
          <option value="">Seleccione prioridad</option>\r
          <option value="baja">Baja</option>\r
          <option value="media">Media</option>\r
          <option value="alta">Alta</option>\r
        </select>\r
      </div>\r
\r
      <div *ngIf="errorNuevoTicket" class="error-msg">{{ errorNuevoTicket }}</div>\r
      <div *ngIf="exitoNuevoTicket" class="exito-msg">\xA1Ticket creado correctamente!</div>\r
\r
      <div class="nuevo-ticket-actions">\r
        <button class="btn-cancelar" (click)="cerrarNuevoTicket()">Cancelar</button>\r
        <button class="btn-crear" (click)="crearTicket()" [disabled]="guardandoTicket">\r
          {{ guardandoTicket ? 'Creando...' : 'Crear ticket' }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- MODAL ESTADO DEL TICKET -->\r
<div class="modal-overlay" *ngIf="ticketSeleccionado" (click)="cerrarModal()">\r
  <div class="modal" (click)="$event.stopPropagation()">\r
\r
    <!-- Cabecera modal -->\r
    <div class="modal-header">\r
      <span class="modal-titulo">Estado del ticket</span>\r
      <button class="modal-btn-actualizar">Actualizar detalles</button>\r
      <button class="modal-close" (click)="cerrarModal()">&#10005;</button>\r
    </div>\r
\r
    <!-- Usuario -->\r
    <div class="modal-usuario">\r
      <div class="usuario-avatar">{{ ticketSeleccionado.usuarioNombre.charAt(0) }}</div>\r
      <div class="usuario-info">\r
        <span class="usuario-nombre">{{ ticketSeleccionado.usuarioNombre }}</span>\r
        <span class="usuario-pais">{{ ticketSeleccionado.usuarioPais }}</span>\r
      </div>\r
    </div>\r
\r
    <!-- Stats -->\r
    <div class="modal-stats">\r
      <div class="stat-item">\r
        <span class="stat-val">{{ ticketSeleccionado.tickets.toString().padStart(2,'0') }}</span>\r
        <span class="stat-lbl">Tickets</span>\r
      </div>\r
      <div class="stat-item">\r
        <span class="stat-val">{{ ticketSeleccionado.ticketsPendientes.toString().padStart(2,'0') }}</span>\r
        <span class="stat-lbl">Tickets pendientes</span>\r
      </div>\r
      <div class="stat-item">\r
        <span class="stat-val">{{ ticketSeleccionado.tiempoRespuesta }}</span>\r
        <span class="stat-lbl">Tiempo de respuesta</span>\r
      </div>\r
      <div class="stat-item">\r
        <span class="stat-val">{{ ticketSeleccionado.tiempoTotal }}</span>\r
        <span class="stat-lbl">Tiempo total</span>\r
      </div>\r
    </div>\r
\r
    <!-- Detalles del usuario -->\r
    <div class="modal-section-titulo">Detalles del usuario</div>\r
    <div class="modal-detalles">\r
      <div class="detalle-fila">\r
        <span class="detalle-label">N\xFAmero de tel\xE9fono</span>\r
        <span class="detalle-valor">{{ ticketSeleccionado.telefono }}</span>\r
      </div>\r
      <div class="detalle-fila">\r
        <span class="detalle-label">Direcci\xF3n de email</span>\r
        <span class="detalle-valor">{{ ticketSeleccionado.email }}</span>\r
      </div>\r
      <div class="detalle-fila">\r
        <span class="detalle-label">Locaci\xF3n</span>\r
        <span class="detalle-valor">{{ ticketSeleccionado.pais }}</span>\r
      </div>\r
      <div class="detalle-fila">\r
        <span class="detalle-label">Plataforma</span>\r
        <span class="detalle-valor">{{ ticketSeleccionado.plataforma }}</span>\r
      </div>\r
      <div class="detalle-fila">\r
        <span class="detalle-label">Tiempo de respuesta</span>\r
        <span class="detalle-valor velocidad">\r
          <span class="velocidad-barra"></span>\r
          + {{ ticketSeleccionado.velocidadRespuesta }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Ticket Activo -->\r
    <div class="modal-ticket-activo">\r
      <span class="ticket-activo-label">Ticket Activo</span>\r
      <span class="ticket-activo-id">{{ ticketSeleccionado.ticketActivoId }}</span>\r
    </div>\r
    <div class="modal-ticket-meta">\r
      <div class="meta-item">\r
        <span class="meta-label">Tipo de ticket</span>\r
        <div class="meta-tipo">\r
          <span class="tipo-icon">&#9733;</span>\r
          <span>{{ ticketSeleccionado.tipoTicket }}</span>\r
        </div>\r
      </div>\r
      <div class="meta-item">\r
        <span class="meta-label">Prioridad</span>\r
        <div class="meta-prioridad">\r
          <span class="prioridad-dot"></span>\r
          {{ ticketSeleccionado.prioridad }}\r
          <span class="prioridad-chevron">&#8249;</span>\r
        </div>\r
      </div>\r
      <div class="meta-item">\r
        <span class="meta-label">Asignado a</span>\r
        <div class="meta-asignado">\r
          <div class="asignado-avatar">{{ ticketSeleccionado.asignadoA.charAt(0) }}</div>\r
          <span>{{ ticketSeleccionado.asignadoA }}</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
  </div>\r
</div>`, styles: ['/* src/app/pages/tickets/tickets.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item:hover {\n  background: #f0f2f8;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  background: #ffffff;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header {\n  padding: 22px 0 10px 0;\n  border-bottom: 1px solid #e0e4ef;\n  margin-bottom: 0;\n}\n.page-title-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-size: 18px;\n  border-radius: 4px;\n}\n.page-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.tabs-bar {\n  display: flex;\n  gap: 0;\n  border-bottom: 2px solid #e0e4ef;\n  margin-top: 20px;\n  margin-bottom: 22px;\n}\n.tab-btn {\n  background: transparent;\n  border: none;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  padding: 10px 20px 12px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #6b7a99;\n  cursor: pointer;\n  font-family: inherit;\n  transition: color 0.15s, border-color 0.15s;\n}\n.tab-btn:hover {\n  color: #1a2b5e;\n}\n.tab-btn.active {\n  color: #1a2b5e;\n  border-bottom-color: #1a2b5e;\n}\n.tickets-list {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.ticket-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  padding: 16px 20px;\n  transition: box-shadow 0.15s;\n}\n.ticket-card:hover {\n  box-shadow: 0 2px 10px rgba(26, 43, 94, 0.08);\n}\n.ticket-card.resaltado {\n  border-color: #e07b00;\n  background: #fffbf5;\n}\n.ticket-info {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.ticket-numero {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0;\n}\n.ticket-estado {\n  font-size: 14px;\n  color: #2d3a58;\n  margin: 0;\n}\n.ticket-estado strong {\n  color: #1a2b5e;\n}\n.ticket-locacion {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0;\n}\n.btn-mas-info {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 10px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.btn-mas-info:hover {\n  background: #253d85;\n}\n.btn-mas-info.naranja {\n  background: #e07b00;\n}\n.btn-mas-info.naranja:hover {\n  background: #c46a00;\n}\n.inner-footer {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon:hover {\n  background: #3a52a0;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .tabs-bar {\n    flex-wrap: wrap;\n  }\n  .tab-btn {\n    font-size: 12px;\n    padding: 8px 12px;\n  }\n  .ticket-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal {\n  background: #ffffff;\n  border-radius: 10px;\n  width: 480px;\n  max-width: 95vw;\n  padding: 22px 24px 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  position: relative;\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n.modal-titulo {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n  flex: 1;\n}\n.modal-btn-actualizar {\n  background: #1a56db;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 6px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.modal-btn-actualizar:hover {\n  background: #1344b8;\n}\n.modal-close {\n  background: transparent;\n  border: none;\n  font-size: 16px;\n  color: #6b7a99;\n  cursor: pointer;\n  padding: 2px 6px;\n  border-radius: 4px;\n  transition: background 0.15s;\n}\n.modal-close:hover {\n  background: #f0f2f8;\n  color: #1a2b5e;\n}\n.modal-usuario {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.usuario-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-size: 16px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.usuario-info {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n}\n.usuario-nombre {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.usuario-pais {\n  font-size: 12px;\n  color: #8a9ab8;\n}\n.modal-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 8px;\n  background: #f7f8fc;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 16px;\n}\n.stat-item {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 2px;\n}\n.stat-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #1a2b5e;\n}\n.stat-lbl {\n  font-size: 10px;\n  color: #8a9ab8;\n  line-height: 1.2;\n}\n.modal-section-titulo {\n  font-size: 12px;\n  font-weight: 700;\n  color: #2d3a58;\n  margin-bottom: 8px;\n}\n.modal-detalles {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 14px;\n}\n.detalle-fila {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 12px;\n}\n.detalle-label {\n  color: #6b7a99;\n}\n.detalle-valor {\n  color: #2d3a58;\n  font-weight: 500;\n}\n.velocidad {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  color: #c0392b;\n  font-weight: 600;\n}\n.velocidad-barra {\n  display: inline-block;\n  width: 40px;\n  height: 6px;\n  border-radius: 3px;\n  background:\n    linear-gradient(\n      to right,\n      #e74c3c 60%,\n      #f0c0b8 60%);\n}\n.modal-ticket-activo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.ticket-activo-label {\n  font-size: 12px;\n  color: #6b7a99;\n}\n.ticket-activo-id {\n  font-size: 15px;\n  font-weight: 800;\n  color: #1a56db;\n  letter-spacing: 0.5px;\n}\n.modal-ticket-meta {\n  display: flex;\n  gap: 20px;\n  background: #f7f8fc;\n  border: 1px solid #dde2ee;\n  border-radius: 8px;\n  padding: 10px 14px;\n  align-items: center;\n}\n.meta-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.meta-label {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.meta-tipo {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #2d3a58;\n  font-weight: 600;\n}\n.tipo-icon {\n  color: #e07b00;\n  font-size: 13px;\n}\n.meta-prioridad {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 700;\n  background: #fff0e0;\n  color: #e07b00;\n  border: 1px solid #f5c07a;\n  border-radius: 12px;\n  padding: 3px 10px;\n}\n.prioridad-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #e07b00;\n  display: inline-block;\n  flex-shrink: 0;\n}\n.prioridad-chevron {\n  font-size: 16px;\n  font-weight: 300;\n  margin-left: 2px;\n}\n.meta-asignado {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  color: #2d3a58;\n  font-weight: 600;\n}\n.asignado-avatar {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #8e44ad;\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.nuevo-ticket-row {\n  display: flex;\n  justify-content: center;\n  margin-top: 32px;\n  padding-bottom: 10px;\n}\n.btn-nuevo-ticket {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 6px;\n  padding: 11px 36px;\n  font-size: 15px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-nuevo-ticket:hover {\n  background: #253d85;\n}\n.modal-nuevo {\n  max-width: 480px;\n  width: 90%;\n}\n.nuevo-ticket-form {\n  padding: 0 4px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.form-input,\n.form-textarea {\n  border: 1.5px solid #dde2ee;\n  border-radius: 6px;\n  padding: 9px 12px;\n  font-size: 14px;\n  color: #333;\n  outline: none;\n  transition: border-color 0.15s;\n  font-family: inherit;\n}\n.form-input:focus,\n.form-textarea:focus {\n  border-color: #1a2b5e;\n}\n.form-textarea {\n  resize: vertical;\n}\n.error-msg {\n  color: #c0392b;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.exito-msg {\n  color: #27ae60;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.nuevo-ticket-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 8px;\n}\n.btn-cancelar {\n  background: transparent;\n  color: #1a2b5e;\n  border: 1.5px solid #1a2b5e;\n  border-radius: 6px;\n  padding: 9px 24px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-cancelar:hover {\n  background: #f0f3fa;\n}\n.btn-crear {\n  background: #1a2b5e;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  padding: 9px 24px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.btn-crear:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-crear:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=tickets.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioTickets }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TicketsComponent, { className: "TicketsComponent", filePath: "src/app/pages/tickets/tickets.component.ts", lineNumber: 18 });
})();
export {
  TicketsComponent
};
//# sourceMappingURL=chunk-CU5IQG6B.js.map
