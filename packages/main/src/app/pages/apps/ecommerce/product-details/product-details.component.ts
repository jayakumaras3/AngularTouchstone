import { Component, AfterViewInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { IconModule } from 'src/app/icon/icon.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/services/apps/product/product.service';
import { PRODUCT_DATA } from '../ecommerceData';
import { FooterComponent } from '../../../front-pages/footer/footer.component';
import { PopupwindowComponent } from '../../../front-pages/popupwindow/popupwindow.component';
import { MatDialog } from '@angular/material/dialog';
import { MediaMatcher } from '@angular/cdk/layout';
import { DestroyRef } from '@angular/core';
import { frameworks } from '../../../front-pages/front-pagesData';
import { TemplateVideoComponent } from '../../../front-pages/template-video/template-video.component';
import {  computed, signal } from '@angular/core';
import { users } from '../../../front-pages/front-pagesData';
import { setupCards, stats, tclients} from '../../../front-pages/front-pagesData';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MaterialModule, IconModule, CarouselModule, FooterComponent],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements AfterViewInit {
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
    private destroyRef = inject(DestroyRef);
    private mediaMatcher = inject(MediaMatcher);
   
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
    /* popup window End */
  
  
  private productService: ProductService = inject(ProductService);
  

  product: any;
  relatedProducts: any[] = [];
  allProducts = PRODUCT_DATA;
  quantity = 1;
  toggleValue: any = null;

  ngAfterViewInit(): void {}

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

   this.product = this.productService.getProduct();

if (!this.product) {
  console.warn('No product found — redirecting.');
  this.router.navigate(['/catalog']);
  return;
}

// ✅ Fix: Convert objectives string into array
this.normalizeObjectives(this.product);

this.loadRelatedProducts(this.product);

  }
private normalizeObjectives(product: any) {
  if (!product) return;

  if (typeof product.objectives === 'string') {
    product.objectives = product.objectives
      .split('|')
      .map((s: string) => s.trim());
  }
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
  this.productService.setProduct(item);
  this.product = item;

  // ✅ FIX: convert objectives string → array
  this.normalizeObjectives(this.product);

  // Load random related items
  this.loadRelatedProducts(this.product);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

loadRelatedProducts(currentProduct: any) {

  // 1. Get products with SAME CATEGORY
  const sameCategory = this.allProducts.filter(p =>
    p.id !== currentProduct.id &&
    p.categories?.some(c => currentProduct.categories?.includes(c))
  );

  // 2. Shuffle the products RANDOMLY
  this.relatedProducts = this.shuffleArray(sameCategory);

  // 3. OPTIONAL: Limit to 4 products
  this.relatedProducts = this.relatedProducts.slice(0, 4);
}

shuffleArray(array: any[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


  // ✅ Utilities
  getBack(): void {
    this.router.navigate(['/catalog']);
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
