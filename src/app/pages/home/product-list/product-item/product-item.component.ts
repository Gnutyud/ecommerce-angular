import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/core/data/schema/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: ProductItem;
  constructor() { }

  ngOnInit(): void {
  }

}
