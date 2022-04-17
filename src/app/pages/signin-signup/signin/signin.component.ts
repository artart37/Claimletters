import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emailValidation } from '../../../shared/directives/custom-validation/template-reactive/email-validation-template-reactive';
import { passwordValidation } from '../../../shared/directives/custom-validation/reactive-only/password-validation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
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
  signIn() {
    console.log(this.signingroup.value);
  }

  constructor() {}
}
