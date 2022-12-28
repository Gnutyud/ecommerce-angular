import { Component, Input, OnInit } from '@angular/core';
import { HeaderBanner } from '../header-swiper.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() dataItem!: HeaderBanner;
  constructor() {}

  ngOnInit(): void {}
}
