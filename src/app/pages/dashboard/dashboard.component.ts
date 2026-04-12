import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuario: any = null;

  // Datos de ejemplo — reemplazar con llamadas al servicio real
  stats = [
    { label: 'Total tickets',  valor: 48, badge: 'Este mes',    clase: 'badge-blue'  },
    { label: 'Pendientes',     valor: 12, badge: 'En espera',   clase: 'badge-amber' },
    { label: 'En proceso',     valor:  9, badge: 'Activos',     clase: 'badge-blue'  },
    { label: 'Resueltos',      valor: 27, badge: 'Completados', clase: 'badge-green' }
  ];

  tickets = [
    { id: '#0048', descripcion: 'Error al acceder al sistema de facturación', categoria: 'Software',  prioridad: 'Alta',  estado: 'Pendiente',  fecha: '10/04/2026' },
    { id: '#0047', descripcion: 'Solicitud de nuevo equipo portátil',          categoria: 'Hardware',  prioridad: 'Media', estado: 'En proceso', fecha: '09/04/2026' },
    { id: '#0046', descripcion: 'Falla en impresora del área de logística',    categoria: 'Hardware',  prioridad: 'Alta',  estado: 'Pendiente',  fecha: '08/04/2026' },
    { id: '#0045', descripcion: 'Actualización de antivirus en equipos',       categoria: 'Software',  prioridad: 'Baja',  estado: 'Resuelto',   fecha: '07/04/2026' },
    { id: '#0044', descripcion: 'Creación de usuario en sistema interno',      categoria: 'Accesos',   prioridad: 'Media', estado: 'Resuelto',   fecha: '06/04/2026' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  getPrioridadClase(prioridad: string): string {
    const map: Record<string, string> = {
      'Alta':  'badge-red',
      'Media': 'badge-amber',
      'Baja':  'badge-green'
    };
    return map[prioridad] ?? 'badge-blue';
  }

  getEstadoClase(estado: string): string {
    const map: Record<string, string> = {
      'Pendiente':  'badge-amber',
      'En proceso': 'badge-blue',
      'Resuelto':   'badge-green'
    };
    return map[estado] ?? 'badge-blue';
  }
}
