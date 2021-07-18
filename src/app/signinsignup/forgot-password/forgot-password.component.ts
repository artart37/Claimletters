import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
 perfectcentre:boolean = true;


back():void {
  try {
    this.location.back()
  } catch {
    this.router.navigateByUrl("/")
  }
 }
 constructor(private router: Router, private location:Location) {  }

}
