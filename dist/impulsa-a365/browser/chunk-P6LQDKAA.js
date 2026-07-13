import {
  ServicioAutenticacion
} from "./chunk-II2C6W3K.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-K5TRC5YK.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  NgIf,
  NgZone,
  Router,
  environment,
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
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ASNBX676.js";

// src/app/pages/login/login.component.ts
function LoginComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 40);
    \u0275\u0275element(2, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorGeneral, " ");
  }
}
function LoginComponent_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorCodigo);
  }
}
function LoginComponent__svg_svg_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 44)(2, "path", 45);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent__svg_svg_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 43);
    \u0275\u0275element(1, "path", 46)(2, "path", 47);
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorContrasena);
  }
}
function LoginComponent_ng_container_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "Ingresar");
    \u0275\u0275elementContainerEnd();
  }
}
function LoginComponent_ng_container_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275text(2, " Verificando... ");
    \u0275\u0275elementContainerEnd();
  }
}
function LoginComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "span", 48);
    \u0275\u0275text(2, " Verificando con Google... ");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor(servicioAuth, router, ngZone, cdr, http) {
    this.servicioAuth = servicioAuth;
    this.router = router;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.http = http;
    this.GOOGLE_CLIENT_ID = "901867767212-g35510ieasb2uf411lgsinad0u8c36b7.apps.googleusercontent.com";
    this.URL_API = environment.apiUrl;
    this.codigo = "";
    this.contrasena = "";
    this.mostrarContrasena = false;
    this.recuerdame = false;
    this.cargando = false;
    this.cargandoGoogle = false;
    this.errorCodigo = "";
    this.errorContrasena = "";
    this.errorGeneral = "";
  }
  ngOnInit() {
    this.inicializarGoogle();
  }
  onLogin() {
    this.limpiarErrores();
    if (!this.codigo.trim()) {
      this.errorCodigo = "Por favor ingresa tu c\xC3\xB3digo.";
      return;
    }
    if (!this.contrasena.trim()) {
      this.errorContrasena = "Por favor ingresa tu contrase\xC3\xB1a.";
      return;
    }
    this.cargando = true;
    this.servicioAuth.login({
      codigo: this.codigo.trim(),
      password: this.contrasena
    }).subscribe({
      next: (res) => {
        this.cargando = false;
        this.cdr.detectChanges();
        this.redirigirPorRol(res.rol);
      },
      error: (err) => {
        this.cargando = false;
        this.contrasena = "";
        if (err.status === 401 || err.status === 403 || err.status === 404) {
          this.errorGeneral = "C\xC3\xB3digo o contrase\xC3\xB1a incorrectos.";
        } else if (err.status === 0 || err.status >= 500) {
          this.errorGeneral = "No se puede conectar con el servidor. Intenta m\xC3\xA1s tarde.";
        } else {
          this.errorGeneral = "Ocurri\xC3\xB3 un error inesperado. Intenta de nuevo.";
        }
        setTimeout(() => {
          document.getElementById("contrasena")?.focus();
        }, 50);
      }
    });
  }
  // Inicializa el botÃ³n de Google en el div#google-login-btn
  inicializarGoogle() {
    const intervalo = setInterval(() => {
      if (typeof google !== "undefined" && google.accounts) {
        clearInterval(intervalo);
        google.accounts.id.initialize({
          client_id: this.GOOGLE_CLIENT_ID,
          use_fedcm_for_prompt: false,
          callback: (response) => {
            this.ngZone.run(() => this.manejarGoogle(response));
          }
        });
        setTimeout(() => {
          const btn = document.getElementById("google-login-btn");
          if (btn) {
            google.accounts.id.renderButton(btn, {
              theme: "outline",
              size: "large",
              text: "signin_with"
            });
          }
        }, 300);
      }
    }, 100);
  }
  manejarGoogle(response) {
    if (!response.credential)
      return;
    this.cargandoGoogle = true;
    this.errorGeneral = "";
    this.http.post(`${this.URL_API}/auth/google`, { credential: response.credential }).subscribe({
      next: (res) => {
        localStorage.setItem("a365_token", res.token);
        localStorage.setItem("a365_usuario", JSON.stringify({
          id: res.id,
          codigo: res.codigo,
          nombre: res.nombre,
          rol: res.rol
        }));
        if (res.fotoUrl) {
          const baseUrl = this.URL_API.replace("/api", "");
          const fotoCompleta = baseUrl + res.fotoUrl;
          localStorage.setItem("a365_foto", fotoCompleta);
          this.servicioAuth.actualizarFoto(fotoCompleta);
        }
        this.cargandoGoogle = false;
        this.redirigirPorRol(res.rol);
      },
      error: (err) => {
        this.cargandoGoogle = false;
        if (err.status === 404) {
          this.errorGeneral = "Tu correo de Google no est\xC3\xA1 registrado en el sistema.";
        } else if (err.status === 403) {
          this.errorGeneral = "Tu cuenta est\xC3\xA1 desactivada. Contacta al administrador.";
        } else {
          this.errorGeneral = "Error al iniciar sesi\xC3\xB3n con Google. Intenta de nuevo.";
        }
      }
    });
  }
  redirigirPorRol(rol) {
    if (rol === "ADMINISTRADOR") {
      this.router.navigate(["/dashboard/admin"]);
    } else if (rol === "GERENTE") {
      this.router.navigate(["/dashboard/tecnico/tickets"]);
    } else {
      this.router.navigate(["/dashboard/agente"]);
    }
  }
  toggleContrasena() {
    this.mostrarContrasena = !this.mostrarContrasena;
  }
  onOlvidaste() {
    this.router.navigate(["/auth/recuperar"]);
  }
  limpiarErrores() {
    this.errorCodigo = "";
    this.errorContrasena = "";
    this.errorGeneral = "";
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(HttpClient));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 57, vars: 19, consts: [["loginForm", "ngForm"], [1, "login-wrapper"], [1, "login-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", 1, "logo-img"], [1, "login-main"], [1, "login-card"], [1, "login-image"], ["src", "assets/login-bg.webp", "alt", "A365 tecnolog\xEDa"], [1, "login-form-section"], [1, "login-title"], [1, "login-subtitle"], ["class", "error-banner", 4, "ngIf"], ["novalidate", "", 3, "ngSubmit"], [1, "form-group"], ["for", "codigo"], ["id", "codigo", "type", "text", "name", "codigo", "placeholder", "Ingresa tu c\xF3digo", "autocomplete", "username", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["for", "contrasena"], [1, "password-wrap"], ["id", "contrasena", "name", "contrasena", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", "autocomplete", "current-password", 3, "ngModelChange", "type", "ngModel"], ["type", "button", "tabindex", "-1", 1, "toggle-eye", 3, "click"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "17", "height", "17", 4, "ngIf"], [1, "form-options"], [1, "check-label"], ["type", "checkbox", "name", "recuerdame", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "forgot-link", 3, "click"], ["type", "submit", 1, "btn-ingresar", 3, "disabled"], [4, "ngIf"], [1, "divider-google"], [1, "divider-linea"], [1, "divider-texto"], [1, "google-btn-wrap"], ["class", "google-cargando", 4, "ngIf"], ["id", "google-login-btn"], [1, "login-footer"], [1, "footer-social"], ["href", "#", "aria-label", "LinkedIn", 1, "social-icon"], ["href", "#", "aria-label", "Facebook", 1, "social-icon"], ["href", "#", "aria-label", "Instagram", 1, "social-icon"], [1, "error-banner"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "16", "height", "16"], ["fill-rule", "evenodd", "d", "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z", "clip-rule", "evenodd"], [1, "field-error"], ["viewBox", "0 0 20 20", "fill", "currentColor", "width", "17", "height", "17"], ["d", "M10 12a2 2 0 100-4 2 2 0 000 4z"], ["fill-rule", "evenodd", "d", "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z", "clip-rule", "evenodd"], ["fill-rule", "evenodd", "d", "M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 0 0-5.478-5.478z", "clip-rule", "evenodd"], ["d", "M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"], [1, "spinner"], [1, "google-cargando"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "header", 2);
        \u0275\u0275element(2, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "main", 4)(4, "div", 5)(5, "div", 6);
        \u0275\u0275element(6, "img", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 8)(8, "h1", 9);
        \u0275\u0275text(9, "BIENVENIDO");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "p", 10);
        \u0275\u0275text(11, "Por favor, ingresa tu c\xF3digo y contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, LoginComponent_div_12_Template, 4, 1, "div", 11);
        \u0275\u0275elementStart(13, "form", 12, 0);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_13_listener() {
          return ctx.onLogin();
        });
        \u0275\u0275elementStart(15, "div", 13)(16, "label", 14);
        \u0275\u0275text(17, "C\xF3digo");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "input", 15);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.codigo, $event) || (ctx.codigo = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, LoginComponent_span_19_Template, 2, 1, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 13)(21, "label", 17);
        \u0275\u0275text(22, "Contrase\xF1a");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 18)(24, "input", 19);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_24_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.contrasena, $event) || (ctx.contrasena = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "button", 20);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_25_listener() {
          return ctx.toggleContrasena();
        });
        \u0275\u0275template(26, LoginComponent__svg_svg_26_Template, 3, 0, "svg", 21)(27, LoginComponent__svg_svg_27_Template, 3, 0, "svg", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, LoginComponent_span_28_Template, 2, 1, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 22)(30, "label", 23)(31, "input", 24);
        \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_31_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.recuerdame, $event) || (ctx.recuerdame = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span");
        \u0275\u0275text(33, "Recu\xE9rdame");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 25);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_34_listener() {
          return ctx.onOlvidaste();
        });
        \u0275\u0275text(35, " \xBFOlvidaste la contrase\xF1a? ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "button", 26);
        \u0275\u0275template(37, LoginComponent_ng_container_37_Template, 2, 0, "ng-container", 27)(38, LoginComponent_ng_container_38_Template, 3, 0, "ng-container", 27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 28);
        \u0275\u0275element(40, "span", 29);
        \u0275\u0275elementStart(41, "span", 30);
        \u0275\u0275text(42, "o contin\xFAa con");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "span", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 31);
        \u0275\u0275template(45, LoginComponent_div_45_Template, 3, 0, "div", 32);
        \u0275\u0275element(46, "div", 33);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(47, "footer", 34)(48, "span");
        \u0275\u0275text(49, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 35)(51, "a", 36);
        \u0275\u0275text(52, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "a", 37);
        \u0275\u0275text(54, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "a", 38);
        \u0275\u0275text(56, "@");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngIf", ctx.errorGeneral);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("is-error", ctx.errorCodigo);
        \u0275\u0275twoWayProperty("ngModel", ctx.codigo);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorCodigo);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("is-error", ctx.errorContrasena);
        \u0275\u0275property("type", ctx.mostrarContrasena ? "text" : "password");
        \u0275\u0275twoWayProperty("ngModel", ctx.contrasena);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.mostrarContrasena);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mostrarContrasena);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorContrasena);
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.recuerdame);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", ctx.cargando || ctx.cargandoGoogle);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.cargando);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.cargando);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.cargandoGoogle);
        \u0275\u0275advance();
        \u0275\u0275styleProp("display", ctx.cargandoGoogle ? "none" : "block");
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], styles: ['\n.login-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n}\n.login-header[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.logo-img[_ngcontent-%COMP%] {\n  height: 80px;\n  width: auto;\n  object-fit: contain;\n}\n.login-main[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background-color: #f5f7fa;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 2.5px solid #1a2b5e;\n  border-radius: 8px;\n  padding: 2.5rem 3rem;\n  display: flex;\n  gap: 2.5rem;\n  align-items: center;\n  width: 100%;\n  max-width: 900px;\n}\n.login-image[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 320px;\n}\n.login-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 4px;\n  object-fit: cover;\n  display: block;\n}\n.login-form-section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.login-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a2b5e;\n  letter-spacing: 0.05em;\n  margin: 0 0 4px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.login-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #888;\n  margin: 0 0 1.2rem;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.error-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff0f0;\n  border: 1px solid #f5c6c6;\n  color: #c0392b;\n  font-size: 0.8rem;\n  padding: 8px 12px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin-bottom: 5px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1.5px solid #d0d5e8;\n  border-radius: 4px;\n  padding: 9px 12px;\n  font-size: 0.88rem;\n  color: #333;\n  outline: none;\n  transition: border-color 0.2s;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.field-error[_ngcontent-%COMP%] {\n  color: #c0392b;\n  font-size: 0.76rem;\n  margin-top: 4px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.form-group[_ngcontent-%COMP%]   input.is-error[_ngcontent-%COMP%] {\n  border-color: #e53935;\n}\n.password-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n.toggle-eye[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #888;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.toggle-eye[_ngcontent-%COMP%]:hover {\n  color: #1a2b5e;\n}\n.form-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.25rem 0 1rem;\n}\n.check-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #555;\n  cursor: pointer;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #1a2b5e;\n  text-decoration: underline;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.forgot-link[_ngcontent-%COMP%]:hover {\n  color: #c0392b;\n}\n.btn-ingresar[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #1a2b5e;\n  color: #ffffff;\n  font-size: 0.9rem;\n  font-weight: 600;\n  height: 42px;\n  border: none;\n  border-radius: 4px;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: background-color 0.2s;\n}\n.btn-ingresar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1a56db;\n}\n.btn-ingresar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #8fa8d4;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.social-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2e4a8e;\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: background-color 0.2s;\n}\n.social-icon[_ngcontent-%COMP%]:hover {\n  background: #4a6ab0;\n}\n@media (max-width: 680px) {\n  .login-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 1.5rem;\n  }\n  .login-image[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .login-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n}\n.divider-google[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1.2rem 0 1rem;\n}\n.divider-linea[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: #ddd;\n}\n.divider-texto[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #999;\n  white-space: nowrap;\n}\n.google-btn-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.google-btn-wrap[_ngcontent-%COMP%]   #google-login-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.google-cargando[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.82rem;\n  color: #555;\n  padding: 0.5rem 0;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [CommonModule, FormsModule], template: `<div class="login-wrapper">\r
\r
  <header class="login-header">\r
    <img src="assets/logo-a365.jpg" alt="A365" class="logo-img" />\r
  </header>\r
\r
  <main class="login-main">\r
    <div class="login-card">\r
\r
      <div class="login-image">\r
        <img src="assets/login-bg.webp" alt="A365 tecnolog\xEDa" />\r
      </div>\r
\r
      <div class="login-form-section">\r
        <h1 class="login-title">BIENVENIDO</h1>\r
        <p class="login-subtitle">Por favor, ingresa tu c\xF3digo y contrase\xF1a</p>\r
\r
        <div class="error-banner" *ngIf="errorGeneral">\r
          <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">\r
            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>\r
          </svg>\r
          {{ errorGeneral }}\r
        </div>\r
\r
        <form (ngSubmit)="onLogin()" #loginForm="ngForm" novalidate>\r
\r
          <div class="form-group">\r
            <label for="codigo">C\xF3digo</label>\r
            <input\r
              id="codigo"\r
              type="text"\r
              name="codigo"\r
              [(ngModel)]="codigo"\r
              placeholder="Ingresa tu c\xF3digo"\r
              autocomplete="username"\r
              [class.is-error]="errorCodigo"\r
            />\r
            <span class="field-error" *ngIf="errorCodigo">{{ errorCodigo }}</span>\r
          </div>\r
\r
          <div class="form-group">\r
            <label for="contrasena">Contrase\xF1a</label>\r
            <div class="password-wrap">\r
              <input\r
                id="contrasena"\r
                [type]="mostrarContrasena ? 'text' : 'password'"\r
                name="contrasena"\r
                [(ngModel)]="contrasena"\r
                placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"\r
                autocomplete="current-password"\r
                [class.is-error]="errorContrasena"\r
              />\r
              <button type="button" class="toggle-eye" (click)="toggleContrasena()" tabindex="-1">\r
                <svg *ngIf="!mostrarContrasena" viewBox="0 0 20 20" fill="currentColor" width="17" height="17">\r
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>\r
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>\r
                </svg>\r
                <svg *ngIf="mostrarContrasena" viewBox="0 0 20 20" fill="currentColor" width="17" height="17">\r
                  <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 0 0-5.478-5.478z" clip-rule="evenodd"/>\r
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.064 7 9.542 7 .847 0 1.669-.105 2.454-.303z"/>\r
                </svg>\r
              </button>\r
            </div>\r
            <span class="field-error" *ngIf="errorContrasena">{{ errorContrasena }}</span>\r
          </div>\r
\r
          <div class="form-options">\r
            <label class="check-label">\r
              <input type="checkbox" name="recuerdame" [(ngModel)]="recuerdame" />\r
              <span>Recu\xE9rdame</span>\r
            </label>\r
            <button type="button" class="forgot-link" (click)="onOlvidaste()">\r
              \xBFOlvidaste la contrase\xF1a?\r
            </button>\r
          </div>\r
\r
          <button type="submit" class="btn-ingresar" [disabled]="cargando || cargandoGoogle">\r
            <ng-container *ngIf="!cargando">Ingresar</ng-container>\r
            <ng-container *ngIf="cargando">\r
              <span class="spinner"></span> Verificando...\r
            </ng-container>\r
          </button>\r
\r
        </form>\r
\r
        <!-- DIVISOR -->\r
        <div class="divider-google">\r
          <span class="divider-linea"></span>\r
          <span class="divider-texto">o contin\xFAa con</span>\r
          <span class="divider-linea"></span>\r
        </div>\r
\r
        <!-- BOT\xD3N GOOGLE -->\r
        <div class="google-btn-wrap">\r
          <div *ngIf="cargandoGoogle" class="google-cargando">\r
            <span class="spinner"></span> Verificando con Google...\r
          </div>\r
          <div id="google-login-btn" [style.display]="cargandoGoogle ? 'none' : 'block'"></div>\r
        </div>\r
\r
      </div>\r
    </div>\r
  </main>\r
\r
  <footer class="login-footer">\r
    <span>\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16</span>\r
    <div class="footer-social">\r
      <a href="#" class="social-icon" aria-label="LinkedIn">in</a>\r
      <a href="#" class="social-icon" aria-label="Facebook">f</a>\r
      <a href="#" class="social-icon" aria-label="Instagram">@</a>\r
    </div>\r
  </footer>\r
\r
</div>`, styles: ['/* src/app/pages/login/login.component.css */\n.login-wrapper {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n}\n.login-header {\n  background: #ffffff;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid #e0e0e0;\n}\n.logo-img {\n  height: 80px;\n  width: auto;\n  object-fit: contain;\n}\n.login-main {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background-color: #f5f7fa;\n}\n.login-card {\n  background: #ffffff;\n  border: 2.5px solid #1a2b5e;\n  border-radius: 8px;\n  padding: 2.5rem 3rem;\n  display: flex;\n  gap: 2.5rem;\n  align-items: center;\n  width: 100%;\n  max-width: 900px;\n}\n.login-image {\n  flex: 1;\n  max-width: 320px;\n}\n.login-image img {\n  width: 100%;\n  border-radius: 4px;\n  object-fit: cover;\n  display: block;\n}\n.login-form-section {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.login-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a2b5e;\n  letter-spacing: 0.05em;\n  margin: 0 0 4px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.login-subtitle {\n  font-size: 0.78rem;\n  color: #888;\n  margin: 0 0 1.2rem;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.error-banner {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff0f0;\n  border: 1px solid #f5c6c6;\n  color: #c0392b;\n  font-size: 0.8rem;\n  padding: 8px 12px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 1rem;\n}\n.form-group label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin-bottom: 5px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.form-group input {\n  border: 1.5px solid #d0d5e8;\n  border-radius: 4px;\n  padding: 9px 12px;\n  font-size: 0.88rem;\n  color: #333;\n  outline: none;\n  transition: border-color 0.2s;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  width: 100%;\n  box-sizing: border-box;\n}\n.form-group input:focus {\n  border-color: #1a2b5e;\n}\n.field-error {\n  color: #c0392b;\n  font-size: 0.76rem;\n  margin-top: 4px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.form-group input.is-error {\n  border-color: #e53935;\n}\n.password-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.password-wrap input {\n  padding-right: 40px;\n}\n.toggle-eye {\n  position: absolute;\n  right: 10px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #888;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.toggle-eye:hover {\n  color: #1a2b5e;\n}\n.form-options {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0.25rem 0 1rem;\n}\n.check-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #555;\n  cursor: pointer;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.forgot-link {\n  font-size: 0.75rem;\n  color: #1a2b5e;\n  text-decoration: underline;\n  background: none;\n  border: none;\n  cursor: pointer;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.forgot-link:hover {\n  color: #c0392b;\n}\n.btn-ingresar {\n  width: 100%;\n  background-color: #1a2b5e;\n  color: #ffffff;\n  font-size: 0.9rem;\n  font-weight: 600;\n  height: 42px;\n  border: none;\n  border-radius: 4px;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  transition: background-color 0.2s;\n}\n.btn-ingresar:hover:not(:disabled) {\n  background-color: #1a56db;\n}\n.btn-ingresar:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.spinner {\n  width: 16px;\n  height: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #ffffff;\n  border-radius: 50%;\n  display: inline-block;\n  animation: spin 0.7s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.login-footer {\n  background: #1a2b5e;\n  padding: 1rem 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.login-footer span {\n  font-size: 0.72rem;\n  color: #8fa8d4;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.footer-social {\n  display: flex;\n  gap: 10px;\n}\n.social-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2e4a8e;\n  color: #ffffff;\n  font-size: 0.65rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  transition: background-color 0.2s;\n}\n.social-icon:hover {\n  background: #4a6ab0;\n}\n@media (max-width: 680px) {\n  .login-card {\n    flex-direction: column;\n    padding: 1.5rem;\n  }\n  .login-image {\n    max-width: 100%;\n  }\n  .login-footer {\n    flex-direction: column;\n    gap: 10px;\n    text-align: center;\n  }\n}\n.divider-google {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1.2rem 0 1rem;\n}\n.divider-linea {\n  flex: 1;\n  height: 1px;\n  background: #ddd;\n}\n.divider-texto {\n  font-size: 0.72rem;\n  color: #999;\n  white-space: nowrap;\n}\n.google-btn-wrap {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.google-btn-wrap #google-login-btn {\n  width: 100%;\n}\n.google-cargando {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  font-size: 0.82rem;\n  color: #555;\n  padding: 0.5rem 0;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: Router }, { type: NgZone }, { type: ChangeDetectorRef }, { type: HttpClient }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/login/login.component.ts", lineNumber: 18 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-P6LQDKAA.js.map
