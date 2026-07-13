// configuracion-rutas.ts
// Define todas las rutas de la aplicaciÃ³n Angular.
// Las rutas privadas estÃ¡n protegidas por guardia-autenticacion.
import { Routes } from '@angular/router';
import { guardiaAutenticacion } from './core/guards/guardia-autenticacion';

export const routes: Routes = [

  // Ruta raÃ­z â†’ redirige al login
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // â”€â”€ RUTAS PÃšBLICAS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./pages/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'auth/recuperar',
    loadComponent: () =>
      import('./pages/recuperar/recuperar.component')
        .then(m => m.RecuperarComponent)
  },
  // Paso 3 del flujo de recuperaciÃ³n: ingresa la nueva contraseÃ±a
  {
    path: 'auth/restablecer',
    loadComponent: () =>
      import('./pages/restablecer/restablecer.component')
        .then(m => m.RestablecerComponent)
  },

  // â”€â”€ RUTAS PRIVADAS (requieren token JWT vÃ¡lido) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    path: 'dashboard',
    canActivate: [guardiaAutenticacion],
    children: [
      { path: '', redirectTo: 'agente', pathMatch: 'full' },

      // Vista del empleado/agente
      {
        path: 'agente',
        loadComponent: () =>
          import('./pages/dashboard/agente/dashboard-agente.component')
            .then(m => m.DashboardAgenteComponent)
      },

      // Vista del administrador/gerente (con grÃ¡ficos)
      {
        path: 'admin',
        loadComponent: () =>
          import('./pages/dashboard/admin/dashboard-admin.component')
            .then(m => m.DashboardAdminComponent)
      },

      // Formulario para crear un nuevo usuario (solo admin/gerente)
      {
        path: 'usuarios/crear',
        loadComponent: () =>
          import('./pages/usuarios/crear-usuario.component')
            .then(m => m.CrearUsuarioComponent)
      }
    ]
  },

  // Cualquier ruta desconocida â†’ login
  { path: '**', redirectTo: 'auth/login' }
];