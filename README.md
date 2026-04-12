# Impulsa A365 — Sistema interno de gestión de tickets

Aplicativo web Angular para la gestión de atención al cliente de la empresa **Impulsa A365 S.A.C.**

---

## Estructura del proyecto

```
impulsa-a365/
├── src/
│   ├── app/
│   │   ├── guards/
│   │   │   └── auth.guard.ts            # Protege rutas privadas
│   │   ├── pages/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.css
│   │   │   └── dashboard/
│   │   │       ├── dashboard.component.ts
│   │   │       ├── dashboard.component.html
│   │   │       └── dashboard.component.css
│   │   ├── services/
│   │   │   └── auth.service.ts          # Lógica de autenticación
│   │   ├── app.component.ts             # Componente raíz
│   │   ├── app.config.ts                # Providers globales
│   │   └── app.routes.ts                # Rutas de la app
│   ├── environments/
│   │   ├── environment.ts               # Desarrollo
│   │   └── environment.production.ts    # Producción
│   ├── index.html
│   ├── main.ts
│   └── styles.css                       # Estilos globales
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.spec.json
```

---

## Requisitos previos

- **Node.js** v18 o superior → https://nodejs.org
- **Angular CLI** v17

---

## Instalación paso a paso

### 1. Instalar Angular CLI (si no lo tienes)
```bash
npm install -g @angular/cli
```

### 2. Entrar a la carpeta del proyecto
```bash
cd impulsa-a365
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Ejecutar en modo desarrollo
```bash
ng serve
```

Abre el navegador en: **http://localhost:4200**

---

## Credenciales de prueba (modo desarrollo)

| Campo     | Valor   |
|-----------|---------|
| Código    | `admin` |
| Contraseña| `1234`  |

> Estas credenciales son solo para desarrollo local. Cuando el backend esté listo, conectar el `AuthService` al endpoint real.

---

## Conectar con el backend real

En `src/app/pages/login/login.component.ts`, reemplaza el bloque `setTimeout` por:

```typescript
this.authService.login({ codigo: this.codigo, contrasena: this.contrasena }).subscribe({
  next: () => this.router.navigate(['/dashboard']),
  error: () => {
    this.cargando = false;
    this.errorMsg = 'Código o contraseña incorrectos.';
  }
});
```

Y en `src/environments/environment.ts` configura la URL del API:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'  // ← tu URL real aquí
};
```

---

## Construir para producción

```bash
ng build --configuration production
```

Los archivos compilados se generan en `dist/impulsa-a365/`.

---

## Integrantes del proyecto

- Galán Torres Grace Ariana
- Llagas Millones Angelo Jhair
- Marticorena Garcia Edward
- Palomino Cabrera Mc Stvn
- Ramos Somoza Fernando Sebastian
- Ventura Hernandez Erik Smit

**Docente:** Villalta Flores Claudia Yolanda  
**Curso:** Curso integrador I: Sistema Software — 2026
