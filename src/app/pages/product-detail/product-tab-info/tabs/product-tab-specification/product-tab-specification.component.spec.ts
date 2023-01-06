import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabSpecificationComponent } from './product-tab-specification.component';

describe('ProductTabSpecificationComponent', () => {
  let component: ProductTabSpecificationComponent;
  let fixture: ComponentFixture<ProductTabSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabSpecificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTabSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
