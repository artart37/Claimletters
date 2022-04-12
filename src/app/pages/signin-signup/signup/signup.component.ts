import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidation } from 'app/shared/directives/custom-validation/reactive-only/password-validation';
import { emailValidation } from 'app/shared/directives/custom-validation/template-reactive/email-validation-template-reactive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  noSigninHeader: boolean = false;
  perfectCentre: boolean = true;
  //Reactive Form
  signingroup = new FormGroup({
    email: new FormControl('', {
      validators: emailValidation,
    }),
    password: new FormControl('', {
      validators: passwordValidation,
    }),
    userRole: new FormControl('', Validators.required),
  });

  emailMessage: string | null = '';
  passwordMessage: string | null = '';
  showEmailError: boolean = false;
  showPassError: boolean = false;
  checkEmailValidity() {
    this.showEmailError = this.email!.invalid && this.email!.dirty;
  }
  checkPasswordValidity() {
    this.showPassError = this.password!.invalid && this.password!.dirty;
  }

  get email() {
    return this.signingroup.get('email');
  }
  get password() {
    return this.signingroup.get('password');
  }

  //Submit the form
  signUp() {
    console.log(this.signingroup.value);
  }

  constructor() {}
}
