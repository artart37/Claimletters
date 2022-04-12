import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericPipesModule } from 'src/app/shared/pipes/generic/generic-pipes.module';
import { MagicChipsComponent } from '../../magic-chips.component';

@NgModule({
  declarations: [MagicChipsComponent],
  imports: [CommonModule, GenericPipesModule],
})
export class MagicChipsModule {}
