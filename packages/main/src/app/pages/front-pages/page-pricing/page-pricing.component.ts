
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
  openBookDemoDialog() { const dialogRef = this.dialog.open(PopupwindowComponent, { width: '500px', disableClose: true, autoFocus: true, }); dialogRef.afterClosed().subscribe((result) => { if (result) { console.log('Form submitted:', result); } }); }
  
}