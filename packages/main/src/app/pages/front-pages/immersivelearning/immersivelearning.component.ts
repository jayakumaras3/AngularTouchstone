import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { AdsHeroComponent } from '../ads-landing/components/hero/ads-hero.component';
import { CtaSectionComponent } from '../ads-landing/components/cta-section/cta-section.component';
import { FinalCtaSectionComponent } from '../ads-landing/components/final-cta-section/final-cta-section.component';
import { IMMERSIVE_LEARNING_PAGE } from './immersivelearning-data';

@Component({
  selector: 'app-immersivelearning',
  standalone: true,
  imports: [FooterComponent, AdsHeroComponent, CtaSectionComponent, FinalCtaSectionComponent],
  templateUrl: './immersivelearning.component.html',
  styleUrl: './immersivelearning.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImmersivelearningComponent {
  readonly config = IMMERSIVE_LEARNING_PAGE;
}
