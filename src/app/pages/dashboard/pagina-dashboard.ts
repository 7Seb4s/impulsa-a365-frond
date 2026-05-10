// Dashboard: muestra los datos del usuario en sesion y permite cerrar sesion
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

  // Carga los datos del usuario desde localStorage cuando se abre el dashboard
  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
  }

  // Cierra la sesion: borra el token y redirige al login
  onLogout(): void {
    this.servicioAuth.logout();
  }
}
