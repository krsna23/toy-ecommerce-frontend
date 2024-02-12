import { Component } from '@angular/core';
import { Toy } from '../../product/product';
import { ProductService } from '../../product/product.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-home.component.html',
  styleUrl: './products-home.component.css'
})
export class ProductsHomeComponent {

  toysList!:Toy[];

  productService=  inject(ProductService);
  toyList = this.productService.getAllProducts();

  loadProduct(id: number){
  }
}
