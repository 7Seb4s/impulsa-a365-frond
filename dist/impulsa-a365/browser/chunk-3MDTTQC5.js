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
  Router,
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

// src/app/pages/administracion/administracion.component.ts
function AdministracionComponent_img_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoUrl, \u0275\u0275sanitizeUrl);
  }
}
function AdministracionComponent__svg_svg_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 44);
    \u0275\u0275element(1, "path", 45);
    \u0275\u0275elementEnd();
  }
}
function AdministracionComponent_ng_container_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 47);
    \u0275\u0275element(3, "circle", 23)(4, "path", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2", 49);
    \u0275\u0275text(6, "Administraci\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50)(8, "button", 51);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_57_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.vista = "perfil");
    });
    \u0275\u0275elementStart(9, "span", 52);
    \u0275\u0275text(10, "Perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(11, "svg", 53);
    \u0275\u0275element(12, "path", 54)(13, "path", 55);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(14, "button", 51);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_57_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.vista = "contrasena");
    });
    \u0275\u0275elementStart(15, "span", 52);
    \u0275\u0275text(16, "Cambiar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 53);
    \u0275\u0275element(18, "rect", 56)(19, "path", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(20, "div", 58)(21, "button", 59);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_57_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onLogout());
    });
    \u0275\u0275text(22, "Cerrar sesi\xF3n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function AdministracionComponent_ng_container_58_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 79);
    \u0275\u0275element(2, "path", 80);
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
function AdministracionComponent_ng_container_58__svg_path_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 81);
  }
}
function AdministracionComponent_ng_container_58__svg_circle_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 23);
  }
}
function AdministracionComponent_ng_container_58__svg_path_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 82);
  }
}
function AdministracionComponent_ng_container_58__svg_line_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 83);
  }
}
function AdministracionComponent_ng_container_58__svg_path_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 81);
  }
}
function AdministracionComponent_ng_container_58__svg_circle_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 23);
  }
}
function AdministracionComponent_ng_container_58__svg_path_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 82);
  }
}
function AdministracionComponent_ng_container_58__svg_line_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 83);
  }
}
function AdministracionComponent_ng_container_58_div_33__svg_path_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 90);
  }
}
function AdministracionComponent_ng_container_58_div_33__svg_path_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 91);
  }
}
function AdministracionComponent_ng_container_58_div_33__svg_path_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 90);
  }
}
function AdministracionComponent_ng_container_58_div_33__svg_path_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 91);
  }
}
function AdministracionComponent_ng_container_58_div_33__svg_path_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 90);
  }
}
function AdministracionComponent_ng_container_58_div_33__svg_path_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 91);
  }
}
function AdministracionComponent_ng_container_58_div_33__svg_path_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 90);
  }
}
function AdministracionComponent_ng_container_58_div_33__svg_path_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 91);
  }
}
function AdministracionComponent_ng_container_58_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "p", 85);
    \u0275\u0275text(2, "La contrase\xF1a debe tener:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 87);
    \u0275\u0275template(5, AdministracionComponent_ng_container_58_div_33__svg_path_5_Template, 1, 0, "path", 88)(6, AdministracionComponent_ng_container_58_div_33__svg_path_6_Template, 1, 0, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " M\xEDnimo 8 caracteres ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 87);
    \u0275\u0275template(10, AdministracionComponent_ng_container_58_div_33__svg_path_10_Template, 1, 0, "path", 88)(11, AdministracionComponent_ng_container_58_div_33__svg_path_11_Template, 1, 0, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Al menos 1 letra may\xFAscula ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(13, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(14, "svg", 87);
    \u0275\u0275template(15, AdministracionComponent_ng_container_58_div_33__svg_path_15_Template, 1, 0, "path", 88)(16, AdministracionComponent_ng_container_58_div_33__svg_path_16_Template, 1, 0, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " Al menos 1 n\xFAmero ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "div", 86);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 87);
    \u0275\u0275template(20, AdministracionComponent_ng_container_58_div_33__svg_path_20_Template, 1, 0, "path", 88)(21, AdministracionComponent_ng_container_58_div_33__svg_path_21_Template, 1, 0, "path", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Al menos 1 car\xE1cter especial (!@#$...) ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
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
function AdministracionComponent_ng_container_58__svg_path_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 81);
  }
}
function AdministracionComponent_ng_container_58__svg_circle_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "circle", 23);
  }
}
function AdministracionComponent_ng_container_58__svg_path_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "path", 82);
  }
}
function AdministracionComponent_ng_container_58__svg_line_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "line", 83);
  }
}
function AdministracionComponent_ng_container_58_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "Las contrase\xF1as no coinciden");
    \u0275\u0275elementEnd();
  }
}
function AdministracionComponent_ng_container_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "button", 60);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_58_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.vista = "menu";
      ctx_r0.errorMsg = "";
      return \u0275\u0275resetView(ctx_r0.errorConfirmar = false);
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 49);
    \u0275\u0275text(5, "Cambiar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 61);
    \u0275\u0275element(7, "rect", 56)(8, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 62);
    \u0275\u0275template(10, AdministracionComponent_ng_container_58_div_10_Template, 4, 1, "div", 63);
    \u0275\u0275elementStart(11, "div", 64)(12, "label", 65);
    \u0275\u0275text(13, "Contrase\xF1a actual");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 66)(15, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AdministracionComponent_ng_container_58_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.actual, $event) || (ctx_r0.form.actual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 68);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_58_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostrarActual = !ctx_r0.mostrarActual);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(17, "svg", 69);
    \u0275\u0275template(18, AdministracionComponent_ng_container_58__svg_path_18_Template, 1, 0, "path", 70)(19, AdministracionComponent_ng_container_58__svg_circle_19_Template, 1, 0, "circle", 71)(20, AdministracionComponent_ng_container_58__svg_path_20_Template, 1, 0, "path", 72)(21, AdministracionComponent_ng_container_58__svg_line_21_Template, 1, 0, "line", 73);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(22, "div", 64)(23, "label", 65);
    \u0275\u0275text(24, "Nueva contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 66)(26, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AdministracionComponent_ng_container_58_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.nueva, $event) || (ctx_r0.form.nueva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function AdministracionComponent_ng_container_58_Template_input_ngModelChange_26_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onNuevaContrasenaChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 68);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_58_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostrarNueva = !ctx_r0.mostrarNueva);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(28, "svg", 69);
    \u0275\u0275template(29, AdministracionComponent_ng_container_58__svg_path_29_Template, 1, 0, "path", 70)(30, AdministracionComponent_ng_container_58__svg_circle_30_Template, 1, 0, "circle", 71)(31, AdministracionComponent_ng_container_58__svg_path_31_Template, 1, 0, "path", 72)(32, AdministracionComponent_ng_container_58__svg_line_32_Template, 1, 0, "line", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, AdministracionComponent_ng_container_58_div_33_Template, 23, 24, "div", 74);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(34, "div", 64)(35, "label", 65);
    \u0275\u0275text(36, "Confirmar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 66)(38, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function AdministracionComponent_ng_container_58_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.form.confirmar, $event) || (ctx_r0.form.confirmar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 68);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_58_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostrarConfirmar = !ctx_r0.mostrarConfirmar);
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 69);
    \u0275\u0275template(41, AdministracionComponent_ng_container_58__svg_path_41_Template, 1, 0, "path", 70)(42, AdministracionComponent_ng_container_58__svg_circle_42_Template, 1, 0, "circle", 71)(43, AdministracionComponent_ng_container_58__svg_path_43_Template, 1, 0, "path", 72)(44, AdministracionComponent_ng_container_58__svg_line_44_Template, 1, 0, "line", 73);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, AdministracionComponent_ng_container_58_span_45_Template, 2, 0, "span", 75);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(46, "div", 76)(47, "button", 77);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_58_Template_button_click_47_listener() {
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
function AdministracionComponent_ng_container_59_img_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 106);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.fotoPreview, \u0275\u0275sanitizeUrl);
  }
}
function AdministracionComponent_ng_container_59_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 108);
    \u0275\u0275element(2, "path", 45);
    \u0275\u0275elementEnd()();
  }
}
function AdministracionComponent_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 46)(2, "button", 60);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_59_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.vista = "menu";
      return \u0275\u0275resetView(ctx_r0.errorMsg = "");
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 49);
    \u0275\u0275text(5, "Editar informaci\xF3n del perfil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 62)(7, "p", 93);
    \u0275\u0275text(8, "C\xF3digo : ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 94)(12, "div", 95)(13, "div", 96);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_59_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r4);
      const fotoInput_r5 = \u0275\u0275reference(20);
      return \u0275\u0275resetView(fotoInput_r5.click());
    });
    \u0275\u0275template(14, AdministracionComponent_ng_container_59_img_14_Template, 1, 1, "img", 97)(15, AdministracionComponent_ng_container_59_div_15_Template, 3, 0, "div", 98);
    \u0275\u0275elementStart(16, "div", 99)(17, "span");
    \u0275\u0275text(18, "Cambiar foto");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "input", 100, 0);
    \u0275\u0275listener("change", function AdministracionComponent_ng_container_59_Template_input_change_19_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFotoChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 101)(22, "div", 64)(23, "label", 65);
    \u0275\u0275text(24, "Nombre y apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function AdministracionComponent_ng_container_59_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.nombreCompleto, $event) || (ctx_r0.perfil.nombreCompleto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 64)(27, "label", 65);
    \u0275\u0275text(28, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 103);
    \u0275\u0275twoWayListener("ngModelChange", function AdministracionComponent_ng_container_59_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.correo, $event) || (ctx_r0.perfil.correo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 64)(31, "label", 65);
    \u0275\u0275text(32, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 102);
    \u0275\u0275twoWayListener("ngModelChange", function AdministracionComponent_ng_container_59_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.direccion, $event) || (ctx_r0.perfil.direccion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 64)(35, "label", 65);
    \u0275\u0275text(36, "N\xFAmero de celular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function AdministracionComponent_ng_container_59_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.telefono, $event) || (ctx_r0.perfil.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 64)(39, "label", 65);
    \u0275\u0275text(40, "DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 105);
    \u0275\u0275twoWayListener("ngModelChange", function AdministracionComponent_ng_container_59_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.perfil.dni, $event) || (ctx_r0.perfil.dni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 76)(43, "button", 77);
    \u0275\u0275listener("click", function AdministracionComponent_ng_container_59_Template_button_click_43_listener() {
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
function AdministracionComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 109)(1, "div", 110)(2, "button", 111);
    \u0275\u0275listener("click", function AdministracionComponent_div_70_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.mostrarModal = false);
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 112);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.mensajeModal);
  }
}
var AdministracionComponent = class _AdministracionComponent {
  constructor(servicioAuth, servicioPerfil, router, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioPerfil = servicioPerfil;
    this.router = router;
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
    this.requisitos = {
      longitud: false,
      // mÃ­nimo 8 caracteres
      mayuscula: false,
      // al menos 1 letra mayÃºscula
      numero: false,
      // al menos 1 dÃ­gito
      especial: false
      // al menos 1 carÃ¡cter especial
    };
    this.form = { actual: "", nueva: "", confirmar: "" };
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
  // â”€â”€ NAVEGACIÃ“N SIDEBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
  irAPanelUsuarios() {
    this.router.navigate(["/dashboard/panel-usuarios"]);
  }
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
  // Valida requisitos en tiempo real mientras el usuario escribe
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
  // â”€â”€ Cambiar contraseÃ±a â”€â”€
  actualizarContrasena() {
    this.errorConfirmar = false;
    this.errorMsg = "";
    if (!this.form.actual || !this.form.nueva || !this.form.confirmar) {
      this.errorMsg = "Completa todos los campos.";
      return;
    }
    if (!this.requisitosOk) {
      this.errorMsg = "La nueva contrase\xC3\xB1a no cumple los requisitos.";
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
      }
    });
  }
  // â”€â”€ Guardar perfil â”€â”€
  guardarPerfil() {
    if (!this.perfil.nombreCompleto.trim()) {
      this.errorMsg = "El nombre es obligatorio.";
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
        this.errorMsg = err?.error?.message || "No se pudo actualizar el perfil.";
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
    this.\u0275fac = function AdministracionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdministracionComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioPerfil), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdministracionComponent, selectors: [["app-administracion"]], decls: 71, vars: 8, consts: [["fotoInput", ""], [1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "sidebar-logo"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "16", "height", "16"], ["d", "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"], ["d", "M9 21V12h6v9"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M16 5V3M8 5V3M2 9h20"], ["d", "M8 13h4M8 17h8"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["cx", "12", "cy", "16", "r", "0.5", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "1"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "16", "y1", "11", "x2", "22", "y2", "11"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], [1, "nav-item", "active"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], [1, "sidebar-spacer"], [1, "main-area"], [1, "topbar"], [1, "topbar-right"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:36px;height:36px;border-radius:50%;object-fit:cover", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26", 4, "ngIf"], [1, "btn-logout-top", 3, "click"], [1, "content"], [4, "ngIf"], [1, "inner-footer"], [1, "footer-icons"], ["href", "#", 1, "footer-icon"], ["class", "modal-overlay", 4, "ngIf"], ["alt", "avatar", 2, "width", "36px", "height", "36px", "border-radius", "50%", "object-fit", "cover", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "page-header"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#1a2b5e", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "page-icon-svg"], ["d", "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33\n                       1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33\n                       l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0\n                       1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65\n                       1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0\n                       0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21\n                       a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"], [1, "page-title"], [1, "panel"], [1, "opcion-item", 3, "click"], [1, "opcion-label"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#1a2b5e", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "opcion-svg"], ["d", "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"], ["d", "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"], ["x", "3", "y", "11", "width", "18", "height", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "logout-area"], [1, "btn-cerrar-sesion", 3, "click"], [1, "btn-back", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#1a2b5e", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "page-icon-svg", 2, "margin-left", "auto"], [1, "panel", "form-panel"], ["class", "error-banner", 4, "ngIf"], [1, "form-group"], [1, "form-label"], [1, "input-wrapper"], ["placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 1, "form-input", 3, "ngModelChange", "type", "ngModel"], ["type", "button", 1, "toggle-eye", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#8a9ab8", "stroke-width", "2", "width", "18", "height", "18"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", 4, "ngIf"], ["cx", "12", "cy", "12", "r", "3", 4, "ngIf"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24", 4, "ngIf"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23", 4, "ngIf"], ["class", "requisitos-box", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], [1, "form-footer"], [1, "btn-actualizar", 3, "click", "disabled"], [1, "error-banner"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "15", "height", "15"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["d", "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "requisitos-box"], [1, "req-titulo"], [1, "req-item"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "13", "height", "13"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd", 4, "ngIf"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd", 4, "ngIf"], ["fill-rule", "evenodd", "d", "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "error-msg"], [1, "userid-label"], [1, "form-layout"], [1, "foto-col"], [1, "foto-wrapper", 3, "click"], ["alt", "Foto", "class", "foto-img", 3, "src", 4, "ngIf"], ["class", "foto-placeholder", 4, "ngIf"], [1, "foto-overlay"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], [1, "campos-col"], ["type", "text", 1, "form-input-plain", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "form-input-plain", 3, "ngModelChange", "ngModel"], ["type", "tel", 1, "form-input-plain", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "8", 1, "form-input-plain", 3, "ngModelChange", "ngModel"], ["alt", "Foto", 1, "foto-img", 3, "src"], [1, "foto-placeholder"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "48", "height", "48"], [1, "modal-overlay"], [1, "modal-confirmacion"], [1, "modal-close-x", 3, "click"], [1, "modal-mensaje"]], template: function AdministracionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "aside", 3)(3, "div", 4);
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "nav", 6)(6, "a", 7);
        \u0275\u0275listener("click", function AdministracionComponent_Template_a_click_6_listener() {
          return ctx.irAInicio();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(7, "svg", 8);
        \u0275\u0275element(8, "path", 9)(9, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Inicio ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "a", 7);
        \u0275\u0275listener("click", function AdministracionComponent_Template_a_click_11_listener() {
          return ctx.irAGestionTickets();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(12, "svg", 8);
        \u0275\u0275element(13, "rect", 11)(14, "path", 12)(15, "path", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " Gesti\xF3n de tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "a", 7);
        \u0275\u0275listener("click", function AdministracionComponent_Template_a_click_17_listener() {
          return ctx.irAGestionIncidencias();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(18, "svg", 8);
        \u0275\u0275element(19, "circle", 14)(20, "line", 15)(21, "circle", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " Gesti\xF3n de incidencias ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(23, "a", 7);
        \u0275\u0275listener("click", function AdministracionComponent_Template_a_click_23_listener() {
          return ctx.irACrearUsuario();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 8);
        \u0275\u0275element(25, "path", 17)(26, "circle", 18)(27, "line", 19)(28, "line", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " Registro de usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(30, "a", 7);
        \u0275\u0275listener("click", function AdministracionComponent_Template_a_click_30_listener() {
          return ctx.irAPanelUsuarios();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(31, "svg", 8);
        \u0275\u0275element(32, "path", 17)(33, "circle", 18)(34, "path", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " Usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(36, "a", 22);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(37, "svg", 8);
        \u0275\u0275element(38, "circle", 23)(39, "path", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " Administraci\xF3n ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(41, "div", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 26)(43, "header", 27)(44, "div", 28)(45, "div", 29)(46, "div", 30)(47, "span", 31);
        \u0275\u0275text(48);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 32);
        \u0275\u0275text(50);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 33);
        \u0275\u0275template(52, AdministracionComponent_img_52_Template, 1, 1, "img", 34)(53, AdministracionComponent__svg_svg_53_Template, 2, 0, "svg", 35);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "button", 36);
        \u0275\u0275listener("click", function AdministracionComponent_Template_button_click_54_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(55, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "div", 37);
        \u0275\u0275template(57, AdministracionComponent_ng_container_57_Template, 23, 0, "ng-container", 38)(58, AdministracionComponent_ng_container_58_Template, 49, 25, "ng-container", 38)(59, AdministracionComponent_ng_container_59_Template, 45, 10, "ng-container", 38);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(60, "footer", 39)(61, "span");
        \u0275\u0275text(62, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 40)(64, "a", 41);
        \u0275\u0275text(65, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "a", 41);
        \u0275\u0275text(67, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "a", 41);
        \u0275\u0275text(69, "\u25CF");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(70, AdministracionComponent_div_70_Template, 6, 1, "div", 42);
      }
      if (rf & 2) {
        \u0275\u0275advance(48);
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
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n  width: calc(100% - 16px);\n  text-align: left;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 0 18px 0;\n}\n.page-icon-svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  color: #1a2b5e;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n  font-weight: 300;\n  transition: color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  color: #e07b00;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.form-panel[_ngcontent-%COMP%] {\n  padding: 28px 32px 32px;\n}\n.opcion-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 18px 24px;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1.5px solid #e8eaf0;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.opcion-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.opcion-item[_ngcontent-%COMP%]:hover {\n  background: #f7f8fc;\n}\n.opcion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.opcion-svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.logout-area[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n}\n.btn-cerrar-sesion[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #1a2b5e;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 6px;\n  padding: 11px 40px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-cerrar-sesion[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n  border-color: #1a2b5e;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2d3a58;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #1a2b5e;\n}\n.input-wrapper.input-error[_ngcontent-%COMP%] {\n  border-color: #e74c3c;\n}\n.form-input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 10px 13px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  background: transparent;\n}\n.form-input-plain[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  outline: none;\n  padding: 10px 13px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  transition: border-color 0.15s;\n}\n.form-input-plain[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.toggle-eye[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  color: #8a9ab8;\n  transition: color 0.15s;\n}\n.toggle-eye[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.requisitos-box[_ngcontent-%COMP%] {\n  background: #f7f8fc;\n  border: 1px solid #e0e4ef;\n  border-radius: 6px;\n  padding: 12px 14px;\n  margin-top: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.req-titulo[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7a99;\n  margin: 0 0 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.req-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8a9ab8;\n  transition: color 0.2s;\n}\n.req-ok[_ngcontent-%COMP%] {\n  color: #1d9e75;\n}\n.req-fail[_ngcontent-%COMP%] {\n  color: #c0392b;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fdf0f0;\n  border: 1px solid #f5c6c6;\n  border-radius: 6px;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #c0392b;\n  font-weight: 500;\n}\n.error-msg[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #e74c3c;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.btn-actualizar[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 48px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-actualizar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-actualizar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.userid-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0 0 22px 0;\n}\n.userid-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 36px;\n  align-items: flex-start;\n}\n.foto-col[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.foto-wrapper[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 190px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  background: #e8eaf0;\n  border: 2px solid #dde2ee;\n}\n.foto-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.foto-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8eaf0;\n}\n.foto-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(26, 43, 94, 0.75);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.foto-wrapper[_ngcontent-%COMP%]:hover   .foto-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.campos-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-confirmacion[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 40px 48px 36px;\n  position: relative;\n  min-width: 300px;\n  max-width: 380px;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.modal-close-x[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: #e74c3c;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  transition: background 0.15s;\n}\n.modal-close-x[_ngcontent-%COMP%]:hover {\n  background: #c0392b;\n}\n.modal-mensaje[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin: 0;\n  line-height: 1.5;\n}\n.inner-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon[_ngcontent-%COMP%]:hover {\n  background: #3a52a0;\n}\n/*# sourceMappingURL=administracion.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministracionComponent, [{
    type: Component,
    args: [{ selector: "app-administracion", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- pages/administracion/administracion.component.html -->
<div class="app-layout">

  <div class="app-body">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" loading="lazy" />
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
        <a class="nav-item" (click)="irAPanelUsuarios()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
          </svg>
          Usuarios
        </a>

        <!-- Administraci\xF3n \u2014 ACTIVO -->
        <a class="nav-item active">
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

      <header class="topbar">
        <div class="topbar-right">
          <div class="user-chip">
            <div class="user-text">
              <span class="user-name">{{ usuario?.nombre }}</span>
              <span class="user-code">{{ usuario?.codigo }}</span>
            </div>
            <div class="user-avatar">
              <img *ngIf="fotoUrl" [src]="fotoUrl" alt="avatar" style="width:36px;height:36px;border-radius:50%;object-fit:cover" />
              <svg *ngIf="!fotoUrl" viewBox="0 0 24 24" fill="#9aaac5" width="26" height="26">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
          <button class="btn-logout-top" (click)="onLogout()">Cerrar sesi\xF3n</button>
        </div>
      </header>

      <div class="content">

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA MEN\xDA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <ng-container *ngIf="vista === 'menu'">

          <div class="page-header">
            <svg class="page-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33
                       1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33
                       l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0
                       1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65
                       1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0
                       0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21
                       a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            <h2 class="page-title">Administraci\xF3n</h2>
          </div>

          <div class="panel">
            <button class="opcion-item" (click)="vista = 'perfil'">
              <span class="opcion-label">Perfil</span>
              <svg class="opcion-svg" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
            </button>
            <button class="opcion-item" (click)="vista = 'contrasena'">
              <span class="opcion-label">Cambiar contrase\xF1a</span>
              <svg class="opcion-svg" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </button>
          </div>

          <div class="logout-area">
            <button class="btn-cerrar-sesion" (click)="onLogout()">Cerrar sesi\xF3n</button>
          </div>

        </ng-container>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA CAMBIAR CONTRASE\xD1A \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <ng-container *ngIf="vista === 'contrasena'">

          <div class="page-header">
            <button class="btn-back" (click)="vista = 'menu'; errorMsg = ''; errorConfirmar = false">&#8249;</button>
            <h2 class="page-title">Cambiar contrase\xF1a</h2>
            <svg class="page-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#1a2b5e" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" style="margin-left:auto">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
          </div>

          <div class="panel form-panel">

            <!-- Error general -->
            <div class="error-banner" *ngIf="errorMsg">
              <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
              </svg>
              {{ errorMsg }}
            </div>

            <!-- Contrase\xF1a actual -->
            <div class="form-group">
              <label class="form-label">Contrase\xF1a actual</label>
              <div class="input-wrapper">
                <input class="form-input" [type]="mostrarActual ? 'text' : 'password'"
                       [(ngModel)]="form.actual" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
                <button class="toggle-eye" type="button" (click)="mostrarActual = !mostrarActual">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="18" height="18">
                    <path *ngIf="!mostrarActual" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle *ngIf="!mostrarActual" cx="12" cy="12" r="3"/>
                    <path *ngIf="mostrarActual" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line *ngIf="mostrarActual" x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Nueva contrase\xF1a -->
            <div class="form-group">
              <label class="form-label">Nueva contrase\xF1a</label>
              <div class="input-wrapper">
                <input class="form-input" [type]="mostrarNueva ? 'text' : 'password'"
                       [(ngModel)]="form.nueva" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                       (ngModelChange)="onNuevaContrasenaChange()" />
                <button class="toggle-eye" type="button" (click)="mostrarNueva = !mostrarNueva">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="18" height="18">
                    <path *ngIf="!mostrarNueva" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle *ngIf="!mostrarNueva" cx="12" cy="12" r="3"/>
                    <path *ngIf="mostrarNueva" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line *ngIf="mostrarNueva" x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                </button>
              </div>

              <!-- Checklist de requisitos (aparece cuando empieza a escribir) -->
              <div class="requisitos-box" *ngIf="form.nueva.length > 0">
                <p class="req-titulo">La contrase\xF1a debe tener:</p>
                <div class="req-item" [class.req-ok]="requisitos.longitud" [class.req-fail]="!requisitos.longitud">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                    <path *ngIf="requisitos.longitud" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    <path *ngIf="!requisitos.longitud" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                  M\xEDnimo 8 caracteres
                </div>
                <div class="req-item" [class.req-ok]="requisitos.mayuscula" [class.req-fail]="!requisitos.mayuscula">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                    <path *ngIf="requisitos.mayuscula" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    <path *ngIf="!requisitos.mayuscula" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                  Al menos 1 letra may\xFAscula
                </div>
                <div class="req-item" [class.req-ok]="requisitos.numero" [class.req-fail]="!requisitos.numero">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                    <path *ngIf="requisitos.numero" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    <path *ngIf="!requisitos.numero" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                  Al menos 1 n\xFAmero
                </div>
                <div class="req-item" [class.req-ok]="requisitos.especial" [class.req-fail]="!requisitos.especial">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                    <path *ngIf="requisitos.especial" fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    <path *ngIf="!requisitos.especial" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                  Al menos 1 car\xE1cter especial (!@#$...)
                </div>
              </div>
            </div>

            <!-- Confirmar contrase\xF1a -->
            <div class="form-group">
              <label class="form-label">Confirmar contrase\xF1a</label>
              <div class="input-wrapper" [class.input-error]="errorConfirmar">
                <input class="form-input" [type]="mostrarConfirmar ? 'text' : 'password'"
                       [(ngModel)]="form.confirmar" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" />
                <button class="toggle-eye" type="button" (click)="mostrarConfirmar = !mostrarConfirmar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#8a9ab8" stroke-width="2" width="18" height="18">
                    <path *ngIf="!mostrarConfirmar" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle *ngIf="!mostrarConfirmar" cx="12" cy="12" r="3"/>
                    <path *ngIf="mostrarConfirmar" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line *ngIf="mostrarConfirmar" x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                </button>
              </div>
              <span class="error-msg" *ngIf="errorConfirmar">Las contrase\xF1as no coinciden</span>
            </div>

            <div class="form-footer">
              <button class="btn-actualizar" (click)="actualizarContrasena()" [disabled]="guardando">
                {{ guardando ? 'Actualizando...' : 'Actualizar' }}
              </button>
            </div>

          </div>

        </ng-container>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA EDITAR PERFIL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <ng-container *ngIf="vista === 'perfil'">

          <div class="page-header">
            <button class="btn-back" (click)="vista = 'menu'; errorMsg = ''">&#8249;</button>
            <h2 class="page-title">Editar informaci\xF3n del perfil</h2>
          </div>

          <div class="panel form-panel">
            <p class="userid-label">C\xF3digo : <strong>{{ usuario?.codigo }}</strong></p>

            <div class="form-layout">
              <div class="foto-col">
                <div class="foto-wrapper" (click)="fotoInput.click()">
                  <img *ngIf="fotoPreview" [src]="fotoPreview" alt="Foto" class="foto-img" />
                  <div *ngIf="!fotoPreview" class="foto-placeholder">
                    <svg viewBox="0 0 24 24" fill="#9aaac5" width="48" height="48">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div class="foto-overlay"><span>Cambiar foto</span></div>
                </div>
                <input #fotoInput type="file" accept="image/*" style="display:none"
                       (change)="onFotoChange($event)" />
              </div>

              <div class="campos-col">
                <div class="form-group">
                  <label class="form-label">Nombre y apellido</label>
                  <input class="form-input-plain" type="text" [(ngModel)]="perfil.nombreCompleto" />
                </div>
                <div class="form-group">
                  <label class="form-label">Correo electr\xF3nico</label>
                  <input class="form-input-plain" type="email" [(ngModel)]="perfil.correo" />
                </div>
                <div class="form-group">
                  <label class="form-label">Direcci\xF3n</label>
                  <input class="form-input-plain" type="text" [(ngModel)]="perfil.direccion" />
                </div>
                <div class="form-group">
                  <label class="form-label">N\xFAmero de celular</label>
                  <input class="form-input-plain" type="tel" [(ngModel)]="perfil.telefono" />
                </div>
                <div class="form-group">
                  <label class="form-label">DNI</label>
                  <input class="form-input-plain" type="text" [(ngModel)]="perfil.dni" maxlength="8" />
                </div>
                <div class="form-footer">
                  <button class="btn-actualizar" (click)="guardarPerfil()" [disabled]="guardando">
                    {{ guardando ? 'Guardando...' : 'Guardar' }}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </ng-container>

      </div>
    </div>
  </div>

  <footer class="inner-footer">
    <span>&#169; 2026 Impulsa A365 Todos los derechos reservados por Group16</span>
    <div class="footer-icons">
      <a href="#" class="footer-icon">in</a>
      <a href="#" class="footer-icon">f</a>
      <a href="#" class="footer-icon">&#9679;</a>
    </div>
  </footer>

</div>

<!-- MODAL \xC9XITO -->
<div class="modal-overlay" *ngIf="mostrarModal">
  <div class="modal-confirmacion">
    <button class="modal-close-x" (click)="mostrarModal = false">&#10005;</button>
    <p class="modal-mensaje">{{ mensajeModal }}</p>
  </div>
</div>`, styles: ['/* src/app/pages/administracion/administracion.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 18px;\n  color: #4a5568;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  margin: 1px 8px;\n  border-radius: 6px;\n  transition: background 0.15s, color 0.15s;\n  width: calc(100% - 16px);\n  text-align: left;\n}\n.nav-item:hover {\n  background: #eef0f8;\n  color: #1a2b5e;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #fff;\n  font-weight: 600;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 0 18px 0;\n}\n.page-icon-svg {\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-back {\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  color: #1a2b5e;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n  font-weight: 300;\n  transition: color 0.15s;\n}\n.btn-back:hover {\n  color: #e07b00;\n}\n.panel {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.form-panel {\n  padding: 28px 32px 32px;\n}\n.opcion-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 18px 24px;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1.5px solid #e8eaf0;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.opcion-item:last-child {\n  border-bottom: none;\n}\n.opcion-item:hover {\n  background: #f7f8fc;\n}\n.opcion-label {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.opcion-svg {\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.logout-area {\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n}\n.btn-cerrar-sesion {\n  background: #ffffff;\n  color: #1a2b5e;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 6px;\n  padding: 11px 40px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-cerrar-sesion:hover {\n  background: #f0f2f8;\n  border-color: #1a2b5e;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n.form-label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #2d3a58;\n}\n.input-wrapper {\n  display: flex;\n  align-items: center;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  background: #fff;\n  transition: border-color 0.15s;\n}\n.input-wrapper:focus-within {\n  border-color: #1a2b5e;\n}\n.input-wrapper.input-error {\n  border-color: #e74c3c;\n}\n.form-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 10px 13px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  background: transparent;\n}\n.form-input-plain {\n  width: 100%;\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  outline: none;\n  padding: 10px 13px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  transition: border-color 0.15s;\n}\n.form-input-plain:focus {\n  border-color: #1a2b5e;\n}\n.toggle-eye {\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0 12px;\n  display: flex;\n  align-items: center;\n  color: #8a9ab8;\n  transition: color 0.15s;\n}\n.toggle-eye:hover {\n  color: #1a2b5e;\n}\n.requisitos-box {\n  background: #f7f8fc;\n  border: 1px solid #e0e4ef;\n  border-radius: 6px;\n  padding: 12px 14px;\n  margin-top: 6px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.req-titulo {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7a99;\n  margin: 0 0 4px 0;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.req-item {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #8a9ab8;\n  transition: color 0.2s;\n}\n.req-ok {\n  color: #1d9e75;\n}\n.req-fail {\n  color: #c0392b;\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fdf0f0;\n  border: 1px solid #f5c6c6;\n  border-radius: 6px;\n  padding: 10px 14px;\n  margin-bottom: 16px;\n  font-size: 13px;\n  color: #c0392b;\n  font-weight: 500;\n}\n.error-msg {\n  font-size: 12px;\n  color: #e74c3c;\n}\n.form-footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.btn-actualizar {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 48px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-actualizar:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-actualizar:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.userid-label {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0 0 22px 0;\n}\n.userid-label strong {\n  color: #1a2b5e;\n}\n.form-layout {\n  display: flex;\n  gap: 36px;\n  align-items: flex-start;\n}\n.foto-col {\n  flex-shrink: 0;\n}\n.foto-wrapper {\n  width: 160px;\n  height: 190px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  background: #e8eaf0;\n  border: 2px solid #dde2ee;\n}\n.foto-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.foto-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8eaf0;\n}\n.foto-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(26, 43, 94, 0.75);\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.foto-wrapper:hover .foto-overlay {\n  opacity: 1;\n}\n.campos-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-confirmacion {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 40px 48px 36px;\n  position: relative;\n  min-width: 300px;\n  max-width: 380px;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.modal-close-x {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: #e74c3c;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  transition: background 0.15s;\n}\n.modal-close-x:hover {\n  background: #c0392b;\n}\n.modal-mensaje {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin: 0;\n  line-height: 1.5;\n}\n.inner-footer {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon:hover {\n  background: #3a52a0;\n}\n/*# sourceMappingURL=administracion.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioPerfil }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdministracionComponent, { className: "AdministracionComponent", filePath: "src/app/pages/administracion/administracion.component.ts", lineNumber: 18 });
})();
export {
  AdministracionComponent
};
//# sourceMappingURL=chunk-3MDTTQC5.js.map
