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
import { forkJoin } from 'rxjs';
import { FooterComponent } from '../../footer/footer.component';
import { IconModule } from '../../../../icon/icon.module';
import { Certification } from '../certifications.model';
import { getConfigById, getTotalCourses } from '../certifications-data';
import { CertificationConfig, CertificationSignupState } from '../certifications.model';
import { AuthService } from 'src/app/services/login/auth.service';

interface CourseProduct {
  id: number;
  product_name: string;
  duration?: string;
}

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
  protected readonly authService = inject(AuthService);

  readonly certification = signal<Certification | null>(null);
  readonly config = signal<CertificationConfig | null>(null);
  readonly selectedLpId = signal<string | null>(null);
  readonly productMap = signal<Map<number, CourseProduct>>(new Map());

  readonly selectedLp = computed(() => {
    const cert = this.certification();
    const id = this.selectedLpId();
    if (!cert || id === null) return null;
    return cert.learning_paths.find(lp => lp.lp_id === id) ?? null;
  });

  readonly totalCourses = computed(() => {
    const cert = this.certification();
    return cert ? getTotalCourses(cert.learning_paths) : 0;
  });

  readonly isNotFound = signal(false);

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('certificateId');

    if (!idParam) {
      this.isNotFound.set(true);
      return;
    }

    forkJoin({
      certs: this.http.get<Certification[]>('assets/data/certificationsPage.json'),
      products: this.http.get<CourseProduct[]>('assets/data/product-data.json'),
    }).subscribe(({ certs, products }) => {
      const map = new Map<number, CourseProduct>();
      for (const p of products) {
        map.set(p.id, p);
      }
      this.productMap.set(map);

      const cert = certs.find((c) => c.certificate_id === idParam) ?? null;
      if (!cert) {
        this.isNotFound.set(true);
        return;
      }
      this.certification.set(cert);
      this.config.set(getConfigById(idParam) ?? null);
      this.selectedLpId.set(cert.learning_paths[0]?.lp_id ?? null);
    });
  }

  selectLp(lpId: string): void {
    this.selectedLpId.set(lpId);
  }

  getCourseDuration(courseId: string): string {
    return this.productMap().get(Number(courseId))?.duration ?? '';
  }

  navigateToCourse(courseId: string): void {
    if (!this.productMap().has(Number(courseId))) {
      console.warn(`[CertificationDetails] Course ID ${courseId} not found in product-data.json`);
      return;
    }
    const cert = this.certification();
    const cfg = this.config();
    this.router.navigate(['/coursedetails', Number(courseId)], {
      queryParams: { source: 'certification' },
      state: {
        source: 'certification',
        certificateId: cert?.certificate_id ?? null,
        certificateName: cert?.certificate_name ?? null,
        price: cert?.price ?? null,
        shortName: cfg?.shortName ?? null,
        duration: cert?.duration ?? null,
        totalCourses: this.totalCourses(),
      },
    });
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
      price: cert.price,
      duration: cert.duration,
      totalCourses: this.totalCourses(),
    };

    this.router.navigate(['/authentication/signup'], {
      state: { certification: state },
    });
  }
}
