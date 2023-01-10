import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  breadcrumbData = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Login',
      link: '',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
