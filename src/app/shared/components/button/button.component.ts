import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  // minimal solid accent hot borders round tall short signin signup noline stretch disabled. Default is 4.2rem height. Short is 3.6. Tall is 4.6.
  @Input() buttonstyle:string = "";
  @Input() disabled: boolean = false;

  constructor() { }

}
