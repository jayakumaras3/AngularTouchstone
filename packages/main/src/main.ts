
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CustomOverlayContainer } from './app/custom-overlay-container';

function syncClosedCaptionState(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('.cc-wrapper').forEach((wrapper) => {
    const text = wrapper.querySelector<HTMLElement>('.cc-text');
    if (!text) return;

    let placeholder = wrapper.querySelector<HTMLElement>('.cc-placeholder');
    if (!placeholder) {
      placeholder = document.createElement('div');
      placeholder.className = 'cc-placeholder';
      wrapper.appendChild(placeholder);
    }

    const hasCaption = text.textContent?.trim().length ? true : false;
    text.classList.toggle('hidden', !hasCaption);
    text.setAttribute('aria-hidden', String(!hasCaption));
    placeholder.setAttribute('aria-hidden', 'true');
    wrapper.classList.toggle('has-caption', hasCaption);
  });
}

function initClosedCaptionObserver(): void {
  if (typeof document === 'undefined' || !document.body) return;

  let frameId = 0;
  const scheduleSync = () => {
    cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(() => syncClosedCaptionState());
  };

  syncClosedCaptionState();

  new MutationObserver(scheduleSync).observe(document.body, {
    childList: true,
    characterData: true,
    subtree: true
  });
}

initClosedCaptionObserver();

// Merge extra providers into appConfig
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideAnimations(),
    { provide: OverlayContainer, useClass: CustomOverlayContainer }
  ]
}).catch((err) => console.error(err));
