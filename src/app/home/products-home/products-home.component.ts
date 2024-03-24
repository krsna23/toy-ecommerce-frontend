import { Component } from '@angular/core';
import { Toy } from '../../product/product';
import { ProductService } from '../../product/product.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-products-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {

  toyList: Toy[] = [];
  subscription!: Subscription;
  toyList1!: { id: number; name: string; category: string; ageRange: string; photo: string; recommendedAge: number; details: string; usedFor: string; location: string; price: number; }[];
  toyAllList!: Toy[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.toyList1 = this.productService.getfirstToys();

    this.subscription = this.productService.getAllProducts().subscribe({
      next: (data: Toy[]) => {
        this.toyAllList = data;
        console.log("All Toy list",this.toyAllList);
        this.toyList = this.toyAllList.filter(toy => toy.price !== null);;
        
        console.log(this.toyList);
      },
      error: (error) => {
        console.log('Error fetching toy list:', error);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadProduct(id: number){
  }
}
