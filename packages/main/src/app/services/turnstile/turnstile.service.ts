import { Injectable, NgZone } from '@angular/core';
import { environment } from '../../../environments/environment';

export type TurnstileWidgetState = 'loading' | 'ready' | 'error';

interface TurnstileRenderOptions {
  sitekey: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact' | 'flexible';
  callback?: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
  'timeout-callback'?: () => void;
}

interface TurnstileApi {
  render: (container: HTMLElement, options: TurnstileRenderOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
  getResponse: (widgetId?: string) => string | undefined;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export interface TurnstileRenderHandlers {
  onToken: (token: string) => void;
  onExpired: () => void;
  onError: () => void;
  onReady: (widgetId: string) => void;
  onLoadError: () => void;
}

const MAX_WAIT_ATTEMPTS = 30;
const POLL_INTERVAL_MS = 200;

/**
 * Thin wrapper around the globally-loaded Cloudflare Turnstile api.js
 * (loaded once, explicit-render, in index.html). Centralizes the
 * "wait for window.turnstile to exist" polling so it isn't duplicated
 * across every form that embeds a widget.
 */
@Injectable({ providedIn: 'root' })
export class TurnstileService {
  readonly siteKey = environment.turnstileSiteKey;

  constructor(private readonly ngZone: NgZone) {}

  render(container: HTMLElement, handlers: TurnstileRenderHandlers): void {
    this.waitAndRender(container, handlers, 0);
  }

  reset(widgetId: string | null): void {
    if (widgetId !== null && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  }

  remove(widgetId: string | null): void {
    if (widgetId !== null && window.turnstile) {
      window.turnstile.remove(widgetId);
    }
  }

  private waitAndRender(container: HTMLElement, handlers: TurnstileRenderHandlers, attempts: number): void {
    const turnstile = window.turnstile;
    if (turnstile) {
      const widgetId = turnstile.render(container, {
        sitekey: this.siteKey,
        theme: 'auto',
        size: 'flexible',
        callback: (token: string) => this.ngZone.run(() => handlers.onToken(token)),
        'expired-callback': () => this.ngZone.run(() => handlers.onExpired()),
        'error-callback': () => this.ngZone.run(() => handlers.onError()),
        'timeout-callback': () => this.ngZone.run(() => handlers.onError()),
      });
      this.ngZone.run(() => handlers.onReady(widgetId));
      return;
    }

    if (attempts < MAX_WAIT_ATTEMPTS) {
      setTimeout(() => this.waitAndRender(container, handlers, attempts + 1), POLL_INTERVAL_MS);
    } else {
      // api.js never became available (network error / ad blocker) — surface
      // a message rather than leaving an empty container forever.
      this.ngZone.run(() => handlers.onLoadError());
    }
  }
}
