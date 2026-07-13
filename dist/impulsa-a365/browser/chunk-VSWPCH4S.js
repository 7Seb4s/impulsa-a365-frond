import {
  ServicioPerfil,
  resolverUrlFoto
} from "./chunk-3OEW7LP2.js";
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
  Location,
  NgIf,
  RouterLink,
  ViewEncapsulation,
  __spreadValues,
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

// src/app/pages/tecnico/tecnico-perfil.component.ts
function TecnicoPerfilComponent_img_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoPreview, \u0275\u0275sanitizeUrl);
  }
}
function TecnicoPerfilComponent__svg_svg_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 54);
    \u0275\u0275element(1, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function TecnicoPerfilComponent_img_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 56);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoPreview, \u0275\u0275sanitizeUrl);
  }
}
function TecnicoPerfilComponent__svg_svg_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 57);
    \u0275\u0275element(1, "path", 55);
    \u0275\u0275elementEnd();
  }
}
function TecnicoPerfilComponent_label_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 58);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "input", 59);
    \u0275\u0275listener("change", function TecnicoPerfilComponent_label_53_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFotoChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.subiendoFoto ? "Subiendo..." : "Cambiar foto", " ");
  }
}
function TecnicoPerfilComponent_span_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFoto);
  }
}
function TecnicoPerfilComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "label");
    \u0275\u0275text(2, "Nombre completo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function TecnicoPerfilComponent_div_60_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.nombreCompleto, $event) || (ctx_r0.formulario.nombreCompleto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.nombreCompleto);
  }
}
function TecnicoPerfilComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1, "Guardado");
    \u0275\u0275elementEnd();
  }
}
function TecnicoPerfilComponent_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 63);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_ng_container_75_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.abrirModalPass());
    });
    \u0275\u0275text(2, "Cambiar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 64);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_ng_container_75_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activarEdicion());
    });
    \u0275\u0275text(4, "Editar perfil");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function TecnicoPerfilComponent_ng_container_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 63);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_ng_container_76_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelar());
    });
    \u0275\u0275text(2, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 65);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_ng_container_76_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.guardando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.guardando ? "Guardando..." : "Guardar cambios", " ");
  }
}
function TecnicoPerfilComponent_div_87_p_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 78);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.passError);
  }
}
function TecnicoPerfilComponent_div_87_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 79);
    \u0275\u0275text(1, "Contrase\xF1a actualizada correctamente.");
    \u0275\u0275elementEnd();
  }
}
function TecnicoPerfilComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 66);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_div_87_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalPass());
    });
    \u0275\u0275elementStart(1, "div", 67);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_div_87_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 68)(3, "span", 69);
    \u0275\u0275text(4, "Cambiar contrase\xF1a");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 70);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_div_87_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalPass());
    });
    \u0275\u0275text(6, "\u2715");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 42)(8, "label");
    \u0275\u0275text(9, "Contrase\xF1a actual ");
    \u0275\u0275elementStart(10, "span", 71);
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function TecnicoPerfilComponent_div_87_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.passForm.actual, $event) || (ctx_r0.passForm.actual = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 42)(14, "label");
    \u0275\u0275text(15, "Nueva contrase\xF1a ");
    \u0275\u0275elementStart(16, "span", 71);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 73);
    \u0275\u0275twoWayListener("ngModelChange", function TecnicoPerfilComponent_div_87_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.passForm.nueva, $event) || (ctx_r0.passForm.nueva = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 42)(20, "label");
    \u0275\u0275text(21, "Confirmar nueva contrase\xF1a ");
    \u0275\u0275elementStart(22, "span", 71);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function TecnicoPerfilComponent_div_87_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.passForm.confirmar, $event) || (ctx_r0.passForm.confirmar = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, TecnicoPerfilComponent_div_87_p_25_Template, 2, 1, "p", 75)(26, TecnicoPerfilComponent_div_87_p_26_Template, 2, 0, "p", 76);
    \u0275\u0275elementStart(27, "div", 77)(28, "button", 63);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_div_87_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModalPass());
    });
    \u0275\u0275text(29, "Cancelar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 65);
    \u0275\u0275listener("click", function TecnicoPerfilComponent_div_87_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cambiarContrasena());
    });
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passForm.actual);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passForm.nueva);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.passForm.confirmar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.passError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.passOk);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.passGuardando);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.passGuardando ? "Guardando..." : "Cambiar contrase\xF1a", " ");
  }
}
var TecnicoPerfilComponent = class _TecnicoPerfilComponent {
  constructor(servicioAuth, servicioPerfil, location, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioPerfil = servicioPerfil;
    this.location = location;
    this.cdr = cdr;
    this.usuario = null;
    this.perfilBD = null;
    this.fotoPreview = null;
    this.modoEdicion = false;
    this.guardando = false;
    this.subiendoFoto = false;
    this.errorFoto = "";
    this.guardado = false;
    this.archivoFotoPendiente = null;
    this.formulario = { nombreCompleto: "", correo: "", direccion: "", telefono: "", dni: "" };
    this.respaldo = __spreadValues({}, this.formulario);
    this.mostrarModalPass = false;
    this.passForm = { actual: "", nueva: "", confirmar: "" };
    this.passError = "";
    this.passOk = false;
    this.passGuardando = false;
  }
  ngOnInit() {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.servicioAuth.fotoUrl$.subscribe((url) => {
      if (!this.archivoFotoPendiente) {
        this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        this.cdr.detectChanges();
      }
    });
    this.cargarPerfil();
  }
  cargarPerfil() {
    this.servicioPerfil.obtener().subscribe({
      next: (perfil) => {
        this.perfilBD = perfil;
        this.formulario = {
          nombreCompleto: perfil.nombreCompleto ?? "",
          correo: perfil.correo ?? "",
          direccion: perfil.direccion ?? "",
          telefono: perfil.telefono ?? "",
          dni: perfil.dni ?? ""
        };
        this.respaldo = __spreadValues({}, this.formulario);
        if (!this.archivoFotoPendiente) {
          const url = resolverUrlFoto(perfil.fotoUrl);
          this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        }
        this.cdr.detectChanges();
      },
      error: () => this.cdr.detectChanges()
    });
  }
  activarEdicion() {
    this.respaldo = __spreadValues({}, this.formulario);
    this.archivoFotoPendiente = null;
    this.errorFoto = "";
    this.modoEdicion = true;
  }
  cancelar() {
    this.formulario = __spreadValues({}, this.respaldo);
    this.archivoFotoPendiente = null;
    this.errorFoto = "";
    const url = resolverUrlFoto(this.perfilBD?.fotoUrl);
    this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
    this.modoEdicion = false;
  }
  onFotoChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    const permitidos = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!permitidos.includes(file.type)) {
      this.errorFoto = "Solo JPEG, PNG, WEBP o GIF.";
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.errorFoto = "La imagen no puede superar 5 MB.";
      return;
    }
    this.errorFoto = "";
    this.archivoFotoPendiente = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.fotoPreview = reader.result;
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }
  guardar() {
    if (!this.formulario.nombreCompleto.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }
    if (this.archivoFotoPendiente)
      this.subirFotoYGuardar();
    else
      this.guardarDatos();
  }
  subirFotoYGuardar() {
    this.subiendoFoto = true;
    this.servicioPerfil.subirFoto(this.archivoFotoPendiente).subscribe({
      next: (res) => {
        this.subiendoFoto = false;
        this.archivoFotoPendiente = null;
        const url = resolverUrlFoto(res.fotoUrl);
        this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        this.cdr.detectChanges();
        this.guardarDatos();
      },
      error: (err) => {
        this.subiendoFoto = false;
        this.errorFoto = err?.error?.message || "No se pudo subir la foto.";
        this.cdr.detectChanges();
      }
    });
  }
  guardarDatos() {
    this.guardando = true;
    this.servicioPerfil.actualizar({
      nombreCompleto: this.formulario.nombreCompleto.trim(),
      correo: this.formulario.correo.trim(),
      direccion: this.formulario.direccion?.trim() || void 0,
      telefono: this.formulario.telefono.trim(),
      dni: this.formulario.dni.trim()
    }).subscribe({
      next: () => {
        this.guardando = false;
        this.modoEdicion = false;
        this.guardado = true;
        setTimeout(() => {
          this.guardado = false;
          this.cdr.detectChanges();
        }, 2500);
        this.cdr.detectChanges();
        this.cargarPerfil();
      },
      error: (err) => {
        this.guardando = false;
        alert(err?.error?.message || "No se pudo actualizar el perfil.");
      }
    });
  }
  // â”€â”€ Cambio de contraseÃ±a â”€â”€
  abrirModalPass() {
    this.passForm = { actual: "", nueva: "", confirmar: "" };
    this.passError = "";
    this.passOk = false;
    this.mostrarModalPass = true;
  }
  cerrarModalPass() {
    this.mostrarModalPass = false;
  }
  cambiarContrasena() {
    const { actual, nueva, confirmar } = this.passForm;
    if (!actual || !nueva || !confirmar) {
      this.passError = "Completa todos los campos.";
      return;
    }
    if (nueva.length < 4) {
      this.passError = "La nueva contrase\xC3\xB1a debe tener al menos 4 caracteres.";
      return;
    }
    if (nueva !== confirmar) {
      this.passError = "Las contrase\xC3\xB1as nuevas no coinciden.";
      return;
    }
    this.passGuardando = true;
    this.passError = "";
    this.servicioPerfil.cambiarContrasena({
      contrasenaActual: actual,
      nuevaContrasena: nueva,
      confirmarContrasena: confirmar
    }).subscribe({
      next: () => {
        this.passGuardando = false;
        this.passOk = true;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.cerrarModalPass();
          this.cdr.detectChanges();
        }, 1500);
      },
      error: (err) => {
        this.passGuardando = false;
        this.passError = err?.error?.message || err?.error?.error || "No se pudo cambiar la contrase\xC3\xB1a. Verifica la actual.";
        this.cdr.detectChanges();
      }
    });
  }
  goBack() {
    if (this.modoEdicion)
      this.cancelar();
    else
      this.location.back();
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  get nombre() {
    return this.usuario?.nombre || this.usuario?.codigo || "Usuario";
  }
  static {
    this.\u0275fac = function TecnicoPerfilComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TecnicoPerfilComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioPerfil), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TecnicoPerfilComponent, selectors: [["app-tecnico-perfil"]], decls: 88, vars: 30, consts: [[1, "tec-layout"], [1, "tec-body"], [1, "tec-sidebar"], [1, "tec-sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "tec-sidebar-logo"], [1, "tec-nav"], ["routerLink", "/dashboard/tecnico/tickets", 1, "tec-nav-item"], ["viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["d", "M22 7l-10 6L2 7"], ["routerLink", "/dashboard/tecnico/incidencias", 1, "tec-nav-item"], ["d", "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"], [1, "tec-sidebar-spacer"], [1, "tec-sidebar-foot"], [1, "tec-admin-link", "active"], ["cx", "12", "cy", "12", "r", "3"], ["d", "M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"], [1, "tec-main"], [1, "tec-topbar"], [1, "tec-welcome"], [1, "tec-user-chip"], [1, "tec-user-avatar"], ["alt", "avatar", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "24", "height", "24", 4, "ngIf"], [1, "tec-user-name"], [1, "tec-logout", 3, "click"], [1, "tec-panel-title-bar", 2, "display", "flex", "align-items", "center", "gap", "10px", "background", "#ffffff"], [1, "tec-icon-btn", 3, "click"], ["d", "M15 18l-6-6 6-6"], [1, "tec-panel-title"], [2, "padding", "24px 30px"], [1, "tec-perfil-card"], [1, "tec-perfil-avatar-col"], [1, "tec-perfil-avatar"], ["alt", "foto", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#b7c0d3", "width", "64", "height", "64", 4, "ngIf"], [1, "tec-perfil-nombre"], ["class", "tec-perfil-cambiar-foto", 4, "ngIf"], ["class", "tec-perfil-error", 4, "ngIf"], [1, "tec-perfil-datos"], [1, "tec-field"], ["type", "email", 1, "tec-input", 3, "ngModelChange", "ngModel", "readonly"], ["class", "tec-field", 4, "ngIf"], ["type", "text", "placeholder", "\u2014", 1, "tec-input", 3, "ngModelChange", "ngModel", "readonly"], [1, "tec-perfil-acciones"], ["class", "tec-estado-pill asignado", "style", "padding:7px 16px;font-size:12px", 4, "ngIf"], [4, "ngIf"], [1, "tec-footer"], [1, "tec-footer-icons"], ["href", "#", 1, "tec-footer-icon"], ["class", "tec-modal-overlay", 3, "click", 4, "ngIf"], ["alt", "avatar", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "24", "height", "24"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], ["alt", "foto", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#b7c0d3", "width", "64", "height", "64"], [1, "tec-perfil-cambiar-foto"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change"], [1, "tec-perfil-error"], ["type", "text", 1, "tec-input", 3, "ngModelChange", "ngModel"], [1, "tec-estado-pill", "asignado", 2, "padding", "7px 16px", "font-size", "12px"], [1, "tec-btn", "tec-btn-outline", 2, "border-radius", "8px", 3, "click"], [1, "tec-btn", "tec-btn-primary", 2, "border-radius", "8px", 3, "click"], [1, "tec-btn", "tec-btn-primary", 2, "border-radius", "8px", 3, "click", "disabled"], [1, "tec-modal-overlay", 3, "click"], [1, "tec-modal", 2, "width", "380px", 3, "click"], [1, "tec-modal-head"], [1, "tec-modal-title"], [1, "tec-modal-close", 3, "click"], [1, "req"], ["type", "password", "placeholder", "Tu contrase\xF1a actual", 1, "tec-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "M\xEDnimo 4 caracteres", 1, "tec-input", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Repite la nueva contrase\xF1a", 1, "tec-input", 3, "ngModelChange", "ngModel"], ["class", "tec-perfil-error", "style", "text-align:left;margin:4px 0 0", 4, "ngIf"], ["style", "color:#2f9e6c;font-size:12px;margin:4px 0 0", 4, "ngIf"], [1, "tec-perfil-acciones", 2, "margin-top", "18px"], [1, "tec-perfil-error", 2, "text-align", "left", "margin", "4px 0 0"], [2, "color", "#2f9e6c", "font-size", "12px", "margin", "4px 0 0"]], template: function TecnicoPerfilComponent_Template(rf, ctx) {
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
        \u0275\u0275template(33, TecnicoPerfilComponent_img_33_Template, 1, 1, "img", 24)(34, TecnicoPerfilComponent__svg_svg_34_Template, 2, 0, "svg", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 26);
        \u0275\u0275text(36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 27);
        \u0275\u0275listener("click", function TecnicoPerfilComponent_Template_button_click_37_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(38, "Cerrar sesion");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "div", 28)(40, "button", 29);
        \u0275\u0275listener("click", function TecnicoPerfilComponent_Template_button_click_40_listener() {
          return ctx.goBack();
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(41, "svg", 7);
        \u0275\u0275element(42, "path", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(43, "h2", 31);
        \u0275\u0275text(44, "Perfil");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "div", 32)(46, "div", 33)(47, "div", 34)(48, "div", 35);
        \u0275\u0275template(49, TecnicoPerfilComponent_img_49_Template, 1, 1, "img", 36)(50, TecnicoPerfilComponent__svg_svg_50_Template, 2, 0, "svg", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "b", 38);
        \u0275\u0275text(52);
        \u0275\u0275elementEnd();
        \u0275\u0275template(53, TecnicoPerfilComponent_label_53_Template, 3, 1, "label", 39)(54, TecnicoPerfilComponent_span_54_Template, 2, 1, "span", 40);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "div", 41)(56, "div", 42)(57, "label");
        \u0275\u0275text(58, "Correo electronico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "input", 43);
        \u0275\u0275twoWayListener("ngModelChange", function TecnicoPerfilComponent_Template_input_ngModelChange_59_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formulario.correo, $event) || (ctx.formulario.correo = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275template(60, TecnicoPerfilComponent_div_60_Template, 4, 1, "div", 44);
        \u0275\u0275elementStart(61, "div", 42)(62, "label");
        \u0275\u0275text(63, "Direccion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "input", 45);
        \u0275\u0275twoWayListener("ngModelChange", function TecnicoPerfilComponent_Template_input_ngModelChange_64_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formulario.direccion, $event) || (ctx.formulario.direccion = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 42)(66, "label");
        \u0275\u0275text(67, "Numero de celular");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "input", 45);
        \u0275\u0275twoWayListener("ngModelChange", function TecnicoPerfilComponent_Template_input_ngModelChange_68_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formulario.telefono, $event) || (ctx.formulario.telefono = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 42)(70, "label");
        \u0275\u0275text(71, "Numero de DNI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "input", 45);
        \u0275\u0275twoWayListener("ngModelChange", function TecnicoPerfilComponent_Template_input_ngModelChange_72_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.formulario.dni, $event) || (ctx.formulario.dni = $event);
          return $event;
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 46);
        \u0275\u0275template(74, TecnicoPerfilComponent_span_74_Template, 2, 0, "span", 47)(75, TecnicoPerfilComponent_ng_container_75_Template, 5, 0, "ng-container", 48)(76, TecnicoPerfilComponent_ng_container_76_Template, 5, 2, "ng-container", 48);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(77, "footer", 49)(78, "span");
        \u0275\u0275text(79, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 50)(81, "a", 51);
        \u0275\u0275text(82, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "a", 51);
        \u0275\u0275text(84, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "a", 51);
        \u0275\u0275text(86, "\u25CF");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(87, TecnicoPerfilComponent_div_87_Template, 32, 7, "div", 52);
      }
      if (rf & 2) {
        \u0275\u0275advance(30);
        \u0275\u0275textInterpolate1("Bienvenido, ", ctx.nombre, ".");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.fotoPreview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoPreview);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.nombre);
        \u0275\u0275advance(13);
        \u0275\u0275property("ngIf", ctx.fotoPreview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoPreview);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate((ctx.perfilBD == null ? null : ctx.perfilBD.nombreCompleto) || ctx.nombre);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.modoEdicion);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.errorFoto);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("readonly", !ctx.modoEdicion);
        \u0275\u0275twoWayProperty("ngModel", ctx.formulario.correo);
        \u0275\u0275property("readonly", !ctx.modoEdicion);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.modoEdicion);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("readonly", !ctx.modoEdicion);
        \u0275\u0275twoWayProperty("ngModel", ctx.formulario.direccion);
        \u0275\u0275property("readonly", !ctx.modoEdicion);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("readonly", !ctx.modoEdicion);
        \u0275\u0275twoWayProperty("ngModel", ctx.formulario.telefono);
        \u0275\u0275property("readonly", !ctx.modoEdicion);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("readonly", !ctx.modoEdicion);
        \u0275\u0275twoWayProperty("ngModel", ctx.formulario.dni);
        \u0275\u0275property("readonly", !ctx.modoEdicion);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.guardado);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.modoEdicion);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.modoEdicion);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.mostrarModalPass);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ['/* src/app/pages/tecnico/tecnico-panel.css */\n* {\n  box-sizing: border-box;\n}\n.tec-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #1f2a44;\n}\n.tec-body {\n  display: flex;\n  flex: 1;\n}\n.tec-sidebar {\n  width: 210px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #eef0f5;\n  padding: 0 14px;\n}\n.tec-sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 20px 6px 26px 6px;\n}\n.tec-sidebar-logo {\n  height: 44px;\n  width: auto;\n  object-fit: contain;\n}\n.tec-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tec-sidebar-spacer {\n  flex: 1;\n}\n.tec-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  color: #7b8699;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  border-radius: 10px;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s, color 0.15s;\n}\n.tec-nav-item svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.tec-nav-item:hover {\n  background: #f4f6fb;\n  color: #1f2a44;\n}\n.tec-nav-item.active {\n  background: #e8f0fe;\n  color: #2563eb;\n  font-weight: 700;\n}\n.tec-sidebar-foot {\n  padding: 16px 6px 22px 6px;\n}\n.tec-admin-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #aab2c2;\n  font-size: 13px;\n  font-weight: 600;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n}\n.tec-admin-link svg {\n  width: 17px;\n  height: 17px;\n}\n.tec-admin-link:hover {\n  color: #6b7488;\n}\n.tec-admin-link.active {\n  color: #2563eb;\n}\n.tec-perfil-card {\n  display: flex;\n  gap: 40px;\n  background: #ffffff;\n  border: 1px solid #eef0f5;\n  border-radius: 14px;\n  padding: 32px;\n  max-width: 1100px;\n}\n.tec-perfil-avatar-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-width: 160px;\n}\n.tec-perfil-avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  background: #eef1f6;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-perfil-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tec-perfil-nombre {\n  font-size: 15px;\n  color: #26324c;\n}\n.tec-perfil-cambiar-foto {\n  font-size: 12px;\n  font-weight: 600;\n  color: #2563eb;\n  cursor: pointer;\n}\n.tec-perfil-cambiar-foto:hover {\n  text-decoration: underline;\n}\n.tec-perfil-error {\n  font-size: 11px;\n  color: #d64545;\n  text-align: center;\n}\n.tec-perfil-datos {\n  flex: 1;\n  min-width: 0;\n}\n.tec-perfil-datos .tec-input.readonly {\n  background: #f7f9fc;\n  color: #4a5468;\n  cursor: default;\n}\n.tec-perfil-acciones {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n@media (max-width: 700px) {\n  .tec-perfil-card {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.tec-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.tec-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 30px;\n  border-bottom: 1px solid #eef0f5;\n  flex-shrink: 0;\n}\n.tec-welcome {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2a44;\n  margin: 0;\n}\n.tec-user-chip {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tec-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2a44;\n}\n.tec-user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #e2e7f2;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-user-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tec-logout {\n  background: none;\n  border: 1px solid #e0e4ef;\n  color: #6b7488;\n  border-radius: 7px;\n  padding: 7px 14px;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 6px;\n  transition: background 0.15s;\n}\n.tec-logout:hover {\n  background: #f4f6fb;\n}\n.tec-panel-title-bar {\n  padding: 18px 30px;\n  background: #f7f9fc;\n  border-bottom: 1px solid #eef0f5;\n}\n.tec-panel-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2a44;\n  margin: 0;\n}\n.tec-split {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.tec-list-col {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid #eef0f5;\n}\n.tec-list-col.con-detalle {\n  max-width: 460px;\n}\n.tec-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 26px 14px 26px;\n}\n.tec-search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #ffffff;\n  border: 1px solid #e6e9f1;\n  border-radius: 9px;\n  padding: 10px 14px;\n}\n.tec-search svg {\n  width: 15px;\n  height: 15px;\n  color: #aeb6c6;\n  flex-shrink: 0;\n}\n.tec-search input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 13px;\n  color: #4a5468;\n  background: transparent;\n  font-family: inherit;\n}\n.tec-search input::placeholder {\n  color: #b3bacb;\n}\n.tec-filtro {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #ffffff;\n  border: 1px solid #e6e9f1;\n  border-radius: 9px;\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7488;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: inherit;\n}\n.tec-filtro svg {\n  width: 14px;\n  height: 14px;\n}\n.tec-filtro:hover {\n  background: #f4f6fb;\n}\n.tec-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 12px 20px 12px;\n}\n.tec-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 14px;\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.tec-card:hover {\n  background: #f9fafd;\n}\n.tec-card.activa {\n  background: #f2f6ff;\n}\n.tec-card-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f0f2f8;\n  color: #9aa3b7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.tec-card-body {\n  flex: 1;\n  min-width: 0;\n}\n.tec-card-title-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.tec-card-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #26324c;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tec-card-sub {\n  font-size: 12.5px;\n  color: #98a1b3;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tec-card-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n  text-align: right;\n}\n.tec-card-id {\n  font-size: 12px;\n  color: #aab2c2;\n}\n.tec-pri {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.tec-pri::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.tec-pri.alto {\n  background: #fdeceb;\n  color: #e15b52;\n}\n.tec-pri.alto::before {\n  background: #e15b52;\n}\n.tec-pri.medio {\n  background: #fef4e6;\n  color: #e0a13a;\n}\n.tec-pri.medio::before {\n  background: #e0a13a;\n}\n.tec-pri.bajo {\n  background: #e7f7ef;\n  color: #34b37a;\n}\n.tec-pri.bajo::before {\n  background: #34b37a;\n}\n.tec-estado-txt {\n  font-size: 12px;\n  color: #b0b8c7;\n}\n.tec-estado-badge {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: #e7f7ef;\n  color: #34b37a;\n}\n.tec-detalle {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow-y: auto;\n}\n.tec-detalle-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.tec-detalle-remitente {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tec-mini-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #fbe3e3;\n  color: #d9756e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n.tec-detalle-remitente b {\n  font-size: 13.5px;\n  color: #26324c;\n}\n.tec-detalle-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tec-detalle-right .tec-card-id {\n  font-size: 12px;\n}\n.tec-detalle-cuerpo {\n  padding: 20px 24px;\n  flex: 1;\n}\n.tec-asunto-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.tec-asunto {\n  font-size: 15px;\n  font-weight: 700;\n  color: #26324c;\n  margin: 0;\n}\n.tec-asunto-tools {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.tec-hora {\n  font-size: 11.5px;\n  color: #aab2c2;\n  white-space: nowrap;\n}\n.tec-icon-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #b8c0cf;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.tec-icon-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.tec-icon-btn:hover {\n  color: #7b8699;\n}\n.tec-texto {\n  font-size: 12.5px;\n  line-height: 1.75;\n  color: #6b7488;\n  margin: 14px 0 20px 0;\n  white-space: pre-line;\n}\n.tec-adjuntos {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.tec-adjunto {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  background: #f7f9fc;\n  border: 1px solid #eef0f5;\n  border-radius: 9px;\n  padding: 8px 12px;\n  min-width: 150px;\n}\n.tec-adjunto-ico {\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8f0fe;\n  color: #2563eb;\n}\n.tec-adjunto-ico svg {\n  width: 15px;\n  height: 15px;\n}\n.tec-adjunto-nombre {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a5468;\n}\n.tec-adjunto-peso {\n  font-size: 10.5px;\n  color: #aab2c2;\n}\n.tec-detalle-acciones {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n  margin-top: auto;\n}\n.tec-estado-pill {\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 22px;\n  border-radius: 20px;\n}\n.tec-estado-pill.pendiente {\n  background: #fbe1e0;\n  color: #d9756e;\n}\n.tec-estado-pill.aprobado,\n.tec-estado-pill.asignado {\n  background: #c9f0dd;\n  color: #2f9e6c;\n}\n.tec-estado-pill.rechazado {\n  background: #fbdcda;\n  color: #d64545;\n}\n.tec-estado-badge.rojo {\n  background: #fbdcda;\n  color: #d64545;\n}\n.tec-btn-row {\n  display: flex;\n  gap: 14px;\n}\n.tec-btn {\n  border: none;\n  border-radius: 22px;\n  padding: 11px 26px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, opacity 0.15s;\n}\n.tec-btn-primary {\n  background: #2563eb;\n  color: #ffffff;\n}\n.tec-btn-primary:hover {\n  background: #1d4fd0;\n}\n.tec-btn-outline {\n  background: #ffffff;\n  color: #2563eb;\n  border: 1px solid #cddafc;\n}\n.tec-btn-outline:hover {\n  background: #f2f6ff;\n}\n.tec-btn-danger {\n  background: #ffffff;\n  color: #d64545;\n  border: 1px solid #f3c9c6;\n}\n.tec-btn-danger:hover {\n  background: #fdf2f1;\n}\n.tec-btn-ok {\n  background: #c9f0dd;\n  color: #2f9e6c;\n  cursor: default;\n}\n.tec-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  color: #b3bacb;\n  gap: 12px;\n  padding: 40px;\n  text-align: center;\n}\n.tec-empty svg {\n  width: 46px;\n  height: 46px;\n  opacity: 0.5;\n}\n.tec-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.tec-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(20, 28, 48, 0.28);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 70px 20px;\n  z-index: 60;\n}\n.tec-modal {\n  background: #ffffff;\n  border-radius: 14px;\n  width: 400px;\n  max-width: 100%;\n  max-height: 82vh;\n  overflow-y: auto;\n  box-shadow: 0 18px 50px rgba(20, 28, 48, 0.22);\n  padding: 22px 22px 26px 22px;\n}\n.tec-modal-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.tec-modal-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #26324c;\n}\n.tec-modal-head-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tec-modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #b8c0cf;\n  font-size: 16px;\n  line-height: 1;\n}\n.tec-modal-close:hover {\n  color: #7b8699;\n}\n.tec-field {\n  margin-bottom: 16px;\n}\n.tec-field label {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #4a5468;\n  margin-bottom: 7px;\n}\n.tec-field label .req {\n  color: #e15b52;\n}\n.tec-input,\n.tec-select {\n  width: 100%;\n  border: 1px solid #e6e9f1;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #4a5468;\n  font-family: inherit;\n  background: #ffffff;\n  outline: none;\n}\n.tec-input:focus,\n.tec-select:focus {\n  border-color: #b9c9f7;\n}\n.tec-input::placeholder {\n  color: #b3bacb;\n}\n.tec-pri-choices {\n  display: flex;\n  gap: 10px;\n}\n.tec-pri-choice {\n  flex: 1;\n  border: 1px solid #e6e9f1;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 8px 0;\n  font-size: 12px;\n  font-weight: 700;\n  color: #98a1b3;\n  cursor: pointer;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.tec-pri-choice::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.tec-pri-choice.sel.alto {\n  background: #fdeceb;\n  color: #e15b52;\n  border-color: #f6d3d0;\n}\n.tec-pri-choice.sel.medio {\n  background: #fef4e6;\n  color: #e0a13a;\n  border-color: #f6e4c3;\n}\n.tec-pri-choice.sel.bajo {\n  background: #e7f7ef;\n  color: #34b37a;\n  border-color: #c8ebd7;\n}\n.tec-field-row {\n  display: flex;\n  gap: 14px;\n}\n.tec-field-row .tec-field {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.tec-chip-person {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e6e9f1;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.tec-chip-avatar {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #dfe6f5;\n  color: #7b8699;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-chip-person span {\n  font-size: 12.5px;\n  color: #4a5468;\n  font-weight: 600;\n}\n.tec-contenido-box {\n  margin-top: 4px;\n}\n.tec-contenido-de {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #98a1b3;\n  margin-bottom: 10px;\n}\n.tec-contenido-de b {\n  color: #4a5468;\n}\n.tec-contenido-texto {\n  font-size: 12px;\n  line-height: 1.7;\n  color: #7b8699;\n  white-space: pre-line;\n}\n.tec-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 30px;\n  border-top: 1px solid #eef0f5;\n  font-size: 12px;\n  color: #aab2c2;\n}\n.tec-footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.tec-footer-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f0f2f8;\n  color: #7b8699;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  text-decoration: none;\n}\n@media (max-width: 900px) {\n  .tec-list-col.con-detalle {\n    max-width: none;\n  }\n  .tec-split {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=tecnico-panel.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TecnicoPerfilComponent, [{
    type: Component,
    args: [{ selector: "app-tecnico-perfil", standalone: true, imports: [CommonModule, FormsModule, RouterLink], encapsulation: ViewEncapsulation.None, template: `<div class="tec-layout">
  <div class="tec-body">

    <!-- SIDEBAR (mismo del tecnico) -->
    <aside class="tec-sidebar">
      <div class="tec-sidebar-header">
        <img src="assets/logo-a365.jpg" alt="A365" class="tec-sidebar-logo" loading="lazy" />
      </div>

      <nav class="tec-nav">
        <a class="tec-nav-item" routerLink="/dashboard/tecnico/tickets">
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
        <button class="tec-admin-link active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>
          <span>Administracion</span>
        </button>
      </div>
    </aside>

    <!-- MAIN -->
    <div class="tec-main">

      <header class="tec-topbar">
        <h1 class="tec-welcome">Bienvenido, {{ nombre }}.</h1>
        <div class="tec-user-chip">
          <div class="tec-user-avatar">
            <img *ngIf="fotoPreview" [src]="fotoPreview" alt="avatar" />
            <svg *ngIf="!fotoPreview" viewBox="0 0 24 24" fill="#9aaac5" width="24" height="24"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
          </div>
          <span class="tec-user-name">{{ nombre }}</span>
          <button class="tec-logout" (click)="onLogout()">Cerrar sesion</button>
        </div>
      </header>

      <div class="tec-panel-title-bar" style="display:flex;align-items:center;gap:10px;background:#ffffff">
        <button class="tec-icon-btn" (click)="goBack()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>
        <h2 class="tec-panel-title">Perfil</h2>
      </div>

      <div style="padding:24px 30px">
        <div class="tec-perfil-card">

          <!-- Columna avatar -->
          <div class="tec-perfil-avatar-col">
            <div class="tec-perfil-avatar">
              <img *ngIf="fotoPreview" [src]="fotoPreview" alt="foto" />
              <svg *ngIf="!fotoPreview" viewBox="0 0 24 24" fill="#b7c0d3" width="64" height="64"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
            </div>
            <b class="tec-perfil-nombre">{{ perfilBD?.nombreCompleto || nombre }}</b>
            <label *ngIf="modoEdicion" class="tec-perfil-cambiar-foto">
              {{ subiendoFoto ? 'Subiendo...' : 'Cambiar foto' }}
              <input type="file" accept="image/*" (change)="onFotoChange($event)" hidden />
            </label>
            <span *ngIf="errorFoto" class="tec-perfil-error">{{ errorFoto }}</span>
          </div>

          <!-- Columna datos -->
          <div class="tec-perfil-datos">
            <div class="tec-field">
              <label>Correo electronico</label>
              <input class="tec-input" type="email" [(ngModel)]="formulario.correo" [readonly]="!modoEdicion" [class.readonly]="!modoEdicion" />
            </div>

            <div class="tec-field" *ngIf="modoEdicion">
              <label>Nombre completo</label>
              <input class="tec-input" type="text" [(ngModel)]="formulario.nombreCompleto" />
            </div>

            <div class="tec-field">
              <label>Direccion</label>
              <input class="tec-input" type="text" [(ngModel)]="formulario.direccion" [readonly]="!modoEdicion" [class.readonly]="!modoEdicion" placeholder="\u2014" />
            </div>

            <div class="tec-field">
              <label>Numero de celular</label>
              <input class="tec-input" type="text" [(ngModel)]="formulario.telefono" [readonly]="!modoEdicion" [class.readonly]="!modoEdicion" placeholder="\u2014" />
            </div>

            <div class="tec-field">
              <label>Numero de DNI</label>
              <input class="tec-input" type="text" [(ngModel)]="formulario.dni" [readonly]="!modoEdicion" [class.readonly]="!modoEdicion" placeholder="\u2014" />
            </div>

            <div class="tec-perfil-acciones">
              <span *ngIf="guardado" class="tec-estado-pill asignado" style="padding:7px 16px;font-size:12px">Guardado</span>
              <ng-container *ngIf="!modoEdicion">
                <button class="tec-btn tec-btn-outline" style="border-radius:8px" (click)="abrirModalPass()">Cambiar contrase\xF1a</button>
                <button class="tec-btn tec-btn-primary" style="border-radius:8px" (click)="activarEdicion()">Editar perfil</button>
              </ng-container>
              <ng-container *ngIf="modoEdicion">
                <button class="tec-btn tec-btn-outline" style="border-radius:8px" (click)="cancelar()">Cancelar</button>
                <button class="tec-btn tec-btn-primary" style="border-radius:8px" (click)="guardar()" [disabled]="guardando">
                  {{ guardando ? 'Guardando...' : 'Guardar cambios' }}
                </button>
              </ng-container>
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

<!-- MODAL: Cambiar contrase\xF1a -->
<div class="tec-modal-overlay" *ngIf="mostrarModalPass" (click)="cerrarModalPass()">
  <div class="tec-modal" (click)="$event.stopPropagation()" style="width:380px">
    <div class="tec-modal-head">
      <span class="tec-modal-title">Cambiar contrase\xF1a</span>
      <button class="tec-modal-close" (click)="cerrarModalPass()">&#10005;</button>
    </div>

    <div class="tec-field">
      <label>Contrase\xF1a actual <span class="req">*</span></label>
      <input class="tec-input" type="password" [(ngModel)]="passForm.actual" placeholder="Tu contrase\xF1a actual" />
    </div>
    <div class="tec-field">
      <label>Nueva contrase\xF1a <span class="req">*</span></label>
      <input class="tec-input" type="password" [(ngModel)]="passForm.nueva" placeholder="M\xEDnimo 4 caracteres" />
    </div>
    <div class="tec-field">
      <label>Confirmar nueva contrase\xF1a <span class="req">*</span></label>
      <input class="tec-input" type="password" [(ngModel)]="passForm.confirmar" placeholder="Repite la nueva contrase\xF1a" />
    </div>

    <p *ngIf="passError" class="tec-perfil-error" style="text-align:left;margin:4px 0 0">{{ passError }}</p>
    <p *ngIf="passOk" style="color:#2f9e6c;font-size:12px;margin:4px 0 0">Contrase\xF1a actualizada correctamente.</p>

    <div class="tec-perfil-acciones" style="margin-top:18px">
      <button class="tec-btn tec-btn-outline" style="border-radius:8px" (click)="cerrarModalPass()">Cancelar</button>
      <button class="tec-btn tec-btn-primary" style="border-radius:8px" (click)="cambiarContrasena()" [disabled]="passGuardando">
        {{ passGuardando ? 'Guardando...' : 'Cambiar contrase\xF1a' }}
      </button>
    </div>
  </div>
</div>
`, styles: ['/* src/app/pages/tecnico/tecnico-panel.css */\n* {\n  box-sizing: border-box;\n}\n.tec-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n  color: #1f2a44;\n}\n.tec-body {\n  display: flex;\n  flex: 1;\n}\n.tec-sidebar {\n  width: 210px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #eef0f5;\n  padding: 0 14px;\n}\n.tec-sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 20px 6px 26px 6px;\n}\n.tec-sidebar-logo {\n  height: 44px;\n  width: auto;\n  object-fit: contain;\n}\n.tec-nav {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.tec-sidebar-spacer {\n  flex: 1;\n}\n.tec-nav-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 14px;\n  color: #7b8699;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n  border-radius: 10px;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s, color 0.15s;\n}\n.tec-nav-item svg {\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n}\n.tec-nav-item:hover {\n  background: #f4f6fb;\n  color: #1f2a44;\n}\n.tec-nav-item.active {\n  background: #e8f0fe;\n  color: #2563eb;\n  font-weight: 700;\n}\n.tec-sidebar-foot {\n  padding: 16px 6px 22px 6px;\n}\n.tec-admin-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #aab2c2;\n  font-size: 13px;\n  font-weight: 600;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 6px;\n}\n.tec-admin-link svg {\n  width: 17px;\n  height: 17px;\n}\n.tec-admin-link:hover {\n  color: #6b7488;\n}\n.tec-admin-link.active {\n  color: #2563eb;\n}\n.tec-perfil-card {\n  display: flex;\n  gap: 40px;\n  background: #ffffff;\n  border: 1px solid #eef0f5;\n  border-radius: 14px;\n  padding: 32px;\n  max-width: 1100px;\n}\n.tec-perfil-avatar-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  min-width: 160px;\n}\n.tec-perfil-avatar {\n  width: 150px;\n  height: 150px;\n  border-radius: 10px;\n  background: #eef1f6;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-perfil-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tec-perfil-nombre {\n  font-size: 15px;\n  color: #26324c;\n}\n.tec-perfil-cambiar-foto {\n  font-size: 12px;\n  font-weight: 600;\n  color: #2563eb;\n  cursor: pointer;\n}\n.tec-perfil-cambiar-foto:hover {\n  text-decoration: underline;\n}\n.tec-perfil-error {\n  font-size: 11px;\n  color: #d64545;\n  text-align: center;\n}\n.tec-perfil-datos {\n  flex: 1;\n  min-width: 0;\n}\n.tec-perfil-datos .tec-input.readonly {\n  background: #f7f9fc;\n  color: #4a5468;\n  cursor: default;\n}\n.tec-perfil-acciones {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n}\n@media (max-width: 700px) {\n  .tec-perfil-card {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.tec-main {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.tec-topbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 30px;\n  border-bottom: 1px solid #eef0f5;\n  flex-shrink: 0;\n}\n.tec-welcome {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2a44;\n  margin: 0;\n}\n.tec-user-chip {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tec-user-name {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1f2a44;\n}\n.tec-user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #e2e7f2;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-user-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tec-logout {\n  background: none;\n  border: 1px solid #e0e4ef;\n  color: #6b7488;\n  border-radius: 7px;\n  padding: 7px 14px;\n  font-size: 12.5px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-left: 6px;\n  transition: background 0.15s;\n}\n.tec-logout:hover {\n  background: #f4f6fb;\n}\n.tec-panel-title-bar {\n  padding: 18px 30px;\n  background: #f7f9fc;\n  border-bottom: 1px solid #eef0f5;\n}\n.tec-panel-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2a44;\n  margin: 0;\n}\n.tec-split {\n  display: flex;\n  flex: 1;\n  min-height: 0;\n}\n.tec-list-col {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid #eef0f5;\n}\n.tec-list-col.con-detalle {\n  max-width: 460px;\n}\n.tec-toolbar {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 18px 26px 14px 26px;\n}\n.tec-search {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #ffffff;\n  border: 1px solid #e6e9f1;\n  border-radius: 9px;\n  padding: 10px 14px;\n}\n.tec-search svg {\n  width: 15px;\n  height: 15px;\n  color: #aeb6c6;\n  flex-shrink: 0;\n}\n.tec-search input {\n  border: none;\n  outline: none;\n  flex: 1;\n  font-size: 13px;\n  color: #4a5468;\n  background: transparent;\n  font-family: inherit;\n}\n.tec-search input::placeholder {\n  color: #b3bacb;\n}\n.tec-filtro {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: #ffffff;\n  border: 1px solid #e6e9f1;\n  border-radius: 9px;\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7488;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: inherit;\n}\n.tec-filtro svg {\n  width: 14px;\n  height: 14px;\n}\n.tec-filtro:hover {\n  background: #f4f6fb;\n}\n.tec-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 12px 20px 12px;\n}\n.tec-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 14px;\n  border-bottom: 1px solid #f0f2f7;\n  cursor: pointer;\n  transition: background 0.12s;\n}\n.tec-card:hover {\n  background: #f9fafd;\n}\n.tec-card.activa {\n  background: #f2f6ff;\n}\n.tec-card-avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #f0f2f8;\n  color: #9aa3b7;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.tec-card-body {\n  flex: 1;\n  min-width: 0;\n}\n.tec-card-title-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.tec-card-title {\n  font-size: 14px;\n  font-weight: 700;\n  color: #26324c;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tec-card-sub {\n  font-size: 12.5px;\n  color: #98a1b3;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tec-card-meta {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n  text-align: right;\n}\n.tec-card-id {\n  font-size: 12px;\n  color: #aab2c2;\n}\n.tec-pri {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 3px 9px;\n  border-radius: 20px;\n  white-space: nowrap;\n}\n.tec-pri::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.tec-pri.alto {\n  background: #fdeceb;\n  color: #e15b52;\n}\n.tec-pri.alto::before {\n  background: #e15b52;\n}\n.tec-pri.medio {\n  background: #fef4e6;\n  color: #e0a13a;\n}\n.tec-pri.medio::before {\n  background: #e0a13a;\n}\n.tec-pri.bajo {\n  background: #e7f7ef;\n  color: #34b37a;\n}\n.tec-pri.bajo::before {\n  background: #34b37a;\n}\n.tec-estado-txt {\n  font-size: 12px;\n  color: #b0b8c7;\n}\n.tec-estado-badge {\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 12px;\n  border-radius: 20px;\n  background: #e7f7ef;\n  color: #34b37a;\n}\n.tec-detalle {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow-y: auto;\n}\n.tec-detalle-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 24px;\n  border-bottom: 1px solid #f0f2f7;\n}\n.tec-detalle-remitente {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.tec-mini-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #fbe3e3;\n  color: #d9756e;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n}\n.tec-detalle-remitente b {\n  font-size: 13.5px;\n  color: #26324c;\n}\n.tec-detalle-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tec-detalle-right .tec-card-id {\n  font-size: 12px;\n}\n.tec-detalle-cuerpo {\n  padding: 20px 24px;\n  flex: 1;\n}\n.tec-asunto-row {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 4px;\n}\n.tec-asunto {\n  font-size: 15px;\n  font-weight: 700;\n  color: #26324c;\n  margin: 0;\n}\n.tec-asunto-tools {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.tec-hora {\n  font-size: 11.5px;\n  color: #aab2c2;\n  white-space: nowrap;\n}\n.tec-icon-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #b8c0cf;\n  padding: 0;\n  display: flex;\n  align-items: center;\n}\n.tec-icon-btn svg {\n  width: 16px;\n  height: 16px;\n}\n.tec-icon-btn:hover {\n  color: #7b8699;\n}\n.tec-texto {\n  font-size: 12.5px;\n  line-height: 1.75;\n  color: #6b7488;\n  margin: 14px 0 20px 0;\n  white-space: pre-line;\n}\n.tec-adjuntos {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.tec-adjunto {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  background: #f7f9fc;\n  border: 1px solid #eef0f5;\n  border-radius: 9px;\n  padding: 8px 12px;\n  min-width: 150px;\n}\n.tec-adjunto-ico {\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8f0fe;\n  color: #2563eb;\n}\n.tec-adjunto-ico svg {\n  width: 15px;\n  height: 15px;\n}\n.tec-adjunto-nombre {\n  font-size: 12px;\n  font-weight: 600;\n  color: #4a5468;\n}\n.tec-adjunto-peso {\n  font-size: 10.5px;\n  color: #aab2c2;\n}\n.tec-detalle-acciones {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  padding: 24px;\n  margin-top: auto;\n}\n.tec-estado-pill {\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 8px 22px;\n  border-radius: 20px;\n}\n.tec-estado-pill.pendiente {\n  background: #fbe1e0;\n  color: #d9756e;\n}\n.tec-estado-pill.aprobado,\n.tec-estado-pill.asignado {\n  background: #c9f0dd;\n  color: #2f9e6c;\n}\n.tec-estado-pill.rechazado {\n  background: #fbdcda;\n  color: #d64545;\n}\n.tec-estado-badge.rojo {\n  background: #fbdcda;\n  color: #d64545;\n}\n.tec-btn-row {\n  display: flex;\n  gap: 14px;\n}\n.tec-btn {\n  border: none;\n  border-radius: 22px;\n  padding: 11px 26px;\n  font-size: 13.5px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s, opacity 0.15s;\n}\n.tec-btn-primary {\n  background: #2563eb;\n  color: #ffffff;\n}\n.tec-btn-primary:hover {\n  background: #1d4fd0;\n}\n.tec-btn-outline {\n  background: #ffffff;\n  color: #2563eb;\n  border: 1px solid #cddafc;\n}\n.tec-btn-outline:hover {\n  background: #f2f6ff;\n}\n.tec-btn-danger {\n  background: #ffffff;\n  color: #d64545;\n  border: 1px solid #f3c9c6;\n}\n.tec-btn-danger:hover {\n  background: #fdf2f1;\n}\n.tec-btn-ok {\n  background: #c9f0dd;\n  color: #2f9e6c;\n  cursor: default;\n}\n.tec-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n  color: #b3bacb;\n  gap: 12px;\n  padding: 40px;\n  text-align: center;\n}\n.tec-empty svg {\n  width: 46px;\n  height: 46px;\n  opacity: 0.5;\n}\n.tec-empty p {\n  font-size: 13px;\n  margin: 0;\n}\n.tec-modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(20, 28, 48, 0.28);\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 70px 20px;\n  z-index: 60;\n}\n.tec-modal {\n  background: #ffffff;\n  border-radius: 14px;\n  width: 400px;\n  max-width: 100%;\n  max-height: 82vh;\n  overflow-y: auto;\n  box-shadow: 0 18px 50px rgba(20, 28, 48, 0.22);\n  padding: 22px 22px 26px 22px;\n}\n.tec-modal-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.tec-modal-title {\n  font-size: 15px;\n  font-weight: 700;\n  color: #26324c;\n}\n.tec-modal-head-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.tec-modal-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #b8c0cf;\n  font-size: 16px;\n  line-height: 1;\n}\n.tec-modal-close:hover {\n  color: #7b8699;\n}\n.tec-field {\n  margin-bottom: 16px;\n}\n.tec-field label {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #4a5468;\n  margin-bottom: 7px;\n}\n.tec-field label .req {\n  color: #e15b52;\n}\n.tec-input,\n.tec-select {\n  width: 100%;\n  border: 1px solid #e6e9f1;\n  border-radius: 8px;\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #4a5468;\n  font-family: inherit;\n  background: #ffffff;\n  outline: none;\n}\n.tec-input:focus,\n.tec-select:focus {\n  border-color: #b9c9f7;\n}\n.tec-input::placeholder {\n  color: #b3bacb;\n}\n.tec-pri-choices {\n  display: flex;\n  gap: 10px;\n}\n.tec-pri-choice {\n  flex: 1;\n  border: 1px solid #e6e9f1;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 8px 0;\n  font-size: 12px;\n  font-weight: 700;\n  color: #98a1b3;\n  cursor: pointer;\n  font-family: inherit;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n}\n.tec-pri-choice::before {\n  content: "";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n.tec-pri-choice.sel.alto {\n  background: #fdeceb;\n  color: #e15b52;\n  border-color: #f6d3d0;\n}\n.tec-pri-choice.sel.medio {\n  background: #fef4e6;\n  color: #e0a13a;\n  border-color: #f6e4c3;\n}\n.tec-pri-choice.sel.bajo {\n  background: #e7f7ef;\n  color: #34b37a;\n  border-color: #c8ebd7;\n}\n.tec-field-row {\n  display: flex;\n  gap: 14px;\n}\n.tec-field-row .tec-field {\n  flex: 1;\n  margin-bottom: 16px;\n}\n.tec-chip-person {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #e6e9f1;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.tec-chip-avatar {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: #dfe6f5;\n  color: #7b8699;\n  font-size: 10px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.tec-chip-person span {\n  font-size: 12.5px;\n  color: #4a5468;\n  font-weight: 600;\n}\n.tec-contenido-box {\n  margin-top: 4px;\n}\n.tec-contenido-de {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  color: #98a1b3;\n  margin-bottom: 10px;\n}\n.tec-contenido-de b {\n  color: #4a5468;\n}\n.tec-contenido-texto {\n  font-size: 12px;\n  line-height: 1.7;\n  color: #7b8699;\n  white-space: pre-line;\n}\n.tec-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 30px;\n  border-top: 1px solid #eef0f5;\n  font-size: 12px;\n  color: #aab2c2;\n}\n.tec-footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.tec-footer-icon {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: #f0f2f8;\n  color: #7b8699;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  text-decoration: none;\n}\n@media (max-width: 900px) {\n  .tec-list-col.con-detalle {\n    max-width: none;\n  }\n  .tec-split {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=tecnico-panel.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioPerfil }, { type: Location }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TecnicoPerfilComponent, { className: "TecnicoPerfilComponent", filePath: "src/app/pages/tecnico/tecnico-perfil.component.ts", lineNumber: 27 });
})();
export {
  TecnicoPerfilComponent
};
//# sourceMappingURL=chunk-VSWPCH4S.js.map
