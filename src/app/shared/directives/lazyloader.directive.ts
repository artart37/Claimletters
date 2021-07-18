import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[lazyloader]',
})
export class LazyLoaderDirective {
@Input() lazyloader!:boolean;
@Output() lazyloaderChange=new EventEmitter<boolean>()

@HostListener("window:load")
@HostListener("window:scroll") elementisinview(){

    let viewportpos = this.el.nativeElement.getBoundingClientRect();
    let topoffset = viewportpos.top;
    let bottomoffset = viewportpos.bottom
    let windowheight = window.innerHeight || viewportpos.documentElement.offsetHeight;
    
    const vpcondition = !!(((windowheight - topoffset) > 0 && bottomoffset > 0))
    if(vpcondition){       
       this.lazyloader = true;
       this.lazyloaderChange.emit(this.lazyloader)
    }
  }

constructor(private el:ElementRef, private route:ActivatedRoute) {}
ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    !!(this.route)?this.elementisinview():null
}

}