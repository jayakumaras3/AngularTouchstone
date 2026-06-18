import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  signal,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../../footer/footer.component';
import { IconModule } from '../../../../icon/icon.module';
import {
  Certification,
  CertificationCardViewModel,
  CertificationSignupState,
} from '../certifications.model';
import {
  CERTIFICATION_CONFIGS,
  getConfigById,
  getTotalCourses,
} from '../certifications-data';

@Component({
  selector: 'app-certifications-catalog',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FooterComponent, IconModule],
  templateUrl: './certifications-catalog.component.html',
  styleUrls: ['./certifications-catalog.component.scss'],
})
export class CertificationsCatalogComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  readonly cards = signal<CertificationCardViewModel[]>([]);

  readonly hasCards = computed(() => this.cards().length > 0);

  ngOnInit(): void {
    this.http
      .get<Certification[]>('assets/data/certificationsPage.json')
      .subscribe((data) => {
        const viewModels: CertificationCardViewModel[] = data
          .map((cert) => {
            const config = getConfigById(cert.certificate_id);
            if (!config) return null;
            return {
              certification: cert,
              config,
              totalCourses: getTotalCourses(cert.learning_paths),
            } as CertificationCardViewModel;
          })
          .filter((vm): vm is CertificationCardViewModel => vm !== null);
        this.cards.set(viewModels);
      });
  }

  viewDetails(certificateId: string): void {
    this.router.navigate(['/certification-details', certificateId]);
  }

  signUpNow(card: CertificationCardViewModel): void {
    const state: CertificationSignupState = {
      certificateId: card.certification.certificate_id,
      certificateName: card.certification.certificate_name,
      shortName: card.config.shortName,
      price: card.certification.price,
      duration: card.certification.duration,
      totalCourses: card.totalCourses,
    };
    this.router.navigate(['/authentication/signup'], {
      state: { certification: state },
    });
  }

  navigateBackToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  trackByCardId(_index: number, card: CertificationCardViewModel): string {
    return card.certification.certificate_id;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  getCertificationImage(shortName: string): string {
    const imageMap: Record<string, string> = {
      'CCD-Tech': 'assets/images/certification/Cloud,%20Cybersecurity%20and%20Digital%20Transformation.jpg',
      'HC-LC':    'assets/images/certification/Human-Centric%20Leadership%20and%20Inclusive%20Culture.jpg',
      'SDBPS':    'assets/images/certification/Self-Development%20and%20Business%20Power%20Skills.jpg',
      'WRWEI':    'assets/images/certification/Workplace%20Wellness.jpg',
      'CSMBL':    'assets/images/certification/Strategic%20Marketing%20and%20Brand%20Leadership.jpg',
      'CTLTE':    'assets/images/certification/Transformational%20Leadership.jpg',
      'CSFBA':    'assets/images/certification/Strategic%20Finance.jpg',
    };
    return imageMap[shortName] ?? '';
  }

  stripHtml(html: string): string {
    if (!html) return '';
    const div = document.createElement('div');
    div.innerHTML = html;
    return (div.textContent || div.innerText || '').replace(/\s+/g, ' ').trim();
  }
}
