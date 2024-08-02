import { Component } from '@angular/core';
import { PanelHeaderComponent } from '../../Layout-Item-Pages/panel-header/panel-header.component';
import { CategoryComponent } from '../../Layout-Item-Pages/category/category.component';
import { TagsComponent } from '../../Layout-Item-Pages/tags/tags.component';
import { CartComponent } from '../../header/cart/cart.component';
import { ProductListComponent } from '../../Layout-Item-Pages/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CategoryComponent,
    PanelHeaderComponent,
    TagsComponent,
    CartComponent,
    ProductListComponent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
