import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  QueryList,
  ViewChildren,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { IconModule } from '../../icon/icon.module';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../front-pages/footer/footer.component';
import { noWhitespaceValidator, trimFormGroupValues } from '../../shared/validators/no-whitespace.validator';
import { emailFormatValidator } from '../../shared/validators/email.validator';
import { FieldErrorPipe } from '../../shared/validators/field-error.pipe';
import { RequiredFieldsNoteComponent } from '../../shared/required-fields-note/required-fields-note.component';

interface TrustStat {
  value: number;
  suffix: string;
  label: string;
  displayValue: string;
}

interface TrustBadge {
  icon: string;
  label: string;
}

interface FeatureBlock {
  accentWord: string;
  restOfTitle: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  reverse: boolean;
}

const TEAM_SIZE_OPTIONS = [
  { label: '1 - 49 learners', value: '1-49' },
  { label: '50 - 199 learners', value: '50-199' },
  { label: '200 - 999 learners', value: '200-999' },
  { label: '1,000+ learners', value: '1000+' },
];

@Component({
  selector: 'app-ads-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, IconModule, HeaderComponent, FooterComponent, RequiredFieldsNoteComponent, FieldErrorPipe],
  templateUrl: './ads-page.component.html',
  styleUrl: './ads-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdsPageComponent implements AfterViewInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);

  // 1. Hero
  readonly heroBadge = 'Enterprise LMS Platform';
  readonly heroHeading = 'The LMS built for companies that take learning seriously.';
  readonly heroSubheading = 'Train 10 people or 10,000. DOCHEK scales with your business.';
  readonly heroBenefits = ['Enterprise LMS', 'Microlearning Library', 'AR/VR Training'];
  readonly heroImage = 'assets/images/AdsPage/Untitled-4.png';
  readonly heroImageAlt = 'Two professionals reviewing training content together on a tablet';
  readonly heroCtaLabel = 'Request Demo →';

  // 2. Lead form
  readonly teamSizeOptions = TEAM_SIZE_OPTIONS;
  readonly leadForm: FormGroup = this.fb.group({
    fullName: ['', [Validators.required, noWhitespaceValidator()]],
    workEmail: ['', [Validators.required, emailFormatValidator(), noWhitespaceValidator()]],
    companyName: ['', [Validators.required, noWhitespaceValidator()]],
    teamSize: ['', Validators.required],
  });
  formSubmitted = false;

  // 3. Trust / social proof
  trustHeading = 'Trusted by teams building better learning experiences';
  trustStats: TrustStat[] = [
    { value: 10, suffix: '+', label: 'Learners', displayValue: '0' },
    { value: 500, suffix: '+', label: 'Courses', displayValue: '0' },
  ];
  readonly trustBadges: TrustBadge[] = [
    { icon: 'building-skyscraper', label: 'Enterprise Ready' },
    { icon: 'file-certificate', label: 'SCORM Compatible' },
  ];

  // 4. Problem / Solution
  readonly problemHeading = 'Traditional LMS';
  readonly problemPoints = ['Complex setup', 'Difficult management', 'Poor engagement'];
  readonly solutionHeading = 'DOCHEK';
  readonly solutionPoints = ['Simple deployment', 'Scalable learning', 'Better engagement'];

  // 5. Feature showcase
  readonly features: FeatureBlock[] = [
    {
      accentWord: 'Build',
      restOfTitle: 'Courses Faster',
      description: 'Create engaging courses quickly with powerful, intuitive authoring tools.',
      imageUrl: 'assets/images/AdsPage/Untitled-2.png',
      imageAlt: 'Professional building a course on a laptop in a co-working space',
      reverse: false,
    },
    {
      accentWord: 'Track',
      restOfTitle: 'Every Interaction',
      description: 'Understand learner activity with powerful, real-time analytics.',
      imageUrl: 'assets/images/AdsPage/Untitled-3.png',
      imageAlt: 'Learners using VR headsets during immersive training',
      reverse: true,
    },
    {
      accentWord: 'Keep',
      restOfTitle: 'Learners Engaged',
      description: 'Improve learning outcomes with immersive, gamified experiences.',
      imageUrl: 'assets/images/AdsPage/Untitled-1.png',
      imageAlt: 'Team collaborating and discussing learning progress together',
      reverse: false,
    },
  ];
  featureVisible: boolean[] = this.features.map(() => false);

  // 6. Scale Without Limits
  readonly scaleHeading = 'Scale Without Limits';
  readonly scaleFrom = '10 learners';
  readonly scaleTo = '10,000 learners';
  readonly scaleTagline = 'DOCHEK grows with you.';

  // 7. Final CTA
  readonly finalCtaHeading = "Ready to transform your organization's learning?";
  readonly finalCtaLabel = 'Book a Demo →';

  @ViewChildren('revealTarget') private revealTargets!: QueryList<ElementRef<HTMLElement>>;
  @ViewChildren('statTarget') private statTargets!: QueryList<ElementRef<HTMLElement>>;

  private featureObserver?: IntersectionObserver;
  private statsObserver?: IntersectionObserver;
  private featureFallbackTimer?: ReturnType<typeof setTimeout>;
  private statsFallbackTimer?: ReturnType<typeof setTimeout>;
  private countAnimated = false;

  ngAfterViewInit(): void {
    this.setupFeatureReveal();
    this.setupStatsCounter();
  }

  ngOnDestroy(): void {
    this.featureObserver?.disconnect();
    this.statsObserver?.disconnect();
    if (this.featureFallbackTimer) {
      clearTimeout(this.featureFallbackTimer);
    }
    if (this.statsFallbackTimer) {
      clearTimeout(this.statsFallbackTimer);
    }
  }

  submit(): void {
    trimFormGroupValues(this.leadForm);

    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }
    this.formSubmitted = true;
    this.leadForm.reset();
  }

  scrollToFragment(event: Event, fragment: string): void {
    event.preventDefault();
    document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private setupFeatureReveal(): void {
    const revealAll = () => {
      this.featureVisible = this.featureVisible.map(() => true);
      this.cdr.markForCheck();
    };

    if (typeof IntersectionObserver === 'undefined') {
      revealAll();
      return;
    }

    this.featureObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset['index']);
            if (!Number.isNaN(index)) {
              this.featureVisible[index] = true;
              this.cdr.markForCheck();
              this.featureObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { threshold: 0.2 }
    );

    this.revealTargets.forEach((ref) => this.featureObserver?.observe(ref.nativeElement));

    // Safety net: lead-gen content must never stay hidden even if the
    // observer never fires (e.g. tools that render without real scroll events).
    this.featureFallbackTimer = setTimeout(revealAll, 2500);
  }

  private setupStatsCounter(): void {
    const target = this.statTargets.first?.nativeElement;

    if (!target || typeof IntersectionObserver === 'undefined') {
      this.runCountUp();
      return;
    }

    this.statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          this.runCountUp();
          this.statsObserver?.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    this.statsObserver.observe(target);

    // Safety net: trust numbers are credibility-critical and must never be
    // stuck at 0 (e.g. if the observer never fires for some reason).
    this.statsFallbackTimer = setTimeout(() => this.runCountUp(), 2500);
  }

  private runCountUp(): void {
    if (this.countAnimated) {
      return;
    }
    this.countAnimated = true;
    if (this.statsFallbackTimer) {
      clearTimeout(this.statsFallbackTimer);
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.trustStats = this.trustStats.map((stat) => ({
        ...stat,
        displayValue: Math.round(stat.value * eased).toString(),
      }));
      this.cdr.markForCheck();

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }
}
