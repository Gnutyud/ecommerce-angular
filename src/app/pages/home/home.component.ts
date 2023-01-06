import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ProductService } from './../../core/services/product.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
<<<<<<< Updated upstream

  constructor() { }
=======
  constructor(private productService: ProductService) { }
  productList = this.productService.productList;
>>>>>>> Stashed changes

  ngOnInit(): void {
  }

}
