import { Component } from '@angular/core';
import { ProductsHomeComponent } from './products-home/products-home.component';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
  <app-products-home></app-products-home>
  `,
    styleUrl: './home.component.css',
    imports: [ProductsHomeComponent]
})

export class HomeComponent {}