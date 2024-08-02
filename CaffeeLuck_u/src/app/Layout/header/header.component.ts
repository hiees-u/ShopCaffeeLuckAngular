import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgOptimizedImage, CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Output() pageSelected = new EventEmitter<string>();

  activeString = 'HOME';

  imgLogo = '/assets/logo.jpg';

  ngOnInit() {
    this.onPageSelected('HOME');
  }

  onPageSelected(pageName: string) {
    this.pageSelected.emit(pageName);
    this.activeString = pageName;  
  }
}
