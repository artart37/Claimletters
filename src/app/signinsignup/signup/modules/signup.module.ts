import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../../../shared/components/button/modules/buttons.module';

import { EmailAndPasswordValidation } from '../../../shared/modules/emailpasswordvalidation';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from '../signup.component';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonsModule,
    EmailAndPasswordValidation,
    SignupRoutingModule
  ]
})
export class SignupModule { }
