
import { CommonModule } from '@angular/common';
import { Component, importProvidersFrom } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { pricingBanner, pricingPlans } from '../front-pagesData';
import { paymentLogos } from '../front-pagesData';

@Component({
  selector: 'app-page-pricing',
  imports: [MaterialModule, CommonModule],
  templateUrl: './page-pricing.component.html',
  styleUrl: './page-pricing.component.scss',
})
export class PagePricingComponent {
  banner = pricingBanner;
  plans = pricingPlans;
    paymentLogos = paymentLogos;
  selectedPlan: 'monthly' | 'yearly' = 'monthly';

  togglePlan(period: 'monthly' | 'yearly') {
    this.selectedPlan = period;
  }
}