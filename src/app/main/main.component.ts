import { Component, OnInit } from '@angular/core';
import { rightleft } from '../shared/animations/generalanime';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [ rightleft ]
})
export class MainComponent implements OnInit {
  item_text_displayed:string = "assistance_service_name";
  howitworks!:Array<string>;
  leftcardispresent!:boolean;
  animearr:Array<boolean>=[];

  ngOnInit(): void {
    //For my how it works
    this.howitworks = [
      "Create your account",
      "Customise the format of claims and complaints",
      "Share your profile with your customers",
      "Manage your claims and complaints"
    ];
  }
}
