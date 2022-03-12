import { Component, OnInit } from '@angular/core';
import { rightleft } from '../shared/animations/generalanime';
import { HOW_IT_WORKS } from './enums/how-it-works-cards-enum';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [rightleft],
})
export class MainComponent implements OnInit {
  item_text_displayed: string = 'assistance_service_name';
  howitworks!: Array<string>;
  leftcardispresent!: boolean;
  animearr: Array<boolean> = [];
  tidyupafter(arr: Array<boolean>) {
    //Making sure that the first section of left and right doesn't run the animation twice - upon scrolling and after navigating to the main page
    arr.length === 0 ? (this.animearr[0] = true) : null;
  }
  constructor() {}
  ngOnInit(): void {
    //For my how it works
    this.howitworks = [
      HOW_IT_WORKS.Step1,
      HOW_IT_WORKS.Step2,
      HOW_IT_WORKS.Step3,
      HOW_IT_WORKS.Step4,
    ];
  }
}
