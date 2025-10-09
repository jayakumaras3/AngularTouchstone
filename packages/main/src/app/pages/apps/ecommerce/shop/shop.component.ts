import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  inject,
  OnInit,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconModule } from 'src/app/icon/icon.module';
import { MaterialModule } from 'src/app/material.module';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from 'src/app/services/apps/product/product.service';
import { Element, PRODUCT_DATA } from '../ecommerceData';
import { FooterComponent } from '../../../front-pages/footer/footer.component';

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
  private router = inject(Router);
  readonly dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);
  private _snackBar = inject(MatSnackBar);
  private productService = inject(ProductService);
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 1199px)`);
  isMobileView = false;

  // ========================
  // Pagination properties
  // ========================
  pageSize = 16;
  currentPage = 1;
  allProducts: Element[] = PRODUCT_DATA;
  filteredCards: Element[] = [];

  durationInSeconds = 1;
  searchText: string = '';

  folders: Section[] = [
    { name: 'all', icon: 'users' },
    { name: 'fashion', icon: 'hanger' },
    { name: 'books', icon: 'book' },
    { name: 'toys', icon: 'mood-smile' },
    { name: 'electronics', icon: 'device-laptop' },
  ];
  selectedCategory: string = this.folders[0].name;

  notes: Section[] = [
    { name: 'newest', icon: 'calendar' },
    { name: 'Price: High-Low', icon: 'sort-descending' },
    { name: 'Price: Low-High', icon: 'sort-ascending' },
    { name: 'discounted', icon: 'percentage' },
  ];
  selectedSortBy: string = this.notes[0].name;

  selectedGender: string = 'all';
  genderOptions = [
    { label: 'All', value: 'all' },
    { label: 'Men', value: 'men' },
    { label: 'Women', value: 'women' },
    { label: 'Kids', value: 'kids' },
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
    this.loadMoreProducts(); // Load initial 16
  }

  // ========================
  // Lazy Loading Logic
  // ========================
  loadMoreProducts(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = this.currentPage * this.pageSize;
    const nextBatch = this.allProducts.slice(startIndex, endIndex);
    this.filteredCards = [...this.filteredCards, ...nextBatch];
    this.currentPage++;
  }

  loadMoreIfAvailable(): void {
    if (this.filteredCards.length < this.allProducts.length) {
      this.loadMoreProducts();
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    if (scrollPosition >= pageHeight - 300) {
      this.loadMoreIfAvailable();
    }
  }

  // ========================
  // Filter and Search
  // ========================
  resetAndLoad(data: Element[]) {
    this.allProducts = data;
    this.filteredCards = [];
    this.currentPage = 1;
    this.loadMoreProducts();
  }

  filterCards() {
    const text = this.searchText.toLowerCase();
    const results = PRODUCT_DATA.filter(
      (card) =>
        card.product_name.toLowerCase().includes(text) ||
        card.categories.join(' ').toLowerCase().includes(text)
    );
    this.resetAndLoad(results);
  }

  getCategory(name: string): void {
    this.selectedCategory = name;
    if (name.toLowerCase() === 'all') {
      this.resetAndLoad(PRODUCT_DATA);
    } else {
      const results = PRODUCT_DATA.filter((card) =>
        card.categories.some(
          (cat) => cat.toLowerCase() === name.toLowerCase()
        )
      );
      this.resetAndLoad(results);
    }
  }

  getSorted(name: string): void {
    this.selectedSortBy = name;
    const nameLower = name.toLowerCase();
    let sorted = [...PRODUCT_DATA];

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
      case 'discounted':
        sorted.sort((a, b) => {
          const discountA = +a.dealPrice - +a.base_price;
          const discountB = +b.dealPrice - +b.base_price;
          return discountB - discountA;
        });
        break;
    }
    this.resetAndLoad(sorted);
  }

  getGender(gender: string): void {
    if (gender.toLowerCase() === 'all') {
      this.resetAndLoad(PRODUCT_DATA);
    } else {
      const results = PRODUCT_DATA.filter(
        (card) => card.gender === gender.toLowerCase()
      );
      this.resetAndLoad(results);
    }
  }

  getPricing(base_priceRange: string): void {
    this.selectedPrice = base_priceRange;
    let filtered: Element[] = [];

    switch (base_priceRange) {
      case '0-50':
        filtered = PRODUCT_DATA.filter(
          (card) => +card.base_price >= 0 && +card.base_price <= 50
        );
        break;
      case '50-100':
        filtered = PRODUCT_DATA.filter(
          (card) => +card.base_price > 50 && +card.base_price <= 100
        );
        break;
      case '100-200':
        filtered = PRODUCT_DATA.filter(
          (card) => +card.base_price > 100 && +card.base_price <= 200
        );
        break;
      case 'over-200':
        filtered = PRODUCT_DATA.filter((card) => +card.base_price > 200);
        break;
      default:
        filtered = [...PRODUCT_DATA];
    }

    this.resetAndLoad(filtered);
  }

  getRestFilter() {
    this.selectedCategory = this.folders[0].name;
    this.selectedSortBy = this.notes[0].name;
    this.selectedGender = 'all';
    this.selectedPrice = 'all';
    this.searchText = '';
    this.resetAndLoad(PRODUCT_DATA);
  }

  // ========================
  // Misc Functions
  // ========================
  getProductList() {
    this.getRestFilter();
  }

  isOver(): boolean {
    return this.mediaMatcher.matches;
  }

  getAddProductRoute() {
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

  getDeletedById(id: number) {
    this.filteredCards = this.filteredCards.filter(
      (product) => product.id !== id
    );
    this.cdr.detectChanges();
    this.openSnackBar('Product deleted successfully!');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }

  getviewDetails(productcardDetails: Element) {
    this.productService.setProduct(productcardDetails);
    this.router.navigate(['apps/product/product-details']);
  }

  getEditedProduct(productcardDetails: Element) {
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
}
