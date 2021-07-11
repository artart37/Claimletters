import { Component, Input, OnInit, Renderer2} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { selecteditemanime } from '../../animations/mainpage';
import { Animestatus } from '../../interfaces/animationstate';

export type Styleinterface = Animestatus & {
  itemclass:string
};

@Component({
  selector: 'app-magicchips',
  templateUrl: './magicchips.component.html',
  styleUrls: ['./magicchips.component.css'],
  animations: [ selecteditemanime ]
})

export class MagicchipsComponent implements OnInit {
  @Input() chiparray$!:Observable<Array<any>>;
  @Input() item:any;
  //Short Tall White Blue. The checkmark image is static, within checkmark class
  @Input() chipstyle:string="";
  dataarray!:Array<any>;
  selectanimestate!:Array<any>;
  mysubscription!:Subscription;
  stylearray:Array<any>=[];

  trackbyID(index:number){
    return index ? index : Number;
  }

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  this.mysubscription =  this.chiparray$.subscribe(data=>{this.dataarray = data})
  this.stylearray = this.dataarray.map(

    ()=>{return Object.create({},{
      animestate: {writable:true, value: "notadded"},
      itemclass:{writable:true, value: "magiccardschild magiccardschildstart".concat(' ', this.chipstyle)}
    });}
    
    )

  }

  selecteditem(index:number){
    this.triggeranimation(index);
    this.changestyle(index);
  }

  ngOnDestroy(): void {
  this.mysubscription.unsubscribe()
  }

changestyle(index:number){
  if (this.stylearray[index]?.itemclass.indexOf('magiccardschildselected') !== -1) {  
    this.stylearray[index].itemclass = this.stylearray[index]?.itemclass.replace('magiccardschildselected','magiccardschildstart');
  } else if(this.stylearray[index]?.itemclass.indexOf('magiccardschildstart') !== -1) {
    this.stylearray[index].itemclass = this.stylearray[index]?.itemclass.replace('magiccardschildstart','magiccardschildselected')
  }
}

triggeranimation(index:number){
  this.stylearray[index].animestate == "added"?this.stylearray[index].animestate = "notadded":this.stylearray[index].animestate = this.stylearray[index].animestate = "added"
}

}