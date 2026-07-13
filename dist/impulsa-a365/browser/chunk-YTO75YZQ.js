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

// src/app/pages/recuperar/recuperar.component.ts
function RecuperarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function RecuperarComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.successMsg);
  }
}
function RecuperarComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function RecuperarComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Enviar c\xF3digo");
    \u0275\u0275elementEnd();
  }
}
function RecuperarComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg);
  }
}
function RecuperarComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 37);
  }
}
function RecuperarComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Reenviar c\xF3digo");
    \u0275\u0275elementEnd();
  }
}
var RecuperarComponent = class _RecuperarComponent {
  constructor(http, router, cdr) {
    this.http = http;
    this.router = router;
    this.cdr = cdr;
    this.correo = "";
    this.codigoRecibido = "";
    this.codigoEnviado = false;
    this.cargando = false;
    this.errorMsg = "";
    this.successMsg = "";
    this.URL_API = environment.apiUrl;
  }
  // Paso 1: solicita el envÃ­o del cÃ³digo al correo
  enviarCodigo() {
    this.limpiarMensajes();
    if (!this.correo.trim()) {
      this.errorMsg = "Por favor ingresa tu correo electr\xC3\xB3nico.";
      return;
    }
    if (!this.correo.includes("@")) {
      this.errorMsg = "Ingresa un correo electr\xC3\xB3nico v\xC3\xA1lido.";
      return;
    }
    this.cargando = true;
    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, { correo: this.correo.trim() }).subscribe({
      next: () => {
        this.cargando = false;
        this.codigoEnviado = true;
        this.successMsg = `C\xC3\xB3digo enviado a ${this.correo}. Revisa tu bandeja de entrada.`;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.cargando = false;
        this.errorMsg = err.status === 404 ? "No encontramos una cuenta con ese correo." : "Error al enviar el c\xC3\xB3digo. Intenta de nuevo.";
        this.cdr.detectChanges();
      }
    });
  }
  // ReenvÃ­a el cÃ³digo si el usuario no lo recibiÃ³
  reenviarCodigo() {
    this.limpiarMensajes();
    this.cargando = true;
    this.http.post(`${this.URL_API}/auth/recuperar/solicitar`, { correo: this.correo.trim() }).subscribe({
      next: () => {
        this.cargando = false;
        this.successMsg = "Nuevo c\xC3\xB3digo enviado a tu correo.";
        this.cdr.detectChanges();
      },
      error: () => {
        this.cargando = false;
        this.errorMsg = "Error al reenviar el c\xC3\xB3digo.";
        this.cdr.detectChanges();
      }
    });
  }
  // Paso 2: verifica el cÃ³digo y navega a /restablecer pasando correo + codigo
  continuar() {
    this.limpiarMensajes();
    if (!this.codigoRecibido.trim()) {
      this.errorMsg = "Por favor ingresa el c\xC3\xB3digo recibido.";
      return;
    }
    this.cargando = true;
    this.http.post(`${this.URL_API}/auth/recuperar/verificar`, {
      correo: this.correo.trim(),
      codigo: this.codigoRecibido.trim()
    }).subscribe({
      next: () => {
        this.cargando = false;
        this.cdr.detectChanges();
        this.router.navigate(["/restablecer"], {
          state: {
            correo: this.correo.trim(),
            codigo: this.codigoRecibido.trim()
          }
        });
      },
      error: (err) => {
        this.cargando = false;
        this.errorMsg = err.status === 400 ? "El c\xC3\xB3digo ingresado es incorrecto o ya expir\xC3\xB3." : "Error al verificar el c\xC3\xB3digo. Intenta de nuevo.";
        this.cdr.detectChanges();
      }
    });
  }
  volverLogin() {
    this.router.navigate(["/login"]);
  }
  limpiarMensajes() {
    this.errorMsg = "";
    this.successMsg = "";
  }
  static {
    this.\u0275fac = function RecuperarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecuperarComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecuperarComponent, selectors: [["app-recuperar"]], decls: 52, vars: 16, consts: [[1, "recover-wrapper"], [1, "recover-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", 1, "logo-img"], [1, "blue-bar"], [1, "recover-main"], [1, "recover-card"], [1, "recover-title"], [1, "recover-subtitle"], [1, "form-group"], ["for", "correo"], ["id", "correo", "type", "email", "name", "correo", "placeholder", "Ingresa tu correo electr\xF3nico", 3, "ngModelChange", "ngModel"], ["class", "error-banner", 4, "ngIf"], ["class", "success-banner", 4, "ngIf"], [1, "btn-center"], [1, "btn-primary", 3, "click", "disabled"], ["class", "spinner", 4, "ngIf"], [4, "ngIf"], [1, "info-text"], ["type", "text", "name", "codigoRecibido", "placeholder", "Ingresa tu c\xF3digo aqu\xED", 3, "ngModelChange", "ngModel"], [1, "btn-row"], [1, "back-login"], [1, "link", 3, "click"], [1, "recover-footer"], [1, "footer-social"], ["href", "#", "aria-label", "LinkedIn", 1, "social-icon"], ["viewBox", "0 0 24 24", "fill", "currentColor", "width", "15", "height", "15"], ["d", "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"], ["cx", "4", "cy", "4", "r", "2"], ["href", "#", "aria-label", "Facebook", 1, "social-icon"], ["d", "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"], ["href", "#", "aria-label", "Instagram", 1, "social-icon"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "width", "15", "height", "15"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "0.5", "fill", "currentColor", "stroke", "none"], [1, "error-banner"], [1, "success-banner"], [1, "spinner"]], template: function RecuperarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1);
        \u0275\u0275element(2, "img", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 3);
        \u0275\u0275elementStart(4, "main", 4)(5, "div", 5)(6, "h1", 6);
        \u0275\u0275text(7, "RESTABLECE TU CONTRASE\xD1A");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 7);
        \u0275\u0275text(9, "Por favor ingresa tu correo electr\xF3nico para enviar el c\xF3digo.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8)(11, "label", 9);
        \u0275\u0275text(12, "Correo electr\xF3nico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function RecuperarComponent_Template_input_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.correo, $event) || (ctx.correo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, RecuperarComponent_div_14_Template, 2, 1, "div", 11)(15, RecuperarComponent_div_15_Template, 2, 1, "div", 12);
        \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
        \u0275\u0275listener("click", function RecuperarComponent_Template_button_click_17_listener() {
          return ctx.enviarCodigo();
        });
        \u0275\u0275template(18, RecuperarComponent_span_18_Template, 1, 0, "span", 15)(19, RecuperarComponent_span_19_Template, 2, 0, "span", 16);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "p", 17);
        \u0275\u0275text(21, " Por favor revisa la carpeta de spam dentro del correo electr\xF3nico en caso el c\xF3digo no aparezca en la bandeja principal. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 8)(23, "input", 18);
        \u0275\u0275twoWayListener("ngModelChange", function RecuperarComponent_Template_input_ngModelChange_23_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.codigoRecibido, $event) || (ctx.codigoRecibido = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, RecuperarComponent_div_24_Template, 2, 1, "div", 11);
        \u0275\u0275elementStart(25, "div", 19)(26, "button", 14);
        \u0275\u0275listener("click", function RecuperarComponent_Template_button_click_26_listener() {
          return ctx.reenviarCodigo();
        });
        \u0275\u0275template(27, RecuperarComponent_span_27_Template, 1, 0, "span", 15)(28, RecuperarComponent_span_28_Template, 2, 0, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "button", 14);
        \u0275\u0275listener("click", function RecuperarComponent_Template_button_click_29_listener() {
          return ctx.continuar();
        });
        \u0275\u0275text(30, " Continuar ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 20)(32, "span");
        \u0275\u0275text(33, "\xBFRecuerdas tu contrase\xF1a? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "a", 21);
        \u0275\u0275listener("click", function RecuperarComponent_Template_a_click_34_listener() {
          return ctx.volverLogin();
        });
        \u0275\u0275text(35, "Inicia sesi\xF3n");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "footer", 22)(37, "span");
        \u0275\u0275text(38, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 23)(40, "a", 24);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 25);
        \u0275\u0275element(42, "path", 26)(43, "circle", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(44, "a", 28);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(45, "svg", 25);
        \u0275\u0275element(46, "path", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(47, "a", 30);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(48, "svg", 31);
        \u0275\u0275element(49, "rect", 32)(50, "circle", 33)(51, "circle", 34);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275classProp("is-error", ctx.errorMsg && !ctx.codigoEnviado);
        \u0275\u0275twoWayProperty("ngModel", ctx.correo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMsg && !ctx.codigoEnviado);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.successMsg);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cargando && !ctx.codigoEnviado);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando || ctx.codigoEnviado);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("is-error", ctx.errorMsg && ctx.codigoEnviado);
        \u0275\u0275twoWayProperty("ngModel", ctx.codigoRecibido);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorMsg && ctx.codigoEnviado);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.cargando);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['\n.recover-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.recover-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 0.6rem 2rem;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.logo-img[_ngcontent-%COMP%] {\n  height: 50px;\n  width: auto;\n  object-fit: contain;\n}\n.blue-bar[_ngcontent-%COMP%] {\n  height: 38px;\n  background-color: #1a2b5e;\n}\n.recover-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  background-color: #ffffff;\n}\n.recover-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #d0d5e8;\n  border-radius: 6px;\n  padding: 2.8rem 4rem;\n  width: 100%;\n  max-width: 600px;\n}\n.recover-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #1a2b5e;\n  letter-spacing: 0.04em;\n  text-align: center;\n  margin: 0 0 8px;\n}\n.recover-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #777;\n  text-align: center;\n  margin: 0 0 1.8rem;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #555;\n  text-align: center;\n  margin: 1.2rem 0;\n  line-height: 1.6;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin-bottom: 6px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1.5px solid #d0d5e8;\n  border-radius: 4px;\n  padding: 11px 14px;\n  font-size: 0.9rem;\n  color: #333;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.form-group[_ngcontent-%COMP%]   input.is-error[_ngcontent-%COMP%] {\n  border-color: #e53935;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  border: 1px solid #f5c6c6;\n  color: #c0392b;\n  font-size: 0.82rem;\n  padding: 9px 14px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.success-banner[_ngcontent-%COMP%] {\n  background: #f0fff4;\n  border: 1px solid #b7ebc8;\n  color: #27ae60;\n  font-size: 0.82rem;\n  padding: 9px 14px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.btn-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.6rem;\n  margin-bottom: 0.2rem;\n}\n.btn-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n  margin-top: 0.6rem;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #1a2b5e;\n  color: #ffffff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 10px 28px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: background-color 0.2s;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1a56db;\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.back-login[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.8rem;\n  font-size: 0.82rem;\n  color: #777;\n}\n.link[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n  font-weight: 600;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.link[_ngcontent-%COMP%]:hover {\n  color: #1a56db;\n}\n.recover-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.recover-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8fa8d4;\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.social-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #2e4a8e;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: background-color 0.2s;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  background: #4a6ab0;\n}\n@media (max-width: 640px) {\n  .recover-card[_ngcontent-%COMP%] {\n    padding: 2rem 1.5rem;\n  }\n  .recover-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n  .btn-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=recuperar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecuperarComponent, [{
    type: Component,
    args: [{ selector: "app-recuperar", standalone: true, imports: [CommonModule, FormsModule], template: '<div class="recover-wrapper">\r\n\r\n  <!-- HEADER -->\r\n  <header class="recover-header">\r\n    <img src="assets/logo-a365.jpg" alt="A365" class="logo-img" />\r\n  </header>\r\n\r\n  <!-- BARRA AZUL -->\r\n  <div class="blue-bar"></div>\r\n\r\n  <!-- CONTENIDO -->\r\n  <main class="recover-main">\r\n    <div class="recover-card">\r\n\r\n      <h1 class="recover-title">RESTABLECE TU CONTRASE\xD1A</h1>\r\n      <p class="recover-subtitle">Por favor ingresa tu correo electr\xF3nico para enviar el c\xF3digo.</p>\r\n\r\n      <!-- PASO 1: Ingresar correo -->\r\n      <div class="form-group">\r\n        <label for="correo">Correo electr\xF3nico</label>\r\n        <input\r\n          id="correo"\r\n          type="email"\r\n          name="correo"\r\n          [(ngModel)]="correo"\r\n          placeholder="Ingresa tu correo electr\xF3nico"\r\n          [class.is-error]="errorMsg && !codigoEnviado"\r\n        />\r\n      </div>\r\n\r\n      <div class="error-banner" *ngIf="errorMsg && !codigoEnviado">{{ errorMsg }}</div>\r\n      <div class="success-banner" *ngIf="successMsg">{{ successMsg }}</div>\r\n\r\n      <div class="btn-center">\r\n        <button class="btn-primary" (click)="enviarCodigo()" [disabled]="cargando">\r\n          <span class="spinner" *ngIf="cargando && !codigoEnviado"></span>\r\n          <span *ngIf="!cargando || codigoEnviado">Enviar c\xF3digo</span>\r\n        </button>\r\n      </div>\r\n\r\n      <p class="info-text">\r\n        Por favor revisa la carpeta de spam dentro del correo electr\xF3nico en caso el c\xF3digo\r\n        no aparezca en la bandeja principal.\r\n      </p>\r\n\r\n      <!-- PASO 2: Ingresar c\xF3digo recibido -->\r\n      <div class="form-group">\r\n        <input\r\n          type="text"\r\n          name="codigoRecibido"\r\n          [(ngModel)]="codigoRecibido"\r\n          placeholder="Ingresa tu c\xF3digo aqu\xED"\r\n          [class.is-error]="errorMsg && codigoEnviado"\r\n        />\r\n      </div>\r\n\r\n      <div class="error-banner" *ngIf="errorMsg && codigoEnviado">{{ errorMsg }}</div>\r\n\r\n      <div class="btn-row">\r\n        <button class="btn-primary" (click)="reenviarCodigo()" [disabled]="cargando">\r\n          <span class="spinner" *ngIf="cargando"></span>\r\n          <span *ngIf="!cargando">Reenviar c\xF3digo</span>\r\n        </button>\r\n        <button class="btn-primary" (click)="continuar()" [disabled]="cargando">\r\n          Continuar\r\n        </button>\r\n      </div>\r\n\r\n      <!-- Volver al login -->\r\n      <div class="back-login">\r\n        <span>\xBFRecuerdas tu contrase\xF1a? </span>\r\n        <a (click)="volverLogin()" class="link">Inicia sesi\xF3n</a>\r\n      </div>\r\n\r\n    </div>\r\n  </main>\r\n\r\n  <!-- FOOTER -->\r\n  <footer class="recover-footer">\r\n    <span>\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16</span>\r\n    <div class="footer-social">\r\n      <a href="#" class="social-icon" aria-label="LinkedIn">\r\n        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">\r\n          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>\r\n          <circle cx="4" cy="4" r="2"/>\r\n        </svg>\r\n      </a>\r\n      <a href="#" class="social-icon" aria-label="Facebook">\r\n        <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">\r\n          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>\r\n        </svg>\r\n      </a>\r\n      <a href="#" class="social-icon" aria-label="Instagram">\r\n        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="15" height="15">\r\n          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>\r\n          <circle cx="12" cy="12" r="4"/>\r\n          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>\r\n        </svg>\r\n      </a>\r\n    </div>\r\n  </footer>\r\n\r\n</div>', styles: ['/* src/app/pages/recuperar/recuperar.component.css */\n.recover-wrapper {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.recover-header {\n  background: #ffffff;\n  padding: 0.6rem 2rem;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.logo-img {\n  height: 50px;\n  width: auto;\n  object-fit: contain;\n}\n.blue-bar {\n  height: 38px;\n  background-color: #1a2b5e;\n}\n.recover-main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 2rem;\n  background-color: #ffffff;\n}\n.recover-card {\n  background: #ffffff;\n  border: 1.5px solid #d0d5e8;\n  border-radius: 6px;\n  padding: 2.8rem 4rem;\n  width: 100%;\n  max-width: 600px;\n}\n.recover-title {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #1a2b5e;\n  letter-spacing: 0.04em;\n  text-align: center;\n  margin: 0 0 8px;\n}\n.recover-subtitle {\n  font-size: 0.82rem;\n  color: #777;\n  text-align: center;\n  margin: 0 0 1.8rem;\n}\n.info-text {\n  font-size: 0.82rem;\n  color: #555;\n  text-align: center;\n  margin: 1.2rem 0;\n  line-height: 1.6;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.form-group label {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin-bottom: 6px;\n}\n.form-group input {\n  border: 1.5px solid #d0d5e8;\n  border-radius: 4px;\n  padding: 11px 14px;\n  font-size: 0.9rem;\n  color: #333;\n  outline: none;\n  width: 100%;\n  box-sizing: border-box;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: border-color 0.2s;\n}\n.form-group input:focus {\n  border-color: #1a2b5e;\n}\n.form-group input.is-error {\n  border-color: #e53935;\n}\n.error-banner {\n  background: #fff0f0;\n  border: 1px solid #f5c6c6;\n  color: #c0392b;\n  font-size: 0.82rem;\n  padding: 9px 14px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.success-banner {\n  background: #f0fff4;\n  border: 1px solid #b7ebc8;\n  color: #27ae60;\n  font-size: 0.82rem;\n  padding: 9px 14px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.btn-center {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.6rem;\n  margin-bottom: 0.2rem;\n}\n.btn-row {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n  margin-top: 0.6rem;\n}\n.btn-primary {\n  background-color: #1a2b5e;\n  color: #ffffff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 10px 28px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: background-color 0.2s;\n}\n.btn-primary:hover:not(:disabled) {\n  background-color: #1a56db;\n}\n.btn-primary:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 14px;\n  height: 14px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.back-login {\n  text-align: center;\n  margin-top: 1.8rem;\n  font-size: 0.82rem;\n  color: #777;\n}\n.link {\n  color: #1a2b5e;\n  font-weight: 600;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.link:hover {\n  color: #1a56db;\n}\n.recover-footer {\n  background: #1a2b5e;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.recover-footer span {\n  font-size: 0.72rem;\n  color: #8fa8d4;\n}\n.footer-social {\n  display: flex;\n  gap: 8px;\n}\n.social-icon {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #2e4a8e;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: background-color 0.2s;\n}\n.social-icon:hover {\n  background: #4a6ab0;\n}\n@media (max-width: 640px) {\n  .recover-card {\n    padding: 2rem 1.5rem;\n  }\n  .recover-footer {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n  .btn-row {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=recuperar.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecuperarComponent, { className: "RecuperarComponent", filePath: "src/app/pages/recuperar/recuperar.component.ts", lineNumber: 17 });
})();
export {
  RecuperarComponent
};
//# sourceMappingURL=chunk-YTO75YZQ.js.map
