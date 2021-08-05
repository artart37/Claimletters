import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from '../../../shared/components/button/modules/buttons.module';
import { EmailAndPasswordValidation } from '../../../shared/modules/emailpasswordvalidation';
import { ForgotPasswordComponent } from '../../forgot-password/forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';


@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    EmailAndPasswordValidation,
    ForgotPasswordRoutingModule
  ]
})

export class ForgotPasswordModule { }