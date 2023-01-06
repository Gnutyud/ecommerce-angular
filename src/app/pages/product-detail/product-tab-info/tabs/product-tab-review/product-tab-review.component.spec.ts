import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabReviewComponent } from './product-tab-review.component';

describe('ProductTabReviewComponent', () => {
  let component: ProductTabReviewComponent;
  let fixture: ComponentFixture<ProductTabReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTabReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
