import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product/product.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // userData: any;
  // constructor(private route: ActivatedRoute) { }
  
  // ngOnInit(): void {
  //   this.userData = this.route.snapshot.data['userData'];
  // }

  constructor(
    private apiService: ApiService,
    private productService: ProductService
    
  ){}
  
  userId: any;
  message: string = '';
  userName='';
  welcomeMessage: string = '';
  toyList: any =[];

  ngOnInit(){

    this.userId= this.apiService.returnUser();
    this.userName= this.apiService.returnUserName()
    this.toyList = [];
    if (this.userId == -1){
      this.welcomeMessage = '';
      this.message = "Please Login to view the dashboard!";
    }else{
      this.message = "";
      console.log("User Id", this.userId);
      this.welcomeMessage = `Welcome to the dashboard: ${this.userName}`;
      this.toyList = this.apiService.getToysByUserId(this.userId).subscribe({
        next: (data: any) => {
          this.toyList = data;
          console.log("All Toy list",this.toyList);
          // this.toyList = this.toyAllList.filter(toy => toy.price !== null);;
          
          console.log(this.toyList);
        },
        error: (error) => {
          console.log('Error fetching toy list:', error);
        }
      });;
      console.log(this.toyList);
    }

   
  }

  removeToy(id: number){
    console.log("Remove call initiated");
  this.productService.removeProductById(id)
    .subscribe(
      (response) => {
        console.log("Product removed successfully", response);
        // Perform any additional actions upon successful deletion
        
        this.toyList = this.apiService.getToysByUserId(this.userId).subscribe({
          next: (data: any) => {
            this.toyList = data;
            console.log("All Toy list",this.toyList);
            // this.toyList = this.toyAllList.filter(toy => toy.price !== null);;
            
            console.log(this.toyList);
          },
          error: (error) => {
            console.log('Error fetching toy list:', error);
          }
        });;
      },
      (error) => {
        console.error("Error removing product", error);
        // Handle errors appropriately
      }
    );
  }

}

