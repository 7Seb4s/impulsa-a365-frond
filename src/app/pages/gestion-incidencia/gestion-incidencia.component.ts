// pages/gestion-incidencias/gestion-incidencias.component.ts
// Lista de incidencias para el administrador con tabs y modal de detalle.
// Usa GET /api/admin/incidencias y GET /api/admin/incidencias/{id} del backend.
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioAdmin, IncidenciaAdminItem, IncidenciaAdminDetalle } from '../../core/services/servicio-admin';

type TabIncidencia = 'pendientes' | 'revision' | 'atendidas';

@Component({
  selector: 'app-gestion-incidencias',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-incidencias.component.html',
  styleUrls: ['./gestion-incidencias.component.css']
})
export class GestionIncidenciasComponent implements OnInit {

  usuario:   DatosUsuario | null = null;
  tabActivo: TabIncidencia = 'pendientes';
  cargando   = false;
  errorMsg   = '';

  // Datos reales del backend por tab
  pendientes: IncidenciaAdminItem[] = [];
  revision:   IncidenciaAdminItem[] = [];
  atendidas:  IncidenciaAdminItem[] = [];

  // Modal de detalle
  incidenciaSeleccionada: IncidenciaAdminItem   | null = null;
  detalleModal:           IncidenciaAdminDetalle | null = null;
  cargandoModal = false;

  constructor(
    private servicioAuth:  ServicioAutenticacion,
    private servicioAdmin: ServicioAdmin,
    private router:        Router,
    private cdr:           ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.cargarTab('pendientes');
  }

  // ── CARGA DE DATOS REALES ────────────────────────────────────

  // Carga las incidencias del tab activo desde el backend
  cargarTab(tab: TabIncidencia): void {
    this.tabActivo = tab;
    this.cargando  = true;
    this.errorMsg  = '';

    this.servicioAdmin.listarIncidencias(tab).subscribe({
      next: (datos) => {
        if (tab === 'pendientes') this.pendientes = datos;
        if (tab === 'revision')   this.revision   = datos;
        if (tab === 'atendidas')  this.atendidas  = datos;
        this.cargando = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.errorMsg = 'No se pudo cargar las incidencias.';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  cambiarTab(tab: TabIncidencia): void {
    // Solo recarga si el tab no tiene datos aún
    const yaHayDatos =
      (tab === 'pendientes' && this.pendientes.length > 0) ||
      (tab === 'revision'   && this.revision.length   > 0) ||
      (tab === 'atendidas'  && this.atendidas.length  > 0);

    this.tabActivo = tab;
    if (!yaHayDatos) this.cargarTab(tab);
  }

  get incidenciasActivas(): IncidenciaAdminItem[] {
    if (this.tabActivo === 'pendientes') return this.pendientes;
    if (this.tabActivo === 'revision')   return this.revision;
    return this.atendidas;
  }

  // ── MODAL ────────────────────────────────────────────────────

  // Abre el modal y carga el detalle completo desde el backend
  revisar(item: IncidenciaAdminItem): void {
    this.incidenciaSeleccionada = item;
    this.detalleModal           = null;
    this.cargandoModal          = true;

    this.servicioAdmin.obtenerDetalleIncidencia(item.id).subscribe({
      next: (detalle) => {
        this.detalleModal  = detalle;
        this.cargandoModal = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.cargandoModal = false;
        this.cdr.detectChanges();
      }
    });
  }

  cerrarModal(): void {
    this.incidenciaSeleccionada = null;
    this.detalleModal           = null;
  }

  // ── NAVEGACIÓN SIDEBAR ──────────────────────────────────────

  irAInicio(): void         { this.router.navigate(['/dashboard/admin']);               }
  irAGestionTickets(): void  { this.router.navigate(['/dashboard/gestion-tickets']);    }
  irACrearUsuario(): void   { this.router.navigate(['/dashboard/usuarios/crear']);      }
  irAPanelUsuarios(): void  { this.router.navigate(['/dashboard/panel-usuarios']);      }
  irAAdministracion(): void { this.router.navigate(['/dashboard/administracion']);      }

  onLogout(): void { this.servicioAuth.logout(); }
}
