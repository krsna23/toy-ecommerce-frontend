import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="hero-section pointer" routerLink="/sell">
    </div>
  `,
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
