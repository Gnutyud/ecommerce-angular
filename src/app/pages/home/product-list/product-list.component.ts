import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductItem } from 'src/app/core/data/schema/product';
// import Swiper core and required modules
import SwiperCore, { Keyboard, Navigation, Grid } from 'swiper';

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
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
    {
      imageGalleries: [
        'assets/images/product/product5.jpg',
        'assets/images/product/product1.jpg',
        'assets/images/product/product2.jpg',
        'assets/images/product/product8.jpg',
        'assets/images/product/product7.jpg',
        'assets/images/product/product6.jpg',
      ],
      name: 'Aliquam Consequat',
      category: 'Fruits',
      currentPrice: '$26.00',
      oldPrice: '$362.00',
      isSale: true,
      isNew: true,
      description: 'asdjadjadjadj',
      customerRating: 0,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
