import { Component } from '@angular/core';
import { PanelHeaderComponent } from '../../Layout-Item-Pages/panel-header/panel-header.component';
import { OffersStoreComponent } from '../../Layout-Item-Pages/offers-store/offers-store.component';
import { ServicesStoreComponent } from '../../Layout-Item-Pages/services-store/services-store.component';
import { TeamStoreComponent } from '../../Layout-Item-Pages/team-store/team-store.component';
import { FundametailsStoreComponent } from '../../Layout-Item-Pages/fundametails-store/fundametails-store.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    PanelHeaderComponent,
    OffersStoreComponent,
    ServicesStoreComponent,
    TeamStoreComponent,
    FundametailsStoreComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
