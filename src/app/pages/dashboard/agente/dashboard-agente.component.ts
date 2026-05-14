// pages/dashboard/agente/dashboard-agente.component.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicioAutenticacion, DatosUsuario } from '../../../core/services/servicio-autenticacion';

@Component({
  selector: 'app-dashboard-agente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-agente.component.html',
  styleUrls: ['./dashboard-agente.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardAgenteComponent implements OnInit {

  usuario: DatosUsuario | null = null;

  constructor(private servicioAuth: ServicioAutenticacion) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}