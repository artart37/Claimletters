import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../../../../shared/components/button/modules/buttons.module';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from '../signin.component';
import { EmailValidation } from '../../../../shared/directives/custom-validation/email-validation/modules/email-validation.module';

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
