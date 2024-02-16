import { Component } from '@angular/core';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <app-hero></app-hero>
    <app-products-home></app-products-home>
    <app-about></app-about>

  
  `,
    styleUrl: './home.component.css',
    imports: [
      ProductsHomeComponent, 
      HeroComponent,
      AboutComponent,
      FooterComponent
    ]
})

export class HomeComponent {}