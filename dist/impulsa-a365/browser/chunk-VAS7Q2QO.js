import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
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
  HttpClient,
  NgIf,
  Router,
  environment,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ASNBX676.js";

// src/app/pages/usuarios/crear-usuario.component.ts
function CrearUsuarioComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 36);
    \u0275\u0275element(3, "path", 37)(4, "polyline", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "\xA1Usuario creado exitosamente!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "El c\xF3digo asignado es:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 40);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(12, "svg", 41);
    \u0275\u0275element(13, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " Contrase\xF1a inicial: ");
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " \u2014 el usuario debe guardarla. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 43)(19, "button", 44);
    \u0275\u0275listener("click", function CrearUsuarioComponent_div_50_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onNuevoUsuario());
    });
    \u0275\u0275text(20, "Agregar otro usuario");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 45);
    \u0275\u0275listener("click", function CrearUsuarioComponent_div_50_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVolver());
    });
    \u0275\u0275text(22, "Ir al dashboard");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.codigoGenerado);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.contrasenaUsada);
  }
}
function CrearUsuarioComponent_div_51_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 77);
    \u0275\u0275element(2, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errores.general, " ");
  }
}
function CrearUsuarioComponent_div_51_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errores.nombreCompleto);
  }
}
function CrearUsuarioComponent_div_51_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errores.apellidoCompleto);
  }
}
function CrearUsuarioComponent_div_51_span_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errores.dni);
  }
}
function CrearUsuarioComponent_div_51_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "Consultando RENIEC\u2026");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "8 d\xEDgitos \u2014 autocompleta nombre y apellidos");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_span_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errores.telefono);
  }
}
function CrearUsuarioComponent_div_51_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errores.correo);
  }
}
function CrearUsuarioComponent_div_51_span_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errores.rol);
  }
}
function CrearUsuarioComponent_div_51_span_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, " El c\xF3digo se asignar\xE1 autom\xE1ticamente ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_div_70_strong_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "EMP###");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_div_70_strong_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "ADM###");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_div_70_strong_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "strong");
    \u0275\u0275text(1, "GER###");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 28);
    \u0275\u0275element(2, "path", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " El sistema asignar\xE1 autom\xE1ticamente un c\xF3digo ");
    \u0275\u0275template(4, CrearUsuarioComponent_div_51_div_70_strong_4_Template, 2, 0, "strong", 75)(5, CrearUsuarioComponent_div_51_div_70_strong_5_Template, 2, 0, "strong", 75)(6, CrearUsuarioComponent_div_51_div_70_strong_6_Template, 2, 0, "strong", 75);
    \u0275\u0275text(7, " al crear el usuario. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.form.rol === "EMPLEADO");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.rol === "ADMINISTRADOR");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.rol === "GERENTE");
  }
}
function CrearUsuarioComponent_div_51__svg_svg_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 82)(2, "path", 83);
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51__svg_svg_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 84)(2, "path", 85);
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_span_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errores.contrasena);
  }
}
function CrearUsuarioComponent_div_51__svg_svg_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 82)(2, "path", 83);
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51__svg_svg_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 81);
    \u0275\u0275element(1, "path", 84)(2, "path", 85);
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_span_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errores.confirmarContrasena);
  }
}
function CrearUsuarioComponent_div_51_span_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 77);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Crear usuario ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_span_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275element(1, "span", 86);
    \u0275\u0275text(2, " Creando... ");
    \u0275\u0275elementEnd();
  }
}
function CrearUsuarioComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 48);
    \u0275\u0275element(3, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Datos del nuevo usuario");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CrearUsuarioComponent_div_51_div_6_Template, 4, 1, "div", 50);
    \u0275\u0275elementStart(7, "div", 51)(8, "div", 52)(9, "div", 53)(10, "label");
    \u0275\u0275text(11, "Nombre(s) ");
    \u0275\u0275elementStart(12, "span", 54);
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function CrearUsuarioComponent_div_51_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.nombreCompleto, $event) || (ctx_r1.form.nombreCompleto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function CrearUsuarioComponent_div_51_Template_input_keydown_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.soloLetras($event));
    })("paste", function CrearUsuarioComponent_div_51_Template_input_paste_14_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limitarPaste($event, "letras", 60));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, CrearUsuarioComponent_div_51_span_15_Template, 2, 1, "span", 56);
    \u0275\u0275elementStart(16, "span", 57);
    \u0275\u0275text(17, "Solo letras y espacios");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 53)(19, "label");
    \u0275\u0275text(20, "Apellido(s) ");
    \u0275\u0275elementStart(21, "span", 54);
    \u0275\u0275text(22, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function CrearUsuarioComponent_div_51_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.apellidoCompleto, $event) || (ctx_r1.form.apellidoCompleto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function CrearUsuarioComponent_div_51_Template_input_keydown_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.soloLetras($event));
    })("paste", function CrearUsuarioComponent_div_51_Template_input_paste_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limitarPaste($event, "letras", 60));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, CrearUsuarioComponent_div_51_span_24_Template, 2, 1, "span", 56);
    \u0275\u0275elementStart(25, "span", 57);
    \u0275\u0275text(26, "Solo letras y espacios");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 52)(28, "div", 53)(29, "label");
    \u0275\u0275text(30, "DNI ");
    \u0275\u0275elementStart(31, "span", 54);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function CrearUsuarioComponent_div_51_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.dni, $event) || (ctx_r1.form.dni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function CrearUsuarioComponent_div_51_Template_input_keydown_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.soloNumeros($event));
    })("paste", function CrearUsuarioComponent_div_51_Template_input_paste_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limitarPaste($event, "numeros", 8));
    })("ngModelChange", function CrearUsuarioComponent_div_51_Template_input_ngModelChange_33_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDniChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, CrearUsuarioComponent_div_51_span_34_Template, 2, 1, "span", 56)(35, CrearUsuarioComponent_div_51_span_35_Template, 2, 0, "span", 59)(36, CrearUsuarioComponent_div_51_span_36_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 53)(38, "label");
    \u0275\u0275text(39, "Tel\xE9fono ");
    \u0275\u0275elementStart(40, "span", 54);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function CrearUsuarioComponent_div_51_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.telefono, $event) || (ctx_r1.form.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function CrearUsuarioComponent_div_51_Template_input_keydown_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.soloNumeros($event));
    })("paste", function CrearUsuarioComponent_div_51_Template_input_paste_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.limitarPaste($event, "numeros", 9));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(43, CrearUsuarioComponent_div_51_span_43_Template, 2, 1, "span", 56);
    \u0275\u0275elementStart(44, "span", 57);
    \u0275\u0275text(45, "Exactamente 9 d\xEDgitos");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 52)(47, "div", 53)(48, "label");
    \u0275\u0275text(49, "Correo electr\xF3nico ");
    \u0275\u0275elementStart(50, "span", 54);
    \u0275\u0275text(51, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CrearUsuarioComponent_div_51_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.correo, $event) || (ctx_r1.form.correo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, CrearUsuarioComponent_div_51_span_53_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 53)(55, "label");
    \u0275\u0275text(56, "Rol ");
    \u0275\u0275elementStart(57, "span", 54);
    \u0275\u0275text(58, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "select", 62);
    \u0275\u0275twoWayListener("ngModelChange", function CrearUsuarioComponent_div_51_Template_select_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.rol, $event) || (ctx_r1.form.rol = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(60, "option", 63);
    \u0275\u0275text(61, "\u2014 Selecciona un rol \u2014");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "option", 64);
    \u0275\u0275text(63, "Empleado \xA0(c\xF3digo EMP###)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "option", 65);
    \u0275\u0275text(65, "Administrador \xA0(c\xF3digo ADM###)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "option", 66);
    \u0275\u0275text(67, "Gerente \xA0(c\xF3digo GER###)");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(68, CrearUsuarioComponent_div_51_span_68_Template, 2, 1, "span", 56)(69, CrearUsuarioComponent_div_51_span_69_Template, 2, 0, "span", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(70, CrearUsuarioComponent_div_51_div_70_Template, 8, 3, "div", 67);
    \u0275\u0275elementStart(71, "div", 52)(72, "div", 53)(73, "label");
    \u0275\u0275text(74, "Contrase\xF1a ");
    \u0275\u0275elementStart(75, "span", 54);
    \u0275\u0275text(76, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 68)(78, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CrearUsuarioComponent_div_51_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.contrasena, $event) || (ctx_r1.form.contrasena = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "button", 70);
    \u0275\u0275listener("click", function CrearUsuarioComponent_div_51_Template_button_click_79_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mostrarContrasena = !ctx_r1.mostrarContrasena);
    });
    \u0275\u0275template(80, CrearUsuarioComponent_div_51__svg_svg_80_Template, 3, 0, "svg", 71)(81, CrearUsuarioComponent_div_51__svg_svg_81_Template, 3, 0, "svg", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(82, CrearUsuarioComponent_div_51_span_82_Template, 2, 1, "span", 56);
    \u0275\u0275elementStart(83, "span", 57);
    \u0275\u0275text(84, "M\xEDnimo 8 caracteres, 1 may\xFAscula, 1 n\xFAmero y 1 car\xE1cter especial");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 53)(86, "label");
    \u0275\u0275text(87, "Confirmar contrase\xF1a ");
    \u0275\u0275elementStart(88, "span", 54);
    \u0275\u0275text(89, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "div", 68)(91, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function CrearUsuarioComponent_div_51_Template_input_ngModelChange_91_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.confirmarContrasena, $event) || (ctx_r1.form.confirmarContrasena = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "button", 70);
    \u0275\u0275listener("click", function CrearUsuarioComponent_div_51_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mostrarConfirmar = !ctx_r1.mostrarConfirmar);
    });
    \u0275\u0275template(93, CrearUsuarioComponent_div_51__svg_svg_93_Template, 3, 0, "svg", 71)(94, CrearUsuarioComponent_div_51__svg_svg_94_Template, 3, 0, "svg", 71);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(95, CrearUsuarioComponent_div_51_span_95_Template, 2, 1, "span", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 72)(97, "button", 73);
    \u0275\u0275listener("click", function CrearUsuarioComponent_div_51_Template_button_click_97_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onVolver());
    });
    \u0275\u0275text(98, " Cancelar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "button", 74);
    \u0275\u0275listener("click", function CrearUsuarioComponent_div_51_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onGuardar());
    });
    \u0275\u0275template(100, CrearUsuarioComponent_div_51_span_100_Template, 4, 0, "span", 75)(101, CrearUsuarioComponent_div_51_span_101_Template, 3, 0, "span", 75);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.errores.general);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("has-error", ctx_r1.errores.nombreCompleto);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.nombreCompleto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errores.nombreCompleto);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("has-error", ctx_r1.errores.apellidoCompleto);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.apellidoCompleto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errores.apellidoCompleto);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("has-error", ctx_r1.errores.dni);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.dni);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errores.dni);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.buscandoDni);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.buscandoDni);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.errores.telefono);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.telefono);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errores.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("has-error", ctx_r1.errores.correo);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.correo);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errores.correo);
    \u0275\u0275advance();
    \u0275\u0275classProp("has-error", ctx_r1.errores.rol);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.rol);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r1.errores.rol);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.rol);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.form.rol);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("has-error", ctx_r1.errores.contrasena);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", ctx_r1.mostrarContrasena ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.contrasena);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.mostrarContrasena);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mostrarContrasena);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errores.contrasena);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("has-error", ctx_r1.errores.confirmarContrasena);
    \u0275\u0275advance(6);
    \u0275\u0275property("type", ctx_r1.mostrarConfirmar ? "text" : "password");
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.confirmarContrasena);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.mostrarConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mostrarConfirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errores.confirmarContrasena);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cargando);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cargando);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cargando);
  }
}
var CrearUsuarioComponent = class _CrearUsuarioComponent {
  constructor(http, router, cdr) {
    this.http = http;
    this.router = router;
    this.cdr = cdr;
    this.URL_API = environment.apiUrl;
    this.cargando = false;
    this.exitoso = false;
    this.codigoGenerado = "";
    this.contrasenaUsada = "";
    this.mostrarContrasena = false;
    this.mostrarConfirmar = false;
    this.buscandoDni = false;
    this.dniConsultado = "";
    this.form = {
      nombreCompleto: "",
      apellidoCompleto: "",
      dni: "",
      telefono: "",
      correo: "",
      rol: "",
      contrasena: "",
      confirmarContrasena: ""
    };
    this.errores = {
      nombreCompleto: "",
      apellidoCompleto: "",
      dni: "",
      telefono: "",
      correo: "",
      rol: "",
      contrasena: "",
      confirmarContrasena: "",
      general: ""
    };
  }
  // Solo permite letras y espacios en campos de texto
  soloLetras(event) {
    const char = event.key;
    const teclasControl = ["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"];
    if (teclasControl.includes(char))
      return;
    if (!/^[\p{L} ]$/u.test(char)) {
      event.preventDefault();
    }
  }
  // Solo permite dÃ­gitos
  soloNumeros(event) {
    const char = event.key;
    if (!/^\d$/.test(char) && char !== "Backspace" && char !== "Delete" && char !== "Tab" && char !== "ArrowLeft" && char !== "ArrowRight") {
      event.preventDefault();
    }
  }
  // Limitar longitud al pegar
  limitarPaste(event, tipo, maxLen) {
    event.preventDefault();
    const texto = event.clipboardData?.getData("text") ?? "";
    const filtrado = tipo === "letras" ? texto.replace(/[^\p{L} ]/gu, "").slice(0, maxLen) : texto.replace(/\D/g, "").slice(0, maxLen);
    const input = event.target;
    const inicio = input.selectionStart ?? 0;
    const fin = input.selectionEnd ?? 0;
    const valor = input.value;
    input.value = valor.slice(0, inicio) + filtrado + valor.slice(fin);
    input.dispatchEvent(new Event("input"));
  }
  // Se dispara al escribir el DNI; cuando llega a 8 digitos consulta RENIEC
  onDniChange() {
    const dni = (this.form.dni || "").trim();
    if (dni.length < 8) {
      this.dniConsultado = "";
      return;
    }
    if (!/^\d{8}$/.test(dni))
      return;
    if (dni === this.dniConsultado)
      return;
    this.dniConsultado = dni;
    this.buscarDatosDni(dni);
  }
  // Llama al backend, que consulta RENIEC y devuelve nombres y apellidos
  buscarDatosDni(dni) {
    this.buscandoDni = true;
    this.errores.dni = "";
    this.http.get(`${this.URL_API}/usuarios/dni/${dni}`).subscribe({
      next: (p) => {
        this.buscandoDni = false;
        this.form.nombreCompleto = p.nombres || "";
        this.form.apellidoCompleto = p.apellidos || "";
        this.errores.nombreCompleto = "";
        this.errores.apellidoCompleto = "";
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.buscandoDni = false;
        this.dniConsultado = "";
        if (err.status === 404) {
          this.errores.dni = "No se encontraron datos para ese DNI.";
        } else if (err.status === 400) {
          this.errores.dni = "El DNI debe tener 8 d\xEDgitos.";
        } else {
          this.errores.dni = "No se pudo consultar el DNI. Escribe los datos manualmente.";
        }
        this.cdr.detectChanges();
      }
    });
  }
  validar() {
    let ok = true;
    this.errores = { nombreCompleto: "", apellidoCompleto: "", dni: "", telefono: "", correo: "", rol: "", contrasena: "", confirmarContrasena: "", general: "" };
    const soloLetrasRegex = /^[\p{L} ]+$/u;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.form.nombreCompleto.trim()) {
      this.errores.nombreCompleto = "El nombre es obligatorio.";
      ok = false;
    } else if (!soloLetrasRegex.test(this.form.nombreCompleto.trim())) {
      this.errores.nombreCompleto = "Solo se permiten letras y espacios.";
      ok = false;
    }
    if (!this.form.apellidoCompleto.trim()) {
      this.errores.apellidoCompleto = "El apellido es obligatorio.";
      ok = false;
    } else if (!soloLetrasRegex.test(this.form.apellidoCompleto.trim())) {
      this.errores.apellidoCompleto = "Solo se permiten letras y espacios.";
      ok = false;
    }
    if (!this.form.dni.trim()) {
      this.errores.dni = "El DNI es obligatorio.";
      ok = false;
    } else if (!/^\d{8}$/.test(this.form.dni.trim())) {
      this.errores.dni = "El DNI debe tener exactamente 8 d\xC3\xADgitos.";
      ok = false;
    }
    if (!this.form.telefono.trim()) {
      this.errores.telefono = "El tel\xC3\xA9fono es obligatorio.";
      ok = false;
    } else if (!/^\d{9}$/.test(this.form.telefono.trim())) {
      this.errores.telefono = "El tel\xC3\xA9fono debe tener exactamente 9 d\xC3\xADgitos.";
      ok = false;
    }
    if (!this.form.correo.trim()) {
      this.errores.correo = "El correo es obligatorio.";
      ok = false;
    } else if (!emailRegex.test(this.form.correo.trim())) {
      this.errores.correo = "Ingresa un correo v\xC3\xA1lido.";
      ok = false;
    }
    if (!this.form.rol) {
      this.errores.rol = "Selecciona un rol.";
      ok = false;
    }
    if (!this.form.contrasena.trim()) {
      this.errores.contrasena = "La contrase\xC3\xB1a es obligatoria.";
      ok = false;
    } else if (this.form.contrasena.length < 8) {
      this.errores.contrasena = "M\xC3\xADnimo 8 caracteres.";
      ok = false;
    } else if (!/[\p{Lu}]/u.test(this.form.contrasena)) {
      this.errores.contrasena = "Debe incluir al menos 1 letra may\xC3\xBAscula.";
      ok = false;
    } else if (!/[0-9]/.test(this.form.contrasena)) {
      this.errores.contrasena = "Debe incluir al menos 1 n\xC3\xBAmero.";
      ok = false;
    } else if (!/[^a-zA-Z0-9]/.test(this.form.contrasena)) {
      this.errores.contrasena = "Debe incluir al menos 1 car\xC3\xA1cter especial (!@#$...).";
      ok = false;
    }
    if (!this.form.confirmarContrasena.trim()) {
      this.errores.confirmarContrasena = "Confirma la contrase\xC3\xB1a.";
      ok = false;
    } else if (this.form.contrasena !== this.form.confirmarContrasena) {
      this.errores.confirmarContrasena = "Las contrase\xC3\xB1as no coinciden.";
      ok = false;
    }
    return ok;
  }
  onGuardar() {
    if (!this.validar())
      return;
    this.cargando = true;
    this.contrasenaUsada = this.form.contrasena;
    this.http.post(`${this.URL_API}/usuarios/crear`, {
      nombreCompleto: this.form.nombreCompleto.trim(),
      apellidoCompleto: this.form.apellidoCompleto.trim(),
      dni: this.form.dni.trim(),
      telefono: this.form.telefono.trim(),
      correo: this.form.correo.trim().toLowerCase(),
      rol: this.form.rol,
      contrasena: this.form.contrasena
    }).subscribe({
      next: (res) => {
        this.cargando = false;
        this.exitoso = true;
        this.codigoGenerado = res.codigo;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.cargando = false;
        if (err.status === 409) {
          this.errores.general = err.error?.message ?? "El correo o DNI ya est\xC3\xA1 registrado.";
        } else if (err.status === 400) {
          this.errores.general = "Revisa los datos ingresados.";
        } else {
          this.errores.general = "Error al crear el usuario. Intenta de nuevo.";
        }
        this.cdr.detectChanges();
      }
    });
  }
  onNuevoUsuario() {
    this.exitoso = false;
    this.codigoGenerado = "";
    this.form = { nombreCompleto: "", apellidoCompleto: "", dni: "", telefono: "", correo: "", rol: "", contrasena: "", confirmarContrasena: "" };
    this.mostrarContrasena = false;
    this.mostrarConfirmar = false;
  }
  onVolver() {
    this.router.navigate(["/dashboard/admin"]);
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
  irAPanelUsuarios() {
    this.router.navigate(["/dashboard/panel-usuarios"]);
  }
  irAAdministracion() {
    this.router.navigate(["/dashboard/administracion"]);
  }
  static {
    this.\u0275fac = function CrearUsuarioComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CrearUsuarioComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CrearUsuarioComponent, selectors: [["app-crear-usuario"]], decls: 55, vars: 2, consts: [[1, "cu-layout"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", 1, "sidebar-logo"], [1, "sidebar-nav"], [1, "nav-item", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", "width", "16", "height", "16"], ["d", "M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"], ["d", "M9 21V12h6v9"], ["x", "2", "y", "5", "width", "20", "height", "14", "rx", "2"], ["d", "M16 5V3M8 5V3M2 9h20"], ["d", "M8 13h4M8 17h8"], ["cx", "12", "cy", "12", "r", "10"], ["x1", "12", "y1", "8", "x2", "12", "y2", "12"], ["cx", "12", "cy", "16", "r", "0.5", "fill", "currentColor", "stroke", "currentColor", "stroke-width", "1"], [1, "nav-item", "active"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["x1", "19", "y1", "8", "x2", "19", "y2", "14"], ["x1", "16", "y1", "11", "x2", "22", "y2", "11"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"], [1, "sidebar-spacer"], [1, "cu-main"], [1, "topbar"], [1, "page-title"], [1, "btn-volver", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "14", "height", "14"], ["fill-rule", "evenodd", "d", "M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z", "clip-rule", "evenodd"], [1, "cu-content"], ["class", "exito-card", 4, "ngIf"], ["class", "cu-card", 4, "ngIf"], [1, "footer"], [1, "exito-card"], [1, "exito-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "#0f6e56", "stroke-width", "2.5", "width", "40", "height", "40"], ["d", "M22 11.08V12a10 10 0 11-5.93-9.14"], ["points", "22 4 12 14.01 9 11.01"], [1, "codigo-badge"], [1, "contrasena-info"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "14", "height", "14", 2, "color", "#854f0b"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", "clip-rule", "evenodd"], [1, "exito-acciones"], [1, "btn-secundario", 3, "click"], [1, "btn-primario", 3, "click"], [1, "cu-card"], [1, "cu-card-header"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "20", "height", "20", 2, "color", "#1a2b5e"], ["d", "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"], ["class", "error-banner", 4, "ngIf"], [1, "cu-form"], [1, "form-fila"], [1, "form-grupo"], [1, "req"], ["type", "text", "placeholder", "", "maxlength", "60", 3, "ngModelChange", "keydown", "paste", "ngModel"], ["class", "field-error", 4, "ngIf"], [1, "field-hint"], ["type", "text", "placeholder", "", "maxlength", "8", 3, "ngModelChange", "keydown", "paste", "ngModel"], ["class", "field-hint", 4, "ngIf"], ["type", "text", "placeholder", "", "maxlength", "9", 3, "ngModelChange", "keydown", "paste", "ngModel"], ["type", "email", "placeholder", "", "maxlength", "120", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "EMPLEADO"], ["value", "ADMINISTRADOR"], ["value", "GERENTE"], ["class", "info-codigo", 4, "ngIf"], [1, "password-wrap"], ["placeholder", "", "maxlength", "50", 3, "ngModelChange", "type", "ngModel"], ["type", "button", "tabindex", "-1", 1, "toggle-eye", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "16", "height", "16", 4, "ngIf"], [1, "form-acciones"], ["type", "button", 1, "btn-secundario", 3, "click", "disabled"], ["type", "button", 1, "btn-primario", 3, "click", "disabled"], [4, "ngIf"], [1, "error-banner"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "15", "height", "15"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "field-error"], [1, "info-codigo"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "16", "height", "16"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 0 0-5.478-5.478z", "clip-rule", "evenodd"], ["d", "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"], [1, "spinner"]], template: function CrearUsuarioComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "nav", 4)(5, "a", 5);
        \u0275\u0275listener("click", function CrearUsuarioComponent_Template_a_click_5_listener() {
          return ctx.irAInicio();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 6);
        \u0275\u0275element(7, "path", 7)(8, "path", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9, " Inicio ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "a", 5);
        \u0275\u0275listener("click", function CrearUsuarioComponent_Template_a_click_10_listener() {
          return ctx.irAGestionTickets();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 6);
        \u0275\u0275element(12, "rect", 9)(13, "path", 10)(14, "path", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275text(15, " Gesti\xF3n de tickets ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(16, "a", 5);
        \u0275\u0275listener("click", function CrearUsuarioComponent_Template_a_click_16_listener() {
          return ctx.irAGestionIncidencias();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(17, "svg", 6);
        \u0275\u0275element(18, "circle", 12)(19, "line", 13)(20, "circle", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Gesti\xF3n de incidencias ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(22, "a", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(23, "svg", 6);
        \u0275\u0275element(24, "path", 16)(25, "circle", 17)(26, "line", 18)(27, "line", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " Registro de usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(29, "a", 5);
        \u0275\u0275listener("click", function CrearUsuarioComponent_Template_a_click_29_listener() {
          return ctx.irAPanelUsuarios();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(30, "svg", 6);
        \u0275\u0275element(31, "path", 16)(32, "circle", 17)(33, "path", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " Usuarios ");
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(35, "a", 5);
        \u0275\u0275listener("click", function CrearUsuarioComponent_Template_a_click_35_listener() {
          return ctx.irAAdministracion();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(36, "svg", 6);
        \u0275\u0275element(37, "circle", 21)(38, "path", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " Administraci\xF3n ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(40, "div", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 24)(42, "header", 25)(43, "h1", 26);
        \u0275\u0275text(44, "Agregar usuario");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 27);
        \u0275\u0275listener("click", function CrearUsuarioComponent_Template_button_click_45_listener() {
          return ctx.onVolver();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 28);
        \u0275\u0275element(47, "path", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " Volver ");
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(49, "div", 30);
        \u0275\u0275template(50, CrearUsuarioComponent_div_50_Template, 23, 2, "div", 31)(51, CrearUsuarioComponent_div_51_Template, 102, 47, "div", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "footer", 33)(53, "span");
        \u0275\u0275text(54, "\xA9 2026 Impulsa A365. Todos los derechos reservados por Group16.");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(50);
        \u0275\u0275property("ngIf", ctx.exitoso);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.exitoso);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, MaxLengthValidator, NgModel], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.cu-layout[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.cu-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 32px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-volver[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #ffffff;\n  border: 1.5px solid #1a2b5e;\n  color: #1a2b5e;\n  border-radius: 6px;\n  padding: 8px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-volver[_ngcontent-%COMP%]:hover {\n  background: #1a2b5e;\n  color: #ffffff;\n}\n.cu-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 30px 32px;\n  overflow-y: auto;\n}\n.cu-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1.5px solid #dde2ee;\n  box-shadow: 0 2px 10px rgba(26, 43, 94, 0.07);\n  overflow: hidden;\n}\n.cu-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 26px;\n  background: #f7f8fc;\n  border-bottom: 1.5px solid #dde2ee;\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.cu-form[_ngcontent-%COMP%] {\n  padding: 26px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-fila[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.form-grupo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-grupo[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.req[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  margin-left: 2px;\n}\n.form-grupo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-grupo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 9px 13px;\n  border: 1.5px solid #c8d0e0;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #1a2b5e;\n  background: #fafbff;\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  font-family: inherit;\n}\n.form-grupo[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-grupo[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n  box-shadow: 0 0 0 3px rgba(26, 43, 94, 0.1);\n  background: #ffffff;\n}\n.form-grupo.has-error[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-grupo.has-error[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: #d32f2f;\n  background: #fff8f8;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #8a9ab8;\n}\n.field-error[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #d32f2f;\n  font-weight: 500;\n}\n.password-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 42px;\n}\n.toggle-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #8a9ab8;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.15s;\n}\n.toggle-eye[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.info-codigo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #eef4fb;\n  border: 1px solid #b8d0ee;\n  border-radius: 6px;\n  padding: 10px 15px;\n  font-size: 12.5px;\n  color: #185fa5;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fcebeb;\n  border: 1px solid #f5c6c6;\n  border-radius: 6px;\n  padding: 11px 16px;\n  font-size: 13px;\n  color: #a32d2d;\n  font-weight: 500;\n  margin: 0 28px 0 28px;\n}\n.form-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding-top: 6px;\n  border-top: 1px solid #eef0f6;\n}\n.btn-primario[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 7px;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.btn-primario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-primario[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secundario[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #ffffff;\n  color: #1a2b5e;\n  border: 1.5px solid #1a2b5e;\n  border-radius: 7px;\n  padding: 10px 22px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-secundario[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1a2b5e;\n  color: #ffffff;\n}\n.btn-secundario[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  vertical-align: middle;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.exito-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1.5px solid #b2dfd4;\n  padding: 40px 36px;\n  text-align: center;\n  max-width: 520px;\n  margin: 0 auto;\n  box-shadow: 0 2px 12px rgba(15, 110, 86, 0.08);\n}\n.exito-icon[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: center;\n}\n.exito-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f6e56;\n  margin-bottom: 10px;\n}\n.exito-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4a5568;\n  margin-bottom: 8px;\n}\n.codigo-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  padding: 10px 28px;\n  border-radius: 8px;\n  margin: 10px 0 16px;\n}\n.contrasena-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: #fffbeb;\n  border: 1px solid #ffe082;\n  border-radius: 6px;\n  padding: 10px 16px;\n  font-size: 13px;\n  color: #6b4c00;\n  margin-bottom: 24px;\n}\n.exito-acciones[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n.footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 12px 32px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n@media (max-width: 900px) {\n  .form-fila[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n}\n@media (max-width: 640px) {\n  .cu-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: auto;\n  }\n  .cu-content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=crear-usuario.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrearUsuarioComponent, [{
    type: Component,
    args: [{ selector: "app-crear-usuario", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- pages/usuarios/crear-usuario.component.html -->\r
<div class="cu-layout">\r
\r
  <!-- SIDEBAR -->\r
  <aside class="sidebar">\r
    <div class="sidebar-header">\r
      <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" />\r
    </div>\r
    <nav class="sidebar-nav">\r
\r
      <!-- Inicio -->\r
      <a class="nav-item" (click)="irAInicio()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>\r
          <path d="M9 21V12h6v9"/>\r
        </svg>\r
        Inicio\r
      </a>\r
\r
      <!-- Gesti\xF3n de tickets -->\r
      <a class="nav-item" (click)="irAGestionTickets()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
          <rect x="2" y="5" width="20" height="14" rx="2"/>\r
          <path d="M16 5V3M8 5V3M2 9h20"/>\r
          <path d="M8 13h4M8 17h8"/>\r
        </svg>\r
        Gesti\xF3n de tickets\r
      </a>\r
\r
      <!-- Gesti\xF3n de incidencias -->\r
      <a class="nav-item" (click)="irAGestionIncidencias()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
          <circle cx="12" cy="12" r="10"/>\r
          <line x1="12" y1="8" x2="12" y2="12"/>\r
          <circle cx="12" cy="16" r="0.5" fill="currentColor" stroke="currentColor" stroke-width="1"/>\r
        </svg>\r
        Gesti\xF3n de incidencias\r
      </a>\r
\r
      <!-- Registro de usuarios \u2014 ACTIVO -->\r
      <a class="nav-item active">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>\r
          <circle cx="9" cy="7" r="4"/>\r
          <line x1="19" y1="8" x2="19" y2="14"/>\r
          <line x1="16" y1="11" x2="22" y2="11"/>\r
        </svg>\r
        Registro de usuarios\r
      </a>\r
\r
      <!-- Usuarios -->\r
      <a class="nav-item" (click)="irAPanelUsuarios()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>\r
          <circle cx="9" cy="7" r="4"/>\r
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>\r
        </svg>\r
        Usuarios\r
      </a>\r
\r
      <!-- Administraci\xF3n -->\r
      <a class="nav-item" (click)="irAAdministracion()">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16">\r
          <circle cx="12" cy="12" r="3"/>\r
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>\r
        </svg>\r
        Administraci\xF3n\r
      </a>\r
\r
    </nav>\r
    <div class="sidebar-spacer"></div>\r
  </aside>\r
\r
  <!-- \xC1REA PRINCIPAL -->\r
  <div class="cu-main">\r
    <header class="topbar">\r
      <h1 class="page-title">Agregar usuario</h1>\r
      <button class="btn-volver" (click)="onVolver()">\r
        <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"/></svg>\r
        Volver\r
      </button>\r
    </header>\r
\r
    <div class="cu-content">\r
\r
      <!-- ESTADO: \xC9XITO -->\r
      <div class="exito-card" *ngIf="exitoso">\r
        <div class="exito-icon">\r
          <svg viewBox="0 0 24 24" fill="none" stroke="#0f6e56" stroke-width="2.5" width="40" height="40">\r
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>\r
          </svg>\r
        </div>\r
        <h2>\xA1Usuario creado exitosamente!</h2>\r
        <p>El c\xF3digo asignado es:</p>\r
        <div class="codigo-badge">{{ codigoGenerado }}</div>\r
        <p class="contrasena-info">\r
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" style="color:#854f0b"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>\r
          Contrase\xF1a inicial: <strong>{{ contrasenaUsada }}</strong> \u2014 el usuario debe guardarla.\r
        </p>\r
        <div class="exito-acciones">\r
          <button class="btn-secundario" (click)="onNuevoUsuario()">Agregar otro usuario</button>\r
          <button class="btn-primario" (click)="onVolver()">Ir al dashboard</button>\r
        </div>\r
      </div>\r
\r
      <!-- FORMULARIO -->\r
      <div class="cu-card" *ngIf="!exitoso">\r
\r
        <div class="cu-card-header">\r
          <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" style="color:#1a2b5e">\r
            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>\r
          </svg>\r
          <span>Datos del nuevo usuario</span>\r
        </div>\r
\r
        <!-- Error general -->\r
        <div class="error-banner" *ngIf="errores.general">\r
          <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>\r
          {{ errores.general }}\r
        </div>\r
\r
        <div class="cu-form">\r
\r
          <!-- Fila 1: Nombre y Apellido -->\r
          <div class="form-fila">\r
            <div class="form-grupo" [class.has-error]="errores.nombreCompleto">\r
              <label>Nombre(s) <span class="req">*</span></label>\r
              <input\r
                type="text"\r
                [(ngModel)]="form.nombreCompleto"\r
                placeholder=""\r
                maxlength="60"\r
                (keydown)="soloLetras($event)"\r
                (paste)="limitarPaste($event, 'letras', 60)"\r
              />\r
              <span class="field-error" *ngIf="errores.nombreCompleto">{{ errores.nombreCompleto }}</span>\r
              <span class="field-hint">Solo letras y espacios</span>\r
            </div>\r
\r
            <div class="form-grupo" [class.has-error]="errores.apellidoCompleto">\r
              <label>Apellido(s) <span class="req">*</span></label>\r
              <input\r
                type="text"\r
                [(ngModel)]="form.apellidoCompleto"\r
                placeholder=""\r
                maxlength="60"\r
                (keydown)="soloLetras($event)"\r
                (paste)="limitarPaste($event, 'letras', 60)"\r
              />\r
              <span class="field-error" *ngIf="errores.apellidoCompleto">{{ errores.apellidoCompleto }}</span>\r
              <span class="field-hint">Solo letras y espacios</span>\r
            </div>\r
          </div>\r
\r
          <!-- Fila 2: DNI y Tel\xE9fono -->\r
          <div class="form-fila">\r
            <div class="form-grupo" [class.has-error]="errores.dni">\r
              <label>DNI <span class="req">*</span></label>\r
              <input\r
                type="text"\r
                [(ngModel)]="form.dni"\r
                placeholder=""\r
                maxlength="8"\r
                (keydown)="soloNumeros($event)"\r
                (paste)="limitarPaste($event, 'numeros', 8)"\r
                (ngModelChange)="onDniChange()"\r
              />\r
              <span class="field-error" *ngIf="errores.dni">{{ errores.dni }}</span>\r
              <span class="field-hint" *ngIf="buscandoDni">Consultando RENIEC\u2026</span>\r
              <span class="field-hint" *ngIf="!buscandoDni">8 d\xEDgitos \u2014 autocompleta nombre y apellidos</span>\r
            </div>\r
\r
            <div class="form-grupo" [class.has-error]="errores.telefono">\r
              <label>Tel\xE9fono <span class="req">*</span></label>\r
              <input\r
                type="text"\r
                [(ngModel)]="form.telefono"\r
                placeholder=""\r
                maxlength="9"\r
                (keydown)="soloNumeros($event)"\r
                (paste)="limitarPaste($event, 'numeros', 9)"\r
              />\r
              <span class="field-error" *ngIf="errores.telefono">{{ errores.telefono }}</span>\r
              <span class="field-hint">Exactamente 9 d\xEDgitos</span>\r
            </div>\r
          </div>\r
\r
          <!-- Fila 3: Correo y Rol -->\r
          <div class="form-fila">\r
            <div class="form-grupo" [class.has-error]="errores.correo">\r
              <label>Correo electr\xF3nico <span class="req">*</span></label>\r
              <input\r
                type="email"\r
                [(ngModel)]="form.correo"\r
                placeholder=""\r
                maxlength="120"\r
              />\r
              <span class="field-error" *ngIf="errores.correo">{{ errores.correo }}</span>\r
            </div>\r
\r
            <div class="form-grupo" [class.has-error]="errores.rol">\r
              <label>Rol <span class="req">*</span></label>\r
              <select [(ngModel)]="form.rol">\r
                <option value="">\u2014 Selecciona un rol \u2014</option>\r
                <option value="EMPLEADO">Empleado &nbsp;(c\xF3digo EMP###)</option>\r
                <option value="ADMINISTRADOR">Administrador &nbsp;(c\xF3digo ADM###)</option>\r
                <option value="GERENTE">Gerente &nbsp;(c\xF3digo GER###)</option>\r
              </select>\r
              <span class="field-error" *ngIf="errores.rol">{{ errores.rol }}</span>\r
              <span class="field-hint" *ngIf="form.rol">\r
                El c\xF3digo se asignar\xE1 autom\xE1ticamente\r
              </span>\r
            </div>\r
          </div>\r
\r
          <!-- Info c\xF3digo autom\xE1tico -->\r
          <div class="info-codigo" *ngIf="form.rol">\r
            <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>\r
            El sistema asignar\xE1 autom\xE1ticamente un c\xF3digo\r
            <strong *ngIf="form.rol === 'EMPLEADO'">EMP###</strong>\r
            <strong *ngIf="form.rol === 'ADMINISTRADOR'">ADM###</strong>\r
            <strong *ngIf="form.rol === 'GERENTE'">GER###</strong>\r
            al crear el usuario.\r
          </div>\r
\r
          <!-- Fila 4: Contrase\xF1a -->\r
          <div class="form-fila">\r
            <div class="form-grupo" [class.has-error]="errores.contrasena">\r
              <label>Contrase\xF1a <span class="req">*</span></label>\r
              <div class="password-wrap">\r
                <input\r
                  [type]="mostrarContrasena ? 'text' : 'password'"\r
                  [(ngModel)]="form.contrasena"\r
                  placeholder=""\r
                  maxlength="50"\r
                />\r
                <button type="button" class="toggle-eye" (click)="mostrarContrasena = !mostrarContrasena" tabindex="-1">\r
                  <svg *ngIf="!mostrarContrasena" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>\r
                  <svg *ngIf="mostrarContrasena" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 0 0-5.478-5.478z" clip-rule="evenodd"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>\r
                </button>\r
              </div>\r
              <span class="field-error" *ngIf="errores.contrasena">{{ errores.contrasena }}</span>\r
              <span class="field-hint">M\xEDnimo 8 caracteres, 1 may\xFAscula, 1 n\xFAmero y 1 car\xE1cter especial</span>\r
            </div>\r
\r
            <div class="form-grupo" [class.has-error]="errores.confirmarContrasena">\r
              <label>Confirmar contrase\xF1a <span class="req">*</span></label>\r
              <div class="password-wrap">\r
                <input\r
                  [type]="mostrarConfirmar ? 'text' : 'password'"\r
                  [(ngModel)]="form.confirmarContrasena"\r
                  placeholder=""\r
                  maxlength="50"\r
                />\r
                <button type="button" class="toggle-eye" (click)="mostrarConfirmar = !mostrarConfirmar" tabindex="-1">\r
                  <svg *ngIf="!mostrarConfirmar" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>\r
                  <svg *ngIf="mostrarConfirmar" viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 0 0-5.478-5.478z" clip-rule="evenodd"/><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/></svg>\r
                </button>\r
              </div>\r
              <span class="field-error" *ngIf="errores.confirmarContrasena">{{ errores.confirmarContrasena }}</span>\r
            </div>\r
          </div>\r
\r
          <!-- Acciones -->\r
          <div class="form-acciones">\r
            <button class="btn-secundario" type="button" (click)="onVolver()" [disabled]="cargando">\r
              Cancelar\r
            </button>\r
            <button class="btn-primario" type="button" (click)="onGuardar()" [disabled]="cargando">\r
              <span *ngIf="!cargando">\r
                <svg viewBox="0 0 20 20" fill="currentColor" width="15" height="15"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/></svg>\r
                Crear usuario\r
              </span>\r
              <span *ngIf="cargando">\r
                <span class="spinner"></span> Creando...\r
              </span>\r
            </button>\r
          </div>\r
\r
        </div>\r
      </div>\r
\r
    </div>\r
\r
    <footer class="footer">\r
      <span>\xA9 2026 Impulsa A365. Todos los derechos reservados por Group16.</span>\r
    </footer>\r
  </div>\r
\r
</div>`, styles: ['/* src/app/pages/usuarios/crear-usuario.component.css */\n* {\n  box-sizing: border-box;\n}\n.cu-layout {\n  display: flex;\n  min-height: 100vh;\n  background: #eef0f6;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item:hover {\n  background: #f0f2f8;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.cu-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 32px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-shrink: 0;\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.btn-volver {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #ffffff;\n  border: 1.5px solid #1a2b5e;\n  color: #1a2b5e;\n  border-radius: 6px;\n  padding: 8px 18px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-volver:hover {\n  background: #1a2b5e;\n  color: #ffffff;\n}\n.cu-content {\n  flex: 1;\n  padding: 30px 32px;\n  overflow-y: auto;\n}\n.cu-card {\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1.5px solid #dde2ee;\n  box-shadow: 0 2px 10px rgba(26, 43, 94, 0.07);\n  overflow: hidden;\n}\n.cu-card-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 18px 26px;\n  background: #f7f8fc;\n  border-bottom: 1.5px solid #dde2ee;\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.cu-form {\n  padding: 26px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-fila {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.form-grupo {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.form-grupo label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a2b5e;\n}\n.req {\n  color: #d32f2f;\n  margin-left: 2px;\n}\n.form-grupo input,\n.form-grupo select {\n  width: 100%;\n  padding: 9px 13px;\n  border: 1.5px solid #c8d0e0;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #1a2b5e;\n  background: #fafbff;\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n  font-family: inherit;\n}\n.form-grupo input:focus,\n.form-grupo select:focus {\n  border-color: #1a2b5e;\n  box-shadow: 0 0 0 3px rgba(26, 43, 94, 0.1);\n  background: #ffffff;\n}\n.form-grupo.has-error input,\n.form-grupo.has-error select {\n  border-color: #d32f2f;\n  background: #fff8f8;\n}\n.field-hint {\n  font-size: 11.5px;\n  color: #8a9ab8;\n}\n.field-error {\n  font-size: 11.5px;\n  color: #d32f2f;\n  font-weight: 500;\n}\n.password-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-wrap input {\n  padding-right: 42px;\n}\n.toggle-eye {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #8a9ab8;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  transition: color 0.15s;\n}\n.toggle-eye:hover {\n  color: #1a2b5e;\n}\n.info-codigo {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #eef4fb;\n  border: 1px solid #b8d0ee;\n  border-radius: 6px;\n  padding: 10px 15px;\n  font-size: 12.5px;\n  color: #185fa5;\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #fcebeb;\n  border: 1px solid #f5c6c6;\n  border-radius: 6px;\n  padding: 11px 16px;\n  font-size: 13px;\n  color: #a32d2d;\n  font-weight: 500;\n  margin: 0 28px 0 28px;\n}\n.form-acciones {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding-top: 6px;\n  border-top: 1px solid #eef0f6;\n}\n.btn-primario {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 7px;\n  padding: 10px 24px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.btn-primario:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-primario:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn-secundario {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #ffffff;\n  color: #1a2b5e;\n  border: 1.5px solid #1a2b5e;\n  border-radius: 7px;\n  padding: 10px 22px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-secundario:hover:not(:disabled) {\n  background: #1a2b5e;\n  color: #ffffff;\n}\n.btn-secundario:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.spinner {\n  display: inline-block;\n  width: 14px;\n  height: 14px;\n  border: 2.5px solid rgba(255, 255, 255, 0.35);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  vertical-align: middle;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.exito-card {\n  background: #ffffff;\n  border-radius: 10px;\n  border: 1.5px solid #b2dfd4;\n  padding: 40px 36px;\n  text-align: center;\n  max-width: 520px;\n  margin: 0 auto;\n  box-shadow: 0 2px 12px rgba(15, 110, 86, 0.08);\n}\n.exito-icon {\n  margin-bottom: 16px;\n  display: flex;\n  justify-content: center;\n}\n.exito-card h2 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #0f6e56;\n  margin-bottom: 10px;\n}\n.exito-card p {\n  font-size: 14px;\n  color: #4a5568;\n  margin-bottom: 8px;\n}\n.codigo-badge {\n  display: inline-block;\n  background: #1a2b5e;\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 800;\n  letter-spacing: 2px;\n  padding: 10px 28px;\n  border-radius: 8px;\n  margin: 10px 0 16px;\n}\n.contrasena-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  background: #fffbeb;\n  border: 1px solid #ffe082;\n  border-radius: 6px;\n  padding: 10px 16px;\n  font-size: 13px;\n  color: #6b4c00;\n  margin-bottom: 24px;\n}\n.exito-acciones {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n}\n.footer {\n  background: #1a2b5e;\n  padding: 12px 32px;\n  text-align: center;\n  flex-shrink: 0;\n}\n.footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n@media (max-width: 900px) {\n  .form-fila {\n    grid-template-columns: 1fr;\n  }\n  .sidebar {\n    width: 200px;\n  }\n}\n@media (max-width: 640px) {\n  .cu-layout {\n    flex-direction: column;\n  }\n  .sidebar {\n    width: 100%;\n    min-height: auto;\n  }\n  .cu-content {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=crear-usuario.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CrearUsuarioComponent, { className: "CrearUsuarioComponent", filePath: "src/app/pages/usuarios/crear-usuario.component.ts", lineNumber: 41 });
})();
export {
  CrearUsuarioComponent
};
//# sourceMappingURL=chunk-VAS7Q2QO.js.map
