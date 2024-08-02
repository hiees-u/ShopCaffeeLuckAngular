import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-panel-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './panel-header.component.html',
  styleUrl: './panel-header.component.css'
})
export class PanelHeaderComponent {
  bannerURL = '/assets/header_bg-1.jpg';
}
