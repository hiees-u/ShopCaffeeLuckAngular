import { Component } from '@angular/core';
import { SubtitleIconComponent } from '../subtitle-icon/subtitle-icon.component';

@Component({
  selector: 'app-blog-update',
  standalone: true,
  imports: [SubtitleIconComponent],
  templateUrl: './blog-update.component.html',
  styleUrl: './blog-update.component.css'
})
export class BlogUpdateComponent {
  posts = [
    {
      time: 'AUG 8, 2016',
      name: 'Guide to Coffee Brewing',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales…',
      countComment: 3
    },
    {
      time: 'AUG 8, 2016',
      name: 'Dispatches: South Pacific',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales…',
      countComment: 3
    },
    {
      time: 'AUG 8, 2016',
      name: 'Summer 2016 Arrivals',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales…',
      countComment: 3
    }
  ]
}
