import { Component } from '@angular/core';
import { PanelHeaderComponent } from '../../Layout-Item-Pages/panel-header/panel-header.component';
import { MapStoreComponent } from '../../Layout-Item-Pages/map-store/map-store.component';
import { QuestionStoreComponent } from '../../Layout-Item-Pages/question-store/question-store.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    PanelHeaderComponent,
    MapStoreComponent,
    QuestionStoreComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
