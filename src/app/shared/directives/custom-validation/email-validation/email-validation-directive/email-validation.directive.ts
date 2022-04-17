import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { emailValidation } from '../../../../custom-functions/validation/email/email-validation';

/**
 * Email validation directive for template driven forms
 */
@Directive({
  selector: '[emailValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidationDirective,
      multi: true,
    },
  ],
})
export class EmailValidationDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return emailValidation(control);
  }
}
