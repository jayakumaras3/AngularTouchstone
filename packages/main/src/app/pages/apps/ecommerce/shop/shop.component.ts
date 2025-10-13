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

  /*selectedGender: string = 'all';
  genderOptions = [
    { label: 'All', value: 'all' },
    { label: 'English', value: 'english' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'German', value: 'german' },
    { label: 'Italian', value: 'italian' },    
    { label: 'French', value: 'french' },
  ];*/
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

 /* getCategory(name: string): void {
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
  }*/
 getCategory(name: string): void {
  this.selectedCategory = name;

  if (name.toLowerCase() === 'all') {
    this.resetAndLoad(PRODUCT_DATA);
  } else {
    const results = PRODUCT_DATA.filter(
      (card) => card.skill?.toLowerCase() === name.toLowerCase()
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
    case 'duration':
      sorted.sort((a, b) => {
        const durA = Number(a.duration) || 0;
        const durB = Number(b.duration) || 0;
        return durA - durB; // ascending order (shorter first)
      });
      break;
  }
  this.resetAndLoad(sorted);
}

 /* getGender(gender: string): void {
    if (gender.toLowerCase() === 'all') {
      this.resetAndLoad(PRODUCT_DATA);
    } else {
      const results = PRODUCT_DATA.filter(
        (card) => card.gender === gender.toLowerCase()
      );
      this.resetAndLoad(results);
    }
  }*/
 getLanguageFilter(language: string): void {
  this.selectedLanguage = language;

  // Normalize casing
  const filterValue = language.trim().toLowerCase();

  if (filterValue === 'all') {
    this.resetAndLoad(PRODUCT_DATA);
    return;
  }

  // Filter using language field from PRODUCT_DATA
  const results = PRODUCT_DATA.filter((card) => {
    const lang = card.language?.trim().toLowerCase() || '';
    return lang === filterValue;
  });

  this.resetAndLoad(results);
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
//It loads 500 courses at once.
/*  getRestFilter() {
    this.selectedCategory = this.folders[0].name;
    this.selectedSortBy = this.notes[0].name;
    this.selectedGender = 'all';
    this.selectedPrice = 'all';
    this.searchText = '';
    this.resetAndLoad(PRODUCT_DATA);
  } */
 // So changed to load 16 courses at once
getRestFilter() {
  this.selectedCategory = this.folders[0].name;
  this.selectedSortBy = this.notes[0].name;
  this.selectedLanguage = 'all';
  this.selectedPrice = 'all';
  this.searchText = '';

  // Reset all product arrays and pagination
  this.allProducts = PRODUCT_DATA;
  this.filteredCards = [];
  this.currentPage = 1;

  // Load first 16 products only
  this.loadMoreProducts();
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
