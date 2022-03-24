import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '../../../shared/components/button/modules/buttons.module';
import { EmailValidation } from 'src/app/shared/modules/email-validation.module';
import { ForgotPasswordComponent } from '../forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';

@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    EmailValidation,
    ForgotPasswordRoutingModule,
  ],
})
export class ForgotPasswordModule {}
