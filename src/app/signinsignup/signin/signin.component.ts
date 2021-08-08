import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emailvalidation, passwordvalidation } from '../../shared/directives/customvalidation/emailpassword';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  nosigninheader: boolean = false;
  perfectcentre: boolean = true;
  //Reactive Form
  signingroup = new FormGroup({
    email: new FormControl('', {
      validators: emailvalidation
    }),
    password: new FormControl('', {
      validators: passwordvalidation
    })
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
  signIn() {
    console.log(this.signingroup.value);   
  }

  constructor() {}
}