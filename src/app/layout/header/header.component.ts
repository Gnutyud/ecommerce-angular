import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  constructor() {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let scrollTopLength =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTopLength > 180) {
      this.isSticky = true;
    }
    if (scrollTopLength <= 140) this.isSticky = false;
  }

  ngOnInit(): void {}
}
