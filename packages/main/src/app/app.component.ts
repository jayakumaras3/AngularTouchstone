import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { initAutoTheme, defaults } from './config';
import { NoCodeInputGuardService } from './services/no-code-input-guard.service';
import { DiaAssistantComponent } from './components/dia-assistant/dia-assistant.component';
import { MaterialModule } from './material.module';
import { BrandingComponent } from './layouts/full/vertical/sidebar/branding.component';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MaterialModule, BrandingComponent, DiaAssistantComponent, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'TouchStone';
  showAuthHeader = false;
  isAuthHeaderScrolled = false;

  constructor(
    private readonly noCodeGuard: NoCodeInputGuardService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    initAutoTheme(defaults.forceDark);
    this.noCodeGuard.start();
    this.updateAuthHeader(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const navigation = event as NavigationEnd;
        this.updateAuthHeader(navigation.urlAfterRedirects);
        this.updateScrollState();
      });

    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    this.isAuthHeaderScrolled = scrollPosition > 0;
  }

  private updateAuthHeader(url: string): void {
    const cleanUrl = (url || '').split('?')[0].toLowerCase();
    const authHeaderPatterns = [
      /^\/login$/,
      /^\/forgotpassword$/,
      /^\/reset-password$/,
      /^\/authentication\/(login|forgotpassword|reset-password)$/,
      /^\/authentication\/boxed-(login|forgot-pwd|reset-password)$/,
    ];

    this.showAuthHeader = authHeaderPatterns.some((pattern) => pattern.test(cleanUrl));
  }
}
