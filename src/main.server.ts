import { provideServerRendering } from '@angular/platform-server';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

export default function () {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering(),
      provideHttpClient(),
      provideRouter(routes),
    ],
  });
}
