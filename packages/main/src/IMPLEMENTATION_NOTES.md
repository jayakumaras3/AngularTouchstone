# Chatbot Course Navigation Implementation

## Overview
Implemented internal navigation for Dia Assistant chatbot course suggestions. Clicking "View Details" button now navigates to the internal course details page using Angular Router, matching the behavior of Course Catalog and SME Catalog cards.

## Changes Made

### 1. **Dia Assistant Component (`dia-assistant.component.ts`)**

#### Imports Added
```typescript
import { Router } from '@angular/router';
import { ProductService } from '../../services/apps/product/product.service';
import { NavService } from '../../services/nav.service';
```

#### Constructor Updated
Added three new service injections:
- `Router` - for internal navigation
- `ProductService` - for storing selected product data
- `NavService` - for tracking referrer URL for back navigation

#### DiaCourse Interface Enhanced
```typescript
interface DiaCourse {
  id: number;
  title: string;
  category: string;
  duration: number;
  language: string;
  description: string;
  objectives: string;
  url: string;
  keywords: string[];
  product?: any; // NEW: Store the full product object for navigation
}
```

#### mapToDiaCourse Method Updated
Now includes the full product object:
```typescript
return {
  id: item.id,
  title,
  category,
  duration,
  language,
  description,
  objectives,
  url,
  keywords,
  product: item as any, // Store full product object for navigation
};
```

#### New Navigation Method
```typescript
/**
 * Navigate to course details page using Angular Router
 * Follows the same pattern as Course Catalog and SME Catalog
 * @param course The course to navigate to
 */
goToCourseDetails(course: DiaCourse): void {
  if (course.product) {
    // Store current URL as referrer for back navigation
    this.navService.setReferrerUrl(this.router.url);
    // Set the selected product for the details page
    this.productService.setProduct(course.product);
    // Navigate to course details page
    this.router.navigate(['/coursedetails']);
  }
}
```

### 2. **Dia Assistant Template (`dia-assistant.component.html`)**

#### Before
```html
<a [href]="formatUrl(course.url)" target="_blank" rel="noopener noreferrer">View Details</a>
```

#### After
```html
<button 
  class="dia-view-details-btn"
  type="button"
  (click)="goToCourseDetails(course)"
  aria-label="View course details"
>
  View Details
</button>
```

### 3. **Dia Assistant Styles (`dia-assistant.component.scss`)**

Added button-specific styling to match the previous link styling:
```scss
.dia-view-details-btn {
  padding: 6px 10px;
  border-radius: 12px;
  background: #f1f5f9;
  font-size: 11px;
  font-weight: 700;
  color: #0f172a;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dia-view-details-btn:hover {
  background: #2563eb;
  color: #ffffff;
}
```

## Routing Behavior

### Current Flow
1. User types a query in the Dia Assistant chatbot
2. Chatbot suggests courses with "View Details" button
3. User clicks "View Details"
4. Component stores:
   - Current URL in `NavService.previousUrl` for back navigation
   - Selected course product in `ProductService`
5. Angular Router navigates to `/coursedetails` route
6. ProductDetailsComponent retrieves the product from `ProductService`

### Route Pattern
```
/coursedetails (no ID needed, uses product from ProductService)
```

## Key Features

✅ **Internal Navigation** - No page reload, stays within SPA
✅ **Consistent UX** - Matches Course Catalog and SME Catalog behavior
✅ **Back Navigation** - Previous URL is stored for proper back button navigation
✅ **No External Links** - Does not use `window.open`, `href`, or full URLs
✅ **Accessible** - Includes proper `aria-label` on button
✅ **Responsive** - Works on all screen sizes

## Testing Checklist

- [ ] Open Dia Assistant chatbot
- [ ] Search for a course (e.g., "leadership", "cybersecurity")
- [ ] Click "View Details" on a suggested course
- [ ] Verify page navigates to `/coursedetails`
- [ ] Verify course details are displayed correctly
- [ ] Test back button/back navigation
- [ ] Test on mobile devices
- [ ] Test with multiple courses in cascade
- [ ] Verify no console errors

## Compatibility

This implementation reuses the existing routing pattern from:
- [coursecatalog.component.ts](app/pages/front-pages/coursecatalog/coursecatalog.component.ts#L90)
- [sme-category.component.ts](app/pages/front-pages/sme-catalog/sme-category.component.ts#L85)

The same services are already used throughout the application:
- `ProductService` - stores/retrieves selected product
- `NavService` - manages referrer URL for back navigation
- `Router` - handles internal navigation

## Future Enhancements

- Add loading indicator while navigating
- Add toast notification confirming navigation
- Track analytics for chatbot course selections
- Add "Save for Later" functionality to course cards
