import { Component } from '@angular/core';
import { SubtitleIconComponent } from '../subtitle-icon/subtitle-icon.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-welcome-store',
  standalone: true,
  imports: [SubtitleIconComponent, NgOptimizedImage],
  templateUrl: './welcome-store.component.html',
  styleUrl: './welcome-store.component.css'
})
export class WelcomeStoreComponent {
  imgBannerUrl = '/assets/background-11.jpg';

  listImages = [
    {
      textMain: 'WHO WE ARE',
      text: 'history',
      imgUrl: '/assets/image-15-370x250.jpg'
    },
    {
      textMain: 'OUR COFFEE',
      text: 'online store',
      imgUrl: '/assets/image-16-370x250.jpg'
    },
    {
      textMain: 'VISIT US!',
      text: 'location',
      imgUrl: '/assets/image-17-370x250.jpg'
    }
  ]
}
