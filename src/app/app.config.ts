// Configuracion principal de la aplicacion Angular
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

// Archivo de rutas con los componentes de login, dashboard y recuperar
import { routes } from './configuracion-rutas';

// Interceptor que agrega el token JWT a cada peticion HTTP
import { interceptorAutenticacion } from './core/interceptors/interceptor-autenticacion';

export const appConfig: ApplicationConfig = {
  providers: [
    // Registra las rutas de la aplicacion
    provideRouter(routes),

    // Registra el cliente HTTP con el interceptor JWT
    // Sin esto las peticiones salen sin el header Authorization
    provideHttpClient(withInterceptors([interceptorAutenticacion])),

    // Habilita animaciones de Angular Material
    provideAnimations()
  ]
};
