import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {
  @Input() sectionTitle: string = "Recently added our store";
  @Input() sectionDesc: string = "Trending Products";
  @Input() tabList: string[] = [];
  @Input() activeTab: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
