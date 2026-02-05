import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { SME_CATEGORIES, SmeCategory } from './sme-catalog-data';
import { IconModule } from '../../../icon/icon.module';

@Component({
  selector: 'app-sme-catalog',
  standalone: true,
  imports: [CommonModule, FooterComponent, IconModule],
  templateUrl: './sme-catalog.component.html',
  styleUrls: ['./sme-catalog.component.scss']
})
export class SmeCatalogComponent {
  categories: SmeCategory[] = SME_CATEGORIES;

  constructor(private router: Router, private location: Location) {}

  navigateToCategory(categoryId: string): void {
    this.router.navigate(['/sme-catalog', categoryId]);
  }

  /**
   * Navigate back to catalog with smart fallback logic
   * - Uses browser history if available (Location.back())
   * - Falls back to /catalog if history is not available
   * - Ensures clean navigation without duplication
   */
  navigateBackToCatalog(): void {
    // Check if we can use browser history
   /* if (window.history.length > 1) {
      this.location.back();
    } else {
      // Fallback to catalog route if no history
      this.router.navigate(['/catalog']);
    }*/
   this.router.navigate(['/catalog']);
  }

  getCourseCount(category: SmeCategory): number {
    return category.courses.length;
  }
}
