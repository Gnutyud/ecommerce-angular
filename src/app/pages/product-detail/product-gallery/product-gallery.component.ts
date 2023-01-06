import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Grid, Keyboard, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { ProductService } from '../../../core/services/product.service';

// install Swiper modules
SwiperCore.use([Keyboard, Grid, Virtual]);

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductGalleryComponent implements OnInit {
  @Input() productDetail: { imageName: string; imagePath: string }[] = [];
  @Input() slidePerView: number = 4;
  @Input() spaceBetween: number = 15;
  @Input() grid: { fill: 'row' | 'column'; rows: number } = {
    fill: 'column',
    rows: 1,
  };
  @Output() changCurrentImageEvent = new EventEmitter<string>();
  constructor(private productService: ProductService) {}

  productImages = this.productService.productList[0].imageGalleries;

  ngOnInit(): void {}

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  };

  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  };

  handleSelectImage(imageSrc: string) {
    this.changCurrentImageEvent.emit(imageSrc);
  };
  
}
