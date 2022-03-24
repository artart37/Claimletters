import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '../../shared/components/button/modules/buttons.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from '../home.component';
import { HowItWorksComponent } from '../../shared/components/how-it-works/how-it-works.component';
import { ObjectFilterPipe } from '../../shared/components/magic-chips/pipes/object-filter.pipe';
import { DetectWhenInViewPort } from '../../shared/directives/detect-when-in-vp.directive';
import { CheckLeftBoxInVpDirective } from '../../shared/directives/check-left-box-in-vp';

@NgModule({
  declarations: [
    HomeComponent,
    HowItWorksComponent,
    ObjectFilterPipe,
    DetectWhenInViewPort,
    CheckLeftBoxInVpDirective,
  ],
  imports: [CommonModule, RouterModule, ButtonsModule, HomeRoutingModule],
})
export class HomeModule {}
