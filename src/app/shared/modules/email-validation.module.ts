import { NgModule } from '@angular/core';
import { EmailValidationDirective } from '../directives/custom-validation/template-reactive/email-validation-template-reactive';
import { ErrorMessageDirective } from '../directives/error-message.directive';

@NgModule({
  declarations: [EmailValidationDirective, ErrorMessageDirective],
  exports: [EmailValidationDirective, ErrorMessageDirective],
})
export class EmailValidation {}
