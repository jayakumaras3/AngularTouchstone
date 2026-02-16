// ========================================
// Add to coursecatalog.component.ts
// ========================================

import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

// ========================================
// FILTER INTERFACES
// ========================================
interface FilterOption {
  value: string;
  label: string;
  count: number;
}

interface FilterState {
  selectedCategory: string | null;
  selectedLanguage: string | null;
}

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, TablerIconsModule],
  templateUrl: './coursecatalog.component.html',
  styleUrls: ['./coursecatalog.component.scss']
})
export class CourseCatalogComponent {
  // ========================================
  // EXISTING PROPERTIES
  // ========================================
  private allProducts: Element[] = [];
  categories: Category[] = [];
  totalCourses: number = 0;
  mainTitle = 'Course Catalog';
  subTitle = 'Micro Learning (500)';

  // ========================================
  // NEW FILTERING PROPERTIES
  // ========================================
  // Available filter options
  categoryOptions: FilterOption[] = [];
  languageOptions: FilterOption[] = [];

  // Current filter state
  filterState: FilterState = {
    selectedCategory: null,
    selectedLanguage: null
  };

  // Filtered products and display data
  private filteredProducts: Element[] = [];
  filteredCategories: Category[] = [];
  filteredCourseCount: number = 0;

  // UI state
  showFilters: boolean = true;

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
      this.totalCourses = this.allProducts.length;
      
      // Initialize filters
      this.initializeFilters();
      
      // Apply filters (initially shows all)
      this.applyFilters();
    });
  }

  // ========================================
  // FILTER INITIALIZATION
  // ========================================
  
  /**
   * Extract unique categories and languages from products
   * and build filter options with counts
   */
  private initializeFilters(): void {
    const categoryMap = new Map<string, number>();
    const languageMap = new Map<string, number>();

    this.allProducts.forEach(product => {
      // Count categories (skills)
      const category = product.skill ?? 'Unknown';
      categoryMap.set(category, (categoryMap.get(category) ?? 0) + 1);

      // Count languages
      const language = product.language ?? 'Unknown';
      languageMap.set(language, (languageMap.get(language) ?? 0) + 1);
    });

    // Build category options (sorted alphabetically)
    this.categoryOptions = Array.from(categoryMap.entries())
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => a.label.localeCompare(b.label));

    // Build language options (sorted alphabetically)
    this.languageOptions = Array.from(languageMap.entries())
      .map(([value, count]) => ({ value, label: value, count }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }

  // ========================================
  // CORE FILTERING LOGIC
  // ========================================
  
  /**
   * Main filter application function
   * Applies both category and language filters in combination
   */
  applyFilters(): void {
    const { selectedCategory, selectedLanguage } = this.filterState;

    // Start with all products
    let filtered = [...this.allProducts];

    // Apply category filter if selected
    if (selectedCategory) {
      filtered = filtered.filter(product => {
        const productCategory = product.skill ?? 'Unknown';
        return productCategory === selectedCategory;
      });
    }

    // Apply language filter if selected
    if (selectedLanguage) {
      filtered = filtered.filter(product => {
        const productLanguage = product.language ?? 'Unknown';
        return productLanguage === selectedLanguage;
      });
    }

    // Update filtered results
    this.filteredProducts = filtered;
    this.filteredCourseCount = filtered.length;
    this.filteredCategories = this.mapProductDataToCatalog(filtered);

    // Update display (use filtered or all based on active filters)
    this.categories = this.filteredCategories;
  }

  // ========================================
  // FILTER ACTION HANDLERS
  // ========================================
  
  /**
   * Handle category selection
   */
  onCategorySelect(category: string | null): void {
    this.filterState.selectedCategory = category;
    this.applyFilters();
  }

  /**
   * Handle language selection
   */
  onLanguageSelect(language: string | null): void {
    this.filterState.selectedLanguage = language;
    this.applyFilters();
  }

  /**
   * Reset all filters and show all courses
   */
  resetFilters(): void {
    this.filterState = {
      selectedCategory: null,
      selectedLanguage: null
    };
    this.applyFilters();
  }

  /**
   * Check if any filters are active
   */
  hasActiveFilters(): boolean {
    return this.filterState.selectedCategory !== null || 
           this.filterState.selectedLanguage !== null;
  }

  /**
   * Toggle filter panel visibility
   */
  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  // ========================================
  // DATA MAPPING (Updated to accept filtered products)
  // ========================================
  
  private mapProductDataToCatalog(products: Element[] = this.allProducts): Category[] {
    const categoryMap = new Map<string, Category>();

    products.forEach(product => {
      const skill = product.skill ?? 'Unknown Skill';
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

  // ========================================
  // NAVIGATION (Existing methods)
  // ========================================
  
  navigateToCourseDetails(course: Course): void {
    const currentUrl = this.router.url;
    this.navService.setReferrerUrl(currentUrl);
    this.productService.setProduct(course.product);
    
    // Pass the previous URL via navigation state for reliable back navigation
    this.router.navigate(['/coursedetails', course.product.id], {
      queryParams: { source: 'coursecatalog' },
      state: { previousUrl: currentUrl }
    });
  }

  navigateBackToCatalog(): void {
    this.router.navigate(['/catalog']);
  }
}