
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './app/custom-overlay-container';

// Merge extra providers into appConfig
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ]
}).catch((err) => console.error(err));
