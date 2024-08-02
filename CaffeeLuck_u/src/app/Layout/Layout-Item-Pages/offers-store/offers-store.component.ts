import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-offers-store',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './offers-store.component.html',
  styleUrl: './offers-store.component.css'
})
export class OffersStoreComponent {
  imgUrlIcon = '/assets/icon-2.png';
}
