import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { MaterialModule } from '../../../material.module';
import { FooterComponent } from '../footer/footer.component';
import { AdsHeroComponent } from './components/hero/ads-hero.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { FeatureCardsComponent } from './components/feature-cards/feature-cards.component';
import { LeadFormComponent } from './components/lead-form/lead-form.component';
import { ADS_LANDING_PAGES } from './ads-landing-data';
import { AdsLandingPageConfig } from './models/ads-landing.model';

@Component({
  selector: 'app-ads-landing',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    FooterComponent,
    AdsHeroComponent,
    CtaSectionComponent,
    FeatureCardsComponent,
    LeadFormComponent,
  ],
  templateUrl: './ads-landing.component.html',
  styleUrl: './ads-landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsLandingComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  config!: AdsLandingPageConfig;

  ngOnInit(): void {
    const slug = (this.route.snapshot.data['landingSlug'] as string) ?? 'dochek-awareness';
    this.config = ADS_LANDING_PAGES[slug];
    this.applySeoTags();
  }

  private applySeoTags(): void {
    const seo = this.config.seo;
    const canonicalUrl = `${this.document.location.origin}${seo.canonicalPath}`;

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    if (seo.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: seo.ogImage });
      this.meta.updateTag({ name: 'twitter:image', content: seo.ogImage });
    }

    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);
  }
}
