import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-subtitle-icon',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './subtitle-icon.component.html',
  styleUrl: './subtitle-icon.component.css'
})
export class SubtitleIconComponent {
  @Input() textIconSubtitle = '';

  iconImage = '/assets/subtitle-icon.png';
}
