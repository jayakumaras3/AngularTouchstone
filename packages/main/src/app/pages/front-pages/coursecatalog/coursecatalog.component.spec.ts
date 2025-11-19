import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecatalogComponent } from './coursecatalog.component';

describe('CoursecatalogComponent', () => {
  let component: CoursecatalogComponent;
  let fixture: ComponentFixture<CoursecatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursecatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
