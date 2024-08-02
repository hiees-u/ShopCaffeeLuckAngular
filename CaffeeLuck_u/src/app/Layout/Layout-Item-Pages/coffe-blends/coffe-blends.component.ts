import { Component } from '@angular/core';
import { SubtitleIconComponent } from '../subtitle-icon/subtitle-icon.component';
import { NgOptimizedImage } from '@angular/common';
import { OffersStoreComponent } from '../offers-store/offers-store.component';
import { ServicesStoreComponent }from '../services-store/services-store.component';

@Component({
  selector: 'app-coffe-blends',
  standalone: true,
  imports: [SubtitleIconComponent, NgOptimizedImage, OffersStoreComponent, ServicesStoreComponent],
  templateUrl: './coffe-blends.component.html',
  styleUrl: './coffe-blends.component.css'
})
export class CoffeBlendsComponent {

  TheFundamentals = [
    {
      header: 'CHEMEX',
      content: 'Coffeemaker consists of an hourglass-shaped glass flask with a conical funnel-like neck, so brewing coffee have rich flavor',
      imageUrl: '/assets/tabs/tab-1.jpg'
    },
    {
      header: 'AEROPRESS',
      content: 'It is a device for brewing coffee. Coffee is steeped for 50 seconds, then forced through a filter by pressing the plunger.',
      imageUrl: '/assets/tabs/tab-2.jpg'
    },
    {
      header: 'FRENCH PRESS',
      content: 'The modern French press consists of a narrow cylindrical beaker, equipped with lid and plunger that fits tightly in the cylinder.',
      imageUrl: '/assets/tabs/tab-3.jpg'
    },
    {
      header: 'CLEVER DRIPPER',
      content: 'It is a method which involves pouring water over roasted, ground coffee beans contained in a filter, creating perfect coffee.',
      imageUrl: '/assets/tabs/tab-4.jpg'
    }
  ]

  active = 0;

  setActive(tempActive: number) {
    this.active = tempActive;  
  }
}
