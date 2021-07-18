import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '../../../shared/components/button/modules/buttons.module';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from '../signin.component';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    ButtonsModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
