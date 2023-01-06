import { Component, OnInit } from '@angular/core';

type tabType = 'desc' | 'spec' | 'review';

@Component({
  selector: 'app-product-tab-info',
  templateUrl: './product-tab-info.component.html',
  styleUrls: ['./product-tab-info.component.scss']
})

export class ProductTabInfoComponent implements OnInit {
  currentTabInfo: tabType = 'review'; 
  constructor() { }

  ngOnInit(): void {
  }

  onSelectTab(tab: tabType) {
    this.currentTabInfo = tab;
  }

}
