import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface Usuario {
  id: number;
  codigo: string;
  nombre: string;
  rol: string;
}

// â”€â”€ Usuarios de prueba (reemplazar cuando haya backend) â”€â”€â”€â”€â”€â”€
const USUARIOS_PRUEBA: (Usuario & { password: string })[] = [
  { id: 1, codigo: 'admin',      password: '1234', nombre: 'Administrador', rol: 'ADMIN'      },
  { id: 2, codigo: 'supervisor', password: '1234', nombre: 'Supervisor',    rol: 'SUPERVISOR' },
  { id: 3, codigo: 'agente',     password: '1234', nombre: 'Agente',        rol: 'AGENTE'     }
];

@Injectable({ providedIn: 'root' })
export class AuthService {

  private readonly USUARIO_KEY = 'a365_usuario';

  constructor(private router: Router) {}

  // â”€â”€ LOGIN (simulado) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  login(codigo: string, password: string): boolean {
    const usuario = USUARIOS_PRUEBA.find(
      u => u.codigo === codigo && u.password === password
    );
    if (usuario) {
      const { password: _, ...datos } = usuario;
      localStorage.setItem(this.USUARIO_KEY, JSON.stringify(datos));
      return true;
    }
    return false;
  }

  // â”€â”€ LOGOUT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  logout(): void {
    localStorage.removeItem(this.USUARIO_KEY);
    this.router.navigate(['/login']);
  }

  // â”€â”€ HELPERS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.USUARIO_KEY);
  }

  getUsuario(): Usuario | null {
    const data = localStorage.getItem(this.USUARIO_KEY);
    return data ? JSON.parse(data) : null;
  }

  getRol(): string | null {
    return this.getUsuario()?.rol ?? null;
  }
}
