import {
  BehaviorSubject,
  HttpClient,
  Injectable,
  Router,
  environment,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ASNBX676.js";

// src/app/core/services/servicio-autenticacion.ts
var ServicioAutenticacion = class _ServicioAutenticacion {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.URL_API = environment.apiUrl;
    this.CLAVE_TOKEN = "a365_token";
    this.CLAVE_USUARIO = "a365_usuario";
    this.CLAVE_FOTO = "a365_foto";
    this._fotoUrl$ = new BehaviorSubject(localStorage.getItem(this.CLAVE_FOTO));
    this.fotoUrl$ = this._fotoUrl$.asObservable();
  }
  // EnvÃ­a credenciales al backend y guarda token + datos en localStorage
  login(peticion) {
    return this.http.post(`${this.URL_API}/auth/login`, peticion).pipe(tap((res) => {
      localStorage.setItem(this.CLAVE_TOKEN, res.token);
      const usuario = {
        id: res.id,
        codigo: res.codigo,
        nombre: res.nombre,
        rol: res.rol
      };
      localStorage.setItem(this.CLAVE_USUARIO, JSON.stringify(usuario));
      if (res.fotoUrl) {
        const baseUrl = this.URL_API.replace("/api", "");
        const fotoCompleta = baseUrl + res.fotoUrl;
        localStorage.setItem(this.CLAVE_FOTO, fotoCompleta);
        this._fotoUrl$.next(fotoCompleta);
      }
    }));
  }
  // Borra sesiÃ³n y redirige al login
  logout() {
    localStorage.removeItem(this.CLAVE_TOKEN);
    localStorage.removeItem(this.CLAVE_USUARIO);
    localStorage.removeItem(this.CLAVE_FOTO);
    this._fotoUrl$.next(null);
    this.router.navigate(["/auth/login"]);
  }
  // Devuelve el token JWT guardado, o null si no hay sesiÃ³n
  obtenerToken() {
    return localStorage.getItem(this.CLAVE_TOKEN);
  }
  // Verifica que el token exista y no haya expirado
  estaAutenticado() {
    const token = this.obtenerToken();
    if (!token)
      return false;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return payload.exp * 1e3 > Date.now();
    } catch (e) {
      return false;
    }
  }
  // Devuelve los datos del usuario desde localStorage
  obtenerUsuario() {
    const datos = localStorage.getItem(this.CLAVE_USUARIO);
    return datos ? JSON.parse(datos) : null;
  }
  // Devuelve el rol del usuario ('EMPLEADO', 'ADMINISTRADOR', 'GERENTE')
  obtenerRol() {
    return this.obtenerUsuario()?.rol ?? null;
  }
  /** Actualiza la foto en localStorage y notifica a todos los suscriptores.
   *  Llamar desde ServicioPerfil despuÃ©s de subir/cargar la foto. */
  actualizarFoto(url) {
    if (url) {
      localStorage.setItem(this.CLAVE_FOTO, url);
    } else {
      localStorage.removeItem(this.CLAVE_FOTO);
    }
    this._fotoUrl$.next(url);
  }
  static {
    this.\u0275fac = function ServicioAutenticacion_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicioAutenticacion)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServicioAutenticacion, factory: _ServicioAutenticacion.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicioAutenticacion, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  ServicioAutenticacion
};
//# sourceMappingURL=chunk-II2C6W3K.js.map
