import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Element, PRODUCT_DATA } from '../../apps/ecommerce/ecommerceData';
import { ProductDataService } from '../../../services/product-data.service';
import { ProductService } from '../../../services/apps/product/product.service';
import { NavService } from '../../../services/nav.service';
import { TablerIconsModule } from 'angular-tabler-icons';

type Course = { id: number; title: string; author?: string; duration?: string; product: Element };
type SubCategory = { name: string; courses: Course[] };
interface Category {
  title: string;
  count: number;
  subCategories: SubCategory[];
}

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FooterComponent, TablerIconsModule],
  templateUrl: './coursecatalog.component.html',
  styleUrls: ['./coursecatalog.component.scss']
})
export class CourseCatalogComponent {
  private allProducts: Element[] = [];

  categories: Category[] = [];
  totalCourses: number = 0;

  mainTitle = 'Course Catalog';
  subTitle = 'Micro Learning (500)';

  constructor(
    private readonly productDataService: ProductDataService,
    private readonly productService: ProductService,
    private readonly navService: NavService,
    private readonly router: Router,
    private readonly location: Location
  ) {}

  ngOnInit() {
    this.productDataService.getProducts({ bustCache: true }).subscribe((items: Element[]) => {
      this.allProducts = items;
      this.categories = this.mapProductDataToCatalog();
      this.totalCourses = this.allProducts.length;
    });
  }

  private mapProductDataToCatalog(): Category[] {
    const categoryMap = new Map<string, Category>();

   this.allProducts.forEach(product => {
  const skill = product.skill ?? 'Unknown Skill';   // <-- FIXED
  const subs = product.categories || [];

  if (!categoryMap.has(skill)) {
    categoryMap.set(skill, {
      title: skill,
      count: 0,
      subCategories: []
    });
  }

  const category = categoryMap.get(skill)!;
  category.count++;

  subs.forEach(sub => {
    let subCategory = category.subCategories.find(s => s.name === sub);

    if (!subCategory) {
      subCategory = { name: sub, courses: [] };
      category.subCategories.push(subCategory);
    }

    subCategory.courses.push({
      id: product.id,
      title: product.product_name,
      duration: product.duration ? product.duration + ' min' : undefined,
      product: product
    });
  });
});


    return Array.from(categoryMap.values());
  }

  /**
   * Navigate to course details page
   * Sets referrer URL for proper back navigation
   */
  navigateToCourseDetails(course: Course): void {
    // Store current URL as referrer for back navigation
    this.navService.setReferrerUrl(this.router.url);
    this.productService.setProduct(course.product);
    this.router.navigate(['/coursedetails']);
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
}
