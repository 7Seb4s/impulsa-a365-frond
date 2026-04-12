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
  codigo             = '';
  contrasena         = '';
  recuerdame         = false;
  mostrarContrasena  = false;
  cargando           = false;
  errorMsg           = '';

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

    // Simulación de delay (quitar cuando haya backend real)
    setTimeout(() => {
      const ok = this.authService.login(this.codigo.trim(), this.contrasena);
      this.cargando = false;

      if (ok) {
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMsg = 'Código o contraseña incorrectos.';
      }
    }, 1000);
  }

  toggleContrasena(): void {
    this.mostrarContrasena = !this.mostrarContrasena;
  }

  onOlvidaste(): void {
    this.router.navigate(['/recuperar']);
  }
}
