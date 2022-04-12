import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[leftBoxesInView]',
})
export class CheckLeftBoxInVpDirective {
  @Input() leftBoxesInView!: Array<boolean>;
  @Input() animeArr: Array<boolean> = [];
  @Output() leftBoxesInViewChange = new EventEmitter<Array<boolean>>();
  @HostListener('window:load')
  @HostListener('window:scroll')
  elementIsInView() {
    [].forEach.call(
      this.el.nativeElement.querySelectorAll('.left-box'),
      (element: any, index: number, arr: Array<any>) => {
        let viewportPos = element.parentElement.getBoundingClientRect();
        let topOffset = viewportPos.top;
        let bottomOffset = viewportPos.bottom;
        let windowHeight =
          window.innerHeight ||
          element.parentElement.documentElement.offsetHeight;
        this.animeArr.length > 0
          ? null
          : (this.animeArr = <Array<boolean>>[].map.call(arr, () => {
              return false;
            }));
        const vpCondition = !!(
          windowHeight - topOffset > 0 && bottomOffset > 0
        );
        if (vpCondition) {
          this.animeArr[index] === false ? (this.animeArr[index] = true) : null;
          this.leftBoxesInViewChange.emit(this.animeArr);
        }
      }
    );
  }

  constructor(private el: ElementRef) {}
}
