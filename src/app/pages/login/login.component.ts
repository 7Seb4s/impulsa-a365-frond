import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  codigo: string = '';
  contrasena: string = '';
  recuerdame: boolean = false;
  mostrarContrasena: boolean = false;
  cargando: boolean = false;
  errorMsg: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin(): void {
    this.errorMsg = '';

    if (!this.codigo.trim() || !this.contrasena.trim()) {
      this.errorMsg = 'Por favor completa todos los campos.';
      return;
    }

    this.cargando = true;

    // Opción A: usando el AuthService con backend real
    // this.authService.login({ codigo: this.codigo, contrasena: this.contrasena }).subscribe({
    //   next: () => this.router.navigate(['/dashboard']),
    //   error: () => {
    //     this.cargando = false;
    //     this.errorMsg = 'Código o contraseña incorrectos.';
    //   }
    // });

    // Opción B: simulación para desarrollo (quitar cuando el backend esté listo)
    setTimeout(() => {
      this.cargando = false;
      if (this.codigo === 'admin' && this.contrasena === '1234') {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMsg = 'Código o contraseña incorrectos.';
      }
    }, 1500);
  }

  toggleContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  onOlvidaste(): void {
    // TODO: navegar a /recuperar-contrasena
    alert('Módulo de recuperación en desarrollo.');
  }
}
