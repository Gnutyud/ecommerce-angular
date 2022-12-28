import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, EffectFade } from 'swiper';

// install Swiper modules
SwiperCore.use([Keyboard, Pagination, EffectFade]);

@Component({
  selector: 'app-header-swiper',
  templateUrl: './header-swiper.component.html',
  styleUrls: ['./header-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderSwiperComponent implements OnInit {
  constructor() {}
  bannerData = [
    {
      backgroundImageUrl: 'assets/images/slider/slider1.jpg',
      title: 'Vegetables Big Sale',
      subtitle: 'Fresh Farm Products',
      desc: '10% certifled-organic mix of fruit and veggies. Perfect for weekly cooking and snacking!',
      link: '/home',
    },
    {
      backgroundImageUrl: 'assets/images/slider/slider2.jpg',
      title: 'Fresh Vegetables',
      subtitle: 'Natural Farm Products',
      desc: 'Widest range of farm-fresh Vegetables, Fruits & seasonal produce',
      link: '/home/shop',
    },
    {
      backgroundImageUrl: 'assets/images/slider/slider3.jpg',
      title: 'Fresh Tomatoes',
      subtitle: 'Natural Farm Products',
      desc: 'Natural organic tomatoes make your health stronger. Put your information here',
      link: '/shop',
    },
  ];

  ngOnInit(): void {}
}
