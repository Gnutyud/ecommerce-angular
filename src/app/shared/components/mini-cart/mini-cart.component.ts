import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.scss'],
})
export class MiniCartComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() onCloseMiniCartEvent = new EventEmitter<boolean>();

  cartList = [
    {
      name: 'Primis In Faucibus',
      image: 'assets/images/product/product8.jpg',
      quantity: 1,
      currentPrice: '$65.00',
    },
    {
      name: 'Primis In Faucibus',
      image: 'assets/images/product/product2.jpg',
      quantity: 5,
      currentPrice: '$15.00',
    },
    {
      name: 'Primis In Faucibus',
      image: 'assets/images/product/product1.jpg',
      quantity: 3,
      currentPrice: '$35.00',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.onCloseMiniCartEvent.emit(false);
  }
}
