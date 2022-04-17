import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HowItWorksComponent } from '../how-it-works.component';

@NgModule({
  declarations: [HowItWorksComponent],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [HowItWorksComponent],
})
export class HowItWorksModule {}
