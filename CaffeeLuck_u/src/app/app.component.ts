import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Layout/login/login.component';
import { PagesComponent } from './Layout/Pages/pages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, PagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'CaffeeLuck_u';
  singIn = false;

  constructor() {}

  imgLogo = './assets/background-11.jpg';

  ngOnInit() {
    // Check if 'isLoggedIn' is already stored in localStorage
    const retrievedIsLoggedIn = localStorage.getItem('isLoggedIn');
    if (retrievedIsLoggedIn !== null) {
      this.singIn = JSON.parse(retrievedIsLoggedIn) as boolean;
    }
  }

  onLogin(isLogin: boolean) {
    this.singIn = isLogin;
    if (this.singIn) {
      localStorage.setItem('isLoggedIn', this.singIn.toString());
    } else {
      localStorage.removeItem('isLoggedIn');
    }
  }
}
