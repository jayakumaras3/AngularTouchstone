import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../../material.module';
import { LeadFormComponent } from '../lead-form/lead-form.component';
import { HeroSectionConfig } from '../../models/ads-landing.model';

@Component({
  selector: 'app-ads-hero',
  standalone: true,
  imports: [CommonModule, MaterialModule, LeadFormComponent],
  templateUrl: './ads-hero.component.html',
  styleUrl: './ads-hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsHeroComponent {
  @Input({ required: true }) config!: HeroSectionConfig;

  scrollToFragment(event: Event, fragment: string): void {
    event.preventDefault();
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
