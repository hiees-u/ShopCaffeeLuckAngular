import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-fundametails-store',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './fundametails-store.component.html',
  styleUrl: './fundametails-store.component.css'
})
export class FundametailsStoreComponent {
  imgUrl = '/assets/tabs/tab-1.jpg';
}
