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
  private router = inject(Router);
  readonly dialog = inject(MatDialog);
  private cdr = inject(ChangeDetectorRef);
  private _snackBar = inject(MatSnackBar);
  private productService = inject(ProductService);
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 1199px)`);
  isMobileView = false;
  languageCounts: { [key: string]: number } = {};

  // ========================
// Language Lazy Loading
// ========================
allLanguages: any[] = [];
displayedLanguages: any[] = [];
languagePageSize = 8;
languagePageIndex = 0;

loadLanguages(): void {
  // Fill from languageOptions
  this.allLanguages = this.languageOptions.map(lang => ({
    ...lang,
    count: this.languageCounts[lang.label] || 0
  }));

  // Initial 8 languages
  this.displayedLanguages = this.allLanguages.slice(0, this.languagePageSize);
  this.languagePageIndex = this.languagePageSize;
}

loadMoreLanguages(): void {
  const nextLanguages = this.allLanguages.slice(
    this.languagePageIndex,
    this.languagePageIndex + this.languagePageSize
  );

  if (nextLanguages.length > 0) {
    this.displayedLanguages.push(...nextLanguages);
    this.languagePageIndex += this.languagePageSize;
  }
}

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
    /*this.calculateLanguageCounts();
    this.loadMoreProducts(); // Load initial 8
    this.loadLanguages();   */
    this.calculateLanguageCounts();
  this.loadLanguages();
  this.resetAndLoad(PRODUCT_DATA); // Load initial 8 
  
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
// Pagination properties
// ========================
pageSizeInitial = 8;   // first load
pageSizeIncrement = 4; // load +4 each scroll
loadedCount = 0;
baseFilteredProducts: Element[] = [];


  // ========================
  // Lazy Loading Logic
  // ========================
    // ========================
// Load Products
// ========================
loadInitialProducts(): void {
  const source = this.baseFilteredProducts.length
    ? this.baseFilteredProducts
    : this.allProducts;

  this.filteredCards = source.slice(0, this.pageSizeInitial);
  this.loadedCount = this.pageSizeInitial;
}

loadMoreProducts(): void {
  const source = this.baseFilteredProducts.length
    ? this.baseFilteredProducts
    : this.allProducts;

  // Don’t load more if already loaded all
  if (this.loadedCount >= source.length) return;

  const nextBatch = source.slice(
    this.loadedCount,
    this.loadedCount + this.pageSizeIncrement
  );

  this.filteredCards = [...this.filteredCards, ...nextBatch];
  this.loadedCount += nextBatch.length;
}

// ========================
// Scroll Listener
// ========================
@HostListener('window:scroll', [])
onScroll(): void {
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  // When near the bottom (within 100px)
  if (scrollPosition >= pageHeight - 100) {
    this.loadMoreProducts();
  }
}

// ========================
// Reset and Load Helper
// ========================
resetAndLoad(data: Element[]): void {
  this.baseFilteredProducts = data;
  this.loadedCount = 0;
  this.filteredCards = [];
  this.loadInitialProducts();
}
// ========================
// Filter and Search
// ========================
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
  let results: Element[] = [];

  if (name.toLowerCase() === 'all') {
    results = PRODUCT_DATA;
  } else {
    results = PRODUCT_DATA.filter(
      (card) => card.skill?.toLowerCase() === name.toLowerCase()
    );
  }

  this.resetAndLoad(results);
  this.scrollToTop();
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
        return durA - durB;
      });
      break;
  }
  this.resetAndLoad(sorted);
  this.scrollToTop();
}

getLanguageFilter(language: string): void {
  this.selectedLanguage = language;
  const filterValue = language.trim().toLowerCase();

  if (filterValue === 'all') {
    this.resetAndLoad(PRODUCT_DATA);
  } else {
    const results = PRODUCT_DATA.filter(
      (card) => (card.language?.trim().toLowerCase() || '') === filterValue
    );
    this.resetAndLoad(results);
  }
  this.scrollToTop();
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
  this.selectedLanguage = 'all';
  this.selectedPrice = 'all';
  this.searchText = '';

  this.baseFilteredProducts = [];
  this.filteredCards = [];
  //this.currentPage = 1;

  this.loadMoreProducts();
}
openBookDemoDialog() { const dialogRef = this.dialog.open(PopupwindowComponent, { width: '500px', disableClose: true, autoFocus: true, }); dialogRef.afterClosed().subscribe((result) => { if (result) { console.log('Form submitted:', result); } }); }
  scrollToTop(): void { window.scrollTo({ top: 0, behavior: 'smooth' }); }
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
