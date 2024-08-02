import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../Pages/home/home.component';
import {RouterOutlet} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RouterOutlet
  ],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent {
  constructor(private router: Router) {}

  ChangePage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
