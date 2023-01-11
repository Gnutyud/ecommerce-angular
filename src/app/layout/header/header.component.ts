import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSticky: boolean = false;
  constructor(private authService: AuthService) {}
  isLoggedIn = this.authService.loggedIn;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let scrollTopLength =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTopLength > 180) {
      this.isSticky = true;
    }
    if (scrollTopLength <= 140) this.isSticky = false;
  }

  ngOnInit() {}

  onLogout() {
    this.authService.logout();
  }

  ngDoCheck() {
    this.isLoggedIn = this.authService.loggedIn;
  }
}
