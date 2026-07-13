// core/guards/guardia-autenticacion.ts
// Protege las rutas privadas verificando el token JWT.
// Redirige al login si no hay sesiÃ³n activa.
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ServicioAutenticacion } from '../services/servicio-autenticacion';

export const guardiaAutenticacion: CanActivateFn = () => {
  const servicioAuth = inject(ServicioAutenticacion);
  const router       = inject(Router);

  if (servicioAuth.estaAutenticado()) {
    return true;
  }

  router.navigate(['/auth/login']);
  return false;
};
