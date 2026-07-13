import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatItem {
  /** Large emphasised figure, e.g. "500+" or "Fortune 500". */
  value: string;
  /** Bold label sitting under the figure, e.g. "Courses". */
  label: string;
  /** Supporting sentence describing the stat. */
  description: string;
}

export interface StatsConfig {
  id: string;
  eyebrow?: string;
  heading?: string;
  items: StatItem[];
}

/**
 * Trust / statistics band — renders the high-value figures (500+ courses,
 * 50,000+ professionals, Fortune 500 companies) as big-number cards. Kept
 * local to the microlearning page because no shared landing component gives
 * this large-figure emphasis; everything else on the page reuses the existing
 * ads-landing components.
 */
@Component({
  selector: 'app-microlearning-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  @Input({ required: true }) config!: StatsConfig;
}
