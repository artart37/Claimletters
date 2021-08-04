import { Directive, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorOb]'
})
export class ErrormessageDirective implements OnChanges {
  @Input() errorOb!:any;
  @Output() errorMessage:EventEmitter<string | null> =  new EventEmitter();
  //Validation error messages
  validationmessages:Array<any> =[
    {emailrequirederror:"Please enter your email address."},
    {emailvaliderror:"Please enter a valid email address."},
    {passwordrequirederror:"Please enter your password."},
    {passwordminlengtherror:"Your password must be 6 or more charachters."},
    {passwordinvaliderror:"Please enter a valid password."}
  ]
//A function to match the Input bound errorOb property name with the property name of the error messages array: validationmessages and return the corresponding message
  message(): string | null {
    let message: string = "";
    if (this.errorOb) {
      const errorkey = Object.keys(<object>this.errorOb).toString();
      this.validationmessages.forEach((element: any) => {
        element.hasOwnProperty(errorkey) ? message = element[errorkey]: null
      })
    }    
    return message
  }
constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    //Checking if the Input bound property errorOb changes, and if so, emit the changed message, returned from the message() function
    if (changes.hasOwnProperty("errorOb")) {
      this.errorMessage.emit(this.message())
    }
  }
}