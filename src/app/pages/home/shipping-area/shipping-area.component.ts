import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-area',
  templateUrl: './shipping-area.component.html',
  styleUrls: ['./shipping-area.component.scss'],
})
export class ShippingAreaComponent implements OnInit {
  shippingData = [
    {
      imagePath: 'assets/images/about/shipping1.jpg',
      title: 'Free Shipping',
      desc: 'Free shipping on all US order or order above $200',
    },
    {
      imagePath: 'assets/images/about/shipping2.jpg',
      title: 'Support 24/7',
      desc: 'Contact us 24 hours a day, 7 days a week',
    },
    {
      imagePath: 'assets/images/about/shipping3.jpg',
      title: '30 Days Return',
      desc: 'Simply return it within 30 days for an exchange',
    },
    {
      imagePath: 'assets/images/about/shipping4.jpg',
      title: '100% Payment Secure',
      desc: 'We ensure secure payment with PEV',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
