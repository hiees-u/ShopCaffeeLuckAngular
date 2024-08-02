import { Component } from '@angular/core';
import { SubtitleIconComponent } from '../subtitle-icon/subtitle-icon.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-instagram-store',
  standalone: true,
  imports: [SubtitleIconComponent, NgOptimizedImage],
  templateUrl: './instagram-store.component.html',
  styleUrl: './instagram-store.component.css'
})
export class InstagramStoreComponent {
  urlIntagram = 'https://www.instagram.com/hiees.u/';

  ImagesIns = [
    {
      "Int_image": '/assets/Instagram-images/image-9-370x370.jpg'
    },{
      "Int_image": '/assets/Instagram-images/image-7-370x370.jpg'
    },{
      "Int_image": '/assets/Instagram-images/image-6-370x370.jpg'
    },{
      "Int_image": '/assets/Instagram-images/image-4-370x370.jpg'
    },{
      "Int_image": '/assets/Instagram-images/image-16-370x250.jpg'
    },{
      "Int_image": '/assets/Instagram-images/image-15-370x250.jpg'
    }
  ]
}
