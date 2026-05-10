// Define todas las rutas de la aplicacion Angular
import { Routes } from '@angular/router';
import { guardiaAutenticacion } from './core/guards/guardia-autenticacion';

export const routes: Routes = [

  // Redirige la ruta raiz al login
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  // Rutas publicas: no requieren sesion activa

  // Pantalla de login con codigo + contrasena y Google Sign-In
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./pages/login/pagina-login')
        .then(m => m.LoginComponent)
  },

  // Pantalla de recuperacion de contrasena por correo
  {
    path: 'recuperar',
    loadComponent: () =>
      import('./pages/recuperar/pagina-recuperar')
        .then(m => m.RecuperarComponent)
  },

  // Rutas privadas: requieren sesion activa (guardiaAutenticacion verifica el token)
  {
    path: 'dashboard',
    canActivate: [guardiaAutenticacion],
    children: [

      // Redirige /dashboard a /dashboard/agente por defecto
      { path: '', redirectTo: 'agente', pathMatch: 'full' },

      // Vista del empleado
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
