import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../../footer/footer.component';
import { IconModule } from '../../../../icon/icon.module';
import { Certification } from '../certifications.model';
import { getConfigById, getTotalCourses } from '../certifications-data';
import { CertificationConfig, CertificationSignupState } from '../certifications.model';

@Component({
  selector: 'app-certification-details',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FooterComponent, IconModule],
  templateUrl: './certification-details.component.html',
  styleUrls: ['./certification-details.component.scss'],
})
export class CertificationDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  readonly certification = signal<Certification | null>(null);
  readonly config = signal<CertificationConfig | null>(null);
  readonly expandedPaths = signal<Set<number>>(new Set());

  readonly totalCourses = computed(() => {
    const cert = this.certification();
    return cert ? getTotalCourses(cert.learning_paths) : 0;
  });

  readonly isNotFound = signal(false);

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('certificateId');
    const certId = idParam ? parseInt(idParam, 10) : NaN;

    if (isNaN(certId)) {
      this.isNotFound.set(true);
      return;
    }

    this.http
      .get<Certification[]>('/assets/data/certificationsPage.json')
      .subscribe((data) => {
        const cert = data.find((c) => c.certificate_id === certId) ?? null;
        if (!cert) {
          this.isNotFound.set(true);
          return;
        }
        this.certification.set(cert);
        this.config.set(getConfigById(certId) ?? null);
      });
  }

  togglePath(lpId: number): void {
    this.expandedPaths.update((current) => {
      const next = new Set(current);
      if (next.has(lpId)) {
        next.delete(lpId);
      } else {
        next.add(lpId);
      }
      return next;
    });
  }

  isPathExpanded(lpId: number): boolean {
    return this.expandedPaths().has(lpId);
  }

  goBack(): void {
    this.router.navigate(['/certifications']);
  }

  signUpNow(): void {
    const cert = this.certification();
    const cfg = this.config();
    if (!cert || !cfg) return;

    const state: CertificationSignupState = {
      certificateId: cert.certificate_id,
      certificateName: cert.certificate_name,
      shortName: cfg.shortName,
      price: cfg.price,
      duration: cfg.duration,
      totalCourses: this.totalCourses(),
    };

    this.router.navigate(['/authentication/signup'], {
      state: { certification: state },
    });
  }
}
