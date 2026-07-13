import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ASNBX676.js";

// src/app/core/services/servicio-tickets.ts
var ServicioTickets = class _ServicioTickets {
  constructor(http) {
    this.http = http;
    this.URL = `${environment.apiUrl}/tickets`;
  }
  // GET /api/tickets?tab=pendientes|completados|cancelados
  listar(tab) {
    const params = new HttpParams().set("tab", tab);
    return this.http.get(this.URL, { params });
  }
  // GET /api/tickets/{numero}
  obtenerDetalle(numero) {
    return this.http.get(`${this.URL}/${numero}`);
  }
  // POST /api/tickets â€” crea un nuevo ticket
  crear(datos) {
    return this.http.post(this.URL, datos);
  }
  static {
    this.\u0275fac = function ServicioTickets_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicioTickets)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServicioTickets, factory: _ServicioTickets.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicioTickets, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ServicioTickets
};
//# sourceMappingURL=chunk-GQNKRLFD.js.map
