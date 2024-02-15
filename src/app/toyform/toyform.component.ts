import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toyform',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toyform.component.html',
  styleUrl: './toyform.component.css'
})

export class ToyformComponent {

  donate: boolean = true;
  sell!: boolean;


  donationChange() {

    this.donate=true;
    this.sell= false;
  }

  sellChange() {
  
    this.sell= true;
    this.donate= false;
  }
}