import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { AdsHeroComponent } from '../ads-landing/components/hero/ads-hero.component';
import { CtaSectionComponent } from '../ads-landing/components/cta-section/cta-section.component';
import { FinalCtaSectionComponent } from '../ads-landing/components/final-cta-section/final-cta-section.component';
import { SMARTLMS_PAGE } from './smartlms-data';

@Component({
  selector: 'app-smartlms',
  standalone: true,
  imports: [FooterComponent, AdsHeroComponent, CtaSectionComponent, FinalCtaSectionComponent],
  templateUrl: './smartlms.component.html',
  styleUrl: './smartlms.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartlmsComponent {
  readonly config = SMARTLMS_PAGE;
}
