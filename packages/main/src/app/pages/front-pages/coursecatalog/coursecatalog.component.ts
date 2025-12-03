import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Element, PRODUCT_DATA } from '../../apps/ecommerce/ecommerceData';

type Course = { title: string; author?: string; duration?: string };
type SubCategory = { name: string; courses: Course[] };
interface Category {
  title: string;
  count: number;
  subCategories: SubCategory[];
}

@Component({
  selector: 'app-course-catalog',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './coursecatalog.component.html',
  styleUrls: ['./coursecatalog.component.scss']
})
export class CourseCatalogComponent {
  private allProducts: Element[] = PRODUCT_DATA;
  
  leftColumn: any[] = [];
  rightColumns: any[] = [];
  totalCourses: number = 0;

  mainTitle = 'Course Catalog';
  subTitle = 'Micro Learning (500)';

  constructor() {
    const catalogData = this.mapProductDataToCatalog();
    this.leftColumn = [catalogData[0]];
    this.rightColumns = catalogData.slice(1);
  }

  ngOnInit() {
    // Calculate total courses from PRODUCT_DATA
    this.totalCourses = this.allProducts.length;
  }

  private mapProductDataToCatalog(): Category[] {
    const categoryMap = new Map<string, Category>();

   PRODUCT_DATA.forEach(product => {
  const skill = product.skill ?? 'Unknown Skill';   // <-- FIXED
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
      title: product.product_name,
      duration: product.duration ? product.duration + ' min' : undefined
    });
  });
});


    return Array.from(categoryMap.values());
  }
}
