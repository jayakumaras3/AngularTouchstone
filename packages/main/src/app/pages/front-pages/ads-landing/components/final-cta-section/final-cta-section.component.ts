import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../material.module';
import { FeatureCardsComponent } from '../feature-cards/feature-cards.component';
import { LeadFormComponent } from '../lead-form/lead-form.component';
import { FinalCtaSectionConfig } from '../../models/ads-landing.model';

@Component({
  selector: 'app-final-cta-section',
  standalone: true,
  imports: [CommonModule, MaterialModule, FeatureCardsComponent, LeadFormComponent],
  templateUrl: './final-cta-section.component.html',
  styleUrl: './final-cta-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinalCtaSectionComponent {
  @Input({ required: true }) config!: FinalCtaSectionConfig;
  @Input() source = 'landing-page';
  @Input() campaign = '';
}
