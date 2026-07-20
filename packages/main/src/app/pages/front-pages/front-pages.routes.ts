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
import { CertificationsCatalogComponent } from './certifications/certifications-catalog/certifications-catalog.component';
import { CertificationDetailsComponent } from './certifications/certification-details/certification-details.component';


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
      {
        path: 'certifications',
        component: CertificationsCatalogComponent,
        data: {
          title: 'Professional Certification Programs | DOCHEK',
          description:
            'Explore industry-focused certification programs designed to accelerate careers and build professional credibility.',
        },
      },
      {
        path: 'certification-details/:certificateId',
        component: CertificationDetailsComponent,
        data: {
          title: 'Certification Details | DOCHEK',
          description: 'View certification details, learning paths, and courses.',
        },
      },
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
      {
        // Ads-only landing page — reached exclusively via direct campaign URLs
        // (LinkedIn/Facebook/Google Ads). Intentionally not linked from any nav,
        // footer, or sitemap.
        path: 'Dochek_awareness_207',
        loadComponent: () =>
          import('./ads-landing/ads-landing.component').then((m) => m.AdsLandingComponent),
        data: {
          landingSlug: 'dochek-awareness',
          title: 'DOCHEK | The LMS Built for Companies That Take Learning Seriously',
          description:
            "Whether you're training 10 people or 10,000, DOCHEK keeps your L&D running without the complexity. See how DOCHEK + 500 microlearning courses work for your team.",
        },
      },
      {
        // Dochek + microlearning bundle landing page — reached exclusively via
        // direct campaign URLs. Intentionally not linked from any nav, footer,
        // or sitemap.
        path: 'smartlms',
        loadComponent: () =>
          import('./smartlms/smartlms.component').then((m) => m.SmartlmsComponent),
        data: {
          title: 'DOCHEK Smart LMS + Microlearning Bundle | Touchstone',
          description:
            'Get the best of both worlds — a lightweight, scalable LMS and instant access to 500+ microlearning courses. See the bundle in action.',
        },
      },
      {
        // Microlearning library landing page — reached exclusively via direct
        // campaign URLs. Intentionally not linked from any nav, footer, or
        // sitemap.
        path: 'microlearning',
        loadComponent: () =>
          import('./microlearning/microlearning.component').then((m) => m.MicrolearningComponent),
        data: {
          title: 'Microlearning Library | 500+ Courses for Your Team | Touchstone',
          description:
            'The courses the best professionals in the world are taking — now available to your team. Get access to 500+ microlearning courses trusted by 50,000+ professionals at the world’s leading organisations.',
        },
      },
    ],
  },
];