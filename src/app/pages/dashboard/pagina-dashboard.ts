// -------------------------------------------------------------
// pagina-dashboard.ts
// Pantalla principal después del login.
// Muestra los datos del usuario en sesión.
// Los tickets y demás secciones se conectarán en una etapa posterior.
// -------------------------------------------------------------

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Datos del usuario guardados en localStorage al hacer login
  usuario: DatosUsuario | null = null;

  constructor(private servicioAuth: ServicioAutenticacion) {}

  // Se ejecuta al cargar el componente.
  // Lee los datos del usuario desde localStorage (ya los guardó el login).
  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
  }

  // Cierra la sesión: borra el token y redirige al login.
  onLogout(): void {
    this.servicioAuth.logout();
  }
}
