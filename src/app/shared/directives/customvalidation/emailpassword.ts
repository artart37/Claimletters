import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

//Email validation function - for template driven and reactive forms
export function emailvalidation(control:AbstractControl): {[key:string]:any} | null{
  if (control.value!==null) {
    const regex:RegExp  = /^[A-Za-z0-9.#$%&'\*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
    const emailvalue:any = control.value
    if (regex.test(emailvalue)) {
      return null
    }else{
      if (emailvalue.length===0) {
        return {emailrequirederror:true}
      }else {
        return {emailvaliderror:true}
      }
    }
  } else {
    return null
  }
}

//Password validation function
export function passwordvalidation(control:AbstractControl): {[key:string]:any} | null{
  const regex:RegExp  = /^[A-Za-z0-9.#@$%&'\*+/=?^_`{|}~-]{6,}$/
  const disallowed:RegExp = /(?![A-Za-z0-9.#@$%&'\*+/=?^_`{|}~-])./
  const passwordvalue:string = control.value
  if (regex.test(passwordvalue)) {
    return null
  }else{
    if (passwordvalue.length===0) {
      return {passwordrequirederror:true}
    } else if(!disallowed.test(passwordvalue) && passwordvalue.length<6) {
      return {passwordminlengtherror:true}
    }else {
      return disallowed.test(passwordvalue)?{passwordinvaliderror:true}:null
    }
  }
}

@Directive({
  selector: '[emailPasswordVal]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmailPasswordDirective, multi: true}]
})
export class EmailPasswordDirective implements Validator{
  validate(control:AbstractControl):ValidationErrors | null {    
     return emailvalidation(control)
  }
}