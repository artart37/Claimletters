import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from '../main.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { HowitworksComponent } from '../../shared/components/howitworks/howitworks.component';
import { ObjectfilterPipe } from '../../shared//components/magicchips/pipes/objectfilter.pipe';
import { CheckleftrightvpDirective } from '../../shared//directives/checkleftrightvp.directive';


@NgModule({
  declarations: [
    MainComponent,
    ButtonComponent,
    HowitworksComponent,
    ObjectfilterPipe,
    CheckleftrightvpDirective
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
  exports:[
    ButtonComponent,
    HowitworksComponent,
    ObjectfilterPipe,
    CheckleftrightvpDirective
  ]
})
export class MainModule { }
