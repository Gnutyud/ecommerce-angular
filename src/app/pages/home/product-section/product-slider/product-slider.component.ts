import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ProductItem } from '../product.model';
// import Swiper core and required modules
import SwiperCore, { Grid, Keyboard, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Keyboard, Navigation, Grid]);

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductSliderComponent implements OnInit {
  @Input() productList: ProductItem[] = [];
  @Input() slidePerView: number = 5;
  @Input() spaceBetween: number = 30;
  @Input() grid: { fill: 'row' | 'column'; rows: number } = {
    fill: 'column',
    rows: 1,
  };
  @Input() isHorizontal: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
