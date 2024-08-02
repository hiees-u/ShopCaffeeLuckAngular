import { Component } from '@angular/core';
import { SubtitleIconComponent } from '../subtitle-icon/subtitle-icon.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-team-store',
  standalone: true,
  imports: [SubtitleIconComponent, NgOptimizedImage],
  templateUrl: './team-store.component.html',
  styleUrl: './team-store.component.css'
})
export class TeamStoreComponent {
  teamLst = [{
    "image": '/assets/Members/team-1-370x414.jpg',
    "Name": 'ANITA GOLDEN',
    "position": 'CO-FOUNDER'
  },{
    "image": '/assets/Members/team-2-370x414.jpg',
    "Name": 'DEVIN BREWER',
    "position": 'BARISTA'
  },{
    "image": '/assets/Members/team-3-370x414.jpg',
    "Name": 'ANNE MARSH',
    "position": 'BARISTA'
  }
]
}
