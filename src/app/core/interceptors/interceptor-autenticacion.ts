// ─────────────────────────────────────────────────────────────
// interceptor-autenticacion.ts
// Se ejecuta automáticamente en cada petición HTTP que hace Angular.
// Su trabajo es agregar el header Authorization: Bearer <token>
// para que el backend Spring Boot pueda validar al usuario.
// ─────────────────────────────────────────────────────────────

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ServicioAutenticacion } from '../services/servicio-autenticacion';
import { environment } from '../../../environments/configuracion-entorno';

export const interceptorAutenticacion: HttpInterceptorFn = (peticion, siguiente) => {

  // Obtenemos el servicio de autenticación para leer el token guardado
  const servicioAuth = inject(ServicioAutenticacion);
  const token = servicioAuth.obtenerToken();

  // Solo agregamos el header si:
  // 1. Existe un token guardado (hay sesión activa)
  // 2. La petición va hacia nuestro backend (según la URL del environment)
  if (token && peticion.url.startsWith(environment.apiUrl)) {

    // Clonamos la petición original y le agregamos el header Authorization.
    // Las peticiones HTTP son inmutables en Angular, por eso hay que clonarlas.
    const peticionConToken = peticion.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return siguiente(peticionConToken);
  }

  // Si no hay token o la petición no es al backend, la dejamos pasar sin cambios
  return siguiente(peticion);
};
