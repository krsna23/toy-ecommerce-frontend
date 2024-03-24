import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product/product.service';
import { Toy } from '../product/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: 'product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent {
  route = inject(ActivatedRoute);

  toy: Toy | undefined;

  constructor( private productService: ProductService){
  
  const toyId = Number(this.route.snapshot.params['id']);
  console.log("toyId",toyId);
  this.productService.getProductById(toyId).subscribe(
    (data: Toy) => {
      this.toy = data;
      console.log(this.toy);
    },
    (error) => {
      this.toy = this.productService.getFirstId(toyId);
      console.log('Error fetching toy details:', error);
    });
  
  console.log(this.toy);

  }
}
