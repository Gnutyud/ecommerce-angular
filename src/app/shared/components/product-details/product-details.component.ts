import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductItem } from 'src/app/core/data/schema/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private productService: ProductService) {}
  @Input() productDetail!: ProductItem;
  relatedProducts = this.productService.productList;
  currentImageSrc = "";

  onSelectProductImage(imageSrc: string) {
    this.currentImageSrc = imageSrc;
  }

  ngOnInit(): void {
    this.currentImageSrc = this.productDetail?.imageGalleries[0];
  }

}
