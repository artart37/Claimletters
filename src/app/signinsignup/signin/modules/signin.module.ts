import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../../../shared/components/button/modules/buttons.module';

import { EmailAndPasswordValidation } from '../../../shared/modules/emailpasswordvalidation';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from '../signin.component';

@NgModule({
  declarations: [
    SigninComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonsModule,
    EmailAndPasswordValidation,
    SigninRoutingModule
  ]
})
export class SigninModule { }
