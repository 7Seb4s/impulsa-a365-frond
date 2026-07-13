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
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ASNBX676.js";

// src/app/pages/restablecer/restablecer.component.ts
function RestablecerComponent__svg_svg_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 38)(2, "circle", 39);
    \u0275\u0275elementEnd();
  }
}
function RestablecerComponent__svg_svg_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 40)(2, "line", 41);
    \u0275\u0275elementEnd();
  }
}
function RestablecerComponent__svg_svg_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 38)(2, "circle", 39);
    \u0275\u0275elementEnd();
  }
}
function RestablecerComponent__svg_svg_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 37);
    \u0275\u0275element(1, "path", 40)(2, "line", 41);
    \u0275\u0275elementEnd();
  }
}
function RestablecerComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function RestablecerComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMsg);
  }
}
function RestablecerComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 44);
  }
}
function RestablecerComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Restablecer");
    \u0275\u0275elementEnd();
  }
}
var RestablecerComponent = class _RestablecerComponent {
  constructor(http, router, cdr) {
    this.http = http;
    this.router = router;
    this.cdr = cdr;
    this.nuevaPassword = "";
    this.confirmarPassword = "";
    this.correo = "";
    this.codigo = "";
    this.cargando = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.mostrarNueva = false;
    this.mostrarConfirmar = false;
    this.URL_API = environment.apiUrl;
  }
  ngOnInit() {
    const state = history.state;
    if (state?.correo && state?.codigo) {
      this.correo = state.correo;
      this.codigo = state.codigo;
    } else {
      this.router.navigate(["/auth/recuperar"]);
    }
  }
  // Alterna visibilidad del campo nueva contraseÃ±a
  toggleNueva() {
    this.mostrarNueva = !this.mostrarNueva;
  }
  // Alterna visibilidad del campo confirmar contraseÃ±a
  toggleConfirmar() {
    this.mostrarConfirmar = !this.mostrarConfirmar;
  }
  // Llama a POST /api/auth/recuperar/cambiar con correo + codigo + nuevaPassword.
  // El backend verifica el cÃ³digo una vez mÃ¡s, encripta con BCrypt y actualiza en BD.
  restablecer() {
    this.errorMsg = "";
    this.successMsg = "";
    if (!this.nuevaPassword.trim()) {
      this.errorMsg = "Por favor ingresa tu nueva contrase\xC3\xB1a.";
      return;
    }
    if (this.nuevaPassword.length < 8) {
      this.errorMsg = "M\xC3\xADnimo 8 caracteres.";
      return;
    }
    if (!/[\p{Lu}]/u.test(this.nuevaPassword)) {
      this.errorMsg = "Debe incluir al menos 1 letra may\xC3\xBAscula.";
      return;
    }
    if (!/[0-9]/.test(this.nuevaPassword)) {
      this.errorMsg = "Debe incluir al menos 1 n\xC3\xBAmero.";
      return;
    }
    if (!/[^a-zA-Z0-9]/.test(this.nuevaPassword)) {
      this.errorMsg = "Debe incluir al menos 1 car\xC3\xA1cter especial (!@#$...).";
      return;
    }
    if (this.nuevaPassword !== this.confirmarPassword) {
      this.errorMsg = "Las contrase\xC3\xB1as no coinciden.";
      return;
    }
    this.cargando = true;
    this.http.post(`${this.URL_API}/auth/recuperar/cambiar`, {
      correo: this.correo,
      codigo: this.codigo,
      nuevaPassword: this.nuevaPassword
    }).subscribe({
      next: () => {
        this.cargando = false;
        this.successMsg = "\xC2\xA1Contrase\xC3\xB1a actualizada! Redirigiendo al inicio de sesi\xC3\xB3n...";
        setTimeout(() => this.router.navigate(["/auth/login"]), 2e3);
      },
      error: (err) => {
        this.cargando = false;
        this.cdr.detectChanges();
        if (err.status === 400) {
          this.errorMsg = "El c\xC3\xB3digo ha expirado. Por favor inicia el proceso nuevamente.";
        } else {
          this.errorMsg = "Error al restablecer la contrase\xC3\xB1a. Intenta de nuevo.";
        }
      }
    });
  }
  volverLogin() {
    this.router.navigate(["/login"]);
  }
  static {
    this.\u0275fac = function RestablecerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RestablecerComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RestablecerComponent, selectors: [["app-restablecer"]], decls: 53, vars: 17, consts: [[1, "recover-wrapper"], [1, "recover-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", 1, "logo-img"], [1, "blue-bar"], [1, "recover-main"], [1, "recover-card"], [1, "recover-title"], [1, "recover-subtitle"], [1, "form-group"], ["for", "nuevaPassword"], [1, "input-wrapper"], ["id", "nuevaPassword", "name", "nuevaPassword", "placeholder", "Ingresa tu nueva contrase\xF1a", "autocomplete", "new-password", 3, "ngModelChange", "type", "ngModel"], ["type", "button", "tabindex", "-1", 1, "toggle-eye", 3, "click"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "18", "height", "18", 4, "ngIf"], ["for", "confirmarPassword"], ["id", "confirmarPassword", "name", "confirmarPassword", "placeholder", "Confirma tu contrase\xF1a", "autocomplete", "new-password", 3, "ngModelChange", "type", "ngModel"], ["class", "error-banner", 4, "ngIf"], ["class", "success-banner", 4, "ngIf"], [1, "btn-center"], [1, "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [4, "ngIf"], [1, "back-login"], [1, "link", 3, "click"], [1, "recover-footer"], [1, "footer-social"], ["href", "#", "aria-label", "LinkedIn", 1, "social-icon"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "15", "height", "15"], ["d", "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"], ["cx", "4", "cy", "4", "r", "2"], ["href", "#", "aria-label", "Facebook", 1, "social-icon"], ["d", "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"], ["href", "#", "aria-label", "Instagram", 1, "social-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "15", "height", "15"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "0.5", "fill", "currentColor", "stroke", "none"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "18", "height", "18"], ["d", "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"], ["x1", "1", "y1", "1", "x2", "23", "y2", "23"], [1, "error-banner"], [1, "success-banner"], [1, "spinner"]], template: function RestablecerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 3);
        \u0275\u0275elementStart(4, "main", 4)(5, "div", 5)(6, "h1", 6);
        \u0275\u0275text(7, "RESTABLECE TU CONTRASE\xD1A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Por favor, ingresa tu nueva contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Nueva contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "input", 11);
        \u0275\u0275twoWayListener("ngModelChange", function RestablecerComponent_Template_input_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.nuevaPassword, $event) || (ctx.nuevaPassword = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 12);
        \u0275\u0275listener("click", function RestablecerComponent_Template_button_click_15_listener() {
          return ctx.toggleNueva();
        });
        \u0275\u0275template(16, RestablecerComponent__svg_svg_16_Template, 3, 0, "svg", 13)(17, RestablecerComponent__svg_svg_17_Template, 3, 0, "svg", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "div", 8)(19, "label", 14);
        \u0275\u0275text(20, "Confirmar contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 10)(22, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function RestablecerComponent_Template_input_ngModelChange_22_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.confirmarPassword, $event) || (ctx.confirmarPassword = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "button", 12);
        \u0275\u0275listener("click", function RestablecerComponent_Template_button_click_23_listener() {
          return ctx.toggleConfirmar();
        });
        \u0275\u0275template(24, RestablecerComponent__svg_svg_24_Template, 3, 0, "svg", 13)(25, RestablecerComponent__svg_svg_25_Template, 3, 0, "svg", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(26, RestablecerComponent_div_26_Template, 2, 1, "div", 16)(27, RestablecerComponent_div_27_Template, 2, 1, "div", 17);
        \u0275\u0275elementStart(28, "div", 18)(29, "button", 19);
        \u0275\u0275listener("click", function RestablecerComponent_Template_button_click_29_listener() {
          return ctx.restablecer();
        });
        \u0275\u0275template(30, RestablecerComponent_span_30_Template, 1, 0, "span", 20)(31, RestablecerComponent_span_31_Template, 2, 0, "span", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "div", 22)(33, "span");
        \u0275\u0275text(34, "\xBFRecuerdas tu contrase\xF1a? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "a", 23);
        \u0275\u0275listener("click", function RestablecerComponent_Template_a_click_35_listener() {
          return ctx.volverLogin();
        });
        \u0275\u0275text(36, "Inicia sesi\xF3n");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "footer", 24)(38, "span");
        \u0275\u0275text(39, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 25)(41, "a", 26);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(42, "svg", 27);
        \u0275\u0275element(43, "path", 28)(44, "circle", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(45, "a", 30);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(46, "svg", 27);
        \u0275\u0275element(47, "path", 31);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(48, "a", 32);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(49, "svg", 33);
        \u0275\u0275element(50, "rect", 34)(51, "circle", 35)(52, "circle", 36);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(14);
        \u0275\u0275classProp("is-error", ctx.errorMsg);
        \u0275\u0275property("type", ctx.mostrarNueva ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.nuevaPassword);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.mostrarNueva);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarNueva);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("is-error", ctx.errorMsg);
        \u0275\u0275property("type", ctx.mostrarConfirmar ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.confirmarPassword);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.mostrarConfirmar);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarConfirmar);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMsg);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMsg);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n.recover-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.recover-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 0.6rem 2rem;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.logo-img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: auto;\n  object-fit: contain;\n}\n.blue-bar[_ngcontent-%COMP%] {\n  height: 38px;\n  background-color: #1a2b5e;\n}\n.recover-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  background-color: #ffffff;\n}\n.recover-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #d0d5e8;\n  border-radius: 6px;\n  padding: 2.8rem 4rem;\n  width: 100%;\n  max-width: 600px;\n}\n.recover-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #1a2b5e;\n  letter-spacing: 0.04em;\n  text-align: center;\n  margin: 0 0 8px;\n}\n.recover-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #777;\n  text-align: center;\n  margin: 0 0 1.8rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin-bottom: 6px;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1.5px solid #d0d5e8;\n  border-radius: 4px;\n  padding: 11px 42px 11px 14px;\n  font-size: 0.9rem;\n  color: #333;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: border-color 0.2s;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.input-wrapper[_ngcontent-%COMP%]   input.is-error[_ngcontent-%COMP%] {\n  border-color: #e53935;\n}\n.toggle-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  color: #999;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n}\n.toggle-eye[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  border: 1px solid #f5c6c6;\n  color: #c0392b;\n  font-size: 0.82rem;\n  padding: 9px 14px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.success-banner[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  border: 1px solid #b7ebc8;\n  color: #27ae60;\n  font-size: 0.82rem;\n  padding: 9px 14px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.btn-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.8rem;\n  margin-bottom: 0.2rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #1a2b5e;\n  color: #ffffff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 10px 36px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: background-color 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1a56db;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.back-login[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.8rem;\n  font-size: 0.82rem;\n  color: #777;\n}\n.link[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n  font-weight: 600;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: #1a56db;\n}\n.recover-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.recover-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8fa8d4;\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.social-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #2e4a8e;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: background-color 0.2s;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  background: #4a6ab0;\n}\n@media (max-width: 640px) {\n  .recover-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .recover-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=restablecer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RestablecerComponent, [{
    type: Component,
    args: [{ selector: "app-restablecer", standalone: true, imports: [CommonModule, FormsModule], template: `<!-- pages/restablecer/restablecer.component.html -->\r
<div class="recover-wrapper">\r
\r
  <!-- HEADER -->\r
  <header class="recover-header">\r
    <img src="assets/logo-a365.jpg" alt="A365" class="logo-img" />\r
  </header>\r
\r
  <!-- BARRA AZUL -->\r
  <div class="blue-bar"></div>\r
\r
  <!-- CONTENIDO -->\r
  <main class="recover-main">\r
    <div class="recover-card">\r
\r
      <h1 class="recover-title">RESTABLECE TU CONTRASE\xD1A</h1>\r
      <p class="recover-subtitle">Por favor, ingresa tu nueva contrase\xF1a</p>\r
\r
      <!-- Nueva contrase\xF1a -->\r
      <div class="form-group">\r
        <label for="nuevaPassword">Nueva contrase\xF1a</label>\r
        <div class="input-wrapper">\r
          <input\r
            id="nuevaPassword"\r
            [type]="mostrarNueva ? 'text' : 'password'"\r
            name="nuevaPassword"\r
            [(ngModel)]="nuevaPassword"\r
            placeholder="Ingresa tu nueva contrase\xF1a"\r
            [class.is-error]="errorMsg"\r
            autocomplete="new-password"\r
          />\r
          <button type="button" class="toggle-eye" (click)="toggleNueva()" tabindex="-1">\r
            <!-- Ojo abierto -->\r
            <svg *ngIf="!mostrarNueva" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">\r
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
              <circle cx="12" cy="12" r="3"/>\r
            </svg>\r
            <!-- Ojo tachado -->\r
            <svg *ngIf="mostrarNueva" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">\r
              <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>\r
              <line x1="1" y1="1" x2="23" y2="23"/>\r
            </svg>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Confirmar contrase\xF1a -->\r
      <div class="form-group">\r
        <label for="confirmarPassword">Confirmar contrase\xF1a</label>\r
        <div class="input-wrapper">\r
          <input\r
            id="confirmarPassword"\r
            [type]="mostrarConfirmar ? 'text' : 'password'"\r
            name="confirmarPassword"\r
            [(ngModel)]="confirmarPassword"\r
            placeholder="Confirma tu contrase\xF1a"\r
            [class.is-error]="errorMsg"\r
            autocomplete="new-password"\r
          />\r
          <button type="button" class="toggle-eye" (click)="toggleConfirmar()" tabindex="-1">\r
            <svg *ngIf="!mostrarConfirmar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">\r
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>\r
              <circle cx="12" cy="12" r="3"/>\r
            </svg>\r
            <svg *ngIf="mostrarConfirmar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">\r
              <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>\r
              <line x1="1" y1="1" x2="23" y2="23"/>\r
            </svg>\r
          </button>\r
        </div>\r
      </div>\r
\r
      <!-- Mensajes de error / \xE9xito -->\r
      <div class="error-banner" *ngIf="errorMsg">{{ errorMsg }}</div>\r
      <div class="success-banner" *ngIf="successMsg">{{ successMsg }}</div>\r
\r
      <!-- Bot\xF3n restablecer -->\r
      <div class="btn-center">\r
        <button class="btn-primary" (click)="restablecer()" [disabled]="cargando">\r
          <span class="spinner" *ngIf="cargando"></span>\r
          <span *ngIf="!cargando">Restablecer</span>\r
        </button>\r
      </div>\r
\r
      <!-- Volver al login -->\r
      <div class="back-login">\r
        <span>\xBFRecuerdas tu contrase\xF1a? </span>\r
        <a (click)="volverLogin()" class="link">Inicia sesi\xF3n</a>\r
      </div>\r
\r
    </div>\r
  </main>\r
\r
  <!-- FOOTER -->\r
  <footer class="recover-footer">\r
    <span>\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16</span>\r
    <div class="footer-social">\r
      <a href="#" class="social-icon" aria-label="LinkedIn">\r
        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">\r
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>\r
          <circle cx="4" cy="4" r="2"/>\r
        </svg>\r
      </a>\r
      <a href="#" class="social-icon" aria-label="Facebook">\r
        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">\r
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>\r
        </svg>\r
      </a>\r
      <a href="#" class="social-icon" aria-label="Instagram">\r
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">\r
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>\r
          <circle cx="12" cy="12" r="4"/>\r
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>\r
        </svg>\r
      </a>\r
    </div>\r
  </footer>\r
\r
</div>`, styles: ['/* src/app/pages/restablecer/restablecer.component.css */\n.recover-wrapper {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.recover-header {\n  background: #ffffff;\n  padding: 0.6rem 2rem;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.logo-img {\n  height: 50px;\n  width: auto;\n  object-fit: contain;\n}\n.blue-bar {\n  height: 38px;\n  background-color: #1a2b5e;\n}\n.recover-main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  background-color: #ffffff;\n}\n.recover-card {\n  background: #ffffff;\n  border: 1.5px solid #d0d5e8;\n  border-radius: 6px;\n  padding: 2.8rem 4rem;\n  width: 100%;\n  max-width: 600px;\n}\n.recover-title {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #1a2b5e;\n  letter-spacing: 0.04em;\n  text-align: center;\n  margin: 0 0 8px;\n}\n.recover-subtitle {\n  font-size: 0.82rem;\n  color: #777;\n  text-align: center;\n  margin: 0 0 1.8rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.form-group label {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin-bottom: 6px;\n}\n.input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrapper input {\n  border: 1.5px solid #d0d5e8;\n  border-radius: 4px;\n  padding: 11px 42px 11px 14px;\n  font-size: 0.9rem;\n  color: #333;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: border-color 0.2s;\n}\n.input-wrapper input:focus {\n  border-color: #1a2b5e;\n}\n.input-wrapper input.is-error {\n  border-color: #e53935;\n}\n.toggle-eye {\n  position: absolute;\n  right: 12px;\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  color: #999;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n}\n.toggle-eye:hover {\n  color: #1a2b5e;\n}\n.error-banner {\n  background: #fff0f0;\n  border: 1px solid #f5c6c6;\n  color: #c0392b;\n  font-size: 0.82rem;\n  padding: 9px 14px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.success-banner {\n  background: #f0fff4;\n  border: 1px solid #b7ebc8;\n  color: #27ae60;\n  font-size: 0.82rem;\n  padding: 9px 14px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.btn-center {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.8rem;\n  margin-bottom: 0.2rem;\n}\n.btn-primary {\n  background-color: #1a2b5e;\n  color: #ffffff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 10px 36px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: background-color 0.2s;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #1a56db;\n}\n.btn-primary:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.back-login {\n  text-align: center;\n  margin-top: 1.8rem;\n  font-size: 0.82rem;\n  color: #777;\n}\n.link {\n  color: #1a2b5e;\n  font-weight: 600;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.link:hover {\n  color: #1a56db;\n}\n.recover-footer {\n  background: #1a2b5e;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.recover-footer span {\n  font-size: 0.72rem;\n  color: #8fa8d4;\n}\n.footer-social {\n  display: flex;\n  gap: 8px;\n}\n.social-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #2e4a8e;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: background-color 0.2s;\n}\n.social-icon:hover {\n  background: #4a6ab0;\n}\n@media (max-width: 640px) {\n  .recover-card {\n    padding: 2rem 1.5rem;\n  }\n  .recover-footer {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=restablecer.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RestablecerComponent, { className: "RestablecerComponent", filePath: "src/app/pages/restablecer/restablecer.component.ts", lineNumber: 19 });
})();
export {
  RestablecerComponent
};
//# sourceMappingURL=chunk-3JNAMFY7.js.map
