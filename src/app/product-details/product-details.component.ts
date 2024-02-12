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

  productService = inject(ProductService);
  toy: Toy | undefined;

  constructor(){
  
  const toyId = Number(this.route.snapshot.params['id']);
  console.log(toyId);
  this.toy = this.productService.getProductById(toyId);
  
  console.log(this.toy);
}
  }
