import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { initAutoTheme, defaults } from './config';
import { NoCodeInputGuardService } from './services/no-code-input-guard.service';
import { DiaAssistantComponent } from './components/dia-assistant/dia-assistant.component';
import { filter } from 'rxjs/operators';
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
    private readonly router: Router
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
