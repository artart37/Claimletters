import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../../../shared/components/button/modules/buttons.module';
import { EmailPasswordDirective } from '../../directives/customvalidation/emailpassword';
import { ErrormessageDirective } from '../../../shared//directives/errormessage.directive';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from '../signin.component';

@NgModule({
  declarations: [
    SigninComponent,
    EmailPasswordDirective,
    ErrormessageDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonsModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
