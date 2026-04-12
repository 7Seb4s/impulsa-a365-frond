// ─────────────────────────────────────────────────────────────
// configuracion-entorno.ts
// Define la URL base del backend Spring Boot.
// En desarrollo apunta a localhost:8081 (o el puerto que uses).
// ─────────────────────────────────────────────────────────────

export const environment = {
  production: false,

  // URL base del backend — cambia el puerto si usas 8080 u otro
  apiUrl: 'http://localhost:8081/api'
};
