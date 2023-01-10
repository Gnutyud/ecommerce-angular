import { Component, OnInit } from '@angular/core';

interface Column {
  accessorKey: string;
  header: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  breadcrumbData = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Shopping Cart',
      link: '',
    },
  ];

  columns: Column[] = [
    {
      accessorKey: '',
      header: 'Delete',
    },
    {
      accessorKey: 'image',
      header: 'Image',
    },
    {
      accessorKey: 'productName',
      header: 'Product Name',
    },
    {
      accessorKey: 'currentPrice',
      header: 'Price',
    },
    {
      accessorKey: 'quantity',
      header: 'quantity',
    },
    {
      accessorKey: 'total',
      header: 'Total',
    },
  ];

  data = [
    {
      image: 'assets/images/product/product1.jpg',
      productName: 'Handbag fringilla',
      currentPrice: '£65.00',
      quantity: 1,
      total: '£190.00',
    },
    {
      image: 'assets/images/product/product2.jpg',
      productName: 'Handbags Justo',
      currentPrice: '£90.00',
      quantity: 5,
      total: '£920.00',
    },
    {
      image: 'assets/images/product/product8.jpg',
      productName: 'Handbag Elit',
      currentPrice: '£54.00',
      quantity: 3,
      total: '£510.00',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
