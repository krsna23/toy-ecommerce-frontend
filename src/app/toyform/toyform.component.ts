import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ToyformService } from './toyform.service';
import { ApiService } from '../api.service';
import { FormBuilder,  } from '@angular/forms';




@Component({
  selector: 'app-toyform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './toyform.component.html',
  styleUrl: './toyform.component.css'
})

// export class ToyformComponent {

//   constructor(
//     private toyService: ToyformService,
//     private apiService: ApiService
//     ){}

//     selectedFileName!: string;
//   // onChangeFile($event: Event) {
//   //   this.selectedFile = event?.target.files[0];
//   // }

//   donate: boolean = true;
//   sell!: boolean;
//   selectedFile: File | null = null;            
//   photoUrl: any;
//   loginMessage = '';


//   donateForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     category: new FormControl('', Validators.required),
//     details: new FormControl('', Validators.required),
//     usedFor: new FormControl('', Validators.required),
//     location: new FormControl('', Validators.required),
//     photo: new FormControl(''),
//     userId: new FormControl()
//   })

//   sellForm = new FormGroup({
//     name: new FormControl('', Validators.required),
//     price: new FormControl('', Validators.required),
//     category: new FormControl('', Validators.required),
//     details: new FormControl('', Validators.required),
//     usedFor: new FormControl('', Validators.required),
//     location: new FormControl('', Validators.required),
//     photo: new FormControl(''),
//     userId: new FormControl()
//   })

//   donationChange() {
//     this.donate=true;
//     this.sell= false;
//   }

//   sellChange() {
//     this.sell= true;
//     this.donate= false;
//   }

//   onFileSelected(event: any) {
//     const selectedFile: File = event.target.files[0];
//     this.selectedFileName = selectedFile.name;
//     console.log("selected fileName",this.selectedFileName);


//     // Send the URL to your backend (You can use HttpClient for this)
//     // Example:
//     // this.httpClient.post('your-backend-url', { imageURL }).subscribe(response => {
//     //   console.log('Image URL sent to backend:', response);
//     // });
//   }


//   onSubmit() {
//       // console.log("Before  ",this.donateForm.value.photo);
//       // // Call the service method to donate toy
      
//       // this.donateForm.value.photo = this.photoUrl;
//       // console.log("after  ",this.donateForm.value.photo);
    

//       this.donateForm.value.userId = this.apiService.returnUser();
//       this.donateForm.value.photo = this.selectedFileName;
//       console.log(this.donateForm.value.photo);
//       this.toyService.donateToy(this.donateForm.value).subscribe(response => {
//         console.log('Toy donated successfully:', response);
//         // Reset form after successful submission
//         this.donateForm.reset();
//       });
//     }

//   onSellSubmit() {
//       console.log("Sent from submit sell:", this.sellForm.value);
//       this.sellForm.value.userId = this.apiService.returnUser();
      
//       this.sellForm.value.photo = this.selectedFileName;
//       // Call the service method to sell toy
//       console.log("Photovalue", this.sellForm.value);
//       this.toyService.sellToy(this.sellForm.value).subscribe(response => {
//         console.log('Toy sold successfully:', response);
//         // Reset form after successful submission
//         this.sellForm.reset();
//     });
//   }


// }




export class ToyformComponent {

  donate: boolean = true;
  sell: boolean = false;

  errorMessage='';
  donateForm: FormGroup;
  sellForm: FormGroup;
  userError='';
  imageUrl = '';
  successfulMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private toyService: ToyformService,
    private apiService: ApiService
  ) {
    this.donateForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      details: ['', Validators.required],
      usedFor: ['', Validators.required],
      location: ['', Validators.required],
      photo: ['', Validators.required], // Photo is required
      userId: this.apiService.returnUser()
    });

    this.sellForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      details: ['', Validators.required],
      usedFor: ['', Validators.required],
      location: ['', Validators.required],
      photo: ['', Validators.required], // Photo is required
      userId: this.apiService.returnUser()
    });
  }


  ngOnInit() {
    if (this.donateForm.value.userId == -1) {
      this.userError = "Please login before filling";
    }
    else{
      this.userError = "";
    }
  }

  donationChange() {
    this.successfulMessage='';
    this.donate = true;
    this.sell = false;
  }

  sellChange() {
    this.successfulMessage = '';
    this.sell = true;
    this.donate = false;
  }

  onFileSelected(event: any) {
        const selectedFile: File = event.target.files[0];
        this.imageUrl = selectedFile.name;
        console.log("selected fileName",this.imageUrl);
  }
  onSubmit() {
    if (this.donateForm.invalid) {
      this.errorMessage = "Fill in all the required fields.";
      return; // Do not submit the form if it's invalid
    }else if(this.donateForm.value.userId == -1){
      this.userError = "Please login before filling"
      setTimeout(() => {
      }, 3000);
      return;
    }
    this.donateForm.value.photo=this.imageUrl;

    this.toyService.donateToy(this.donateForm.value).subscribe(response => {
      console.log('Toy donated successfully:', response);
      // Reset form after successful submission
      this.successfulMessage = "Donated Successfully";
      console.log("successful message:", this.successfulMessage);
      setTimeout(() => {
        this.donateForm.reset();
        this.successfulMessage = '';
      }, 3000);
    });
  }

  onSellSubmit() {
    if (this.sellForm.invalid) {
      this.errorMessage = "Fill in all the required fields.";
      return; // Do not submit the form if it's invalid
    }else if(this.donateForm.value.userId == -1){
      this.userError = "Please login before filling"
    }
    this.sellForm.value.photo = this.imageUrl
    this.toyService.sellToy(this.sellForm.value).subscribe(response => {
      console.log('Toy sold successfully:', response);
      this.successfulMessage = "Sold Successfully";
      // Reset form after successful submission
      setTimeout(() => {
        this.sellForm.reset();
        this.successfulMessage = '';
      }, 3000);
    });
  }
}