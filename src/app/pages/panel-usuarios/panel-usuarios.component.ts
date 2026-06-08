// pages/panel-usuarios/panel-usuarios.component.ts
// Panel de administración de usuarios: lista activos + historial de eliminados.
// Usa GET /api/usuarios y GET /api/usuarios/eliminados del backend.
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioAdmin, UsuarioPanelItem } from '../../core/services/servicio-admin';

@Component({
  selector: 'app-panel-usuarios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './panel-usuarios.component.html',
  styleUrls: ['./panel-usuarios.component.css']
})
export class PanelUsuariosComponent implements OnInit {

  usuario: DatosUsuario | null = null;

  tabActiva: 'activos' | 'eliminados' = 'activos';

  filtroPorNombre = '';
  filtroPorDni    = '';
  filtroPorCargo  = '';

  usuariosActivos:    UsuarioPanelItem[] = [];
  usuariosEliminados: UsuarioPanelItem[] = [];
  cargando = false;
  error    = '';

  paginaActual      = 1;
  usuariosPorPagina = 9;

  constructor(
    private servicioAuth:  ServicioAutenticacion,
    private servicioAdmin: ServicioAdmin,
    private router:        Router,
    private cdr:           ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.cargarActivos();
  }

  cargarActivos(): void {
    this.cargando = true;
    this.error    = '';
    this.servicioAdmin.listarUsuariosActivos().subscribe({
      next: (datos) => { this.usuariosActivos = datos; this.cargando = false; this.cdr.detectChanges(); },
      error: ()      => { this.error = 'No se pudo cargar los usuarios.'; this.cargando = false; this.cdr.detectChanges(); }
    });
  }

  cargarEliminados(): void {
    if (this.usuariosEliminados.length > 0) return;
    this.cargando = true;
    this.servicioAdmin.listarUsuariosEliminados().subscribe({
      next: (datos) => { this.usuariosEliminados = datos; this.cargando = false; this.cdr.detectChanges(); },
      error: ()      => { this.error = 'No se pudo cargar el historial.'; this.cargando = false; this.cdr.detectChanges(); }
    });
  }

  cambiarTab(tab: 'activos' | 'eliminados'): void {
    this.tabActiva    = tab;
    this.paginaActual = 1;
    this.limpiarFiltros();
    if (tab === 'eliminados') this.cargarEliminados();
  }

  get usuariosFiltrados(): UsuarioPanelItem[] {
    const lista = this.tabActiva === 'activos' ? this.usuariosActivos : this.usuariosEliminados;
    return lista.filter(u => {
      const okNombre = !this.filtroPorNombre || (u.nombre ?? '').toLowerCase().includes(this.filtroPorNombre.toLowerCase());
      const okDni    = !this.filtroPorDni    || (u.dni ?? '').includes(this.filtroPorDni);
      const okCargo  = !this.filtroPorCargo  || (u.cargo ?? '').toLowerCase().includes(this.filtroPorCargo.toLowerCase());
      return okNombre && okDni && okCargo;
    });
  }

  limpiarFiltros(): void { this.filtroPorNombre = ''; this.filtroPorDni = ''; this.filtroPorCargo = ''; }

  get totalPaginas(): number { return Math.ceil(this.usuariosFiltrados.length / this.usuariosPorPagina); }
  get paginasArray(): number[] { return Array.from({ length: this.totalPaginas }, (_, i) => i + 1); }
  get usuariosPaginados(): UsuarioPanelItem[] {
    const inicio = (this.paginaActual - 1) * this.usuariosPorPagina;
    return this.usuariosFiltrados.slice(inicio, inicio + this.usuariosPorPagina);
  }

  irAPagina(p: number): void { if (p >= 1 && p <= this.totalPaginas) this.paginaActual = p; }

  revisarUsuario(u: UsuarioPanelItem): void {
    this.router.navigate(['/dashboard/usuarios/crear'], { queryParams: { id: u.id, modo: 'revisar' } });
  }

  irAInicio(): void             { this.router.navigate(['/dashboard/admin']);               }
  irAGestionTickets(): void     { this.router.navigate(['/dashboard/gestion-tickets']);     }
  irAGestionIncidencias(): void { this.router.navigate(['/dashboard/gestion-incidencias']); }
  irACrearUsuario(): void       { this.router.navigate(['/dashboard/usuarios/crear']);      }
  irAUsuarios(): void           { this.router.navigate(['/dashboard/panel-usuarios']);      }
  irAAdministracion(): void     { this.router.navigate(['/dashboard/administracion']);      }
  onLogout(): void              { this.servicioAuth.logout();                               }
}