import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '../../../shared/components/button/modules/buttons.module';

import { ForgotPasswordComponent } from '../../forgot-password/forgot-password.component';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';


@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    ForgotPasswordRoutingModule
  ]
})

export class ForgotPasswordModule { }