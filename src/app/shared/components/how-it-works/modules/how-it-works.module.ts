import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from '../how-it-works.component';

@NgModule({
  declarations: [HowItWorksComponent],
  imports: [CommonModule],
  exports: [HowItWorksComponent],
})
export class HowItWorksModule {}
