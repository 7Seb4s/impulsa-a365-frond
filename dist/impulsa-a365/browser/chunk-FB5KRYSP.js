import {
  HttpClient,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ASNBX676.js";

// src/app/core/services/servicio-tecnico.ts
var ServicioTecnico = class _ServicioTecnico {
  constructor(http) {
    this.http = http;
    this.URL = `${environment.apiUrl}/tecnico`;
  }
  // â”€â”€ TICKETS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // GET /api/tecnico/tickets
  listarTickets() {
    return this.http.get(`${this.URL}/tickets`);
  }
  // PUT /api/tecnico/tickets/{id}/aprobar
  aprobarTicket(id) {
    return this.http.put(`${this.URL}/tickets/${id}/aprobar`, {});
  }
  // PUT /api/tecnico/tickets/{id}/rechazar
  rechazarTicket(id) {
    return this.http.put(`${this.URL}/tickets/${id}/rechazar`, {});
  }
  // â”€â”€ INCIDENCIAS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // GET /api/tecnico/incidencias
  listarIncidencias() {
    return this.http.get(`${this.URL}/incidencias`);
  }
  // PUT /api/tecnico/incidencias/{id}/asignar  (tambien sirve para reasignar)
  asignarIncidencia(id, derivacion) {
    return this.http.put(`${this.URL}/incidencias/${id}/asignar`, { derivacion });
  }
  // PUT /api/tecnico/incidencias/{id}/rechazar
  rechazarIncidencia(id) {
    return this.http.put(`${this.URL}/incidencias/${id}/rechazar`, {});
  }
  static {
    this.\u0275fac = function ServicioTecnico_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicioTecnico)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServicioTecnico, factory: _ServicioTecnico.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicioTecnico, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ServicioTecnico
};
//# sourceMappingURL=chunk-FB5KRYSP.js.map
