import { Component } from '@angular/core';
import { smoothappearance } from './shared/animations/generalanime';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ smoothappearance ]
})
export class AppComponent {
  title:string = "Claimletters";
}
