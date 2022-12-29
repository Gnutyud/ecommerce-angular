import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: ProductItem;
  @Input() isHorizontal: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
