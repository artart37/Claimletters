import { AbstractControl } from '@angular/forms';

/**
 * Email validation function
 */
export function emailValidation(
  control: AbstractControl
): { [key: string]: any } | null {
  if (control.value !== null) {
    const regex: RegExp =
      /^[A-Za-z0-9.#$%&'\*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    const emailvalue: any = control.value;
    if (regex.test(emailvalue)) {
      return null;
    } else {
      if (emailvalue.length === 0) {
        return { emailRequiredEerror: true };
      } else {
        return { emailValidError: true };
      }
    }
  } else {
    return null;
  }
}
