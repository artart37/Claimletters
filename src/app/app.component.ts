import { Component } from '@angular/core';
import { smoothAppearance } from './shared/animations/general-anime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [smoothAppearance],
})
export class AppComponent {
  headerSigninSignup: boolean = true;
  centralized!: boolean;

  handler(e: any) {
    //Check if the router outlet has a property named noSigninHeader, then assign false to the headersignin-signup property,
    //which is passed as a Input bound property to the app-header in our app-component html.
    e.hasOwnProperty('noSigninHeader')
      ? (this.headerSigninSignup = false)
      : (this.headerSigninSignup = true);
    //Check if the router outlet has a property named perfectCentre, then assign true to the centralised property within afterviewinit
    //This is to ensure the main section is ideally centralised where the corresponding router component has the perfectCentre property
    e.hasOwnProperty('perfectCentre')
      ? (this.centralized = true)
      : (this.centralized = false);
  }
}
