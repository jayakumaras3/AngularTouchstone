import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Element, PRODUCT_DATA } from '../pages/apps/ecommerce/ecommerceData';

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  private readonly http = inject(HttpClient);

  private readonly productDataUrl = 'assets/data/product-data.json';

  /**
   * Loads product data from an external JSON under /assets so it can be edited after build.
   * Falls back to the compiled TS constant if the JSON is missing/unreachable.
   */
  getProducts(options?: { bustCache?: boolean }): Observable<Element[]> {
    const url = options?.bustCache
      ? `${this.productDataUrl}?v=${Date.now()}`
      : this.productDataUrl;

    return this.http.get<unknown>(url).pipe(
      map((value) => (Array.isArray(value) ? (value as Element[]) : [])),
      map((items) => items.filter(Boolean)),
      catchError(() => of(PRODUCT_DATA))
    );
  }
}
