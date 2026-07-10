import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { initAutoTheme, defaults } from './config';
import { NoCodeInputGuardService } from './services/no-code-input-guard.service';
import { DiaAssistantComponent } from './components/dia-assistant/dia-assistant.component';
import { filter, map, mergeMap } from 'rxjs/operators';
import { HeaderComponent } from './shared/header/header.component';

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
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  ngOnInit() {
    initAutoTheme(defaults.forceDark);
    this.noCodeGuard.start();
    this.updatePublicHeader(this.router.url);

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

        const ogImage = new URL('assets/images/og/dochek-og.jpg', this.document.baseURI).href;
        const canonicalUrl = `${this.document.location.origin}${this.document.location.pathname}`;

        this.titleService.setTitle(title);
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ property: 'og:type', content: 'website' });
        this.metaService.updateTag({ property: 'og:site_name', content: 'DOCHEK' });
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
        this.metaService.updateTag({ property: 'og:image', content: ogImage });
        this.metaService.updateTag({ property: 'og:image:width', content: '1200' });
        this.metaService.updateTag({ property: 'og:image:height', content: '630' });
        this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
        this.metaService.updateTag({ name: 'twitter:title', content: title });
        this.metaService.updateTag({ name: 'twitter:description', content: description });
        this.metaService.updateTag({ name: 'twitter:image', content: ogImage });
      });
  }

  private updatePublicHeader(url: string): void {
    const cleanUrl = (url || '').split('?')[0].toLowerCase();
    const publicHeaderPatterns = [
      /^\/$/,
      /^\/(homepage|about|features|catalog|blogs|contact|coursecatalog|sme-catalog|certifications|book-demo|privacy|terms|dochek-lms|smartlms|immersivelearning)$/,
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
