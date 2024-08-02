import { Component } from '@angular/core';
import { SubtitleIconComponent } from '../subtitle-icon/subtitle-icon.component';

@Component({
  selector: 'app-question-store',
  standalone: true,
  imports: [
    SubtitleIconComponent,
  ],
  templateUrl: './question-store.component.html',
  styleUrl: './question-store.component.css'
})
export class QuestionStoreComponent {

}
