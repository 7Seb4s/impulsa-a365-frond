// Guard que protege las rutas privadas: verifica que el usuario tenga sesion activa
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ServicioAutenticacion } from '../services/servicio-autenticacion';

export const guardiaAutenticacion: CanActivateFn = () => {

  // Inyecta el servicio de autenticacion y el router
  const servicioAuth = inject(ServicioAutenticacion);
  const router       = inject(Router);

  // Si el token es valido y no ha expirado, permite el acceso
  if (servicioAuth.estaAutenticado()) {
    return true;
  }

  // Si no hay sesion, redirige al login y bloquea el acceso
  router.navigate(['/auth/login']);
  return false;
};
