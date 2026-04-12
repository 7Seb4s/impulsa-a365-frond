// ─────────────────────────────────────────────────────────────
// app.config.ts
// Configuración principal de la aplicación Angular.
// Aquí se registran los proveedores globales: rutas, HTTP,
// el interceptor JWT y las animaciones.
// ─────────────────────────────────────────────────────────────

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

// Archivo de rutas actualizado con los componentes nuevos
import { routes } from './configuracion-rutas';

// Interceptor que agrega el header Authorization: Bearer <token> a cada petición
import { interceptorAutenticacion } from './core/interceptors/interceptor-autenticacion';

export const appConfig: ApplicationConfig = {
  providers: [
    // Registrar las rutas de la aplicación
    provideRouter(routes),

    // Registrar el cliente HTTP con el interceptor JWT activo.
    // Sin withInterceptors, las peticiones al backend salen sin token
    // y el backend responde 401 Unauthorized aunque el usuario esté logueado.
    provideHttpClient(withInterceptors([interceptorAutenticacion])),

    // Habilitar animaciones de Angular Material y otros componentes
    provideAnimations()
  ]
};
