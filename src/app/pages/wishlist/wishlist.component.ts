import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
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
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
