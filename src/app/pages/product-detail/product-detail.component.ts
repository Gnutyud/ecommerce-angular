import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  breadcrumbData = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'All Product',
      link: '/all-product',
    },
    {
      name: 'Product Detail',
      link: '',
    },
  ];
  constructor(private productService: ProductService) {}
  productDetail = this.productService.productList[0];
  relatedProducts = this.productService.productList;

  ngOnInit(): void {}
}
