import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailvalidation, passwordvalidation } from 'src/app/shared/directives/customvalidation/emailpassword';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  nosigninheader: boolean = false;
  perfectcentre: boolean = true;
  //Reactive Form
  signingroup = new FormGroup({
    email: new FormControl('', {
      validators: emailvalidation
    }),
    password: new FormControl('', {
      validators: passwordvalidation
    }),
    userrole:  new FormControl('', Validators.required)
  });

  emailMessage: string | null = "";
  passwordMessage: string | null = "";
  showEmailError:boolean = false;
  showPassError:boolean = false;
  checkEmailValidity(){
    this.showEmailError = this.email!.invalid && this.email!.dirty
   }
  checkPasswordValidity(){
   this.showPassError = this.password!.invalid && this.password!.dirty
  }

  get email() {
    return this.signingroup.get("email")
  }
  get password() {
    return this.signingroup.get("password")
  }

  //Submit the form
  signUp() {
    console.log(this.signingroup.value);   
  }

  constructor() { }
}
