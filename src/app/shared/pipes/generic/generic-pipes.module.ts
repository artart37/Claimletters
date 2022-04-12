import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectKeyPipe } from './object-key/object-key.pipe';

@NgModule({
  declarations: [ObjectKeyPipe],
  imports: [CommonModule],
  exports: [ObjectKeyPipe],
})
export class GenericPipesModule {}
