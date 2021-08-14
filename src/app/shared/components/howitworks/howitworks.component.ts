import { Component, ElementRef, HostListener, Input, OnInit, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { howitworks } from '../../animations/mainpage';
import { smoothScroll } from '../../customfunctions/myfunctions';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  animations:[howitworks],

})
export class HowitworksComponent implements OnInit {
  toggler:boolean = true;
  inlinestyletoggler:boolean = true;
  animestates:string = "none";
  innerwidth:number = window.innerWidth;
  @Input() howitworksdata!:Array<string>;
  @Output() leftcardstate:EventEmitter<boolean> = new EventEmitter();
  @ViewChild("howitworks") howitworks!:ElementRef;
  @HostListener("window:scroll", ["$event"]) getelpos(e:any){
    let viewportOffset = this.howitworks.nativeElement.getBoundingClientRect()
    let toppos = viewportOffset.top;
    let wndheight = window.innerHeight || e.target.documentElement.clientHeight;
    let howitworksheight = viewportOffset.height
    //When the howitworks section enters the viewport
    if ((wndheight - toppos) >= howitworksheight) {
    //If the left card is visible and the animation hasn't started yet
      if(this.toggler === true && (this.animestates == "none" || this.animestates == "void")){
    //Start the animation
        this.animestates = "start"
      }else if(this.toggler === false) {
    //Otherwise, change the animation state to final - final animation works only if transitions from start - check the animation
         this.animestates = "final"
      } 
    }
  }
  @HostListener("window:resize",[]) getwidth(){
    //Dynamically assign width to my innerwidth property, on resize
    this.innerwidth = window.innerWidth
    //Dynamically adjust the cards during resize
    this.adjustcards()
  };

  //Adjusting cards views, based on width and states
  adjustcards() {
  //If the width is smaller than 541
    if(this.innerwidth>541){
  //If the state is not final, show the left cards, otherwise hide.
      this.animestates!=="final"?this.toggler = true:this.toggler = false;
  //Add the initial inline styling during the animation if the left cards are visible - left and right cards moving.
      this.toggler?this.inlinestyletoggler = true:this.inlinestyletoggler = false;
    }else{
  //On smaller devices hide the left cards
      this.toggler = false;
  //The state should be final, so as not to trigger any animation - final animation works only if transitions from start - check the animation
      this.animestates = "final";
  //This one adds other inline styles (when there is no left card)
      this.inlinestyletoggler = false;
      this.leftcardstate.emit(this.toggler)
    }
  }
//This function starts only when the inlinestyletoggler is true, i.e. when the left card is visible > 541
//The function returns inline styles in that case - see HTML. The function returns styles both on the left and right sides.
checkitem(index:number, leftorright:string){
//My dynamic style object
let mystyle = {
  padding: this.toggler && leftorright === 'left'?"0":this.toggler && leftorright !== 'left'?"0 0 0 2rem":null,
  position:this.toggler && index>0?"absolute":"relative",
  left:this.toggler && index>0?"calc(150% - 1rem)":null,
  visibility:this.toggler && index>0?"hidden":null,
};
  //Returning the final, updated object - online style
  return mystyle
}
//After the animation (the start part) ends, do th efollowing
tidyupafteranimation(e:any){
  this.inlinestyletoggler = false;
  this.animestates = "final"
  this.toggler=false;
  this.leftcardstate.emit(this.toggler);
  this.innerwidth>541?smoothScroll(this.howitworks.nativeElement, 1000):null
}
//Works when the inlinestyletoggler is false - this is when the toggler is also false and the left cards are not visible, we apply specific paddings, based on what is the device width.
updateStyle(index:number){
  let updatedstyle = {
    padding:"0 2rem",
    marginRight:this.innerwidth>541 && index%2 === 0?"1rem":null,
    width:this.innerwidth>541?"calc(50% - 1rem)":null,
    // boxShadow:this.innerwidth<542?"inset 0px -1rem 2rem -2rem #004a7c":null,
    borderRadius:"10px"
  }
  return updatedstyle
}

trackbyID(index:number){
  return index ? index : Number;
}
  constructor() { }

  ngOnInit(): void {
    this.adjustcards();
  }

}