import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from 'app/shared/components/button/modules/buttons.module';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from '../signin.component';
import { EmailValidation } from 'app/shared/modules/email-validation.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonsModule,
    EmailValidation,
    SigninRoutingModule,
  ],
})
export class SigninModule {}
