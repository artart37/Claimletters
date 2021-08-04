import { Directive } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appCustomvalidation]'
})
export class EmailPasswordDirective {}

//Email validation function
export function emailvalidation(control:AbstractControl): {[key:string]:any} | null{
  const regex:RegExp  = /^[A-Za-z0-9.#$%&'\*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/
  const emailvalue:string = control.value
  if (regex.test(emailvalue)) {
    return null
  }else{
    if (emailvalue.length===0) {
      return {emailrequirederror:true}
    }else {
      return {emailvaliderror:true}
    }
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