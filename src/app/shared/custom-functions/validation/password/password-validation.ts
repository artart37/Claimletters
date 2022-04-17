import { AbstractControl } from '@angular/forms';

/**
 * Password validation function
 */
export function passwordValidation(
  control: AbstractControl
): { [key: string]: any } | null {
  const regex: RegExp = /^[A-Za-z0-9.#@$%&'\*+/=?^_`{|}~-]{6,}$/;
  const disallowed: RegExp = /(?![A-Za-z0-9.#@$%&'\*+/=?^_`{|}~-])./;
  const passwordValue: string = control.value;
  if (regex.test(passwordValue)) {
    return null;
  } else {
    if (passwordValue.length === 0) {
      return { passwordRequiredError: true };
    } else if (!disallowed.test(passwordValue) && passwordValue.length < 6) {
      return { passwordMinLengthError: true };
    } else {
      return disallowed.test(passwordValue)
        ? { passwordInvalidError: true }
        : null;
    }
  }
}
