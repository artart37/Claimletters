import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[isInViewport]',
})
export class DetectWhenInViewPort implements OnInit {
  @Input() isInViewport!: boolean;
  @Output() isInViewportChange = new EventEmitter<boolean>();

  @HostListener('window:load')
  @HostListener('window:scroll')
  elementIsInView() {
    let viewportPos = this.el.nativeElement.getBoundingClientRect();
    let topOffset = viewportPos.top;
    let bottomOffset = viewportPos.bottom;
    let windowHeight =
      window.innerHeight || viewportPos.documentElement.offsetHeight;

    const vpCondition = !!(windowHeight - topOffset > 0 && bottomOffset > 0);
    if (vpCondition) {
      this.isInViewport = true;
      this.isInViewportChange.emit(this.isInViewport);
    }
  }

  constructor(private el: ElementRef, private route: ActivatedRoute) {}
  ngOnInit(): void {
    !!this.route ? this.elementIsInView() : null;
  }
}
