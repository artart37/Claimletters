import { Component } from '@angular/core';
import { smoothappearance } from './shared/animations/generalanime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [smoothappearance],
})
export class AppComponent {
  title: string = 'Claimletters';
  headersigninsignup: boolean = true;
  centralized!: boolean;

  handler(e: any) {
    //Check if the router outlet has a property named nosigninheader, then assign false to the headersigninsignup property,
    //which is passed as a Input bound property to the app-header in our app-component html.
    e.hasOwnProperty('nosigninheader')
      ? (this.headersigninsignup = false)
      : (this.headersigninsignup = true);
    //Check if the router outlet has a property named perfectcentre, then assign true to the centralised property within afterviewinit
    //This is to ensure the main section is ideally centralised where the corresponding router component has the perfectcentre property
    e.hasOwnProperty('perfectcentre')
      ? (this.centralized = true)
      : (this.centralized = false);
  }
}
