import { NgModule } from '@angular/core';
import { EmailValidationDirective } from '../email-validation-directive/email-validation.directive';
import { ErrorMessageDirective } from '../../../error-message/error-message.directive';

@NgModule({
  declarations: [EmailValidationDirective, ErrorMessageDirective],
  exports: [EmailValidationDirective, ErrorMessageDirective],
})
export class EmailValidation {}
