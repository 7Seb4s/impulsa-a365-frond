// ─────────────────────────────────────────────────────────────
// guardia-autenticacion.ts
// Protege las rutas que requieren sesión iniciada.
// Si el usuario no está autenticado, lo redirige al login.
// Se aplica en el archivo de rutas con: canActivate: [guardiaAutenticacion]
// ─────────────────────────────────────────────────────────────

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { ServicioAutenticacion } from '../services/servicio-autenticacion';

export const guardiaAutenticacion: CanActivateFn = () => {

  // Inyectamos el servicio de autenticación y el router
  const servicioAuth = inject(ServicioAutenticacion);
  const router       = inject(Router);

  // Si el usuario tiene sesión activa con token válido, permitimos el acceso
  if (servicioAuth.estaAutenticado()) {
    return true;
  }

  // Si no hay sesión, redirigimos al login y bloqueamos el acceso
  router.navigate(['/auth/login']);
  return false;
};
