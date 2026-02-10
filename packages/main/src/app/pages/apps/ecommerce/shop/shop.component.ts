import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
  OnInit,
  OnDestroy,
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
import { NavService } from '../../../../services/nav.service';
import { Element, PRODUCT_DATA } from '../ecommerceData';
import { FooterComponent } from '../../../front-pages/footer/footer.component';
import { PopupwindowComponent } from '../../../front-pages/popupwindow/popupwindow.component';
import { RouterModule } from '@angular/router';
import { ProductDataService } from '../../../../services/product-data.service';

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
    FooterComponent,RouterModule,
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // Prevent full re-renders
})
export class ShopComponent implements OnInit, OnDestroy {
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
      // GRID VIEW → Enable lazy load & preserve filtered data
      this.scrollListenerActive = true;

      // ✅ FIX: Preserve filtered data (baseFilteredProducts), only reset display state
      this.currentDisplayIndex = 0;
      this.filteredCards = [];
      this.loadInitialProducts();
      this.currentPage = 0;
    }
  }


  private router = inject(Router);
  readonly dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);
  private _snackBar = inject(MatSnackBar);
  private productService = inject(ProductService);
  private navService = inject(NavService);
  private productDataService = inject(ProductDataService);
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 767px)`);
  isMobileView = false;
  sidebarOpen = false; // For mobile sidebar toggle
  languageCounts: { [key: string]: number } = {};

  // iOS detection and handling
  isIOS = false;
  isIPhone = false;
  private visualViewportHandler?: () => void;

  // ========================
  // Lazy Loading Properties
  // ========================
  private allProducts: Element[] = [];
  private baseFilteredProducts: Element[] = []; // Store filtered results
  filteredCards: Element[] = []; // Currently displayed cards
  
  // Pagination settings
  private readonly initialLoadCount = 8;
  private readonly scrollLoadCount = 4;
  private currentDisplayIndex = 0;
  private scrollListenerActive = true;

  // Loading state flags
  isLoading = true;           // True while API is in progress
  isInitialLoad = true;       // True only for first load
  isSearchTriggered = false;  // True after user searches or filters

  durationInSeconds = 1;
  searchText: string = '';

  folders: Section[] = [
    { name: 'All', icon: 'apps' },
    { name: 'Business Skills', icon: 'briefcase' },
    { name: 'Compliance', icon: 'scale' },
    { name: 'DEI (Diversity, Equity, and Inclusion)', icon: 'users-group' },
    { name: 'Technology', icon: 'cpu' },
    { name: 'Safety', icon: 'shield-check' },
    { name: 'Healthcare', icon: 'stethoscope' },
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

  // Computed property to check if any filters are active
  get hasActiveFilters(): boolean {
    return (
      this.selectedCategory !== this.folders[0].name || // Not 'All'
      this.selectedLanguage !== 'all' ||
      this.selectedPrice !== 'all' ||
      this.searchText.trim() !== ''
    );
  }

  // TrackBy functions to prevent unnecessary re-rendering
  trackByFolderName(index: number, folder: Section): string {
    return folder.name;
  }

  trackByLanguageValue(index: number, lang: { label: string; value: string }): string {
    return lang.value;
  }
  priceOptions = [
    { label: 'All', value: 'all' },
    { label: '0 – 50', value: '0-50' },
    { label: '50–100', value: '50-100' },
    { label: '100–200', value: '100-200' },
    { label: 'Over 200', value: 'over-200' },
  ];

  constructor() {
    const media = inject(MediaMatcher);
    const mobileQuery = media.matchMedia('(max-width: 767px)');
    this.isMobileView = mobileQuery.matches;
    mobileQuery.addEventListener('change', (e) => {
      this.isMobileView = e.matches;
    });

    // Detect iOS devices
    this.detectIOS();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.isInitialLoad = true;
    this.isSearchTriggered = false;

    this.productDataService.getProducts({ bustCache: true }).subscribe({
      next: (items: Element[]) => {
        this.allProducts = items;
        this.calculateLanguageCounts();
        this.initializeProducts();
        this.isLoading = false;
        this.isInitialLoad = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.isLoading = false;
        this.isInitialLoad = false;
        this.cdr.detectChanges();
      }
    });

    // Setup iOS keyboard handling if on iOS
    if (this.isIOS) {
      this.setupIOSKeyboardHandling();
    }
  }

  ngOnDestroy(): void {
    // Cleanup iOS keyboard listeners
    if (this.isIOS && this.visualViewportHandler && window.visualViewport) {
      window.visualViewport.removeEventListener('resize', this.visualViewportHandler);
      window.visualViewport.removeEventListener('scroll', this.visualViewportHandler);
    }
  }

  /**
   * Detect if the device is iOS (iPhone/iPad)
   */
  private detectIOS(): void {
    const userAgent = window.navigator.userAgent.toLowerCase();
    this.isIOS = /iphone|ipad|ipod/.test(userAgent) || 
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    this.isIPhone = /iphone|ipod/.test(userAgent);
  }

  /**
   * Setup iOS-specific handling for Visual Viewport API
   * Helps with keyboard overlay issues on iPhone
   */
  private setupIOSKeyboardHandling(): void {
    if (!window.visualViewport) {
      return;
    }

    this.visualViewportHandler = () => {
      const viewport = window.visualViewport!;
      const windowHeight = window.innerHeight;
      const viewportHeight = viewport.height;
      
      // Calculate keyboard height
      const keyboardHeight = windowHeight - viewportHeight;
      
      // If keyboard is open (significant height difference)
      if (keyboardHeight > 150) {
        // Keyboard is open - ensure search field is visible
        const searchField = document.querySelector('.search-field input') as HTMLElement;
        if (searchField && document.activeElement === searchField) {
          // Scroll into view if needed
          setTimeout(() => {
            searchField.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      }

      this.cdr.detectChanges();
    };

    // Listen to viewport changes
    window.visualViewport.addEventListener('resize', this.visualViewportHandler);
    window.visualViewport.addEventListener('scroll', this.visualViewportHandler);
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
filterByCategory(category: string, event: MouseEvent): void {
  // Prevent the row click (so it doesn't open details)
  event.stopPropagation();

  this.isSearchTriggered = true;
  this.selectedCategory = category;
  
  // Filter all products that include the clicked category
  const results = this.allProducts.filter((card) =>
    card.categories?.some(
      (cat) => cat.toLowerCase() === category.toLowerCase()
    )
  );

  this.applyFilterAndReset(results);
}


  /**
   * Calculate language counts - globally or based on selected category
   * Updates languageCounts used by language filter UI
   */
  private calculateLanguageCounts(): void {
    this.updateLanguageCounts(this.getCoursesForCurrentCategory());
  }

  /**
   * Update language counts based on provided courses array
   * Used after category selection to show language counts ONLY from that category
   * @param courses - Courses to count languages from (filtered by category)
   */
  private updateLanguageCounts(courses: Element[]): void {
    const counts: { [key: string]: number } = {};

    // Count languages only from the provided (filtered) courses
    courses.forEach((card) => {
      const lang = (card.language || 'English').trim();
      if (!counts[lang]) counts[lang] = 0;
      counts[lang]++;
    });

    // Total count for 'All' language option
    counts['All'] = courses.length;

    this.languageCounts = counts;
  }

  /**
   * Get courses for the currently selected category
   * @returns Array of courses matching selected category
   */
  private getCoursesForCurrentCategory(): Element[] {
    const categoryName = this.selectedCategory.toLowerCase();

    if (categoryName === 'all') {
      return this.allProducts;
    }

    return this.allProducts.filter(
      (card) => card.skill?.toLowerCase() === categoryName
    );
  }

  /**
   * Apply filters based on both category AND language selections
   * Combines both filters to show final result
   */
  private applyFilters(): void {
    const categoryName = this.selectedCategory.toLowerCase();
    const languageName = this.selectedLanguage.toLowerCase();

    // Start with category filter
    let filtered = this.getCoursesForCurrentCategory();

    // Then apply language filter if not 'all'
    if (languageName !== 'all') {
      filtered = filtered.filter(
        (card) => (card.language?.trim().toLowerCase() || 'english') === languageName
      );
    }

    // Apply and reset with filtered results
    this.applyFilterAndReset(filtered, false);
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
   * Load more products on scroll - uses push to prevent full DOM re-render
   */
  private loadMoreProductsOnScroll(): void {
    if (this.isLoading || !this.hasMoreProducts()) {
      return;
    }

    this.isLoading = true;
    this.cdr.detectChanges(); // Show loading state

    const nextBatch = this.baseFilteredProducts.slice(
      this.currentDisplayIndex,
      this.currentDisplayIndex + this.scrollLoadCount
    );

    // Use requestAnimationFrame for smoother DOM updates
    requestAnimationFrame(() => {
      // Push items instead of creating new array to prevent flicker
      nextBatch.forEach(item => this.filteredCards.push(item));
      this.currentDisplayIndex += nextBatch.length;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
  }

  /**
   * Reset and apply new filter/sort with lazy loading
   * Only scrolls to top when user explicitly changes filters (not on scroll load)
   */
    private applyFilterAndReset(data: Element[], shouldScrollToTop: boolean = true): void {
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

      // Only scroll to top when user explicitly changes filters
      if (shouldScrollToTop) {
        this.scrollToTop();
      }
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
    this.isSearchTriggered = true;
    const text = this.searchText.toLowerCase();
    const results = this.allProducts.filter(
      (card) =>
        card.product_name.toLowerCase().includes(text) ||
        (card.categories && card.categories.join(' ').toLowerCase().includes(text)) ||
        (card.skill && card.skill.toLowerCase().includes(text))
    );
    this.applyFilterAndReset(results, false); // Don't scroll on search
  }

  /**
   * Handle category selection with dependent language filter update
   * When category changes:
   * 1. Update selectedCategory
   * 2. Reset selectedLanguage to 'all'
   * 3. Recalculate language counts based on new category
   * 4. Apply filters to show only matching courses
   * @param name - Selected category name
   */
  onCategorySelect(name: string): void {
    this.isSearchTriggered = true;
    this.selectedCategory = name;
    
    // Reset language to 'all' when category changes
    this.selectedLanguage = 'all';
    
    // Update language counts based on the new category
    this.updateLanguageCounts(this.getCoursesForCurrentCategory());
    
    // Apply filters and display results
    this.applyFilters();
  }

  /**
   * Handle language selection with dependent category filter
   * Language filter depends on the currently selected category
   * Shows only courses matching BOTH category and language
   * @param language - Selected language value
   */
  onLanguageSelect(language: string): void {
    this.isSearchTriggered = true;
    this.selectedLanguage = language;
    
    // Apply both category and language filters
    this.applyFilters();
  }

  /**
   * Legacy method - redirects to new dependent filter system
   * @deprecated Use onCategorySelect() instead
   */
  getCategory(name: string): void {
    this.onCategorySelect(name);
  }

  /**
   * Legacy method - redirects to new dependent filter system
   * @deprecated Use onLanguageSelect() instead
   */
  getLanguageFilter(language: string): void {
    this.onLanguageSelect(language);
  }

  getSorted(name: string): void {
    this.isSearchTriggered = true;
    this.selectedSortBy = name;
    const nameLower = name.toLowerCase();
    let sorted = [...this.filteredCards]; // Sort the already-filtered results

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

  getPricing(priceRange: string): void {
    this.isSearchTriggered = true;
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
    this.isSearchTriggered = false;

    // Reset language counts to global counts
    this.calculateLanguageCounts();
    
    this.applyFilterAndReset(this.allProducts);
    this.cdr.markForCheck(); // Trigger change detection to update button visibility
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
    window.scrollTo({ top: 0, behavior: 'instant' }); 
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
  isActiveRoute(route: string): boolean {
    const currentUrl = this.router.url;
    // Check for exact match or path starting with the route
    if (route === 'catalog') {
      // Match /catalog but not /sme-catalog or /coursecatalog
      return currentUrl === '/catalog' || currentUrl.startsWith('/catalog?');
    }
    return currentUrl.includes(`/${route}`);
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
    // Store current URL as referrer for back navigation
    const currentUrl = this.router.url;
    this.navService.setReferrerUrl(currentUrl);
    
    // Set product data
    this.productService.setProduct(productcardDetails);
    
    // Navigate with courseId, source, and state for reliable back navigation
    this.router.navigate(['/coursedetails', productcardDetails.id], {
      queryParams: { source: 'catalog' },
      queryParamsHandling: 'merge',
      state: { previousUrl: currentUrl }
    });
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

  // TrackBy function for product cards to prevent DOM recreation
  trackByProductId(index: number, product: Element): number {
    return product.id;
  }

  // Get current scroll percentage (for debugging)
  getCurrentScrollPercentage(): number {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    return (scrollPosition / pageHeight) * 100;
  }
}