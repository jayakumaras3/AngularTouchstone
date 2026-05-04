import { MediaMatcher } from '@angular/cdk/layout';
import { Component, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrandingComponent } from 'src/app/layouts/full/vertical/sidebar/branding.component';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, BrandingComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMobileView = false;
  isScrolled = false;
  mobileNavOpen = false;

  private readonly mediaMatcher = inject(MediaMatcher);
  private readonly mobileQuery = this.mediaMatcher.matchMedia('(max-width: 1199px)');

  constructor() {
    this.isMobileView = this.mobileQuery.matches;
    this.mobileQuery.addEventListener('change', (event) => {
      this.isMobileView = event.matches;
      if (!this.isMobileView) {
        this.mobileNavOpen = false;
      }
    });
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    this.isScrolled = (window.scrollY || document.documentElement.scrollTop) > 0;
  }

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

  closeMobileNav(): void {
    this.mobileNavOpen = false;
  }
}
