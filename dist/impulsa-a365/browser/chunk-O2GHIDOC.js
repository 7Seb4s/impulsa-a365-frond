import {
  ServicioPerfil
} from "./chunk-3OEW7LP2.js";
import {
  ServicioAutenticacion
} from "./chunk-II2C6W3K.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel
} from "./chunk-K5TRC5YK.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
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

// src/app/pages/configuracion/configuracion.component.ts
function ConfiguracionComponent_img_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function ConfiguracionComponent__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function ConfiguracionComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 35);
    \u0275\u0275element(3, "circle", 36)(4, "path", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2", 38);
    \u0275\u0275text(6, "Configuraci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 39)(8, "button", 40);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_35_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.vista = "perfil");
    });
    \u0275\u0275elementStart(9, "span", 41);
    \u0275\u0275text(10, "Editar informaci\xF3n del perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 42);
    \u0275\u0275element(12, "path", 43)(13, "path", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 40);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_35_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.vista = "contrasena");
    });
    \u0275\u0275elementStart(15, "span", 41);
    \u0275\u0275text(16, "Cambiar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 42);
    \u0275\u0275element(18, "rect", 45)(19, "path", 46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
}
function ConfiguracionComponent_ng_container_36_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 66);
    \u0275\u0275element(2, "path", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMsg, " ");
  }
}
function ConfiguracionComponent_ng_container_36__svg_path_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 68);
  }
}
function ConfiguracionComponent_ng_container_36__svg_circle_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 36);
  }
}
function ConfiguracionComponent_ng_container_36__svg_path_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 69);
  }
}
function ConfiguracionComponent_ng_container_36__svg_line_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 70);
  }
}
function ConfiguracionComponent_ng_container_36__svg_path_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 68);
  }
}
function ConfiguracionComponent_ng_container_36__svg_circle_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 36);
  }
}
function ConfiguracionComponent_ng_container_36__svg_path_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 69);
  }
}
function ConfiguracionComponent_ng_container_36__svg_line_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 70);
  }
}
function ConfiguracionComponent_ng_container_36_div_33__svg_path_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function ConfiguracionComponent_ng_container_36_div_33__svg_path_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 77);
  }
}
function ConfiguracionComponent_ng_container_36_div_33__svg_path_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function ConfiguracionComponent_ng_container_36_div_33__svg_path_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 77);
  }
}
function ConfiguracionComponent_ng_container_36_div_33__svg_path_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function ConfiguracionComponent_ng_container_36_div_33__svg_path_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 77);
  }
}
function ConfiguracionComponent_ng_container_36_div_33__svg_path_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 76);
  }
}
function ConfiguracionComponent_ng_container_36_div_33__svg_path_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 77);
  }
}
function ConfiguracionComponent_ng_container_36_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 71)(1, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 73);
    \u0275\u0275template(3, ConfiguracionComponent_ng_container_36_div_33__svg_path_3_Template, 1, 0, "path", 74)(4, ConfiguracionComponent_ng_container_36_div_33__svg_path_4_Template, 1, 0, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " M\xEDnimo 8 caracteres ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 73);
    \u0275\u0275template(8, ConfiguracionComponent_ng_container_36_div_33__svg_path_8_Template, 1, 0, "path", 74)(9, ConfiguracionComponent_ng_container_36_div_33__svg_path_9_Template, 1, 0, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Al menos 1 may\xFAscula ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 73);
    \u0275\u0275template(13, ConfiguracionComponent_ng_container_36_div_33__svg_path_13_Template, 1, 0, "path", 74)(14, ConfiguracionComponent_ng_container_36_div_33__svg_path_14_Template, 1, 0, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Al menos 1 n\xFAmero ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(16, "div", 72);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 73);
    \u0275\u0275template(18, ConfiguracionComponent_ng_container_36_div_33__svg_path_18_Template, 1, 0, "path", 74)(19, ConfiguracionComponent_ng_container_36_div_33__svg_path_19_Template, 1, 0, "path", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Al menos 1 car\xE1cter especial (!@#$...) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("req-ok", ctx_r0.requisitos.longitud)("req-fail", !ctx_r0.requisitos.longitud);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.requisitos.longitud);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.requisitos.longitud);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("req-ok", ctx_r0.requisitos.mayuscula)("req-fail", !ctx_r0.requisitos.mayuscula);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.requisitos.mayuscula);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.requisitos.mayuscula);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("req-ok", ctx_r0.requisitos.numero)("req-fail", !ctx_r0.requisitos.numero);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.requisitos.numero);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.requisitos.numero);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("req-ok", ctx_r0.requisitos.especial)("req-fail", !ctx_r0.requisitos.especial);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.requisitos.especial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.requisitos.especial);
  }
}
function ConfiguracionComponent_ng_container_36__svg_path_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 68);
  }
}
function ConfiguracionComponent_ng_container_36__svg_circle_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 36);
  }
}
function ConfiguracionComponent_ng_container_36__svg_path_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 69);
  }
}
function ConfiguracionComponent_ng_container_36__svg_line_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 70);
  }
}
function ConfiguracionComponent_ng_container_36_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 78);
    \u0275\u0275text(1, "Las contrase\xF1as no coinciden");
    \u0275\u0275elementEnd();
  }
}
function ConfiguracionComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "button", 47);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_36_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.vista = "menu");
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 38);
    \u0275\u0275text(5, "Cambiar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 48);
    \u0275\u0275element(7, "rect", 45)(8, "path", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 49);
    \u0275\u0275template(10, ConfiguracionComponent_ng_container_36_div_10_Template, 4, 1, "div", 50);
    \u0275\u0275elementStart(11, "div", 51)(12, "label", 52);
    \u0275\u0275text(13, "Contrase\xF1a actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 53)(15, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_ng_container_36_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.actual, $event) || (ctx_r0.form.actual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 55);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_36_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostrarActual = !ctx_r0.mostrarActual);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 56);
    \u0275\u0275template(18, ConfiguracionComponent_ng_container_36__svg_path_18_Template, 1, 0, "path", 57)(19, ConfiguracionComponent_ng_container_36__svg_circle_19_Template, 1, 0, "circle", 58)(20, ConfiguracionComponent_ng_container_36__svg_path_20_Template, 1, 0, "path", 59)(21, ConfiguracionComponent_ng_container_36__svg_line_21_Template, 1, 0, "line", 60);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 51)(23, "label", 52);
    \u0275\u0275text(24, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 53)(26, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_ng_container_36_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.nueva, $event) || (ctx_r0.form.nueva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ConfiguracionComponent_ng_container_36_Template_input_ngModelChange_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNuevaContrasenaChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 55);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_36_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostrarNueva = !ctx_r0.mostrarNueva);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 56);
    \u0275\u0275template(29, ConfiguracionComponent_ng_container_36__svg_path_29_Template, 1, 0, "path", 57)(30, ConfiguracionComponent_ng_container_36__svg_circle_30_Template, 1, 0, "circle", 58)(31, ConfiguracionComponent_ng_container_36__svg_path_31_Template, 1, 0, "path", 59)(32, ConfiguracionComponent_ng_container_36__svg_line_32_Template, 1, 0, "line", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, ConfiguracionComponent_ng_container_36_div_33_Template, 21, 24, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 51)(35, "label", 52);
    \u0275\u0275text(36, "Confirmar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 53)(38, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_ng_container_36_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.confirmar, $event) || (ctx_r0.form.confirmar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 55);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_36_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostrarConfirmar = !ctx_r0.mostrarConfirmar);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 56);
    \u0275\u0275template(41, ConfiguracionComponent_ng_container_36__svg_path_41_Template, 1, 0, "path", 57)(42, ConfiguracionComponent_ng_container_36__svg_circle_42_Template, 1, 0, "circle", 58)(43, ConfiguracionComponent_ng_container_36__svg_path_43_Template, 1, 0, "path", 59)(44, ConfiguracionComponent_ng_container_36__svg_line_44_Template, 1, 0, "line", 60);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, ConfiguracionComponent_ng_container_36_span_45_Template, 2, 0, "span", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 63)(47, "button", 64);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_36_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.actualizarContrasena());
    });
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.errorMsg);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r0.mostrarActual ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.actual);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.mostrarActual);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.mostrarActual);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mostrarActual);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mostrarActual);
    \u0275\u0275advance(5);
    \u0275\u0275property("type", ctx_r0.mostrarNueva ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.nueva);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.mostrarNueva);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.mostrarNueva);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mostrarNueva);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mostrarNueva);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.form.nueva.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("input-error", ctx_r0.errorConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r0.mostrarConfirmar ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.form.confirmar);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.mostrarConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.mostrarConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mostrarConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mostrarConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorConfirmar);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.guardando ? "Actualizando..." : "Actualizar", " ");
  }
}
function ConfiguracionComponent_ng_container_37_img_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 92);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.fotoPreview, \u0275\u0275sanitizeUrl);
  }
}
function ConfiguracionComponent_ng_container_37_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 94);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd()();
  }
}
function ConfiguracionComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "button", 47);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_37_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.vista = "menu");
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 38);
    \u0275\u0275text(5, "Editar informaci\xF3n del perfil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 49)(7, "p", 79);
    \u0275\u0275text(8, "C\xF3digo : ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 80)(12, "div", 81)(13, "div", 82);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_37_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const fotoInput_r5 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(fotoInput_r5.click());
    });
    \u0275\u0275template(14, ConfiguracionComponent_ng_container_37_img_14_Template, 1, 1, "img", 83)(15, ConfiguracionComponent_ng_container_37_div_15_Template, 3, 0, "div", 84);
    \u0275\u0275elementStart(16, "div", 85)(17, "span");
    \u0275\u0275text(18, "Cambiar foto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "input", 86, 0);
    \u0275\u0275listener("change", function ConfiguracionComponent_ng_container_37_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFotoChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 87)(22, "div", 51)(23, "label", 52);
    \u0275\u0275text(24, "Nombre y apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_ng_container_37_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.nombreCompleto, $event) || (ctx_r0.perfil.nombreCompleto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 51)(27, "label", 52);
    \u0275\u0275text(28, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 89);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_ng_container_37_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.correo, $event) || (ctx_r0.perfil.correo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 51)(31, "label", 52);
    \u0275\u0275text(32, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 88);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_ng_container_37_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.direccion, $event) || (ctx_r0.perfil.direccion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 51)(35, "label", 52);
    \u0275\u0275text(36, "N\xFAmero de celular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 90);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_ng_container_37_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.telefono, $event) || (ctx_r0.perfil.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 51)(39, "label", 52);
    \u0275\u0275text(40, "DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 91);
    \u0275\u0275twoWayListener("ngModelChange", function ConfiguracionComponent_ng_container_37_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.dni, $event) || (ctx_r0.perfil.dni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 63)(43, "button", 64);
    \u0275\u0275listener("click", function ConfiguracionComponent_ng_container_37_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardarPerfil());
    });
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.usuario == null ? null : ctx_r0.usuario.codigo);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.fotoPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.fotoPreview);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.perfil.nombreCompleto);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.perfil.correo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.perfil.direccion);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.perfil.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.perfil.dni);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.guardando ? "Guardando..." : "Guardar", " ");
  }
}
function ConfiguracionComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "button", 97);
    \u0275\u0275listener("click", function ConfiguracionComponent_div_48_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostrarModal = false);
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 98);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(6, "a\n");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.mensajeModal);
  }
}
var ConfiguracionComponent = class _ConfiguracionComponent {
  // Valida requisitos en tiempo real
  onNuevaContrasenaChange() {
    const v = this.form.nueva;
    this.requisitos.longitud = v.length >= 8;
    this.requisitos.mayuscula = /[\p{Lu}]/u.test(v);
    this.requisitos.numero = /[0-9]/.test(v);
    this.requisitos.especial = /[^a-zA-Z0-9]/.test(v);
    this.errorConfirmar = false;
  }
  get requisitosOk() {
    return this.requisitos.longitud && this.requisitos.mayuscula && this.requisitos.numero && this.requisitos.especial;
  }
  constructor(servicioAuth, servicioPerfil, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioPerfil = servicioPerfil;
    this.cdr = cdr;
    this.usuario = null;
    this.fotoUrl = null;
    this.vista = "menu";
    this.guardando = false;
    this.mostrarModal = false;
    this.mensajeModal = "";
    this.mostrarActual = false;
    this.mostrarNueva = false;
    this.mostrarConfirmar = false;
    this.errorConfirmar = false;
    this.errorMsg = "";
    this.form = { actual: "", nueva: "", confirmar: "" };
    this.requisitos = {
      longitud: false,
      mayuscula: false,
      numero: false,
      especial: false
    };
    this.fotoPreview = null;
    this.perfil = { nombreCompleto: "", correo: "", direccion: "", telefono: "", dni: "" };
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      this.fotoUrl = url;
      this.cdr.detectChanges();
    });
    this.cargarPerfil();
  }
  // Trae los datos del perfil para pre-llenar la vista de edicion
  cargarPerfil() {
    this.servicioPerfil.obtener().subscribe({
      next: (p) => {
        this.perfil = {
          nombreCompleto: p.nombreCompleto ?? "",
          correo: p.correo ?? "",
          direccion: p.direccion ?? "",
          telefono: p.telefono ?? "",
          dni: p.dni ?? ""
        };
        this.cdr.detectChanges();
      },
      error: () => {
        this.cdr.detectChanges();
      }
    });
  }
  // â”€â”€ Cambiar contrasena â”€â”€
  // Envia el formulario al backend (PUT /api/perfil/contrasena)
  actualizarContrasena() {
    this.errorConfirmar = false;
    this.errorMsg = "";
    if (!this.form.actual || !this.form.nueva || !this.form.confirmar) {
      this.errorMsg = "Completa todos los campos.";
      return;
    }
    if (!this.requisitosOk) {
      this.errorMsg = "La contrase\xC3\xB1a no cumple con los requisitos.";
      return;
    }
    if (this.form.nueva !== this.form.confirmar) {
      this.errorConfirmar = true;
      return;
    }
    this.guardando = true;
    this.servicioPerfil.cambiarContrasena({
      contrasenaActual: this.form.actual,
      nuevaContrasena: this.form.nueva,
      confirmarContrasena: this.form.confirmar
    }).subscribe({
      next: () => {
        this.guardando = false;
        this.cdr.detectChanges();
        this.form = { actual: "", nueva: "", confirmar: "" };
        this.requisitos = { longitud: false, mayuscula: false, numero: false, especial: false };
        this.vista = "menu";
        this.mensajeModal = "Tu contrase\xC3\xB1a ha sido actualizada correctamente.";
        this.mostrarModal = true;
      },
      error: (err) => {
        this.guardando = false;
        this.cdr.detectChanges();
        this.errorMsg = err?.error?.message || "No se pudo actualizar la contrase\xC3\xB1a.";
        alert(this.errorMsg);
      }
    });
  }
  // â”€â”€ Guardar perfil â”€â”€
  // Envia el formulario al backend (PUT /api/perfil)
  guardarPerfil() {
    if (!this.perfil.nombreCompleto.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }
    this.guardando = true;
    this.servicioPerfil.actualizar({
      nombreCompleto: this.perfil.nombreCompleto.trim(),
      correo: this.perfil.correo.trim(),
      direccion: this.perfil.direccion?.trim() || void 0,
      telefono: this.perfil.telefono.trim(),
      dni: this.perfil.dni.trim()
    }).subscribe({
      next: () => {
        this.guardando = false;
        this.cdr.detectChanges();
        this.vista = "menu";
        this.mensajeModal = "Tu perfil ha sido actualizado correctamente.";
        this.mostrarModal = true;
      },
      error: (err) => {
        this.guardando = false;
        this.cdr.detectChanges();
        alert(err?.error?.message || "No se pudo actualizar el perfil.");
      }
    });
  }
  onFotoChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    const reader = new FileReader();
    reader.onload = () => {
      this.fotoPreview = reader.result;
    };
    reader.readAsDataURL(file);
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  static {
    this.\u0275fac = function ConfiguracionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfiguracionComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioPerfil), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfiguracionComponent, selectors: [["app-configuracion"]], decls: 49, vars: 8, consts: [["fotoInput", ""], [1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "sidebar-logo"], [1, "sidebar-nav"], ["routerLink", "/dashboard/agente", 1, "nav-item"], ["routerLink", "/dashboard/tickets", 1, "nav-item"], ["routerLink", "/dashboard/incidencias", 1, "nav-item"], ["routerLink", "/dashboard/reportes", 1, "nav-item"], [1, "sidebar-spacer"], ["routerLink", "/dashboard/perfil", 1, "nav-item"], [1, "nav-item", "active"], [1, "main-area"], [1, "topbar"], [1, "topbar-right"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:36px;height:36px;border-radius:50%;object-fit:cover", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26", 4, "ngIf"], [1, "btn-logout-top", 3, "click"], [1, "content"], [4, "ngIf"], [1, "inner-footer"], [1, "footer-icons"], ["href", "#", 1, "footer-icon"], ["class", "modal-overlay", 4, "ngIf"], ["alt", "avatar", 2, "width", "36px", "height", "36px", "border-radius", "50%", "object-fit", "cover", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "page-header"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#1a2b5e", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "page-icon-svg"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"], [1, "page-title"], [1, "panel"], [1, "opcion-item", 3, "click"], [1, "opcion-label"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#1a2b5e", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "opcion-svg"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "btn-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#1a2b5e", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "page-icon-svg", 2, "margin-left", "auto"], [1, "panel", "form-panel"], ["class", "error-banner", 4, "ngIf"], [1, "form-group"], [1, "form-label"], [1, "input-wrapper"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-eye", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#8a9ab8", "stroke-width", "2", "width", "18", "height", "18"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", 4, "ngIf"], ["cx", "12", "cy", "12", "r", "3", 4, "ngIf"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24", 4, "ngIf"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23", 4, "ngIf"], ["class", "requisitos-box", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "form-footer"], [1, "btn-actualizar", 3, "click", "disabled"], [1, "error-banner"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "15", "height", "15"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "requisitos-box"], [1, "req-item"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "13", "height", "13"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd", 4, "ngIf"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd", 4, "ngIf"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "error-msg"], [1, "userid-label"], [1, "form-layout"], [1, "foto-col"], [1, "foto-wrapper", 3, "click"], ["alt", "Foto", "class", "foto-img", 3, "src", 4, "ngIf"], ["class", "foto-placeholder", 4, "ngIf"], [1, "foto-overlay"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "campos-col"], ["type", "text", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "tel", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "8", 1, "form-input", 3, "ngModelChange", "ngModel"], ["alt", "Foto", 1, "foto-img", 3, "src"], [1, "foto-placeholder"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "48", "height", "48"], [1, "modal-overlay"], [1, "modal-confirmacion"], [1, "modal-close-x", 3, "click"], [1, "modal-mensaje"]], template: function ConfiguracionComponent_Template(rf, ctx) {
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
        \u0275\u0275template(30, ConfiguracionComponent_img_30_Template, 1, 1, "img", 22)(31, ConfiguracionComponent__svg_svg_31_Template, 2, 0, "svg", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 24);
        \u0275\u0275listener("click", function ConfiguracionComponent_Template_button_click_32_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(33, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 25);
        \u0275\u0275template(35, ConfiguracionComponent_ng_container_35_Template, 20, 0, "ng-container", 26)(36, ConfiguracionComponent_ng_container_36_Template, 49, 25, "ng-container", 26)(37, ConfiguracionComponent_ng_container_37_Template, 45, 10, "ng-container", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(38, "footer", 27)(39, "span");
        \u0275\u0275text(40, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 28)(42, "a", 29);
        \u0275\u0275text(43, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "a", 29);
        \u0275\u0275text(45, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "a", 29);
        \u0275\u0275text(47, "\u25CF");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(48, ConfiguracionComponent_div_48_Template, 7, 1, "div", 30);
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
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", ctx.vista === "menu");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.vista === "contrasena");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.vista === "perfil");
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.mostrarModal);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, RouterLink], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 0 18px 0;\n}\n.page-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background: #1a2b5e;\n  color: #fff;\n  font-size: 18px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-icon-right[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #1a2b5e;\n  margin-left: auto;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  color: #1a2b5e;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n  font-weight: 300;\n  transition: color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  color: #e07b00;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.form-panel[_ngcontent-%COMP%] {\n  padding: 28px 32px 32px;\n}\n.opcion-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 18px 24px;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1.5px solid #e8eaf0;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.opcion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.opcion-item[_ngcontent-%COMP%]:hover {\n  background: #f7f8fc;\n}\n.opcion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.opcion-svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.page-icon-svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2d3a58;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #1a2b5e;\n}\n.input-wrapper.input-error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.form-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 10px 13px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  background: transparent;\n}\n.toggle-eye[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  color: #8a9ab8;\n  transition: color 0.15s;\n}\n.toggle-eye[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.error-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e74c3c;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.btn-actualizar[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 48px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-actualizar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-actualizar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.userid-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0 0 22px 0;\n}\n.userid-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 36px;\n  align-items: flex-start;\n}\n.foto-col[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.foto-wrapper[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 190px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  background: #e8eaf0;\n  border: 2px solid #dde2ee;\n}\n.foto-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.foto-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8eaf0;\n}\n.foto-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(26, 43, 94, 0.75);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.foto-wrapper[_ngcontent-%COMP%]:hover   .foto-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.campos-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-confirmacion[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 40px 48px 36px;\n  position: relative;\n  min-width: 300px;\n  max-width: 380px;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.modal-close-x[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: #e74c3c;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  transition: background 0.15s;\n}\n.modal-close-x[_ngcontent-%COMP%]:hover {\n  background: #c0392b;\n}\n.modal-mensaje[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin: 0;\n  line-height: 1.5;\n}\n.inner-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon[_ngcontent-%COMP%]:hover {\n  background: #3a52a0;\n}\n.requisitos-box[_ngcontent-%COMP%] {\n  background: #f7f8fc;\n  border: 1px solid #e0e4ef;\n  border-radius: 6px;\n  padding: 12px 14px;\n  margin-top: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.req-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8a9ab8;\n  transition: color 0.2s;\n}\n.req-ok[_ngcontent-%COMP%] {\n  color: #1d9e75;\n}\n.req-fail[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fdf0f0;\n  border: 1px solid #f5c6c6;\n  border-radius: 6px;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n  color: #c0392b;\n  font-size: 13px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=configuracion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfiguracionComponent, [{
    type: Component,
    args: [{ selector: "app-configuracion", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="app-layout">\r
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
        <a class="nav-item" routerLink="/dashboard/tickets">Tickets</a>\r
        <a class="nav-item" routerLink="/dashboard/incidencias">Incidencias</a>\r
        <a class="nav-item" routerLink="/dashboard/reportes">Reportes</a>\r
      </nav>\r
      <div class="sidebar-spacer"></div>\r
      <nav class="sidebar-nav">\r
        <a class="nav-item" routerLink="/dashboard/perfil">Perfil</a>\r
        <a class="nav-item active">Configuraci\xF3n</a>\r
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
              <span class="user-name">{{ usuario?.nombre }}</span>\r
              <span class="user-code">{{ usuario?.codigo }}</span>\r
            </div>\r
            <div class="user-avatar">
              <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar" style="width:36px;height:36px;border-radius:50%;object-fit:cover" />\r
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
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA MEN\xDA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <ng-container *ngIf="vista === 'menu'">\r
\r
          <div class="page-header">\r
            <svg class="page-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
              <circle cx="12" cy="12" r="3"/>\r
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>\r
            </svg>\r
            <h2 class="page-title">Configuraci\xF3n</h2>\r
          </div>\r
\r
          <div class="panel">\r
            <button class="opcion-item" (click)="vista = 'perfil'">\r
              <span class="opcion-label">Editar informaci\xF3n del perfil</span>\r
              <svg class="opcion-svg" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>\r
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>\r
              </svg>\r
            </button>\r
            <button class="opcion-item" (click)="vista = 'contrasena'">\r
              <span class="opcion-label">Cambiar contrase\xF1a</span>\r
              <svg class="opcion-svg" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\r
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>\r
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>\r
              </svg>\r
            </button>\r
          </div>\r
\r
        </ng-container>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA CAMBIAR CONTRASE\xD1A \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <ng-container *ngIf="vista === 'contrasena'">\r
\r
          <div class="page-header">\r
            <button class="btn-back" (click)="vista = 'menu'">&#8249;</button>\r
            <h2 class="page-title">Cambiar contrase\xF1a</h2>\r
            <svg class="page-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:auto">\r
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>\r
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>\r
            </svg>\r
          </div>\r
\r
          <div class="panel form-panel">\r
\r
            <!-- Error general -->\r
            <div class="error-banner" *ngIf="errorMsg">\r
              <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">\r
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>\r
              </svg>\r
              {{ errorMsg }}\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="form-label">Contrase\xF1a actual</label>\r
              <div class="input-wrapper">\r
                <input class="form-input" [type]="mostrarActual ? 'text' : 'password'"\r
                       [(ngModel)]="form.actual" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />\r
                <button class="toggle-eye" type="button" (click)="mostrarActual = !mostrarActual">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="18" height="18">\r
                    <path *ngIf="!mostrarActual" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
                    <circle *ngIf="!mostrarActual" cx="12" cy="12" r="3"/>\r
                    <path *ngIf="mostrarActual" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>\r
                    <line *ngIf="mostrarActual" x1="1" y1="1" x2="23" y2="23"/>\r
                  </svg>\r
                </button>\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="form-label">Nueva contrase\xF1a</label>\r
              <div class="input-wrapper">\r
                <input class="form-input" [type]="mostrarNueva ? 'text' : 'password'"\r
                       [(ngModel)]="form.nueva" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
                       (ngModelChange)="onNuevaContrasenaChange()" />\r
                <button class="toggle-eye" type="button" (click)="mostrarNueva = !mostrarNueva">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="18" height="18">\r
                    <path *ngIf="!mostrarNueva" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
                    <circle *ngIf="!mostrarNueva" cx="12" cy="12" r="3"/>\r
                    <path *ngIf="mostrarNueva" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>\r
                    <line *ngIf="mostrarNueva" x1="1" y1="1" x2="23" y2="23"/>\r
                  </svg>\r
                </button>\r
              </div>\r
              <!-- Indicadores de requisitos -->\r
              <div class="requisitos-box" *ngIf="form.nueva.length > 0">\r
                <div class="req-item" [class.req-ok]="requisitos.longitud" [class.req-fail]="!requisitos.longitud">\r
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">\r
                    <path *ngIf="requisitos.longitud" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>\r
                    <path *ngIf="!requisitos.longitud" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>\r
                  </svg>\r
                  M\xEDnimo 8 caracteres\r
                </div>\r
                <div class="req-item" [class.req-ok]="requisitos.mayuscula" [class.req-fail]="!requisitos.mayuscula">\r
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">\r
                    <path *ngIf="requisitos.mayuscula" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>\r
                    <path *ngIf="!requisitos.mayuscula" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>\r
                  </svg>\r
                  Al menos 1 may\xFAscula\r
                </div>\r
                <div class="req-item" [class.req-ok]="requisitos.numero" [class.req-fail]="!requisitos.numero">\r
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">\r
                    <path *ngIf="requisitos.numero" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>\r
                    <path *ngIf="!requisitos.numero" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>\r
                  </svg>\r
                  Al menos 1 n\xFAmero\r
                </div>\r
                <div class="req-item" [class.req-ok]="requisitos.especial" [class.req-fail]="!requisitos.especial">\r
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">\r
                    <path *ngIf="requisitos.especial" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>\r
                    <path *ngIf="!requisitos.especial" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>\r
                  </svg>\r
                  Al menos 1 car\xE1cter especial (!@#$...)\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div class="form-group">\r
              <label class="form-label">Confirmar contrase\xF1a</label>\r
              <div class="input-wrapper" [class.input-error]="errorConfirmar">\r
                <input class="form-input" [type]="mostrarConfirmar ? 'text' : 'password'"\r
                       [(ngModel)]="form.confirmar" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />\r
                <button class="toggle-eye" type="button" (click)="mostrarConfirmar = !mostrarConfirmar">\r
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="18" height="18">\r
                    <path *ngIf="!mostrarConfirmar" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
                    <circle *ngIf="!mostrarConfirmar" cx="12" cy="12" r="3"/>\r
                    <path *ngIf="mostrarConfirmar" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>\r
                    <line *ngIf="mostrarConfirmar" x1="1" y1="1" x2="23" y2="23"/>\r
                  </svg>\r
                </button>\r
              </div>\r
              <span class="error-msg" *ngIf="errorConfirmar">Las contrase\xF1as no coinciden</span>\r
            </div>\r
\r
            <div class="form-footer">\r
              <button class="btn-actualizar" (click)="actualizarContrasena()" [disabled]="guardando">\r
                {{ guardando ? 'Actualizando...' : 'Actualizar' }}\r
              </button>\r
            </div>\r
\r
          </div>\r
\r
        </ng-container>\r
\r
        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA EDITAR PERFIL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
        <ng-container *ngIf="vista === 'perfil'">\r
\r
          <div class="page-header">\r
            <button class="btn-back" (click)="vista = 'menu'">&#8249;</button>\r
            <h2 class="page-title">Editar informaci\xF3n del perfil</h2>\r
          </div>\r
\r
          <div class="panel form-panel">\r
            <p class="userid-label">C\xF3digo : <strong>{{ usuario?.codigo }}</strong></p>\r
\r
            <div class="form-layout">\r
              <div class="foto-col">\r
                <div class="foto-wrapper" (click)="fotoInput.click()">\r
                  <img *ngIf="fotoPreview" [src]="fotoPreview" alt="Foto" class="foto-img" />\r
                  <div *ngIf="!fotoPreview" class="foto-placeholder">\r
                    <svg viewBox="0 0 24 24" fill="#9aaac5" width="48" height="48">\r
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>\r
                    </svg>\r
                  </div>\r
                  <div class="foto-overlay"><span>Cambiar foto</span></div>\r
                </div>\r
                <input #fotoInput type="file" accept="image/*" style="display:none"\r
                       (change)="onFotoChange($event)" />\r
              </div>\r
\r
              <div class="campos-col">\r
                <div class="form-group">\r
                  <label class="form-label">Nombre y apellido</label>\r
                  <input class="form-input" type="text" [(ngModel)]="perfil.nombreCompleto" />\r
                </div>\r
                <div class="form-group">\r
                  <label class="form-label">Correo electr\xF3nico</label>\r
                  <input class="form-input" type="email" [(ngModel)]="perfil.correo" />\r
                </div>\r
                <div class="form-group">\r
                  <label class="form-label">Direcci\xF3n</label>\r
                  <input class="form-input" type="text" [(ngModel)]="perfil.direccion" />\r
                </div>\r
                <div class="form-group">\r
                  <label class="form-label">N\xFAmero de celular</label>\r
                  <input class="form-input" type="tel" [(ngModel)]="perfil.telefono" />\r
                </div>\r
                <div class="form-group">\r
                  <label class="form-label">DNI</label>\r
                  <input class="form-input" type="text" [(ngModel)]="perfil.dni" maxlength="8" />\r
                </div>\r
                <div class="form-footer">\r
                  <button class="btn-actualizar" (click)="guardarPerfil()" [disabled]="guardando">\r
                    {{ guardando ? 'Guardando...' : 'Guardar' }}\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
        </ng-container>\r
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
<!-- MODAL \xC9XITO -->\r
<div class="modal-overlay" *ngIf="mostrarModal">\r
  <div class="modal-confirmacion">\r
    <button class="modal-close-x" (click)="mostrarModal = false">&#10005;</button>\r
    <p class="modal-mensaje">{{ mensajeModal }}</p>\r
  </div>a\r
</div>`, styles: ['/* src/app/pages/configuracion/configuracion.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item:hover {\n  background: #f0f2f8;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 0 18px 0;\n}\n.page-icon {\n  width: 36px;\n  height: 36px;\n  background: #1a2b5e;\n  color: #fff;\n  font-size: 18px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-icon-right {\n  font-size: 22px;\n  color: #1a2b5e;\n  margin-left: auto;\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-back {\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  color: #1a2b5e;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n  font-weight: 300;\n  transition: color 0.15s;\n}\n.btn-back:hover {\n  color: #e07b00;\n}\n.panel {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.form-panel {\n  padding: 28px 32px 32px;\n}\n.opcion-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 18px 24px;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1.5px solid #e8eaf0;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.opcion-item:last-child {\n  border-bottom: none;\n}\n.opcion-item:hover {\n  background: #f7f8fc;\n}\n.opcion-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.opcion-svg {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.page-icon-svg {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2d3a58;\n}\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.input-wrapper:focus-within {\n  border-color: #1a2b5e;\n}\n.input-wrapper.input-error {\n  border-color: #e74c3c;\n}\n.form-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 10px 13px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  background: transparent;\n}\n.toggle-eye {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  color: #8a9ab8;\n  transition: color 0.15s;\n}\n.toggle-eye:hover {\n  color: #1a2b5e;\n}\n.error-msg {\n  font-size: 12px;\n  color: #e74c3c;\n}\n.form-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.btn-actualizar {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 48px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-actualizar:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-actualizar:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.userid-label {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0 0 22px 0;\n}\n.userid-label strong {\n  color: #1a2b5e;\n}\n.form-layout {\n  display: flex;\n  gap: 36px;\n  align-items: flex-start;\n}\n.foto-col {\n  flex-shrink: 0;\n}\n.foto-wrapper {\n  width: 160px;\n  height: 190px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  background: #e8eaf0;\n  border: 2px solid #dde2ee;\n}\n.foto-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.foto-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8eaf0;\n}\n.foto-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(26, 43, 94, 0.75);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.foto-wrapper:hover .foto-overlay {\n  opacity: 1;\n}\n.campos-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-confirmacion {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 40px 48px 36px;\n  position: relative;\n  min-width: 300px;\n  max-width: 380px;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.modal-close-x {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: #e74c3c;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  transition: background 0.15s;\n}\n.modal-close-x:hover {\n  background: #c0392b;\n}\n.modal-mensaje {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin: 0;\n  line-height: 1.5;\n}\n.inner-footer {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon:hover {\n  background: #3a52a0;\n}\n.requisitos-box {\n  background: #f7f8fc;\n  border: 1px solid #e0e4ef;\n  border-radius: 6px;\n  padding: 12px 14px;\n  margin-top: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.req-item {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8a9ab8;\n  transition: color 0.2s;\n}\n.req-ok {\n  color: #1d9e75;\n}\n.req-fail {\n  color: #c0392b;\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fdf0f0;\n  border: 1px solid #f5c6c6;\n  border-radius: 6px;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n  color: #c0392b;\n  font-size: 13px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=configuracion.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioPerfil }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfiguracionComponent, { className: "ConfiguracionComponent", filePath: "src/app/pages/configuracion/configuracion.component.ts", lineNumber: 18 });
})();
export {
  ConfiguracionComponent
};
//# sourceMappingURL=chunk-O2GHIDOC.js.map
