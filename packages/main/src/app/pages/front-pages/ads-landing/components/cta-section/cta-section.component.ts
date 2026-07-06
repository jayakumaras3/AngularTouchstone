import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../material.module';
import { FeatureCardsComponent } from '../feature-cards/feature-cards.component';
import { CtaSectionConfig } from '../../models/ads-landing.model';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, MaterialModule, FeatureCardsComponent],
  templateUrl: './cta-section.component.html',
  styleUrl: './cta-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaSectionComponent {
  @Input({ required: true }) config!: CtaSectionConfig;

  scrollToFragment(event: Event, fragment: string): void {
    event.preventDefault();
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
