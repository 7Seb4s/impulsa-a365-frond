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
  MaxLengthValidator,
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
  __spreadValues,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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

// src/app/pages/perfil/perfil.component.ts
function PerfilComponent_img_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.fotoPreview, \u0275\u0275sanitizeUrl);
  }
}
function PerfilComponent__svg_svg_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 32);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function PerfilComponent_ng_container_35_img_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 50);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.fotoPreview, \u0275\u0275sanitizeUrl);
  }
}
function PerfilComponent_ng_container_35__svg_svg_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "path", 33);
    \u0275\u0275elementEnd();
  }
}
function PerfilComponent_ng_container_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "button", 35);
    \u0275\u0275listener("click", function PerfilComponent_ng_container_35_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goBack());
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 36);
    \u0275\u0275text(5, "Perfil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "div", 38)(8, "div", 39)(9, "div", 40);
    \u0275\u0275template(10, PerfilComponent_ng_container_35_img_10_Template, 1, 1, "img", 41)(11, PerfilComponent_ng_container_35__svg_svg_11_Template, 2, 0, "svg", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 43);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 44)(15, "div", 45)(16, "label", 46);
    \u0275\u0275text(17, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 47);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 45)(21, "label", 46);
    \u0275\u0275text(22, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 47);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 45)(26, "label", 46);
    \u0275\u0275text(27, "N\xFAmero de celular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 47);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 45)(31, "label", 46);
    \u0275\u0275text(32, "N\xFAmero de DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 47);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 48)(36, "button", 49);
    \u0275\u0275listener("click", function PerfilComponent_ng_container_35_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.activarEdicion());
    });
    \u0275\u0275text(37, "Editar perfil");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.fotoPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.fotoPreview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((ctx_r0.perfilBD == null ? null : ctx_r0.perfilBD.nombreCompleto) || (ctx_r0.usuario == null ? null : ctx_r0.usuario.nombre));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate((ctx_r0.perfilBD == null ? null : ctx_r0.perfilBD.correo) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.perfilBD == null ? null : ctx_r0.perfilBD.direccion) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.perfilBD == null ? null : ctx_r0.perfilBD.telefono) || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate((ctx_r0.perfilBD == null ? null : ctx_r0.perfilBD.dni) || "\u2014");
  }
}
function PerfilComponent_ng_container_36_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "span", 71);
    \u0275\u0275elementEnd();
  }
}
function PerfilComponent_ng_container_36_img_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 72);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.fotoPreview, \u0275\u0275sanitizeUrl);
  }
}
function PerfilComponent_ng_container_36_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 74);
    \u0275\u0275element(2, "path", 33);
    \u0275\u0275elementEnd()();
  }
}
function PerfilComponent_ng_container_36_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span");
    \u0275\u0275text(2, "Cambiar foto");
    \u0275\u0275elementEnd()();
  }
}
function PerfilComponent_ng_container_36_p_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorFoto);
  }
}
function PerfilComponent_ng_container_36_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77);
    \u0275\u0275text(1, "JPEG, PNG, WEBP o GIF \xB7 M\xE1x. 5 MB");
    \u0275\u0275elementEnd();
  }
}
function PerfilComponent_ng_container_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "button", 35);
    \u0275\u0275listener("click", function PerfilComponent_ng_container_36_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cancelarEdicion());
    });
    \u0275\u0275text(3, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 36);
    \u0275\u0275text(5, "Editar informaci\xF3n del perfil");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 37)(7, "p", 52);
    \u0275\u0275text(8, "UserId - ");
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 53)(12, "div", 54)(13, "div", 55);
    \u0275\u0275listener("click", function PerfilComponent_ng_container_36_Template_div_click_13_listener() {
      \u0275\u0275restoreView(_r3);
      const fotoInput_r4 = \u0275\u0275reference(21);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(!ctx_r0.subiendoFoto && fotoInput_r4.click());
    });
    \u0275\u0275template(14, PerfilComponent_ng_container_36_div_14_Template, 2, 0, "div", 56)(15, PerfilComponent_ng_container_36_img_15_Template, 1, 1, "img", 57)(16, PerfilComponent_ng_container_36_div_16_Template, 3, 0, "div", 58)(17, PerfilComponent_ng_container_36_div_17_Template, 3, 0, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, PerfilComponent_ng_container_36_p_18_Template, 2, 1, "p", 60)(19, PerfilComponent_ng_container_36_p_19_Template, 2, 0, "p", 61);
    \u0275\u0275elementStart(20, "input", 62, 0);
    \u0275\u0275listener("change", function PerfilComponent_ng_container_36_Template_input_change_20_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFotoChange($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 63)(23, "div", 45)(24, "label", 46);
    \u0275\u0275text(25, "Nombre y apellido");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 64);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_ng_container_36_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.nombreCompleto, $event) || (ctx_r0.formulario.nombreCompleto = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 45)(28, "label", 46);
    \u0275\u0275text(29, "Correo electr\xF3nico");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 65);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_ng_container_36_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.correo, $event) || (ctx_r0.formulario.correo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 45)(32, "label", 46);
    \u0275\u0275text(33, "Direcci\xF3n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_ng_container_36_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.direccion, $event) || (ctx_r0.formulario.direccion = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 45)(36, "label", 46);
    \u0275\u0275text(37, "N\xFAmero de celular");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_ng_container_36_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.telefono, $event) || (ctx_r0.formulario.telefono = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div", 45)(40, "label", 46);
    \u0275\u0275text(41, "N\xFAmero de DNI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 68);
    \u0275\u0275twoWayListener("ngModelChange", function PerfilComponent_ng_container_36_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.formulario.dni, $event) || (ctx_r0.formulario.dni = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 48)(44, "button", 69);
    \u0275\u0275listener("click", function PerfilComponent_ng_container_36_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.guardar());
    });
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.usuario == null ? null : ctx_r0.usuario.codigo);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.subiendoFoto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.fotoPreview && !ctx_r0.subiendoFoto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.fotoPreview && !ctx_r0.subiendoFoto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.subiendoFoto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorFoto);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.errorFoto);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.nombreCompleto);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.correo);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.direccion);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.telefono);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.formulario.dni);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.guardando || ctx_r0.subiendoFoto);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.subiendoFoto ? "Subiendo foto..." : ctx_r0.guardando ? "Guardando..." : "Guardar", " ");
  }
}
function PerfilComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "button", 80);
    \u0275\u0275listener("click", function PerfilComponent_div_47_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.cerrarModal());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 81);
    \u0275\u0275text(5, "Tu perfil ha sido actualizado");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, "correctamente.");
    \u0275\u0275elementEnd()()();
  }
}
var PerfilComponent = class _PerfilComponent {
  constructor(servicioAuth, servicioPerfil, location, cdr) {
    this.servicioAuth = servicioAuth;
    this.servicioPerfil = servicioPerfil;
    this.location = location;
    this.cdr = cdr;
    this.usuario = null;
    this.perfilBD = null;
    this.fotoPreview = null;
    this.guardando = false;
    this.subiendoFoto = false;
    this.errorFoto = "";
    this.modoEdicion = false;
    this.mostrarModal = false;
    this.cargando = false;
    this.errorMsg = "";
    this.archivoFotoPendiente = null;
    this.formulario = {
      nombreCompleto: "",
      correo: "",
      direccion: "",
      telefono: "",
      dni: ""
    };
    this.formularioRespaldo = __spreadValues({}, this.formulario);
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
  // Trae los datos del perfil del backend
  cargarPerfil() {
    this.cargando = true;
    this.errorMsg = "";
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
        this.formularioRespaldo = __spreadValues({}, this.formulario);
        if (!this.archivoFotoPendiente) {
          const url = resolverUrlFoto(perfil.fotoUrl);
          this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
        }
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("[Perfil] Error al cargar:", err);
        this.errorMsg = "No se pudo cargar el perfil.";
        this.cargando = false;
      }
    });
  }
  activarEdicion() {
    this.formularioRespaldo = __spreadValues({}, this.formulario);
    this.archivoFotoPendiente = null;
    this.errorFoto = "";
    this.modoEdicion = true;
  }
  cancelarEdicion() {
    this.formulario = __spreadValues({}, this.formularioRespaldo);
    this.archivoFotoPendiente = null;
    this.errorFoto = "";
    const url = resolverUrlFoto(this.perfilBD?.fotoUrl);
    this.fotoPreview = url ? `${url}?t=${Date.now()}` : null;
    this.modoEdicion = false;
  }
  // El usuario elige una imagen: hacemos preview local y guardamos el File
  onFotoChange(event) {
    const input = event.target;
    const file = input.files?.[0];
    if (!file)
      return;
    const tiposPermitidos = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!tiposPermitidos.includes(file.type)) {
      this.errorFoto = "Solo se permiten im\xC3\xA1genes JPEG, PNG, WEBP o GIF.";
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
  // Guarda los datos del perfil. Si hay foto pendiente, la sube primero.
  guardar() {
    if (!this.formulario.nombreCompleto.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }
    if (this.archivoFotoPendiente) {
      this.subirFotoYLuegoGuardar();
    } else {
      this.guardarDatos();
    }
  }
  // Sube la foto al backend y luego guarda los datos del formulario
  subirFotoYLuegoGuardar() {
    this.subiendoFoto = true;
    this.errorFoto = "";
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
        this.errorFoto = err?.error?.message || "No se pudo subir la foto. Intenta de nuevo.";
        this.cdr.detectChanges();
      }
    });
  }
  // EnvÃ­a los datos de texto al backend (PUT /api/perfil)
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
        this.mostrarModal = true;
        this.cdr.detectChanges();
        this.cargarPerfil();
      },
      error: (err) => {
        this.guardando = false;
        console.error("Error al guardar perfil:", err);
        alert(err?.error?.message || err?.message || "No se pudo actualizar el perfil.");
      }
    });
  }
  cerrarModal() {
    this.mostrarModal = false;
  }
  goBack() {
    if (this.modoEdicion)
      this.cancelarEdicion();
    else
      this.location.back();
  }
  onLogout() {
    this.servicioAuth.logout();
  }
  static {
    this.\u0275fac = function PerfilComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PerfilComponent)(\u0275\u0275directiveInject(ServicioAutenticacion), \u0275\u0275directiveInject(ServicioPerfil), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PerfilComponent, selectors: [["app-perfil"]], decls: 48, vars: 7, consts: [["fotoInput", ""], [1, "app-layout"], [1, "app-body"], [1, "sidebar"], [1, "sidebar-header"], ["src", "assets/logo-a365.jpg", "alt", "A365", "loading", "lazy", 1, "sidebar-logo"], [1, "sidebar-nav"], ["routerLink", "/dashboard/agente", 1, "nav-item"], ["routerLink", "/dashboard/tickets", 1, "nav-item"], ["routerLink", "/dashboard/incidencias", 1, "nav-item"], ["routerLink", "/dashboard/reportes", 1, "nav-item"], [1, "sidebar-spacer"], [1, "nav-item", "active"], ["routerLink", "/dashboard/configuracion", 1, "nav-item"], [1, "main-area"], [1, "topbar"], [1, "topbar-right"], [1, "user-chip"], [1, "user-text"], [1, "user-name"], [1, "user-code"], [1, "user-avatar"], ["alt", "avatar", "style", "width:100%;height:100%;object-fit:cover;border-radius:50%;", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26", 4, "ngIf"], [1, "btn-logout-top", 3, "click"], [1, "content"], [4, "ngIf"], [1, "inner-footer"], [1, "footer-icons"], ["href", "#", 1, "footer-icon"], ["class", "modal-overlay", 4, "ngIf"], ["alt", "avatar", 2, "width", "100%", "height", "100%", "object-fit", "cover", "border-radius", "50%", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "26", "height", "26"], ["d", "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"], [1, "page-header"], [1, "btn-back", 3, "click"], [1, "page-title"], [1, "panel"], [1, "perfil-layout"], [1, "perfil-foto-col"], [1, "foto-circle"], ["alt", "foto", "class", "foto-img-circle", 3, "src", 4, "ngIf"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "64", "height", "64", 4, "ngIf"], [1, "perfil-nombre"], [1, "perfil-datos-col"], [1, "form-group"], [1, "form-label"], [1, "input-readonly"], [1, "form-footer"], [1, "btn-editar", 3, "click"], ["alt", "foto", 1, "foto-img-circle", 3, "src"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "64", "height", "64"], [1, "userid-label"], [1, "form-layout"], [1, "foto-col"], [1, "foto-wrapper", 3, "click"], ["class", "foto-uploading", 4, "ngIf"], ["alt", "Foto de perfil", "class", "foto-img", 3, "src", 4, "ngIf"], ["class", "foto-placeholder", 4, "ngIf"], ["class", "foto-overlay", 4, "ngIf"], ["class", "error-foto", 4, "ngIf"], ["class", "foto-hint", 4, "ngIf"], ["type", "file", "accept", "image/jpeg,image/png,image/webp,image/gif", 2, "display", "none", 3, "change"], [1, "campos-col"], ["type", "text", "placeholder", "Grace Gal\xE1n", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "email", "placeholder", "mymail@gmail.com", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "15A, ABC Street, SomeCity", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+94 11 111 1111", 1, "form-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "12345678", "maxlength", "8", 1, "form-input", 3, "ngModelChange", "ngModel"], [1, "btn-guardar", 3, "click", "disabled"], [1, "foto-uploading"], [1, "spinner"], ["alt", "Foto de perfil", 1, "foto-img", 3, "src"], [1, "foto-placeholder"], ["viewBox", "0 0 24 24", "fill", "#9aaac5", "width", "48", "height", "48"], [1, "foto-overlay"], [1, "error-foto"], [1, "foto-hint"], [1, "modal-overlay"], [1, "modal-confirmacion"], [1, "modal-close-x", 3, "click"], [1, "modal-mensaje"]], template: function PerfilComponent_Template(rf, ctx) {
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
        \u0275\u0275template(30, PerfilComponent_img_30_Template, 1, 1, "img", 22)(31, PerfilComponent__svg_svg_31_Template, 2, 0, "svg", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "button", 24);
        \u0275\u0275listener("click", function PerfilComponent_Template_button_click_32_listener() {
          return ctx.onLogout();
        });
        \u0275\u0275text(33, "Cerrar sesi\xF3n");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(34, "div", 25);
        \u0275\u0275template(35, PerfilComponent_ng_container_35_Template, 38, 7, "ng-container", 26)(36, PerfilComponent_ng_container_36_Template, 46, 14, "ng-container", 26);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "footer", 27)(38, "span");
        \u0275\u0275text(39, "\xA9 2026 Impulsa A365 Todos los derechos reservados por Group16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 28)(41, "a", 29);
        \u0275\u0275text(42, "in");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "a", 29);
        \u0275\u0275text(44, "f");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "a", 29);
        \u0275\u0275text(46, "\u25CF");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(47, PerfilComponent_div_47_Template, 8, 0, "div", 30);
      }
      if (rf & 2) {
        \u0275\u0275advance(26);
        \u0275\u0275textInterpolate(ctx.usuario == null ? null : ctx.usuario.nombre);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.usuario == null ? null : ctx.usuario.codigo);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.fotoPreview);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.fotoPreview);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngIf", !ctx.modoEdicion);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.modoEdicion);
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", ctx.mostrarModal);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, RouterLink], styles: ['\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.app-layout[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f0f2f8;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 22px 0 18px 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  color: #1a2b5e;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n  font-weight: 300;\n  transition: color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  color: #e07b00;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.panel[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  padding: 28px 32px 32px;\n}\n.codigo-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0 0 24px 0;\n}\n.codigo-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n}\n.form-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 36px;\n  align-items: flex-start;\n}\n.foto-col[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.foto-wrapper[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 190px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  background: #e8eaf0;\n  border: 2px solid #dde2ee;\n}\n.foto-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.foto-placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8eaf0;\n}\n.foto-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(26, 43, 94, 0.75);\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.foto-wrapper[_ngcontent-%COMP%]:hover   .foto-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.campos-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-label[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #2d3a58;\n}\n.form-input[_ngcontent-%COMP%] {\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 10px 13px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: #1a2b5e;\n}\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: #b0bcd4;\n}\n.form-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 6px;\n}\n.btn-guardar[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 36px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-guardar[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-guardar[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.inner-footer[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon[_ngcontent-%COMP%]:hover {\n  background: #3a52a0;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .foto-col[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  .campos-col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.perfil-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 48px;\n  align-items: flex-start;\n}\n.perfil-foto-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.foto-circle[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #e8eaf0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #dde2ee;\n}\n.foto-img-circle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.perfil-nombre[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n  text-align: center;\n}\n.perfil-datos-col[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.input-readonly[_ngcontent-%COMP%] {\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 10px 13px;\n  font-size: 14px;\n  color: #2d3a58;\n  background: #f7f8fc;\n  min-height: 40px;\n}\n.btn-editar[_ngcontent-%COMP%] {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 36px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-editar[_ngcontent-%COMP%]:hover {\n  background: #253d85;\n}\n.userid-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0 0 22px 0;\n}\n.userid-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1a2b5e;\n}\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-confirmacion[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 40px 48px 36px;\n  position: relative;\n  min-width: 300px;\n  max-width: 380px;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.modal-close-x[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: #e74c3c;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  transition: background 0.15s;\n}\n.modal-close-x[_ngcontent-%COMP%]:hover {\n  background: #c0392b;\n}\n.modal-mensaje[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin: 0;\n  line-height: 1.5;\n}\n.foto-uploading[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8eaf0;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 4px solid #c8d0e4;\n  border-top-color: #1a2b5e;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-foto[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #e74c3c;\n  margin: 6px 0 0 0;\n  text-align: center;\n  max-width: 160px;\n  font-weight: 600;\n}\n.foto-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9aaac5;\n  margin: 6px 0 0 0;\n  text-align: center;\n  max-width: 160px;\n}\n/*# sourceMappingURL=perfil.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PerfilComponent, [{
    type: Component,
    args: [{ selector: "app-perfil", standalone: true, imports: [CommonModule, FormsModule, RouterLink], template: `<div class="app-layout">

  <div class="app-body">

    <!-- SIDEBAR -->
    <aside class="sidebar">
      <div class="sidebar-header">
        <img src="assets/logo-a365.jpg" alt="A365" class="sidebar-logo" loading="lazy" />
      </div>
      <nav class="sidebar-nav">
        <a class="nav-item" routerLink="/dashboard/agente">Inicio</a>
        <a class="nav-item" routerLink="/dashboard/tickets">Tickets</a>
        <a class="nav-item" routerLink="/dashboard/incidencias">Incidencias</a>
        <a class="nav-item" routerLink="/dashboard/reportes">Reportes</a>
      </nav>
      <div class="sidebar-spacer"></div>
      <nav class="sidebar-nav">
        <a class="nav-item active">Perfil</a>
        <a class="nav-item" routerLink="/dashboard/configuracion">Configuraci\xF3n</a>
      </nav>
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
              <img *ngIf="fotoPreview" [src]="fotoPreview" alt="avatar"
                   style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
              <svg *ngIf="!fotoPreview" viewBox="0 0 24 24" fill="#9aaac5" width="26" height="26">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>
          <button class="btn-logout-top" (click)="onLogout()">Cerrar sesi\xF3n</button>
        </div>
      </header>

      <div class="content">

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA LECTURA \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <ng-container *ngIf="!modoEdicion">

          <div class="page-header">
            <button class="btn-back" (click)="goBack()">&#8249;</button>
            <h2 class="page-title">Perfil</h2>
          </div>

          <div class="panel">
            <div class="perfil-layout">

              <!-- Foto + nombre -->
              <div class="perfil-foto-col">
                <div class="foto-circle">
                  <img *ngIf="fotoPreview" [src]="fotoPreview" alt="foto" class="foto-img-circle" />
                  <svg *ngIf="!fotoPreview" viewBox="0 0 24 24" fill="#9aaac5" width="64" height="64">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                  </svg>
                </div>
                <p class="perfil-nombre">{{ perfilBD?.nombreCompleto || usuario?.nombre }}</p>
              </div>

              <!-- Campos solo lectura -->
              <div class="perfil-datos-col">

                <div class="form-group">
                  <label class="form-label">Correo electr\xF3nico</label>
                  <div class="input-readonly">{{ perfilBD?.correo || '\u2014' }}</div>
                </div>

                <div class="form-group">
                  <label class="form-label">Direcci\xF3n</label>
                  <div class="input-readonly">{{ perfilBD?.direccion || '\u2014' }}</div>
                </div>

                <div class="form-group">
                  <label class="form-label">N\xFAmero de celular</label>
                  <div class="input-readonly">{{ perfilBD?.telefono || '\u2014' }}</div>
                </div>

                <div class="form-group">
                  <label class="form-label">N\xFAmero de DNI</label>
                  <div class="input-readonly">{{ perfilBD?.dni || '\u2014' }}</div>
                </div>

                <div class="form-footer">
                  <button class="btn-editar" (click)="activarEdicion()">Editar perfil</button>
                </div>

              </div>
            </div>
          </div>

        </ng-container>

        <!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 VISTA EDICI\xD3N \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
        <ng-container *ngIf="modoEdicion">

          <div class="page-header">
            <button class="btn-back" (click)="cancelarEdicion()">&#8249;</button>
            <h2 class="page-title">Editar informaci\xF3n del perfil</h2>
          </div>

          <div class="panel">
            <p class="userid-label">UserId - <strong>{{ usuario?.codigo }}</strong></p>

            <div class="form-layout">

              <!-- Foto editable -->
              <div class="foto-col">
                <div class="foto-wrapper" (click)="!subiendoFoto && fotoInput.click()">

                  <!-- Spinner mientras sube -->
                  <div *ngIf="subiendoFoto" class="foto-uploading">
                    <span class="spinner"></span>
                  </div>

                  <img *ngIf="fotoPreview && !subiendoFoto" [src]="fotoPreview" alt="Foto de perfil" class="foto-img" />
                  <div *ngIf="!fotoPreview && !subiendoFoto" class="foto-placeholder">
                    <svg viewBox="0 0 24 24" fill="#9aaac5" width="48" height="48">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                  </div>
                  <div class="foto-overlay" *ngIf="!subiendoFoto"><span>Cambiar foto</span></div>
                </div>

                <!-- Error de foto -->
                <p *ngIf="errorFoto" class="error-foto">{{ errorFoto }}</p>
                <p *ngIf="!errorFoto" class="foto-hint">JPEG, PNG, WEBP o GIF \xB7 M\xE1x. 5 MB</p>

                <input #fotoInput type="file" accept="image/jpeg,image/png,image/webp,image/gif"
                       style="display:none" (change)="onFotoChange($event)" />
              </div>

              <!-- Campos editables -->
              <div class="campos-col">

                <div class="form-group">
                  <label class="form-label">Nombre y apellido</label>
                  <input class="form-input" type="text" [(ngModel)]="formulario.nombreCompleto"
                         placeholder="Grace Gal\xE1n" />
                </div>

                <div class="form-group">
                  <label class="form-label">Correo electr\xF3nico</label>
                  <input class="form-input" type="email" [(ngModel)]="formulario.correo"
                         placeholder="mymail@gmail.com" />
                </div>

                <div class="form-group">
                  <label class="form-label">Direcci\xF3n</label>
                  <input class="form-input" type="text" [(ngModel)]="formulario.direccion"
                         placeholder="15A, ABC Street, SomeCity" />
                </div>

                <div class="form-group">
                  <label class="form-label">N\xFAmero de celular</label>
                  <input class="form-input" type="tel" [(ngModel)]="formulario.telefono"
                         placeholder="+94 11 111 1111" />
                </div>

                <div class="form-group">
                  <label class="form-label">N\xFAmero de DNI</label>
                  <input class="form-input" type="text" [(ngModel)]="formulario.dni"
                         placeholder="12345678" maxlength="8" />
                </div>

                <div class="form-footer">
                  <button class="btn-guardar" (click)="guardar()" [disabled]="guardando || subiendoFoto">
                    {{ subiendoFoto ? 'Subiendo foto...' : guardando ? 'Guardando...' : 'Guardar' }}
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
    <button class="modal-close-x" (click)="cerrarModal()">&#10005;</button>
    <p class="modal-mensaje">Tu perfil ha sido actualizado<br />correctamente.</p>
  </div>
</div>
`, styles: ['/* src/app/pages/perfil/perfil.component.css */\n* {\n  box-sizing: border-box;\n}\n.app-layout {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #ffffff;\n  font-family:\n    "Segoe UI",\n    Tahoma,\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n.app-body {\n  display: flex;\n  flex: 1;\n}\n.sidebar {\n  width: 230px;\n  min-height: 100vh;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n  border-right: 1px solid #e8eaf0;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.06);\n}\n.sidebar-header {\n  display: flex;\n  align-items: center;\n  padding: 0 18px;\n  height: 72px;\n  border-bottom: 1px solid #e0e4ef;\n}\n.sidebar-logo {\n  height: 46px;\n  width: auto;\n  object-fit: contain;\n}\n.sidebar-nav {\n  display: flex;\n  flex-direction: column;\n}\n.sidebar-spacer {\n  flex: 1;\n}\n.nav-item {\n  display: block;\n  padding: 15px 20px;\n  color: #1a2b5e;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  cursor: pointer;\n  background: #ffffff;\n  border: none;\n  border-bottom: 1px solid #e8eaf0;\n  text-align: left;\n  width: 100%;\n  transition: background 0.15s;\n}\n.nav-item:hover {\n  background: #f0f2f8;\n}\n.nav-item.active {\n  background: #1a2b5e;\n  color: #ffffff;\n  font-weight: 700;\n  border-bottom: none;\n}\n.main-area {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.topbar {\n  background: #ffffff;\n  border-bottom: 1px solid #e0e4ef;\n  padding: 0 26px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.user-chip {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.user-text {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  line-height: 1.3;\n}\n.user-name {\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #1a2b5e;\n}\n.user-code {\n  font-size: 10px;\n  color: #8a9ab8;\n}\n.user-avatar {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #dde3f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.btn-logout-top {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 9px 20px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-logout-top:hover {\n  background: #253d85;\n}\n.content {\n  flex: 1;\n  background: #f4f5f9;\n  overflow-y: auto;\n  padding: 0 30px 30px 30px;\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 22px 0 18px 0;\n}\n.btn-back {\n  background: transparent;\n  border: none;\n  font-size: 30px;\n  color: #1a2b5e;\n  cursor: pointer;\n  line-height: 1;\n  padding: 0 4px;\n  font-weight: 300;\n  transition: color 0.15s;\n}\n.btn-back:hover {\n  color: #e07b00;\n}\n.page-title {\n  font-size: 20px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n}\n.panel {\n  background: #ffffff;\n  border: 1.5px solid #dde2ee;\n  border-radius: 8px;\n  padding: 28px 32px 32px;\n}\n.codigo-label {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0 0 24px 0;\n}\n.codigo-label strong {\n  color: #1a2b5e;\n}\n.form-layout {\n  display: flex;\n  gap: 36px;\n  align-items: flex-start;\n}\n.foto-col {\n  flex-shrink: 0;\n}\n.foto-wrapper {\n  width: 160px;\n  height: 190px;\n  border-radius: 8px;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  background: #e8eaf0;\n  border: 2px solid #dde2ee;\n}\n.foto-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.foto-placeholder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8eaf0;\n}\n.foto-overlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(26, 43, 94, 0.75);\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n  padding: 8px;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.foto-wrapper:hover .foto-overlay {\n  opacity: 1;\n}\n.campos-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 14px;\n}\n.form-label {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: #2d3a58;\n}\n.form-input {\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 10px 13px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #2d3a58;\n  outline: none;\n  transition: border-color 0.15s;\n  background: #fff;\n}\n.form-input:focus {\n  border-color: #1a2b5e;\n}\n.form-input::placeholder {\n  color: #b0bcd4;\n}\n.form-footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 6px;\n}\n.btn-guardar {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 36px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-guardar:hover:not(:disabled) {\n  background: #253d85;\n}\n.btn-guardar:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.inner-footer {\n  background: #1a2b5e;\n  padding: 11px 26px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-shrink: 0;\n}\n.inner-footer span {\n  font-size: 11px;\n  color: #8fa8d4;\n}\n.footer-icons {\n  display: flex;\n  gap: 10px;\n}\n.footer-icon {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #2d4080;\n  color: #8fa8d4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background 0.15s;\n}\n.footer-icon:hover {\n  background: #3a52a0;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .form-layout {\n    flex-direction: column;\n    align-items: center;\n  }\n  .foto-col {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n  }\n  .campos-col {\n    width: 100%;\n  }\n}\n.perfil-layout {\n  display: flex;\n  gap: 48px;\n  align-items: flex-start;\n}\n.perfil-foto-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n.foto-circle {\n  width: 160px;\n  height: 160px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #e8eaf0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #dde2ee;\n}\n.foto-img-circle {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.perfil-nombre {\n  font-size: 16px;\n  font-weight: 700;\n  color: #1a2b5e;\n  margin: 0;\n  text-align: center;\n}\n.perfil-datos-col {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.input-readonly {\n  border: 1.5px solid #c8d0e4;\n  border-radius: 5px;\n  padding: 10px 13px;\n  font-size: 14px;\n  color: #2d3a58;\n  background: #f7f8fc;\n  min-height: 40px;\n}\n.btn-editar {\n  background: #1a2b5e;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  padding: 11px 36px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.2s;\n}\n.btn-editar:hover {\n  background: #253d85;\n}\n.userid-label {\n  font-size: 13px;\n  color: #6b7a99;\n  margin: 0 0 22px 0;\n}\n.userid-label strong {\n  color: #1a2b5e;\n}\n.modal-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.modal-confirmacion {\n  background: #ffffff;\n  border-radius: 10px;\n  padding: 40px 48px 36px;\n  position: relative;\n  min-width: 300px;\n  max-width: 380px;\n  text-align: center;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n}\n.modal-close-x {\n  position: absolute;\n  top: 12px;\n  right: 14px;\n  background: #e74c3c;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  transition: background 0.15s;\n}\n.modal-close-x:hover {\n  background: #c0392b;\n}\n.modal-mensaje {\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a2b5e;\n  margin: 0;\n  line-height: 1.5;\n}\n.foto-uploading {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e8eaf0;\n}\n.spinner {\n  width: 36px;\n  height: 36px;\n  border: 4px solid #c8d0e4;\n  border-top-color: #1a2b5e;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-foto {\n  font-size: 11.5px;\n  color: #e74c3c;\n  margin: 6px 0 0 0;\n  text-align: center;\n  max-width: 160px;\n  font-weight: 600;\n}\n.foto-hint {\n  font-size: 11px;\n  color: #9aaac5;\n  margin: 6px 0 0 0;\n  text-align: center;\n  max-width: 160px;\n}\n/*# sourceMappingURL=perfil.component.css.map */\n'] }]
  }], () => [{ type: ServicioAutenticacion }, { type: ServicioPerfil }, { type: Location }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PerfilComponent, { className: "PerfilComponent", filePath: "src/app/pages/perfil/perfil.component.ts", lineNumber: 24 });
})();
export {
  PerfilComponent
};
//# sourceMappingURL=chunk-OFS6NPCY.js.map
