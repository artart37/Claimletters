import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  perfectCentre: boolean = true;
  @ViewChild('email') emailngmodel!: NgModel;
  emailMessage: string | null = '';
  get email() {
    return this.emailngmodel?.control;
  }
  showEmailError: boolean = false;
  checkEmailValidity() {
    this.showEmailError = this.email!.invalid && this.email!.dirty;
  }
  back(): void {
    try {
      this.location.back();
    } catch {
      this.router.navigateByUrl('/');
    }
  }
  resetPassword(emailform: NgForm) {
    console.log(emailform);
  }
  constructor(private router: Router, private location: Location) {}
}
