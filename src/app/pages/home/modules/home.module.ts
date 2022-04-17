import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonsModule } from '../../../shared/components/button/modules/buttons.module';
import { HowItWorksModule } from '../../../shared/components/how-it-works/modules/how-it-works.module';

import { HomeComponent } from '../home.component';
import { DetectWhenInViewPort } from '../../../shared/directives/detect-when-in-vp/detect-when-in-vp.directive';
import { CheckLeftBoxInVpDirective } from '../../../shared/directives/check-left-box-in-vp/check-left-box-in-vp.directive';

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
