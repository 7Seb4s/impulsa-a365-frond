import {
  ServicioAutenticacion
} from "./chunk-II2C6W3K.js";
import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ASNBX676.js";

// src/app/core/services/servicio-perfil.ts
var BASE_URL = environment.apiUrl.replace(/\/api$/, "");
function resolverUrlFoto(fotoUrl) {
  if (!fotoUrl)
    return null;
  if (fotoUrl.startsWith("http"))
    return fotoUrl;
  return `${BASE_URL}${fotoUrl}`;
}
var ServicioPerfil = class _ServicioPerfil {
  constructor(http, servicioAuth) {
    this.http = http;
    this.servicioAuth = servicioAuth;
    this.URL = `${environment.apiUrl}/perfil`;
  }
  // GET /api/perfil â€” tambiÃ©n sincroniza la foto global al cargar
  obtener() {
    return this.http.get(this.URL).pipe(tap((perfil) => {
      const url = resolverUrlFoto(perfil.fotoUrl);
      this.servicioAuth.actualizarFoto(url);
    }));
  }
  // PUT /api/perfil
  actualizar(req) {
    return this.http.put(this.URL, req);
  }
  // PUT /api/perfil/contrasena
  cambiarContrasena(req) {
    return this.http.put(`${this.URL}/contrasena`, req);
  }
  // PUT /api/perfil/foto  (multipart/form-data)
  // IMPORTANTE: NO pongas Content-Type manualmente; el browser agrega el boundary solo
  subirFoto(file) {
    const formData = new FormData();
    formData.append("foto", file);
    return this.http.put(`${this.URL}/foto`, formData).pipe(tap((res) => {
      const url = resolverUrlFoto(res.fotoUrl);
      this.servicioAuth.actualizarFoto(url);
    }));
  }
  static {
    this.\u0275fac = function ServicioPerfil_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicioPerfil)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(ServicioAutenticacion));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServicioPerfil, factory: _ServicioPerfil.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicioPerfil, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: ServicioAutenticacion }], null);
})();

export {
  resolverUrlFoto,
  ServicioPerfil
};
//# sourceMappingURL=chunk-3OEW7LP2.js.map
