import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageDetailsComponent } from './homepage-details/homepage-details.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CourseCatalogComponent } from './coursecatalog/coursecatalog.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { CorecatalogComponent } from './corecatalog/corecatalog.component';

import { PrivacyComponent } from './privacy/privacy.component';

import { ShopComponent } from '../apps/ecommerce/shop/shop.component';


export const FrontPagesRoutes: Routes = [
    
    {
        path: '',
        component: HomepageComponent, // acts as layout shell
        children: [
          { path: '', redirectTo: 'homepage', pathMatch: 'full' },
          { path: 'homepage', component: HomepageDetailsComponent }, // real homepage content
          { path: 'about', component: AboutUsComponent },
          { path:'blog',component:BlogComponent },
          { path: 'portfolio', component: PortfolioComponent },
          { path: 'pricing', component: PricingComponent  },
          { path: 'contact', component: ContactComponent },
          { path:'coursecatalog',component:CourseCatalogComponent},
           { path:'featurepage',component:FeaturePageComponent},
          { path:'corecatalog',component:CorecatalogComponent},
          { path: 'blog-details', component: BlogDetailsComponent },
           { path: 'catalog', component: ShopComponent }, 
           { path: 'privacy', component: PrivacyComponent },
        ],
      },
];