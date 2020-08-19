import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent{


  contactForm = new FormGroup({

    name: new FormControl(''),
    email: new FormControl(''),

  });

   
//   onSubmit(){
//   console.warn(this.contact.value);
// }

constructor() { }

  ngOnInit() {
  }



}

