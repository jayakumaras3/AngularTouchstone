import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { IconModule } from '../../../icon/icon.module';
import { 
  SME_CATEGORIES, 
  SmeCategory, 
  SmeCourse, 
  getSmeCategoryById, 
  getCategoryGroups, 
  getCoursesByGroup 
} from './sme-catalog-data';
import { ProductDataService } from '../../../services/product-data.service';
import { ProductService } from '../../../services/apps/product/product.service';
import { NavService } from '../../../services/nav.service';
import { Element } from '../../apps/ecommerce/ecommerceData';

interface GroupedCourses {
  groupName: string;
  courses: SmeCourse[];
}

@Component({
  selector: 'app-sme-category',
  standalone: true,
  imports: [CommonModule, FooterComponent, IconModule],
  templateUrl: './sme-category.component.html',
  styleUrls: ['./sme-category.component.scss']
})
export class SmeCategoryComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productDataService = inject(ProductDataService);
  private productService = inject(ProductService);
  private navService = inject(NavService);

  category: SmeCategory | undefined;
  groupedCourses: GroupedCourses[] = [];
  allProducts: Element[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('category');
      if (categoryId) {
        this.category = getSmeCategoryById(categoryId);
        if (this.category) {
          this.loadGroupedCourses();
          this.loadProducts();
        } else {
          // Category not found, redirect to SME catalog
          this.router.navigate(['/sme-catalog']);
        }
      }
    });
  }

  private loadGroupedCourses(): void {
    if (!this.category) return;
    
    const groups = getCategoryGroups(this.category);
    this.groupedCourses = groups.map(groupName => ({
      groupName,
      courses: getCoursesByGroup(this.category!, groupName)
    }));
  }

  private loadProducts(): void {
    this.productDataService.getProducts({ bustCache: false }).subscribe({
      next: (items: Element[]) => {
        this.allProducts = items;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  navigateBack(): void {
    this.router.navigate(['/sme-catalog']);
  }

  navigateToCourse(course: SmeCourse): void {
    // Find matching product by title (fuzzy match)
    const matchedProduct = this.findMatchingProduct(course.title);
    
    if (matchedProduct) {
      // Store current URL for back navigation
      const currentUrl = this.router.url;
      this.navService.setReferrerUrl(currentUrl);
      this.productService.setProduct(matchedProduct);
      
      // Pass the previous URL via navigation state for reliable back navigation
      this.router.navigate(['/coursedetails', matchedProduct.id], {
        queryParams: { source: 'sme-catalog' },
        state: { previousUrl: currentUrl }
      });
    } else {
      // If no exact match found, still try to navigate
      console.warn(`No matching product found for: ${course.title}`);
    }
  }

  private findMatchingProduct(courseTitle: string): Element | undefined {
    const normalizedTitle = this.normalizeString(courseTitle);
    
    // Try exact match first
    let match = this.allProducts.find(p => 
      this.normalizeString(p.product_name) === normalizedTitle
    );
    
    if (match) return match;
    
    // Try partial match (course title contains product name or vice versa)
    match = this.allProducts.find(p => {
      const productName = this.normalizeString(p.product_name);
      return productName.includes(normalizedTitle) || normalizedTitle.includes(productName);
    });
    
    if (match) return match;
    
    // Try word-based fuzzy match
    const titleWords = normalizedTitle.split(/\s+/).filter(w => w.length > 3);
    match = this.allProducts.find(p => {
      const productName = this.normalizeString(p.product_name);
      const matchCount = titleWords.filter(word => productName.includes(word)).length;
      return matchCount >= Math.ceil(titleWords.length * 0.5); // At least 50% word match
    });
    
    return match;
  }

  private normalizeString(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  getLevelBadgeClass(level: string): string {
    switch (level) {
      case 'foundational': return 'badge-foundational';
      case 'intermediate': return 'badge-intermediate';
      case 'advanced': return 'badge-advanced';
      default: return '';
    }
  }

  getLevelLabel(level: string): string {
    switch (level) {
      case 'foundational': return 'Basic';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      default: return level;
    }
  }
}
