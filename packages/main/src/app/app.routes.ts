import { Routes } from '@angular/router';
import { ShopComponent } from './pages/apps/ecommerce/shop/shop.component';
import { ProductDetailsComponent } from './pages/apps/ecommerce/product-details/product-details.component';
import { MarketplaceLayoutComponent } from './layouts/marketplace-layout/marketplace-layout.component';

export const routes: Routes = [
  // Marketplace routes ONLY (embedded in PHP dashboard - no header/footer)
  {
    path: '',
    component: MarketplaceLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard-catalog',
        pathMatch: 'full'
      },
      {
        path: 'dashboard-catalog',
        component: ShopComponent,
      },
      {
        path: 'dashboard-course/:id',
        component: ProductDetailsComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard-catalog'
      }
    ],
  }
];
