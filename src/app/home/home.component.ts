import { Component, OnInit } from '@angular/core';
import { rightleft } from '../shared/animations/general-anime';
import { HOW_IT_WORKS } from './enums/how-it-works-cards-enum';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [rightleft],
})
export class HomeComponent implements OnInit {
  item_text_displayed: string = 'assistance_service_name';
  howItWorks!: Array<string>;
  leftCardIspresent!: boolean;
  animeArr: Array<boolean> = [];
  tidyUpAfter(arr: Array<boolean>) {
    //Making sure that the first section of left and right doesn't run the animation twice - upon scrolling and after navigating to the main page
    arr.length === 0 ? (this.animeArr[0] = true) : null;
  }
  ngOnInit(): void {
    //For how it works
    this.howItWorks = [
      HOW_IT_WORKS.Step1,
      HOW_IT_WORKS.Step2,
      HOW_IT_WORKS.Step3,
      HOW_IT_WORKS.Step4,
    ];
  }
}
