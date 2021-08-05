import { NgModule } from '@angular/core';
import { EmailPasswordDirective } from '../directives/customvalidation/emailpassword';
import { ErrormessageDirective } from '../directives/errormessage.directive';



@NgModule({
  declarations: [
    EmailPasswordDirective,
    ErrormessageDirective
  ],
  exports: [
    EmailPasswordDirective,
    ErrormessageDirective
  ]
})
export class EmailAndPasswordValidation { }
