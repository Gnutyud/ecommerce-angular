import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSwiperComponent } from './header-swiper.component';

describe('HeaderSwiperComponent', () => {
  let component: HeaderSwiperComponent;
  let fixture: ComponentFixture<HeaderSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
