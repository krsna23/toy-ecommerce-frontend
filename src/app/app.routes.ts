import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { ToyformComponent } from './toyform/toyform.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path:'details/:id',
        component: ProductDetailsComponent,
        title: 'Toy Details'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'sell',
        component: ToyformComponent,
        title: 'Sell/Donate'
    }
];
