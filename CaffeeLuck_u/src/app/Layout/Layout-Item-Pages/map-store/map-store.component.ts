import { Component, Input } from '@angular/core';
import { InfoStoreComponent } from '../info-store/info-store.component';

@Component({
  selector: 'app-map-store',
  standalone: true,
  imports: [InfoStoreComponent],
  templateUrl: './map-store.component.html',
  styleUrl: './map-store.component.css'
})
export class MapStoreComponent {
  @Input() type = 1;
}
