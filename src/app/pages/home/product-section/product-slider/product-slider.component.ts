import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  ViewChild,
} from '@angular/core';
import { ProductItem } from 'src/app/core/data/schema/product';
// import Swiper core and required modules
import SwiperCore, { Grid } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Grid]);

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

  @ViewChild('productSlider', { static: false }) productSlider:
    | SwiperComponent
    | undefined;

  slideNext() {
    this.productSlider?.swiperRef.slideNext();
  }

  slidePrev() {
    this.productSlider?.swiperRef.slidePrev();
  }
}
