// ─────────────────────────────────────────────────────────────
// configuracion-rutas.ts
// Define todas las rutas de la aplicación Angular.
// Las rutas del dashboard están protegidas por guardiaAutenticacion,
// lo que significa que solo usuarios con sesión activa pueden acceder.
// ─────────────────────────────────────────────────────────────

import { Routes } from '@angular/router';
import { guardiaAutenticacion } from './core/guards/guardia-autenticacion';

export const routes: Routes = [

  // Ruta raíz: redirige automáticamente al login
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  // ── Rutas públicas (no requieren sesión) ─────────────────────

  // Pantalla de inicio de sesión
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./pages/login/pagina-login')
        .then(m => m.LoginComponent)
  },

  // Pantalla de recuperación de contraseña
  {
    path: 'recuperar',
    loadComponent: () =>
      import('./pages/recuperar/pagina-recuperar')
        .then(m => m.RecuperarComponent)
  },

  // ── Rutas privadas (requieren sesión activa) ──────────────────
  // guardiaAutenticacion verifica el token JWT antes de permitir acceso
  {
    path: 'dashboard',
    canActivate: [guardiaAutenticacion],
    children: [

      // Redirige /dashboard a /dashboard/agente por defecto
      { path: '', redirectTo: 'agente', pathMatch: 'full' },

      // Vista del empleado / agente
      {
        path: 'agente',
        loadComponent: () =>
          import('./pages/dashboard/pagina-dashboard')
            .then(m => m.DashboardComponent)
      },

      // Vista del administrador o gerente
      {
        path: 'admin',
        loadComponent: () =>
          import('./pages/dashboard/pagina-dashboard')
            .then(m => m.DashboardComponent)
      }
    ]
  },

  // Cualquier ruta desconocida redirige al login
  { path: '**', redirectTo: 'auth/login' }
];
