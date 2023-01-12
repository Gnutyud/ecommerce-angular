import {
  Component, OnInit
} from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  page: number = 1;
  itemsPerPage: number = 12;
  grid: number = 3;
  breadcrumbData = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Shop',
      link: '',
    },
  ];
  isShowOrderByMenu: boolean = false;
  orderBy: number = 1;
  orderByList = [
    {
      id: 1,
      name: 'Sort by average rating',
    },
    {
      id: 2,
      name: 'Sort by popularity',
    },
    {
      id: 3,
      name: 'Sort by newness',
    },
    {
      id: 4,
      name: 'Sort by price: low to high',
    },
    {
      id: 5,
      name: 'Sort by price: high to low',
    },
  ];
  orderByValue(orderId: number) {
    return this.orderByList.find((i) => i.id === orderId)?.name;
  }

  constructor(private productService: ProductService) {}
  productList = this.productService.productList;
  ngOnInit(): void {}

  onChangeLayout(gridColumn: number) {
    this.grid = gridColumn;
  }

  onOpenDropdownMenu() {
    this.isShowOrderByMenu = !this.isShowOrderByMenu;
  }

  onSelectOrderBy(value: number) {
    this.orderBy = value;
  }
}
