// pages/incidencias/incidencias.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ServicioAutenticacion, DatosUsuario } from '../../core/services/servicio-autenticacion';
import { ServicioIncidencias, IncidenciaItem } from '../../core/services/servicio-incidencias';

interface FormularioIncidencia {
  asunto: string;
  tipo: string;
  numeroTicket: number | null;
  contenido: string;
}

@Component({
  selector: 'app-incidencias',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent implements OnInit {

  usuario: DatosUsuario | null = null;
  mostrarFormulario = false;
  cargando = false;
  enviando = false;
  errorMsg = '';

  incidencias: IncidenciaItem[] = [];

  formulario: FormularioIncidencia = {
    asunto: '',
    tipo: '',
    numeroTicket: null,
    contenido: ''
  };

  constructor(
    private servicioAuth: ServicioAutenticacion,
    private servicioIncidencias: ServicioIncidencias
  ) {}

  ngOnInit(): void {
    this.usuario = this.servicioAuth.obtenerUsuario();
    this.cargarIncidencias();
  }

  // Trae todas las incidencias del usuario logueado desde el backend
  private cargarIncidencias(): void {
    this.cargando = true;
    this.errorMsg = '';
    this.servicioIncidencias.listar().subscribe({
      next: (items) => { this.incidencias = items; this.cargando = false; },
      error: () => { this.errorMsg = 'No se pudieron cargar las incidencias.'; this.cargando = false; }
    });
  }

  abrirFormulario(): void {
    this.resetFormulario();
    this.errorMsg = '';
    this.mostrarFormulario = true;
  }

  cerrarFormulario(): void {
    this.mostrarFormulario = false;
  }

  revisar(item: IncidenciaItem): void {
    // Por ahora solo log; cuando se haga la vista de detalle se navega
    console.log('Revisar incidencia:', item.id);
  }

  // Envia al backend el formulario "Nueva incidencia"
  enviarFormulario(): void {
    if (!this.formulario.asunto || !this.formulario.tipo || !this.formulario.contenido || !this.formulario.numeroTicket) {
      alert('Por favor completa los campos obligatorios.');
      return;
    }
    this.enviando = true;
    this.servicioIncidencias.crear({
      asunto: this.formulario.asunto,
      tipo: this.formulario.tipo,
      numeroTicket: this.formulario.numeroTicket,
      contenido: this.formulario.contenido
    }).subscribe({
      next: () => {
        this.enviando = false;
        this.mostrarFormulario = false;
        this.resetFormulario();
        this.cargarIncidencias();
      },
      error: (err) => {
        this.enviando = false;
        this.errorMsg = err?.error?.message || 'No se pudo crear la incidencia.';
        alert(this.errorMsg);
      }
    });
  }

  private resetFormulario(): void {
    this.formulario = { asunto: '', tipo: '', numeroTicket: null, contenido: '' };
  }

  onLogout(): void {
    this.servicioAuth.logout();
  }
}
