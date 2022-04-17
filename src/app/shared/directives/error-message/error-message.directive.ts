import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { TGenericObjectKeyType } from '../../types/generics.type';

@Directive({
  selector: '[errorObject]',
})
export class ErrorMessageDirective implements OnChanges {
  @Input() errorObject!: any;
  @Output() errorMessage: EventEmitter<string | null> = new EventEmitter();
  /**
   * And array of validation error messages
   */
  validationMessages: Array<{ [key: TGenericObjectKeyType]: string }> = [
    { emailRequiredError: 'Please enter your email address.' },
    { emailValidError: 'Please enter a valid email address.' },
    { passwordRequiredError: 'Please enter your password.' },
    { passwordMinLengthError: 'Your password must be 6 or more charachters.' },
    { passwordInvalidError: 'Please enter a valid password.' },
  ];
  /**
   * A function to match the Input bound errorObject property name with the property name of the error messages array: validationMessages and return the corresponding message
   */
  message(): string | null {
    let message: string = '';
    if (this.errorObject) {
      const errorkey = Object.keys(<object>this.errorObject).toString();
      this.validationMessages.forEach((element: any) => {
        element.hasOwnProperty(errorkey) ? (message = element[errorkey]) : null;
      });
    }
    return message;
  }
  ngOnChanges(changes: SimpleChanges): void {
    /**
     * Checking if the Input bound property errorObject changes, and if so, emit the changed message, returned from the message() function
     */
    if (changes.hasOwnProperty('errorObject')) {
      this.errorMessage.emit(this.message());
    }
  }
}
