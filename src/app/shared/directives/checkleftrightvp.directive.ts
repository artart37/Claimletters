import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[isinviewport]'
})
export class CheckleftrightvpDirective {
@Input() isinviewport!:Array<boolean>;
@Input() animearr:Array<boolean> = [];
@Output() isinviewportChange=new EventEmitter<Array<boolean>>()
//We also use window load and event to ensure that the page is fully rendered, before we do the magic.
//Converesely, even with afterviewinit, the elements height was not retrieved correctly, which affected the top and bottom values.
@HostListener("window:load")
@HostListener("window:scroll") elementisinview(){
  [].forEach.call(this.el.nativeElement.querySelectorAll(".leftbox"),(element:any, index:number, arr:Array<any>)=>{
    let viewportpos = element.parentElement.getBoundingClientRect();
    let topoffset = viewportpos.top;
    let bottomoffset = viewportpos.bottom
    let windowheight = window.innerHeight || element.parentElement.documentElement.offsetHeight;
    
    //Defining an array of true or false. The length of the array is equal to the number of el which have rightbox as child.   
    this.animearr.length>0?null:this.animearr = <Array<boolean>>[].map.call(arr,()=>{return false})
    const vpcondition = !!(((windowheight - topoffset) > 0 && bottomoffset > 0))
    if(vpcondition){
      this.animearr[index] === false?this.animearr[index] = true:null
      this.isinviewportChange.emit(this.animearr)
    }
  })
}

constructor(private el:ElementRef) {}

}