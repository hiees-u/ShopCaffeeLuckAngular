import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-store',
  standalone: true,
  imports: [],
  templateUrl: './info-store.component.html',
  styleUrl: './info-store.component.css'
})
export class InfoStoreComponent {
  @Input() type = 1;
}
