import { Component } from '@angular/core';
import { SlideComponent } from '../../Layout-Item-Pages/slide/slide.component';
import { SubtitleIconComponent } from '../../Layout-Item-Pages/subtitle-icon/subtitle-icon.component';
import { InfoStoreComponent } from '../../Layout-Item-Pages/info-store/info-store.component';
import { MapStoreComponent } from '../../Layout-Item-Pages/map-store/map-store.component';
import { WelcomeStoreComponent } from '../../Layout-Item-Pages/welcome-store/welcome-store.component';
import { InstagramStoreComponent } from '../../Layout-Item-Pages/instagram-store/instagram-store.component';
import { TeamStoreComponent } from '../../Layout-Item-Pages/team-store/team-store.component';
import { BlogUpdateComponent } from '../../Layout-Item-Pages/blog-update/blog-update.component';
import { CoffeBlendsComponent } from '../../Layout-Item-Pages/coffe-blends/coffe-blends.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlideComponent, 
    SubtitleIconComponent, 
    InfoStoreComponent, 
    MapStoreComponent, 
    WelcomeStoreComponent, 
    InstagramStoreComponent, 
    TeamStoreComponent, 
    BlogUpdateComponent, 
    CoffeBlendsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
