import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonsModule } from 'app/shared/components/button/modules/buttons.module';
import { HowItWorksModule } from 'app/shared/components/how-it-works/modules/how-it-works.module';

import { HomeComponent } from '../home.component';
import { DetectWhenInViewPort } from 'app/shared/directives/detect-when-in-vp/detect-when-in-vp.directive';
import { CheckLeftBoxInVpDirective } from 'app/shared/directives/check-left-box-in-vp/check-left-box-in-vp.directive';

@NgModule({
  declarations: [
    HomeComponent,
    DetectWhenInViewPort,
    CheckLeftBoxInVpDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonsModule,
    HowItWorksModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
