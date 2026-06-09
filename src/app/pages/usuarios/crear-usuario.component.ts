// pages/usuarios/crear-usuario.component.ts
// Formulario para crear un nuevo usuario con código autoincremental.
// Validaciones: nombre/apellido solo letras y espacios, DNI 8 dígitos, teléfono 9 dígitos.
import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/configuracion-entorno';

interface FormUsuario {
  nombreCompleto:    string;
  apellidoCompleto:  string;
  dni:               string;
  telefono:          string;
  correo:            string;
  rol:               string;
  contrasena:        string;
  confirmarContrasena: string;
}

interface Errores {
  nombreCompleto:    string;
  apellidoCompleto:  string;
  dni:               string;
  telefono:          string;
  correo:            string;
  rol:               string;
  contrasena:        string;
  confirmarContrasena: string;
  general:           string;
}

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  private readonly URL_API = environment.apiUrl;

  cargando          = false;
  exitoso           = false;
  codigoGenerado    = '';
  contrasenaUsada   = '';
  mostrarContrasena = false;
  mostrarConfirmar  = false;

  form: FormUsuario = {
    nombreCompleto:     '',
    apellidoCompleto:   '',
    dni:                '',
    telefono:           '',
    correo:             '',
    rol:                '',
    contrasena:         '',
    confirmarContrasena: ''
  };

  errores: Errores = {
    nombreCompleto:     '',
    apellidoCompleto:   '',
    dni:                '',
    telefono:           '',
    correo:             '',
    rol:                '',
    contrasena:         '',
    confirmarContrasena: '',
    general:            ''
  };

  constructor(
    private http:   HttpClient,
    private router: Router,
    private cdr:    ChangeDetectorRef
  ) {}

  // Solo permite letras y espacios en campos de texto
  soloLetras(event: KeyboardEvent): void {
    const char = event.key;
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]$/.test(char) && char !== 'Backspace' && char !== 'Delete' && char !== 'Tab' && char !== 'ArrowLeft' && char !== 'ArrowRight') {
      event.preventDefault();
    }
  }

  // Solo permite dígitos
  soloNumeros(event: KeyboardEvent): void {
    const char = event.key;
    if (!/^\d$/.test(char) && char !== 'Backspace' && char !== 'Delete' && char !== 'Tab' && char !== 'ArrowLeft' && char !== 'ArrowRight') {
      event.preventDefault();
    }
  }

  // Limitar longitud al pegar
  limitarPaste(event: ClipboardEvent, tipo: 'letras' | 'numeros', maxLen: number): void {
    event.preventDefault();
    const texto = event.clipboardData?.getData('text') ?? '';
    const filtrado = tipo === 'letras'
      ? texto.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]/g, '').slice(0, maxLen)
      : texto.replace(/\D/g, '').slice(0, maxLen);

    const input = event.target as HTMLInputElement;
    const inicio = input.selectionStart ?? 0;
    const fin    = input.selectionEnd ?? 0;
    const valor  = input.value;
    input.value  = valor.slice(0, inicio) + filtrado + valor.slice(fin);

    // Actualizar el ngModel manualmente
    input.dispatchEvent(new Event('input'));
  }

  private validar(): boolean {
    let ok = true;
    this.errores = { nombreCompleto: '', apellidoCompleto: '', dni: '', telefono: '', correo: '', rol: '', contrasena: '', confirmarContrasena: '', general: '' };

    const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]+$/;
    const emailRegex      = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!this.form.nombreCompleto.trim()) {
      this.errores.nombreCompleto = 'El nombre es obligatorio.'; ok = false;
    } else if (!soloLetrasRegex.test(this.form.nombreCompleto.trim())) {
      this.errores.nombreCompleto = 'Solo se permiten letras y espacios.'; ok = false;
    }

    if (!this.form.apellidoCompleto.trim()) {
      this.errores.apellidoCompleto = 'El apellido es obligatorio.'; ok = false;
    } else if (!soloLetrasRegex.test(this.form.apellidoCompleto.trim())) {
      this.errores.apellidoCompleto = 'Solo se permiten letras y espacios.'; ok = false;
    }

    if (!this.form.dni.trim()) {
      this.errores.dni = 'El DNI es obligatorio.'; ok = false;
    } else if (!/^\d{8}$/.test(this.form.dni.trim())) {
      this.errores.dni = 'El DNI debe tener exactamente 8 dígitos.'; ok = false;
    }

    if (!this.form.telefono.trim()) {
      this.errores.telefono = 'El teléfono es obligatorio.'; ok = false;
    } else if (!/^\d{9}$/.test(this.form.telefono.trim())) {
      this.errores.telefono = 'El teléfono debe tener exactamente 9 dígitos.'; ok = false;
    }

    if (!this.form.correo.trim()) {
      this.errores.correo = 'El correo es obligatorio.'; ok = false;
    } else if (!emailRegex.test(this.form.correo.trim())) {
      this.errores.correo = 'Ingresa un correo válido.'; ok = false;
    }

    if (!this.form.rol) {
      this.errores.rol = 'Selecciona un rol.'; ok = false;
    }

    if (!this.form.contrasena.trim()) {
      this.errores.contrasena = 'La contraseña es obligatoria.'; ok = false;
    } else if (this.form.contrasena.length < 8) {
      this.errores.contrasena = 'Mínimo 8 caracteres.'; ok = false;
    } else if (!/[A-Z]/.test(this.form.contrasena)) {
      this.errores.contrasena = 'Debe incluir al menos 1 letra mayúscula.'; ok = false;
    } else if (!/[0-9]/.test(this.form.contrasena)) {
      this.errores.contrasena = 'Debe incluir al menos 1 número.'; ok = false;
    } else if (!/[^a-zA-Z0-9]/.test(this.form.contrasena)) {
      this.errores.contrasena = 'Debe incluir al menos 1 carácter especial (!@#$...).'; ok = false;
    }

    if (!this.form.confirmarContrasena.trim()) {
      this.errores.confirmarContrasena = 'Confirma la contraseña.'; ok = false;
    } else if (this.form.contrasena !== this.form.confirmarContrasena) {
      this.errores.confirmarContrasena = 'Las contraseñas no coinciden.'; ok = false;
    }

    return ok;
  }

  onGuardar(): void {
    if (!this.validar()) return;

    this.cargando = true;
    this.contrasenaUsada = this.form.contrasena;

    this.http.post<any>(`${this.URL_API}/usuarios/crear`, {
      nombreCompleto:   this.form.nombreCompleto.trim(),
      apellidoCompleto: this.form.apellidoCompleto.trim(),
      dni:              this.form.dni.trim(),
      telefono:         this.form.telefono.trim(),
      correo:           this.form.correo.trim().toLowerCase(),
      rol:              this.form.rol,
      contrasena:       this.form.contrasena
    }).subscribe({
      next: (res) => {
        this.cargando       = false;
        this.exitoso        = true;
        this.codigoGenerado = res.codigo;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.cargando = false;
        if (err.status === 409) {
          this.errores.general = err.error?.message ?? 'El correo o DNI ya está registrado.';
        } else if (err.status === 400) {
          this.errores.general = 'Revisa los datos ingresados.';
        } else {
          this.errores.general = 'Error al crear el usuario. Intenta de nuevo.';
        }
        this.cdr.detectChanges();
      }
    });
  }

  onNuevoUsuario(): void {
    this.exitoso = false;
    this.codigoGenerado = '';
    this.form = { nombreCompleto: '', apellidoCompleto: '', dni: '', telefono: '', correo: '', rol: '', contrasena: '', confirmarContrasena: '' };
    this.mostrarContrasena = false;
    this.mostrarConfirmar  = false;
  }

  onVolver(): void {
    this.router.navigate(['/dashboard/admin']);
  }

  irAInicio(): void {
    this.router.navigate(['/dashboard/admin']);
  }

  irAGestionTickets(): void {
    this.router.navigate(['/dashboard/gestion-tickets']);
  }

  irAGestionIncidencias(): void {
    this.router.navigate(['/dashboard/gestion-incidencias']);
  }

  irAPanelUsuarios(): void {
    this.router.navigate(['/dashboard/panel-usuarios']);
  }

  irAAdministracion(): void {
    this.router.navigate(['/dashboard/administracion']);
  }
}