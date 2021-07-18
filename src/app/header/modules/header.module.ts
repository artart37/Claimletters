import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'src/app/shared/components/button/modules/buttons.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header.component';




@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonsModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
