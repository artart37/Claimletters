import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '../../../../shared/components/button/modules/buttons.module';
import { EmailValidation } from '../../../../shared/directives/custom-validation/email-validation/modules/email-validation.module';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from '../signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonsModule,
    EmailValidation,
    SignupRoutingModule,
  ],
})
export class SignupModule {}
