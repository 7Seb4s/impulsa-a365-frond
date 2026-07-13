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
      },

      // Panel de usuarios (admin) â† NUEVO
      {
        path: 'panel-usuarios',
        loadComponent: () =>
          import('./pages/panel-usuarios/panel-usuarios.component')
            .then(m => m.PanelUsuariosComponent)
      },

      // Vista de tickets
      {
        path: 'tickets',
        loadComponent: () =>
          import('./pages/tickets/tickets.component')
            .then(m => m.TicketsComponent)
      },

      // Vista de incidencias
      {
        path: 'incidencias',
        loadComponent: () =>
          import('./pages/incidencias/incidencias.component')
            .then(m => m.IncidenciasComponent)
      },

      // Vista de perfil
      {
        path: 'perfil',
        loadComponent: () =>
          import('./pages/perfil/perfil.component')
            .then(m => m.PerfilComponent)
      },

      // Vista de configuraciÃ³n
      {
        path: 'configuracion',
        loadComponent: () =>
          import('./pages/configuracion/configuracion.component')
            .then(m => m.ConfiguracionComponent)
      },

      // Vista de reportes
      {
        path: 'reportes',
        loadComponent: () =>
          import('./pages/reportes/reportes.component')
            .then(m => m.ReportesComponent)
      },

      // Vista de gestiÃ³n de tickets (admin)
      {
        path: 'gestion-tickets',
        loadComponent: () =>
          import('./pages/gestion-tickets/gestion-tickets.component')
            .then(m => m.GestionTicketsComponent)
      },

      // Vista de gestiÃ³n de incidencias (admin)
      {
        path: 'gestion-incidencias',
        loadComponent: () =>
          import('./pages/gestion-incidencia/gestion-incidencia.component')
            .then(m => m.GestionIncidenciasComponent)
      },

      // Vista de administraciÃ³n (admin) â† NUEVO
      {
        path: 'administracion',
        loadComponent: () =>
          import('./pages/administracion/administracion.component')
            .then(m => m.AdministracionComponent)
      },

      // â”€â”€ VISTA DEL TÃ‰CNICO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
      { path: 'tecnico', redirectTo: 'tecnico/tickets', pathMatch: 'full' },

      // Panel de tickets del tÃ©cnico (aprobar)
      {
        path: 'tecnico/tickets',
        loadComponent: () =>
          import('./pages/tecnico/tecnico-tickets.component')
            .then(m => m.TecnicoTicketsComponent)
      },

      // Panel de incidencias del tÃ©cnico (asignar / derivar)
      {
        path: 'tecnico/incidencias',
        loadComponent: () =>
          import('./pages/tecnico/tecnico-incidencias.component')
            .then(m => m.TecnicoIncidenciasComponent)
      },

      // Perfil del tÃ©cnico (con la barra lateral del tÃ©cnico)
      {
        path: 'tecnico/perfil',
        loadComponent: () =>
          import('./pages/tecnico/tecnico-perfil.component')
            .then(m => m.TecnicoPerfilComponent)
      }
    ]
  },

  // Pantalla para ingresar la nueva contraseÃ±a (paso 3 recuperaciÃ³n)
  {
    path: 'restablecer',
    loadComponent: () =>
      import('./pages/restablecer/restablecer.component')
        .then(m => m.RestablecerComponent)
  },

  // Cualquier ruta desconocida â†’ login
  { path: '**', redirectTo: 'auth/login' }
];