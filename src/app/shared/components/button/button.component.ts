import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // minimal solid borders round tall short signin signup. Default is 4.2rem height. Short is 3.6. Tall is 4.6.
  @Input() buttonstyle:string = "";

  constructor() { }

}
