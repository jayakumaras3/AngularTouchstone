import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { initAutoTheme, defaults } from './config';
import { NoCodeInputGuardService } from './services/no-code-input-guard.service';
import { DiaAssistantComponent } from './components/dia-assistant/dia-assistant.component';
import { filter, map, mergeMap } from 'rxjs/operators';
import { HeaderComponent } from './shared/header/header.component';
import { AuthService } from './services/login/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, DiaAssistantComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'TouchStone';
  showPublicHeader = false;
  isAuthPublicPage = false;

  constructor(
    private readonly noCodeGuard: NoCodeInputGuardService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly titleService: Title,
    private readonly metaService: Meta,
    private readonly authService: AuthService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit() {
    initAutoTheme(defaults.forceDark);
    this.noCodeGuard.start();
    this.updatePublicHeader(this.router.url);

    // Single place the shared PHP-session auth state is (re)checked: once on
    // bootstrap (covers arriving here from a marketplace link), and again
    // whenever the tab regains visibility (covers logging out from PHP in
    // another tab/window and coming back). Deliberately NOT gated behind an
    // APP_INITIALIZER/resolver — this must never block first render, since a
    // slow or unreachable auth endpoint would otherwise leave the app blank
    // while waiting. AuthService.refreshAuthState() already can't throw or
    // hang (it has its own timeout + catchError); the try/catch here is a
    // second layer so a future change to that contract still can't take the
    // whole app down.
    this.initAuthStateSync();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navigation = event as NavigationEnd;
        this.updatePublicHeader(navigation.urlAfterRedirects);
      });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        const title = data['title'] || 'Launch Courses in Minutes | Cloud-based LMS';
        const description =
          data['description'] ||
          'Create academic and corporate training programs, certifications, engaging gamification experiences, and track learning progress with no lags through our learning platform. Sign up today!';

        const ogImage = new URL('assets/images/og/dochek-og-v2.jpg?v=2', this.document.baseURI).href;
        const canonicalUrl = `${this.document.location.origin}${this.document.location.pathname}`;

        this.titleService.setTitle(title);
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ property: 'og:type', content: 'website' });
        this.metaService.updateTag({ property: 'og:site_name', content: 'DOCHEK' });
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
        this.metaService.updateTag({ property: 'og:image', content: ogImage });
        this.metaService.updateTag({ property: 'og:image:secure_url', content: ogImage });
        this.metaService.updateTag({ property: 'og:image:width', content: '1200' });
        this.metaService.updateTag({ property: 'og:image:height', content: '630' });
        this.metaService.updateTag({ property: 'og:image:type', content: 'image/jpeg' });
        this.metaService.updateTag({
          property: 'og:image:alt',
          content: 'DOCHEK Cloud-based Learning Management System',
        });
        this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.metaService.updateTag({ name: 'twitter:title', content: title });
        this.metaService.updateTag({ name: 'twitter:description', content: description });
        this.metaService.updateTag({ name: 'twitter:image', content: ogImage });
      });
  }

  private initAuthStateSync(): void {
    try {
      this.authService.refreshAuthState().subscribe({
        error: (error) => console.error('Initial auth status check failed', error),
      });

      this.document.addEventListener('visibilitychange', () => {
        try {
          if (this.document.visibilityState === 'visible') {
            this.authService.refreshAuthState().subscribe({
              error: (error) => console.error('Auth status re-check failed', error),
            });
          }
        } catch (error) {
          console.error('Auth status re-check on visibilitychange failed', error);
        }
      });
    } catch (error) {
      console.error('Auth state sync failed to initialize; continuing in guest mode', error);
    }
  }

  private updatePublicHeader(url: string): void {
    const cleanUrl = (url || '').split('?')[0].toLowerCase();
    const publicHeaderPatterns = [
      /^\/$/,
      /^\/(homepage|about|features|catalog|blogs|contact|coursecatalog|sme-catalog|certifications|book-demo|privacy|terms|dochek_awareness_207|smartlms|microlearning)$/,
      /^\/sme-catalog\/.+/,
      /^\/certification-details(?:\/.+)?$/,
      /^\/coursedetails(?:\/.+)?$/,
      /^\/(login|forgotpassword)$/,
      /^\/authentication\/(login|forgotpassword|reset-password|signup)$/,
    ];

    this.showPublicHeader = publicHeaderPatterns.some((pattern) => pattern.test(cleanUrl));

    this.isAuthPublicPage = [
      /^\/(login|forgotpassword)$/,
      /^\/authentication\/(login|forgotpassword|signup)$/,
    ].some((pattern) => pattern.test(cleanUrl));
  }
}
