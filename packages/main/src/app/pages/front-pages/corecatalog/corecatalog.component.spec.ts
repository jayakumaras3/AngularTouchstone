import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorecatalogComponent } from './corecatalog.component';

describe('CorecatalogComponent', () => {
  let component: CorecatalogComponent;
  let fixture: ComponentFixture<CorecatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorecatalogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
