// Punto de entrada de la aplicacion Angular
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Arranca la aplicacion con la configuracion de app.config.ts
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
