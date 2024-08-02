import { Routes } from '@angular/router';
import { HomeComponent } from './Layout/Pages/home/home.component';
import { ContactComponent } from './Layout/Pages/contact/contact.component';
import { AboutUsComponent } from './Layout/Pages/about-us/about-us.component';
import { ShopComponent } from './Layout/Pages/shop/shop.component';
import { CartComponent } from './Layout/Pages/cart/cart.component';

export const routes: Routes = [
    {
        path: 'HOME',
        component: HomeComponent
    }, {
        path: 'CONTACTS',
        component: ContactComponent
    }, {
        path: 'ABOUT-US',
        component: AboutUsComponent
    }, {
        path: 'SHOP',
        component: ShopComponent
    }, {
        path: 'CART',
        component: CartComponent
    }
];
