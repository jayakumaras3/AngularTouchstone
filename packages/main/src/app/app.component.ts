import { Component, OnInit } from '@angular/core';
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
    private readonly metaService: Meta
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

        this.titleService.setTitle(title);
        this.metaService.updateTag({ name: 'description', content: description });
        this.metaService.updateTag({ property: 'og:title', content: title });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.metaService.updateTag({ name: 'twitter:title', content: title });
        this.metaService.updateTag({ name: 'twitter:description', content: description });
      });
  }

  private updatePublicHeader(url: string): void {
    const cleanUrl = (url || '').split('?')[0].toLowerCase();
    const publicHeaderPatterns = [
      /^\/$/,
      /^\/(homepage|about|features|catalog|blogs|contact|coursecatalog|sme-catalog|book-demo)$/,
      /^\/sme-catalog\/.+/,
      /^\/coursedetails(?:\/.+)?$/,
      /^\/(login|forgotpassword)$/,
      /^\/authentication\/(login|forgotpassword|reset-password)$/,
    ];

    this.showPublicHeader = publicHeaderPatterns.some((pattern) => pattern.test(cleanUrl));

    this.isAuthPublicPage = [
      /^\/(login|forgotpassword)$/,
      /^\/authentication\/(login|forgotpassword)$/,
    ].some((pattern) => pattern.test(cleanUrl));
  }
}
