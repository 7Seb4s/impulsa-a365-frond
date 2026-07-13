import {
  HttpClient,
  HttpParams,
  Injectable,
  environment,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ASNBX676.js";

// src/app/core/services/servicio-admin.ts
var ServicioAdmin = class _ServicioAdmin {
  constructor(http) {
    this.http = http;
    this.URL = `${environment.apiUrl}/admin`;
  }
  // â”€â”€ GrÃ¡ficos del dashboard â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // GET /api/admin/dashboard/tickets-mes?anio=&mes=
  // Devuelve el resumen mensual para el reporte de tickets del dashboard
  obtenerResumenTicketsMes(anio, mes) {
    let params = new HttpParams();
    if (anio)
      params = params.set("anio", anio);
    if (mes)
      params = params.set("mes", mes);
    return this.http.get(`${this.URL}/dashboard/tickets-mes`, { params });
  }
  // GET /api/admin/dashboard/incidencias-semana
  // Devuelve el resumen semanal para el grÃ¡fico de torta de incidencias
  obtenerResumenIncidenciasSemana() {
    return this.http.get(`${this.URL}/dashboard/incidencias-semana`);
  }
  // GET /api/admin/dashboard/tickets-semana
  // Devuelve el resumen semanal para el grÃ¡fico de dona de tickets
  obtenerResumenTicketsSemana() {
    return this.http.get(`${this.URL}/dashboard/tickets-semana`);
  }
  // â”€â”€ Tablero kanban de tickets â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // GET /api/admin/tablero?columna=EN_REVISION&texto=
  // Devuelve los tickets de una columna con filtro de texto opcional
  obtenerColumnaTablero(columna, texto = "") {
    const params = new HttpParams().set("columna", columna).set("texto", texto);
    return this.http.get(`${this.URL}/tablero`, { params });
  }
  // GET /api/admin/tickets/{numero}/modal
  // Vista rÃ¡pida del ticket para el modal del tablero
  obtenerModalTicket(numero) {
    return this.http.get(`${this.URL}/tickets/${numero}/modal`);
  }
  // GET /api/admin/reportes
  // KPIs + historial de tickets cerrados
  obtenerReportes() {
    return this.http.get(`${this.URL}/reportes`);
  }
  // GET /api/admin/tickets/{numero}/adjuntos
  // Lista los archivos adjuntos reales de un ticket
  obtenerAdjuntos(numero) {
    return this.http.get(`${this.URL}/tickets/${numero}/adjuntos`);
  }
  // â”€â”€ ACCIONES: editar / eliminar / adjuntos â”€â”€
  editarTicket(numero, body) {
    return this.http.put(`${this.URL}/tickets/${numero}`, body);
  }
  eliminarTicket(numero) {
    return this.http.delete(`${this.URL}/tickets/${numero}`);
  }
  subirAdjunto(numero, archivo) {
    const fd = new FormData();
    fd.append("archivo", archivo);
    return this.http.post(`${this.URL}/tickets/${numero}/adjuntos`, fd);
  }
  eliminarAdjunto(numero, idAdjunto) {
    return this.http.delete(`${this.URL}/tickets/${numero}/adjuntos/${idAdjunto}`);
  }
  eliminarTodosAdjuntos(numero) {
    return this.http.delete(`${this.URL}/tickets/${numero}/adjuntos`);
  }
  editarIncidencia(id, body) {
    return this.http.put(`${this.URL}/incidencias/${id}`, body);
  }
  eliminarIncidencia(id) {
    return this.http.delete(`${this.URL}/incidencias/${id}`);
  }
  // PUT /api/admin/tickets/{numero}/mover
  // Mueve el ticket entre columnas del kanban
  moverTicket(numero, columna) {
    return this.http.put(`${this.URL}/tickets/${numero}/mover`, { columna });
  }
  // GET /api/admin/tickets/{numero}/mensajes
  // Hilo de mensajes de un ticket
  obtenerMensajes(numero) {
    return this.http.get(`${this.URL}/tickets/${numero}/mensajes`);
  }
  // POST /api/admin/tickets/{numero}/mensajes
  // EnvÃ­a un mensaje en el hilo de un ticket
  enviarMensaje(numero, contenido) {
    return this.http.post(`${this.URL}/tickets/${numero}/mensajes`, { contenido });
  }
  // â”€â”€ GestiÃ³n de incidencias â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // GET /api/admin/incidencias?tab=pendientes|revision|atendidas
  // Lista incidencias filtradas por tab
  listarIncidencias(tab) {
    const params = new HttpParams().set("tab", tab);
    return this.http.get(`${this.URL}/incidencias`, { params });
  }
  // GET /api/admin/incidencias/{id}
  // Detalle completo de una incidencia para el modal
  obtenerDetalleIncidencia(id) {
    return this.http.get(`${this.URL}/incidencias/${id}`);
  }
  // â”€â”€ GestiÃ³n de usuarios â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // GET /api/usuarios
  // Lista todos los usuarios activos
  listarUsuariosActivos() {
    return this.http.get(`${environment.apiUrl}/usuarios`);
  }
  // GET /api/usuarios/eliminados
  // Lista todos los usuarios desactivados (historial)
  listarUsuariosEliminados() {
    return this.http.get(`${environment.apiUrl}/usuarios/eliminados`);
  }
  // GET /api/admin/usuarios/{id}/revision
  // Perfil completo del usuario para la vista Revisar
  revisarUsuario(id) {
    return this.http.get(`${this.URL}/usuarios/${id}/revision`);
  }
  // PUT /api/admin/usuarios/{id}/desactivar
  // Desactiva (soft delete) un usuario
  desactivarUsuario(id) {
    return this.http.put(`${this.URL}/usuarios/${id}/desactivar`, {});
  }
  // PUT /api/admin/usuarios/{id}/activar
  // Reactiva un usuario desactivado
  activarUsuario(id) {
    return this.http.put(`${this.URL}/usuarios/${id}/activar`, {});
  }
  // PUT /api/admin/usuarios/{id}/rol
  // Cambia el rol de un usuario
  cambiarRol(id, rol) {
    return this.http.put(`${this.URL}/usuarios/${id}/rol`, { rol });
  }
  // â”€â”€ ExportaciÃ³n a Excel (Apache POI en el backend) â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // GET /api/exportar/usuarios-activos
  // Descarga el Excel de usuarios activos como Blob
  exportarUsuariosActivos() {
    return this.http.get(`${environment.apiUrl}/exportar/usuarios-activos`, {
      responseType: "blob"
    });
  }
  // GET /api/exportar/usuarios-eliminados
  // Descarga el Excel de usuarios eliminados como Blob
  exportarUsuariosEliminados() {
    return this.http.get(`${environment.apiUrl}/exportar/usuarios-eliminados`, {
      responseType: "blob"
    });
  }
  // GET /api/exportar/usuarios-activos-pdf
  exportarUsuariosActivosPdf() {
    return this.http.get(`${environment.apiUrl}/exportar/usuarios-activos-pdf`, {
      responseType: "blob"
    });
  }
  // GET /api/exportar/usuarios-eliminados-pdf
  exportarUsuariosEliminadosPdf() {
    return this.http.get(`${environment.apiUrl}/exportar/usuarios-eliminados-pdf`, {
      responseType: "blob"
    });
  }
  static {
    this.\u0275fac = function ServicioAdmin_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServicioAdmin)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServicioAdmin, factory: _ServicioAdmin.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicioAdmin, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ServicioAdmin
};
//# sourceMappingURL=chunk-T5B6REGZ.js.map
