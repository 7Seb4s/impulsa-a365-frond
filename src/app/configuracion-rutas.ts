// configuracion-rutas.ts
// Define todas las rutas de la aplicación Angular.
// Las rutas privadas están protegidas por guardia-autenticacion.
import { Routes } from '@angular/router';
import { guardiaAutenticacion } from './core/guards/guardia-autenticacion';

export const routes: Routes = [

  // Ruta raíz → redirige al login
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },

  // ── RUTAS PÚBLICAS ─────────────────────────────────────────
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

  // ── RUTAS PRIVADAS (requieren token JWT válido) ─────────────
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

      // Vista del administrador/gerente (con gráficos)
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

  // Pantalla para ingresar la nueva contraseña (paso 3 recuperación)
  {
    path: 'restablecer',
    loadComponent: () =>
      import('./pages/restablecer/restablecer.component')
        .then(m => m.RestablecerComponent)
  },

  // Cualquier ruta desconocida → login
  { path: '**', redirectTo: 'auth/login' }
];