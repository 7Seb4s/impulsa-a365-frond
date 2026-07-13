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
  fotoUrl: string | null = null;
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
    this.servicioAuth.fotoUrl$.subscribe(url => { this.fotoUrl = url; this.cdr.detectChanges(); });
    this.cargarTab('pendientes');
  }

  // â”€â”€ CARGA DE DATOS REALES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
    // Solo recarga si el tab no tiene datos aÃºn
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

  // â”€â”€ MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
    this.modoEdicion            = false;
  }

  // â”€â”€ EDITAR / ELIMINAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  modoEdicion = false;
  guardando   = false;
  editForm = { asunto: '', tipo: '', contenido: '' };

  activarEdicion(): void {
    if (!this.detalleModal) return;
    this.editForm = {
      asunto:    (this.detalleModal as any).asunto || '',
      tipo:      this.detalleModal.tipo || '',
      contenido: this.detalleModal.contenido || ''
    };
    this.modoEdicion = true;
  }

  cancelarEdicion(): void { this.modoEdicion = false; }

  guardarEdicion(): void {
    if (!this.detalleModal) return;
    this.guardando = true;
    const id = this.detalleModal.id;
    this.servicioAdmin.editarIncidencia(id, this.editForm).subscribe({
      next: () => {
        this.guardando   = false;
        this.modoEdicion = false;
        this.servicioAdmin.obtenerDetalleIncidencia(id).subscribe(d => {
          this.detalleModal = d; this.cdr.detectChanges();
        });
        this.recargarLista();
        this.cdr.detectChanges();
      },
      error: () => { this.guardando = false; alert('No se pudo guardar la incidencia.'); }
    });
  }

  borrarIncidencia(): void {
    if (!this.detalleModal) return;
    if (!confirm('Â¿Seguro que deseas eliminar esta incidencia? Esta acciÃ³n no se puede deshacer.')) return;
    const id = this.detalleModal.id;
    this.servicioAdmin.eliminarIncidencia(id).subscribe({
      next: () => { this.cerrarModal(); this.recargarLista(); },
      error: () => alert('No se pudo eliminar la incidencia.')
    });
  }

  private recargarLista(): void {
    this.cargarTab(this.tabActivo);
  }

  // â”€â”€ HELPERS DE FORMATO PARA EL MODAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  // Inicial para el avatar (ej. "Grace GalÃ¡n" â†’ "G")
  inicial(txt: string | null | undefined): string {
    return (txt?.trim()?.charAt(0) || '?').toUpperCase();
  }

  // Estado de la incidencia â†’ texto + clase de badge
  estadoTexto(e: string | null | undefined): string {
    switch ((e || '').toUpperCase()) {
      case 'REPORTADA':   return 'Pendiente';
      case 'EN_REVISION': return 'Asignada';
      case 'RESUELTA':    return 'Resuelta';
      case 'RECHAZADA':   return 'Rechazada';
      default:            return e || 'â€”';
    }
  }
  estadoClase(e: string | null | undefined): string {
    switch ((e || '').toUpperCase()) {
      case 'EN_REVISION': return 'badge-revision';
      case 'RESUELTA':    return 'badge-aprobado';
      case 'RECHAZADA':   return 'badge-rechazado';
      default:            return 'badge-pendiente';
    }
  }

  // "2026-03-30T18:58:00" â†’ "Marzo 30, 2026"
  fechaLarga(iso: string | null | undefined): string {
    if (!iso) return 'â€”';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return 'â€”';
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    return `${meses[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  }

  // "2026-03-30T18:58:00" â†’ "30 de Marzo de 2026 a las 18:58"
  fechaHoraMeta(iso: string | null | undefined): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const hh = d.getHours().toString().padStart(2, '0');
    const mm = d.getMinutes().toString().padStart(2, '0');
    return `${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()} a las ${hh}:${mm}`;
  }

  // â”€â”€ NAVEGACIÃ“N SIDEBAR â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  irAInicio(): void         { this.router.navigate(['/dashboard/admin']);               }
  irAGestionTickets(): void  { this.router.navigate(['/dashboard/gestion-tickets']);    }
  irACrearUsuario(): void   { this.router.navigate(['/dashboard/usuarios/crear']);      }
  irAPanelUsuarios(): void  { this.router.navigate(['/dashboard/panel-usuarios']);      }
  irAAdministracion(): void { this.router.navigate(['/dashboard/administracion']);      }

  onLogout(): void { this.servicioAuth.logout(); }
}
