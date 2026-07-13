import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { AdsHeroComponent } from '../ads-landing/components/hero/ads-hero.component';
import { CtaSectionComponent } from '../ads-landing/components/cta-section/cta-section.component';
import { FinalCtaSectionComponent } from '../ads-landing/components/final-cta-section/final-cta-section.component';
import { StatsComponent } from './components/stats/stats.component';
import { MICROLEARNING_PAGE } from './microlearning-data';

/**
 * Standalone microlearning landing page (/microlearning). Reuses the shared
 * ads-landing building blocks (hero, cta-section, final-cta-section) exactly
 * like the smartlms/immersivelearning pages, and adds one page-specific stats
 * band. Reached only via direct campaign URLs — intentionally not linked from
 * any nav, footer, or sitemap.
 */
@Component({
  selector: 'app-microlearning',
  standalone: true,
  imports: [
    FooterComponent,
    AdsHeroComponent,
    StatsComponent,
    CtaSectionComponent,
    FinalCtaSectionComponent,
  ],
  templateUrl: './microlearning.component.html',
  styleUrl: './microlearning.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MicrolearningComponent {
  readonly config = MICROLEARNING_PAGE;
}
