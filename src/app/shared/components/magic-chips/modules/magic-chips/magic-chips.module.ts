import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GenericPipesModule } from '../../../../../shared/pipes/generic/generic-pipes.module';
import { MagicChipsComponent } from '../../magic-chips.component';

@NgModule({
  declarations: [MagicChipsComponent],
  imports: [CommonModule, BrowserAnimationsModule, GenericPipesModule],
})
export class MagicChipsModule {}
