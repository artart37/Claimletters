import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from '../../shared/components/button/modules/buttons.module';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from '../main.component';
import { HowitworksComponent } from '../../shared/components/howitworks/howitworks.component';
import { ObjectfilterPipe } from '../../shared//components/magicchips/pipes/objectfilter.pipe';
import { LazyLoaderDirective } from '../../shared//directives/lazyloader.directive';
import { CheckleftrightvpDirective } from '../../shared//directives/checkleftrightvp.directive';



@NgModule({
  declarations: [
    MainComponent,
    HowitworksComponent,
    ObjectfilterPipe,
    LazyLoaderDirective,
    CheckleftrightvpDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonsModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
