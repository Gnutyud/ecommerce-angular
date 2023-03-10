import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  breadcrumbData = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Wishlist',
      link: '',
    },
  ];

  columns = [
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
      accessorKey: 'avaiable',
      header: 'Available',
    },
    {
      accessorKey: '',
      header: 'Add To Cart',
    },
  ];

  data = [
    {
      image: 'assets/images/product/product1.jpg',
      productName: 'Handbag fringilla',
      currentPrice: '£65.00',
      available: true,
    },
    {
      image: 'assets/images/product/product2.jpg',
      productName: 'Handbags Justo',
      currentPrice: '£90.00',
      available: true,
    },
    {
      image: 'assets/images/product/product8.jpg',
      productName: 'Handbag Elit',
      currentPrice: '£54.00',
      available: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
