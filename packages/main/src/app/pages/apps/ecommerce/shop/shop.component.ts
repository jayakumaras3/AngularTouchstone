import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconModule } from '../../../../icon/icon.module';
import { MaterialModule } from '../../../../material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../../services/apps/product/product.service';
import { Element, PRODUCT_DATA } from '../ecommerceData';
import { FooterComponent } from '../../../front-pages/footer/footer.component';
import { PopupwindowComponent } from '../../../front-pages/popupwindow/popupwindow.component';

export interface Section {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-shop',
  imports: [
    MaterialModule,
    IconModule,
    CommonModule,
    FormsModule,
    NgScrollbarModule,
    FooterComponent,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  viewMode: 'grid' | 'tile' = 'grid';
trackTileRows(index: number, item: any) {
  return item.id || index;
}
  setViewMode(mode: 'grid' | 'tile') {
    this.viewMode = mode;

    if (mode === 'tile') {
      // Disable lazy loading
      this.scrollListenerActive = false;

      // ✅ LOAD ALL COURSES for TILE VIEW
      this.filteredCards = [...this.baseFilteredProducts];

      // ✅ Reset pagination to start from first page
      this.currentPage = 0;

    } else {
      // GRID VIEW → Enable lazy load & reinitialize
      this.scrollListenerActive = true;

      // Restore lazy-loaded initial state (first 8 items)
      this.initializeProducts();
    }
  }


  private router = inject(Router);
  readonly dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);
  private _snackBar = inject(MatSnackBar);
  private productService = inject(ProductService);
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 1199px)`);
  isMobileView = false;
  languageCounts: { [key: string]: number } = {};

  // ========================
  // Lazy Loading Properties
  // ========================
  private allProducts: Element[] = PRODUCT_DATA;
  private baseFilteredProducts: Element[] = []; // Store filtered results
  filteredCards: Element[] = []; // Currently displayed cards
  
  // Pagination settings
  private readonly initialLoadCount = 8;
  private readonly scrollLoadCount = 4;
  private currentDisplayIndex = 0;
  private isLoading = false;
  private scrollListenerActive = true;

  durationInSeconds = 1;
  searchText: string = '';

  folders: Section[] = [
    { name: 'All', icon: 'apps' },
    { name: 'Business Skills', icon: 'briefcase' },
    { name: 'Compliance', icon: 'scale' },
    { name: 'DEI (Diversity, Equity, and Inclusion)', icon: 'users-group' },
    { name: 'Technology', icon: 'cpu' },
    { name: 'Safety', icon: 'shield-check' },
    { name: 'HealthCare', icon: 'stethoscope' },
    { name: 'Wellness', icon: 'heart' },
  ];
  selectedCategory: string = this.folders[0].name;

  notes: Section[] = [
    { name: 'Newest', icon: 'calendar' },
    { name: 'Price: High-Low', icon: 'sort-descending' },
    { name: 'Price: Low-High', icon: 'sort-ascending' },
    { name: 'Duration', icon: 'clock' },
  ];
  selectedSortBy: string = this.notes[0].name;
  selectedLanguage: string = 'all';
  
  languageOptions = [
    { label: 'All', value: 'all' },
    { label: 'English', value: 'English' },
    { label: 'Spanish', value: 'Spanish' },
    { label: 'German', value: 'German' },
    { label: 'Italian', value: 'Italian' },
    { label: 'French', value: 'French' },
  ];

  selectedPrice: string = 'all';
  priceOptions = [
    { label: 'All', value: 'all' },
    { label: '0 – 50', value: '0-50' },
    { label: '50–100', value: '50-100' },
    { label: '100–200', value: '100-200' },
    { label: 'Over 200', value: 'over-200' },
  ];

  constructor() {
    const media = inject(MediaMatcher);
    const mobileQuery = media.matchMedia('(max-width: 1199px)');
    this.isMobileView = mobileQuery.matches;
    mobileQuery.addEventListener('change', (e) => {
      this.isMobileView = e.matches;
    });
  }

  ngOnInit(): void {
    this.calculateLanguageCounts();
    this.initializeProducts();
  }
  Math = Math;
// Pagination
pageSize = 10;
currentPage = 0;
pageSizeOptions = [5, 10, 20];

// Sorting
sortColumn: string = '';
sortDirection: 'asc' | 'desc' = 'asc';

// Filtered + paginated data
get paginatedCards() {
  const start = this.currentPage * this.pageSize;
  const end = start + this.pageSize;
  return this.sortedCards.slice(start, end);
}

get sortedCards() {
  if (!this.sortColumn) return this.filteredCards;

  return [...this.filteredCards].sort((a: any, b: any) => {
    const valueA = a[this.sortColumn];
    const valueB = b[this.sortColumn];

    if (valueA < valueB) return this.sortDirection === 'asc' ? -1 : 1;
    if (valueA > valueB) return this.sortDirection === 'asc' ? 1 : -1;
    return 0;
  });
}


toggleSort(col: string) {
  if (this.sortColumn === col) {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  } else {
    this.sortColumn = col;
    this.sortDirection = 'asc';
  }
  this.currentPage = 0;
}

// Pagination methods
onPageChange(event: any) {
  this.pageSize = Number(event.target.value); // convert to number
  this.currentPage = 0;
}

nextPage() {
  this.scrollListenerActive = false;
  if ((this.currentPage + 1) * this.pageSize < this.sortedCards.length) {
    this.currentPage++;
  }
}

prevPage() {
  this.scrollListenerActive = false;
  if (this.currentPage > 0) {
    this.currentPage--;
  }
}


  private calculateLanguageCounts(): void {
    
    const counts: { [key: string]: number } = {};

    // Count how many products per language
    PRODUCT_DATA.forEach((card) => {
      const lang = (card.language || 'All').trim();
      if (!counts[lang]) counts[lang] = 0;
      counts[lang]++;
    });

    // Total count for 'All'
    counts['All'] = PRODUCT_DATA.length;

    this.languageCounts = counts;
  }

  // ========================
  // Lazy Loading Implementation
  // ========================

  /**
   * Initialize products with initial load
   */
  private initializeProducts(): void {
    this.baseFilteredProducts = [...this.allProducts];
    this.currentDisplayIndex = 0;
    this.filteredCards = [];
    this.loadInitialProducts();
  }

  /**
   * Load initial set of products
   */
  private loadInitialProducts(): void {
    const initialBatch = this.baseFilteredProducts.slice(
      0,
      this.initialLoadCount
    );
    this.filteredCards = [...initialBatch];
    this.currentDisplayIndex = this.initialLoadCount;
  }

  /**
   * Load more products on scroll
   */
  private loadMoreProductsOnScroll(): void {
    if (this.isLoading || !this.hasMoreProducts()) {
      return;
    }

    this.isLoading = true;

    const nextBatch = this.baseFilteredProducts.slice(
      this.currentDisplayIndex,
      this.currentDisplayIndex + this.scrollLoadCount
    );

    // Add small delay to simulate loading (optional)
    setTimeout(() => {
      this.filteredCards = [...this.filteredCards, ...nextBatch];
      this.currentDisplayIndex += nextBatch.length;
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 100);
  }

  /**
   * Reset and apply new filter/sort with lazy loading
   */
    private applyFilterAndReset(data: Element[]): void {
      this.baseFilteredProducts = [...data];
      this.currentDisplayIndex = 0;

      // ✅ RESET pagination ALWAYS
      this.currentPage = 0;

      if (this.viewMode === 'tile') {
        // ✅ TILE VIEW → ALWAYS load everything
        this.filteredCards = [...this.baseFilteredProducts];
        this.scrollListenerActive = false; 
      } 
      else {
        // ✅ GRID VIEW → use lazy loading
        this.scrollListenerActive = true;
        this.filteredCards = [];
        this.loadInitialProducts();
      }

      this.scrollToTop();
    }

  /**
   * Scroll event listener for lazy loading - triggers at 80% scroll
   */
    @HostListener('window:scroll', [])
    onScroll(): void {
      // ❌ Disable lazy loading in TILE view
      if (this.viewMode === 'tile') {
        return;
      }

      // ✅ Continue with your original scroll behaviour for GRID view
      if (!this.scrollListenerActive || this.isLoading || !this.hasMoreProducts()) {
        return;
      }

      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

      const scrollPercentage = (scrollPosition / pageHeight) * 100;

      if (scrollPercentage >= 70) {
        this.loadMoreProductsOnScroll();
      }
    }


  // ========================
  // Filter and Search Methods
  // ========================

  filterCards(): void {
    const text = this.searchText.toLowerCase();
    const results = this.allProducts.filter(
      (card) =>
        card.product_name.toLowerCase().includes(text) ||
        (card.categories && card.categories.join(' ').toLowerCase().includes(text)) ||
        (card.skill && card.skill.toLowerCase().includes(text))
    );
    this.applyFilterAndReset(results);
  }

  getCategory(name: string): void {
    this.selectedCategory = name;
    let results: Element[] = [];

    if (name.toLowerCase() === 'all') {
      results = this.allProducts;
    } else {
      results = this.allProducts.filter(
        (card) => card.skill?.toLowerCase() === name.toLowerCase()
      );
    }

    this.applyFilterAndReset(results);
  }

  getSorted(name: string): void {
    this.selectedSortBy = name;
    const nameLower = name.toLowerCase();
    let sorted = [...this.allProducts];

    switch (nameLower) {
      case 'newest':
        sorted.sort((a, b) => +new Date(b.date) - +new Date(a.date));
        break;
      case 'price: high-low':
        sorted.sort((a, b) => +b.base_price - +a.base_price);
        break;
      case 'price: low-high':
        sorted.sort((a, b) => +a.base_price - +b.base_price);
        break;
      case 'duration':
        sorted.sort((a, b) => {
          const durA = Number(a.duration) || 0;
          const durB = Number(b.duration) || 0;
          return durA - durB;
        });
        break;
      default:
        // Default sorting (keep original order)
        break;
    }
    this.applyFilterAndReset(sorted);
  }

  getLanguageFilter(language: string): void {
    this.selectedLanguage = language;
    const filterValue = language.trim().toLowerCase();

    if (filterValue === 'all') {
      this.applyFilterAndReset(this.allProducts);
    } else {
      const results = this.allProducts.filter(
        (card) => (card.language?.trim().toLowerCase() || '') === filterValue
      );
      this.applyFilterAndReset(results);
    }
  }

  getPricing(priceRange: string): void {
    this.selectedPrice = priceRange;
    let filtered: Element[] = [];

    switch (priceRange) {
      case '0-50':
        filtered = this.allProducts.filter(
          (card) => +card.base_price >= 0 && +card.base_price <= 50
        );
        break;
      case '50-100':
        filtered = this.allProducts.filter(
          (card) => +card.base_price > 50 && +card.base_price <= 100
        );
        break;
      case '100-200':
        filtered = this.allProducts.filter(
          (card) => +card.base_price > 100 && +card.base_price <= 200
        );
        break;
      case 'over-200':
        filtered = this.allProducts.filter((card) => +card.base_price > 200);
        break;
      default:
        filtered = [...this.allProducts];
    }

    this.applyFilterAndReset(filtered);
  }

  getRestFilter(): void {
    this.selectedCategory = this.folders[0].name;
    this.selectedSortBy = this.notes[0].name;
    this.selectedLanguage = 'all';
    this.selectedPrice = 'all';
    this.searchText = '';

    this.applyFilterAndReset(this.allProducts);
  }
    openBookDemoDialog() {
        // Prevent background scroll
        document.body.style.overflow = 'hidden';

        const dialogRef = this.dialog.open(PopupwindowComponent, {
          width: '500px',
          disableClose: true,
          autoFocus: true,
          hasBackdrop: true, // background still visible
          panelClass: 'light-popup-window',
        });

        dialogRef.afterClosed().subscribe(() => {
          // Re-enable scrolling after popup closes
          document.body.style.overflow = 'auto';
        });
      }

  scrollToTop(): void { 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }

  getProductList(): void {
    this.getRestFilter();
  }

  isOver(): boolean {
    return this.mediaMatcher.matches;
  }

  getAddProductRoute(): void {
    this.router.navigate(['apps/product/add-product']);
  }

  openDialog(idOrIds: number | number[]): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { ids: Array.isArray(idOrIds) ? idOrIds : [idOrIds] },
      width: '400px',
      enterAnimationDuration: '0ms',
      exitAnimationDuration: '0ms',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'delete' && !Array.isArray(idOrIds)) {
        this.getDeletedById(idOrIds);
      }
    });
  }

  getDeletedById(id: number): void {
    this.filteredCards = this.filteredCards.filter(
      (product) => product.id !== id
    );
    this.cdr.detectChanges();
    this.openSnackBar('Product deleted successfully!');
  }

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  getviewDetails(productcardDetails: Element): void {
    this.productService.setProduct(productcardDetails);
    this.router.navigate(['/productdetails']);
  }



  getEditedProduct(productcardDetails: Element): void {
    this.productService.setProduct(productcardDetails);
    this.router.navigate(['apps/product/edit-product']);
  }

  getStarClass(index: number, rating?: number): string {
    const safeRating = rating ?? 0;
    const fullStars = Math.floor(safeRating);
    const partialStars = safeRating % 1 !== 0;

    if (index < fullStars) return 'fill-warning';
    else if (index === fullStars && partialStars) return 'text-warning';
    return '';
  }

  // Helper method to check if there are more products to load
  private hasMoreProducts(): boolean {
    return this.currentDisplayIndex < this.baseFilteredProducts.length;
  }

  // Get remaining products count (for debugging)
  getRemainingProductsCount(): number {
    return Math.max(0, this.baseFilteredProducts.length - this.currentDisplayIndex);
  }

  // Get current scroll percentage (for debugging)
  getCurrentScrollPercentage(): number {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    return (scrollPosition / pageHeight) * 100;
  }
}