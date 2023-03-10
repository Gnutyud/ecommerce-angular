import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingAreaComponent } from './shipping-area.component';

describe('ShippingAreaComponent', () => {
  let component: ShippingAreaComponent;
  let fixture: ComponentFixture<ShippingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
