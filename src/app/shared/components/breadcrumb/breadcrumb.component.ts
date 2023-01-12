import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbData: { name: string; link: string }[] = [];
  @Input() pageTitle?: string;
  constructor() {}

  ngOnInit(): void {}
}
