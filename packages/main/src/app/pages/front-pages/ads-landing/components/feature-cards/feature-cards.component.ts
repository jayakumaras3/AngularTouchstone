import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../../../../../icon/icon.module';
import { FeatureCardsConfig } from '../../models/ads-landing.model';

@Component({
  selector: 'app-feature-cards',
  standalone: true,
  imports: [CommonModule, IconModule],
  templateUrl: './feature-cards.component.html',
  styleUrl: './feature-cards.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardsComponent {
  @Input({ required: true }) config!: FeatureCardsConfig;
}
