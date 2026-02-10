import { Component, AfterViewInit, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { IconModule } from '../../../../icon/icon.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductService } from '../../../../services/apps/product/product.service';
import { NavService } from '../../../../services/nav.service';
import { PRODUCT_DATA } from '../ecommerceData';
import { FooterComponent } from '../../../front-pages/footer/footer.component';
import { PopupwindowComponent } from '../../../front-pages/popupwindow/popupwindow.component';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { DestroyRef } from '@angular/core';
import { frameworks } from '../../../front-pages/front-pagesData';
import { TemplateVideoComponent } from '../../../front-pages/template-video/template-video.component';
import { computed, signal } from '@angular/core';
import { users } from '../../../front-pages/front-pagesData';
import { setupCards, stats, tclients } from '../../../front-pages/front-pagesData';
import { ProductDataService } from '../../../../services/product-data.service';

interface Product {
  id: any;
  categories?: string[];
  objectives?: string | string[];
  [key: string]: any;
}



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MaterialModule, IconModule, CarouselModule, FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements AfterViewInit, OnInit {
  /* popup window start */
  centered = false;
  disabled = false;
  unbounded = false;
  radius: number = 0;
  color: string = '';
  showBackground: boolean = false;
  frameworks = frameworks;
  selectedIndex = 1;

  readonly dialog = inject(MatDialog);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private navService = inject(NavService);
  private destroyRef = inject(DestroyRef);
  private mediaMatcher = inject(MediaMatcher);

  // Track navigation source (chatbot, catalog, etc.)
  private navigationSource: string | null = null;

  mobileQuery: MediaQueryList;
  isMobileView = false;

  setupCards = setupCards;
  stats = stats;
  tclients = tclients;
  currentIndex = signal(0);
  users = users;

  currentUser = computed(() => this.users[this.currentIndex()]);
  displayCount = computed(() => `${this.currentIndex() + 1}/${this.users.length}`);



  openDialog(showBackground: boolean) {
    this.showBackground = showBackground;

    const dialogRef = this.dialog.open(TemplateVideoComponent, {
      data: {},
      width: '1000px',
    });

    return dialogRef.afterClosed();
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

  product: any;
  relatedProducts: any[] = [];
  allProducts: any[] = PRODUCT_DATA;
  quantity = 1;
  toggleValue: any = null;

  private productService: ProductService = inject(ProductService);
  private productDataService = inject(ProductDataService);

  ngOnInit(): void {
    // Load all products first
    this.productDataService.getProducts({ bustCache: true }).subscribe((items: any[]) => {
      this.allProducts = items;

      // Listen to route param changes to reload course data
      this.route.paramMap.subscribe(params => {
        const courseId = params.get('courseId');
        
        // Capture navigation source from query params
        this.route.queryParams.subscribe(queryParams => {
          this.navigationSource = queryParams['source'] || null;
        });

        // Capture previous URL from navigation state (more reliable than NavService)
        const navigation = this.router.getCurrentNavigation();
        if (navigation?.extras?.state?.['previousUrl']) {
          const previousUrl = navigation.extras.state['previousUrl'];
          this.navService.setReferrerUrl(previousUrl);
        }

        // Load course data based on courseId or from service
        this.loadCourseData(courseId);
      });
    });
  }

  ngAfterViewInit(): void { }

  constructor() {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 1199px)');
    this.isMobileView = this.mobileQuery.matches;

    const listener = (e: MediaQueryListEvent) => {
      this.isMobileView = e.matches;
    };

    this.mobileQuery.addEventListener('change', listener);

    this.destroyRef.onDestroy(() => {
      this.mobileQuery.removeEventListener('change', listener);
    });
  }

  /**
   * Load course data based on courseId or from ProductService
   * Called on initialization and when route params change
   */
  private loadCourseData(courseId: string | null): void {
    let productToLoad: any = null;

    if (courseId) {
      // Load product by ID from allProducts
      productToLoad = this.allProducts.find(p => p.id === parseInt(courseId, 10));
      
      if (productToLoad) {
        // Update the service with the loaded product
        this.productService.setProduct(productToLoad);
      }
    } else {
      // Fallback: load from service (backward compatibility)
      productToLoad = this.productService.getProduct();
    }

    if (!productToLoad) {
      console.warn('No product found — redirecting to course catalog.');
      this.router.navigate(['/coursecatalog']);
      return;
    }

    // Set the product and normalize objectives
    this.product = productToLoad;
    this.normalizeObjectives(this.product);

    // Load related products
    this.loadRelatedProducts(this.product);

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
private normalizeObjectives(product: any): void {
  if (!product) return;

  // Case 1: null / undefined
  if (!product.objectives) {
    product.objectives = [];
    return;
  }

  // Case 2: string → split
  if (typeof product.objectives === 'string') {
    product.objectives = product.objectives
      .split('|')
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 0); // 🔥 IMPORTANT
  }

  // Case 3: still not array
  if (!Array.isArray(product.objectives)) {
    product.objectives = [];
    return;
  }

  // Case 4: clean empty values in array
  product.objectives = product.objectives.filter(
    (o: string) => o && o.trim().length > 0
  );
}



  // ✅ Increase/decrease quantity
  increaseQty(): void {
    this.quantity++;
  }

  decreaseQty(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // ✅ Filter Related Products (same language or same category)
  filterRelatedProducts(): void {
    if (!this.product) return;

    const currentCategories = this.product.categories || [];
    const currentId = this.product.id;

    // ✅ Find products that share at least one category
    const related = this.allProducts.filter((p) =>
      p.id !== currentId &&
      p.categories?.some((cat: string) =>
        currentCategories.includes(cat)
      )
    );

    // ✅ If no category match found, fallback to random products
    this.relatedProducts =
      related.length > 0
        ? related.slice(0, 4)
        : this.allProducts
          .filter((p) => p.id !== currentId)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
  }


  // ✅ Navigate to another product (when clicking related)
  navigateToProduct(item: any): void {
    if (!item || !item.id) {
      console.error('Invalid product data:', item);
      return;
    }

    // Set product data
    this.productService.setProduct(item);

    // Get the previous URL to preserve it when navigating between related products
    const previousUrl = this.navService.getPreviousUrl();

    // Navigate with courseId - this will trigger param change detection
    this.router.navigate(['/coursedetails', item.id], {
      queryParams: { source: this.navigationSource || 'related' },
      queryParamsHandling: 'merge',
      state: { previousUrl: previousUrl } // Preserve the original catalog URL
    });
  }
  loadRelatedProducts(currentProduct: any) {
    if (!currentProduct) return;

    const currentId = currentProduct.id;
    const currentSkill = currentProduct.skill; // Parent category (e.g., "Business Skills")
    const currentCategories = currentProduct.categories || []; // Subcategories array

    // Filter out current product
    const otherProducts = this.allProducts.filter((p: any) => p.id !== currentId);

    // PRIORITY 1: Same subcategory AND same parent category (BEST MATCH)
    const exactMatch = otherProducts.filter((p: any) =>
      p.skill === currentSkill &&
      p.categories?.some((c: string) => currentCategories.includes(c))
    );

    // PRIORITY 2: Same subcategory only (different parent category)
    const sameSubcategory = otherProducts.filter((p: any) =>
      p.categories?.some((c: string) => currentCategories.includes(c)) &&
      !exactMatch.includes(p) // Exclude already matched
    );

    // PRIORITY 3: Same parent category (skill) only
    const sameParentCategory = otherProducts.filter((p: any) =>
      p.skill === currentSkill &&
      !exactMatch.includes(p) &&
      !sameSubcategory.includes(p)
    );

    // Combine results by priority
    let relatedPool: any[] = [];

    // Add exact matches first (highest relevance)
    if (exactMatch.length > 0) {
      relatedPool = [...exactMatch];
    }

    // If we need more, add same subcategory matches
    if (relatedPool.length < 8 && sameSubcategory.length > 0) {
      relatedPool = [...relatedPool, ...sameSubcategory];
    }

    // If we still need more, add same parent category matches
    if (relatedPool.length < 8 && sameParentCategory.length > 0) {
      relatedPool = [...relatedPool, ...sameParentCategory];
    }

    // FALLBACK: If no matches at all, use random products
    if (relatedPool.length === 0) {
      relatedPool = otherProducts;
    }

    // Shuffle and limit to 4 products
    this.relatedProducts = this.shuffleArray(relatedPool).slice(0, 4);
  }
  /*loadRelatedProducts(currentProduct: any) {
    if (!currentProduct) return;
  
    // 1. Get products with SAME CATEGORY
    const sameCategory = this.allProducts.filter((p: any) =>
      p.id !== currentProduct.id &&
      p.categories?.some((c: string) => currentProduct.categories?.includes(c))
    );
  
    // If no related products found, get products from other categories
    if (sameCategory.length === 0) {
      // Get products from different categories, excluding the current product
      this.relatedProducts = this.shuffleArray(
        this.allProducts.filter((p: any) => p.id !== currentProduct.id)
      ).slice(0, 4); // Limit to 8 products
    } else {
      // 2. Shuffle the products RANDOMLY
      this.relatedProducts = this.shuffleArray(sameCategory);
      // 3. Limit to 8 products
      this.relatedProducts = this.relatedProducts.slice(0, 4);
    }
  }*/

  shuffleArray(array: any[]): any[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  hasMatchingCategories(): boolean {
    if (!this.product || this.relatedProducts.length === 0) return false;

    return this.relatedProducts.some((p: any) =>
      p.categories?.some((cat: string) => this.product.categories?.includes(cat))
    );
  }


  // ✅ Utilities
  getBack(): void {
    // Clear product state before navigation
    this.productService.clearProduct();

    // Determine where to navigate back to based on source
    if (this.navigationSource === 'chatbot') {
      // From chatbot → always go to main catalog
      this.router.navigate(['/catalog']);
    } else if (this.navigationSource === 'sme-catalog') {
      // From SME catalog → use stored referrer URL
      const previousUrl = this.navService.getPreviousUrl();
      if (previousUrl && previousUrl.includes('sme-catalog')) {
        this.router.navigateByUrl(previousUrl);
      } else {
        // Fallback to main SME catalog page
        this.router.navigate(['/sme-catalog']);
      }
    } else if (this.navigationSource === 'coursecatalog') {
      // From course catalog → use stored referrer URL
      const previousUrl = this.navService.getPreviousUrl();
      if (previousUrl && previousUrl.includes('coursecatalog')) {
        this.router.navigateByUrl(previousUrl);
      } else {
        // Fallback to main course catalog page
        this.router.navigate(['/coursecatalog']);
      }
    } else if (this.navigationSource === 'catalog') {
      // From main catalog → use stored referrer URL
      const previousUrl = this.navService.getPreviousUrl();
      if (previousUrl && previousUrl.includes('catalog')) {
        this.router.navigateByUrl(previousUrl);
      } else {
        // Fallback to main catalog page
        this.router.navigate(['/catalog']);
      }
    } else {
      // From other sources → use stored referrer or fallback to coursecatalog
      const previousUrl = this.navService.getPreviousUrl('/coursecatalog');
      
      // Ensure we're navigating to a valid catalog page
      if (previousUrl.includes('catalog') || previousUrl.includes('sme-catalog')) {
        this.router.navigateByUrl(previousUrl);
      } else {
        // Fallback to course catalog if previous URL is not a catalog page
        this.router.navigate(['/coursecatalog']);
      }
    }
  }


  getStarClass(index: number, rating?: number): string {
    const safeRating = rating ?? 0;
    const fullStars = Math.floor(safeRating);
    const partialStars = safeRating % 1 !== 0;
    if (index < fullStars) return 'fill-warning';
    else if (index === fullStars && partialStars) return 'text-warning';
    return '';
  }
}
