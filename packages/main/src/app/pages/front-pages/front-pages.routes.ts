import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomepageDetailsComponent } from './homepage-details/homepage-details.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { FeaturePageComponent } from './feature-page/feature-page.component';
import { CorecatalogComponent } from './corecatalog/corecatalog.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ShopComponent } from '../apps/ecommerce/shop/shop.component';
import { ProductDetailsComponent } from '../apps/ecommerce/product-details/product-details.component';
import { AppSideLoginComponent } from '../authentication/side-login/side-login.component';
import{AppSideForgotPasswordComponent} from '../authentication/side-forgot-password/side-forgot-password.component';
import{CourseCatalogComponent} from './coursecatalog/coursecatalog.component';
import { SmeCatalogComponent } from './sme-catalog/sme-catalog.component';
import { SmeCategoryComponent } from './sme-catalog/sme-category.component';


export const FrontPagesRoutes: Routes = [

  { path: 'login', component:AppSideLoginComponent },
  { path: 'forgotpassword', component:AppSideForgotPasswordComponent },

  {
    path: '',
    component: HomepageComponent, // acts as layout shell
    children: [
      { path: '', redirectTo: 'homepage', pathMatch: 'full' },
      { path: 'homepage', component: HomepageDetailsComponent }, // real homepage content
      { path: 'about', component: AboutUsComponent },
      { path: 'blogs', component: BlogComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'pricing', component: PricingComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'features', component: FeaturePageComponent },
      { path: 'corecatalog', component: CorecatalogComponent },      
      { path: 'coursecatalog', component: CourseCatalogComponent },
      { path: 'sme-catalog', component: SmeCatalogComponent },
      { path: 'sme-catalog/:category', component: SmeCategoryComponent },
      { path: 'blog-details', component: BlogDetailsComponent },
      { path: 'catalog', component: ShopComponent },
      { path: 'coursedetails/:courseId', component: ProductDetailsComponent },
      { path: 'coursedetails', component: ProductDetailsComponent }, // Fallback for backward compatibility
      { path: 'privacy', component: PrivacyComponent },
      { path: 'terms', component:TermsComponent },      
    ],
  },
];