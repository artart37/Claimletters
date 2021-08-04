import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { emailvalidation, passwordvalidation } from '../directives/customvalidation/emailpassword';

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
      validators: emailvalidation,
      updateOn: "blur"
    }),
    password: new FormControl('', {
      validators: passwordvalidation,
      updateOn: "blur"
    })
  });
  emailMessage: string | null = "";
  passwordMessage: string | null = "";

  get email() {
    return this.signingroup.get("email")
  }
  get password() {
    return this.signingroup.get("password")
  }

  get showPassError() {
    return this.password?.invalid && this.password?.dirty
  }

  get showEmailError() {
    return this.email?.invalid && this.email?.dirty
  }

  //Submit the form
  signin() { }

  constructor() { }
}