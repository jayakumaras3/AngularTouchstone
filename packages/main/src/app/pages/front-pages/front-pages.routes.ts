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
      {
        path: 'homepage',
        component: HomepageDetailsComponent,
        data: {
          title: 'Launch Courses in Minutes | Cloud-based LMS',
          description:
            'Create academic and corporate training programs, certifications, engaging gamification experiences, and track learning progress with no lags through our learning platform. Sign up today!',
        },
      }, // real homepage content
      {
        path: 'about',
        component: AboutUsComponent,
        data: {
          title: 'About DOCHEK: Built for Focus, not Noise',
          description:
            'Discover more about DOCHEK and the team behind the platform simplifying learning management for modern organizations.',
        },
      },
      { path: 'blogs', component: BlogComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'pricing', component: PricingComponent },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact DOCHEK | Cloud-based LMS',
          description:
            'Looking for a hassle-free way to manage learning? Contact DOCHEK to book a demo, explore features, and discuss scalable eLearning solutions for your team.',
        },
      },
      {
        path: 'features',
        component: FeaturePageComponent,
        data: {
          title: 'DOCHEK | Lightweight Learning Platform',
          description:
            'Create courses in minutes, manage learner tracking, certifications, gamification, and reporting with a lightweight learning management platform. Sign up today!',
        },
      },
      { path: 'corecatalog', component: CorecatalogComponent },      
      {
        path: 'coursecatalog',
        component: CourseCatalogComponent,
        data: {
          title: 'DOCHEK | Online Courses for Professional Development',
          description:
            'Explore leadership, business, compliance, cybersecurity, and soft skills training courses through DOCHEK\'s online learning catalog for modern organizations.',
        },
      },
      { path: 'sme-catalog', component: SmeCatalogComponent },
      { path: 'sme-catalog/:category', component: SmeCategoryComponent },
      { path: 'blog-details', component: BlogDetailsComponent },
      {
        path: 'catalog',
        component: ShopComponent,
        data: {
          title: 'DOCHEK | Online Courses for Professional Development',
          description:
            'Explore leadership, business, compliance, cybersecurity, and workplace learning courses through DOCHEK\'s online course catalog for modern organizations.',
        },
      },
      { path: 'coursedetails/:courseId', component: ProductDetailsComponent },
      { path: 'coursedetails', component: ProductDetailsComponent }, // Fallback for backward compatibility
      { path: 'privacy', component: PrivacyComponent },
      { path: 'terms', component:TermsComponent },      
    ],
  },
];