import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTabDescriptionComponent } from './product-tab-description.component';

describe('ProductTabDescriptionComponent', () => {
  let component: ProductTabDescriptionComponent;
  let fixture: ComponentFixture<ProductTabDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTabDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTabDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
