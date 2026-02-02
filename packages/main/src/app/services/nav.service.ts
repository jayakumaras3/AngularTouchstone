import { Injectable, signal } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavService {
  showClass: any = false;

  public currentUrl = signal<string | undefined>(undefined);
  public previousUrl = signal<string | undefined>(undefined);

  private readonly PREVIOUS_URL_KEY = 'navService_previousUrl';

  constructor(private router: Router) {
    // Restore previous URL from sessionStorage on init (for browser refresh)
    const storedPreviousUrl = sessionStorage.getItem(this.PREVIOUS_URL_KEY);
    if (storedPreviousUrl) {
      this.previousUrl.set(storedPreviousUrl);
    }

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Store current as previous before updating
        const current = this.currentUrl();
        if (current) {
          this.previousUrl.set(current);
          sessionStorage.setItem(this.PREVIOUS_URL_KEY, current);
        }
        this.currentUrl.set(event.urlAfterRedirects);
      }
    });
  }

  /**
   * Set a specific referrer URL (used when navigating to details page)
   * This ensures we know exactly which catalog page to return to
   */
  setReferrerUrl(url: string): void {
    this.previousUrl.set(url);
    sessionStorage.setItem(this.PREVIOUS_URL_KEY, url);
  }

  /**
   * Get the previous URL for back navigation
   * Returns the stored previous URL or a fallback
   */
  getPreviousUrl(fallback: string = '/catalog'): string {
    return this.previousUrl() || fallback;
  }

  /**
   * Clear the stored previous URL
   */
  clearPreviousUrl(): void {
    this.previousUrl.set(undefined);
    sessionStorage.removeItem(this.PREVIOUS_URL_KEY);
  }
}