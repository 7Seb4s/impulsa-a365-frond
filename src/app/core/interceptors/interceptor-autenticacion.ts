// core/interceptors/interceptor-autenticacion.ts
// Agrega el header "Authorization: Bearer <token>" a cada petición HTTP
// que vaya dirigida al backend (environment.apiUrl).
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ServicioAutenticacion } from '../services/servicio-autenticacion';
import { environment } from '../../../environments/environment';

export const interceptorAutenticacion: HttpInterceptorFn = (peticion, siguiente) => {
  const servicioAuth = inject(ServicioAutenticacion);
  const token        = servicioAuth.obtenerToken();

  if (token && peticion.url.startsWith(environment.apiUrl)) {
    peticion = peticion.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return siguiente(peticion);
};
