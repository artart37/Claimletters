import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[isinviewport]'
})
export class CheckleftrightvpDirective {
@Input() isinviewport!:Array<boolean>;
@Input() animearr:Array<boolean> = [];
@Output() isinviewportChange=new EventEmitter<Array<boolean>>();
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
    // console.log(`index: ${index}, windowheight: ${windowheight}, top: ${topoffset}, bottom: ${bottomoffset}, height: ${viewportpos.height}, status: ${vpcondition}, anime: ${this.animearr}`);
    if(vpcondition){
      this.animearr[index] === false?this.animearr[index] = true:null;
      this.isinviewportChange.emit(this.animearr)
    }
  })
}

constructor(private el:ElementRef) {}
}