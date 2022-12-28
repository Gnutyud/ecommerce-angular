import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Keyboard, Navigation, Grid } from 'swiper';
import { ProductItem } from './product.model';

// install Swiper modules
SwiperCore.use([Keyboard, Navigation, Grid]);

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
  productList: ProductItem[] = [
    {
      mainImage: 'assets/images/product/product7.jpg',
      secondImage: 'assets/images/product/product6.jpg',
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    },
    {
      mainImage: 'assets/images/product/product5.jpg',
      secondImage: 'assets/images/product/product8.jpg',
      name: 'Cas Meque Metus',
      category: 'Fruits',
      currentPrice: '$56.00',
      oldPrice: '$109.00',
      isSale: true,
      isNew: false,
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
