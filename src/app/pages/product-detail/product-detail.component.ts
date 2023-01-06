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
      link: 'home.html',
    },
    {
      name: 'All Product',
      link: 'all-product.html',
    },
    {
      name: 'Product Detail',
      link: '',
    },
  ];
  constructor(private productService: ProductService) {}
  productDetail = this.productService.productList[0];
  relatedProducts = this.productService.productList;
  currentImageSrc = this.productDetail.imageGalleries[0];

  onSelectProductImage(imageSrc: string) {
    this.currentImageSrc = imageSrc;
  }

  ngOnInit(): void {}
}
