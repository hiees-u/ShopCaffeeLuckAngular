import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { InfoStoreComponent } from '../info-store/info-store.component';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [
    NgOptimizedImage,
    InfoStoreComponent
  ],
  templateUrl: './slide.component.html',
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  sliders = [
    {
      imgScr: '/assets/Slides/slide1.jpg',
      headerText: 'COFFEE WITH OWT STORY',
      contentText: 'visit our the best coffee shop'
    }, {
      imgScr: '/assets/Slides/slide2.jpg',
      headerText: 'FRESH. ORGANIC. HANDCRAFTED',
      contentText: 'your favorite coffee'
    }, {
      imgScr: '/assets/Slides/slide3.jpg',
      headerText: 'EXPERIENCE THE FULL TASTE',
      contentText: 'of the best coffee'
    }
  ]

  active = 100;

  valStyle = 0;

  divStyle = { transform: 'translateX(' + this.valStyle + '%)', };

  handle(temp: number) {
    if (temp == 1 && this.valStyle == 0) {
      this.valStyle = this.valStyle + ((this.sliders.length - 1) * (this.active) * -1);
      this.divStyle = { transform: 'translateX(' + this.valStyle + '%)', };
      return;
    }
    
    if (temp == -1 && this.valStyle == ((this.sliders.length - 1) * this.active * -1)) {
      this.valStyle = 0;
      this.divStyle = { transform: 'translateX(' + this.valStyle + '%)', };
      return;
    }

    this.valStyle = this.valStyle + (this.active * temp);
    this.divStyle = { transform: 'translateX(' + this.valStyle + '%)', };
    console.log();    
  }
}
