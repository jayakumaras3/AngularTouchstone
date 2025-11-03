
import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { pricingBanner, pricingPlans } from '../front-pagesData';
import { paymentLogos } from '../front-pagesData';
import { PopupwindowComponent } from '../popupwindow/popupwindow.component';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-pricing',
  imports: [MaterialModule, CommonModule,PopupwindowComponent],
  templateUrl: './page-pricing.component.html',
  styleUrl: './page-pricing.component.scss',
})
export class PagePricingComponent {
   private router = inject(Router);
  readonly dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);
  private _snackBar = inject(MatSnackBar);
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 1199px)`);

  banner = pricingBanner;
  plans = pricingPlans;
    paymentLogos = paymentLogos;
  selectedPlan: 'monthly' | 'yearly' = 'monthly';

  togglePlan(period: 'monthly' | 'yearly') {
    this.selectedPlan = period;
  }
   openBookDemoDialog() {
     // First navigate to contact page
  this.router.navigate(['/contact']).then(() => {
    // After navigation, scroll to the contact heading
    setTimeout(() => {
      const heading = document.querySelector('.contact-heading') as HTMLElement;
      if (heading) {
        heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        heading.focus();
      }
    }, 300); // small delay ensures DOM is loaded
  });
  }
}