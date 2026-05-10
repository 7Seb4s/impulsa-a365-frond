// Interceptor que agrega el header Authorization: Bearer <token> a cada peticion HTTP
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ServicioAutenticacion } from '../services/servicio-autenticacion';
import { environment } from '../../../environments/configuracion-entorno';

export const interceptorAutenticacion: HttpInterceptorFn = (peticion, siguiente) => {

  // Lee el token JWT guardado en localStorage
  const servicioAuth = inject(ServicioAutenticacion);
  const token = servicioAuth.obtenerToken();

  // Solo agrega el header si hay token y la peticion va al backend
  if (token && peticion.url.startsWith(environment.apiUrl)) {

    // Clona la peticion y le agrega el header Authorization
    // Las peticiones HTTP son inmutables, por eso hay que clonarlas
    const peticionConToken = peticion.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return siguiente(peticionConToken);
  }

  // Si no hay token o la peticion no es al backend, la deja pasar sin cambios
  return siguiente(peticion);
};
