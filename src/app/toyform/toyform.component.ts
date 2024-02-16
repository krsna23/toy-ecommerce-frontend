import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-toyform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './toyform.component.html',
  styleUrl: './toyform.component.css'
})

export class ToyformComponent {
// onChangeFile(e: any) {
//   console.log(e);
//   if(e.target.files.length>0){
//     const file=e.target.files[0];
//     const formData= new FormData();
//     formData.append('file', file);
//     console.log(formData);
//   }

// }
  constructor(){}

  donate: boolean = true;
  sell!: boolean;
                                                                                                                                                                                                                                                           
  donateForm = new FormGroup({
    name: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    ageRec: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    usedFor: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    photos: new FormControl(''),
  })

  sellForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    ageRec: new FormControl('', Validators.required),
    details: new FormControl('', Validators.required),
    usedFor: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    photos: new FormControl('')
  })

  donationChange() {

    this.donate=true;
    this.sell= false;
  }

  sellChange() {
  
    this.sell= true;
    this.donate= false;
  }

  onSubmit() {
    console.log(this.donateForm.value.name)
    }

    onSellSubmit() {
    throw new Error('Method not implemented.');
    }

}