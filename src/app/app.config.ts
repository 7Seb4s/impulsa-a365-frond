// app.config.ts
// Configuración principal de la aplicación Angular.
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './configuracion-rutas';
import { interceptorAutenticacion } from './core/interceptors/interceptor-autenticacion';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([interceptorAutenticacion])),
    provideAnimations()
  ]
};
