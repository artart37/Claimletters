import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { howItWorks } from '../../animations/main-page';
import { smoothScroll } from '../../custom-functions/ui-functions/smooth-scroll';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [howItWorks],
})
export class HowItWorksComponent implements OnInit {
  toggler: boolean = true;
  inlineStyleToggler: boolean = true;
  animeStates: string = 'none';
  innerWidth: number = window.innerWidth;
  @Input() howItWorksdata!: string[];
  @Output() leftCardState: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('howItWorks') howItWorks!: ElementRef;
  @HostListener('window:scroll', ['$event']) getelpos(e: any) {
    let viewportOffset = this.howItWorks.nativeElement.getBoundingClientRect();
    let topPos = viewportOffset.top;
    let wndHeight = window.innerHeight || e.target.documentElement.clientHeight;
    let howItWorksheight = viewportOffset.height;
    //When the howItWorks section enters the viewport
    if (wndHeight - topPos >= howItWorksheight) {
      //If the left card is visible and the animation hasn't started yet
      if (
        this.toggler === true &&
        (this.animeStates == 'none' || this.animeStates == 'void')
      ) {
        //Start the animation
        this.animeStates = 'start';
      } else if (this.toggler === false) {
        //Otherwise, change the animation state to final - final animation works only if transitions from start - check the animation
        this.animeStates = 'final';
      }
    }
  }
  @HostListener('window:resize', []) getWidth() {
    //Dynamically assign width to my innerWidth property, on resize
    this.innerWidth = window.innerWidth;
    //Dynamically adjust the cards during resize
    this.adjustCards();
  }

  //Adjusting cards views, based on width and states
  adjustCards() {
    //If the width is smaller than 541
    if (this.innerWidth > 541) {
      //If the state is not final, show the left cards, otherwise hide.
      this.animeStates !== 'final'
        ? (this.toggler = true)
        : (this.toggler = false);
      //Add the initial inline styling during the animation if the left cards are visible - left and right cards moving.
      this.toggler
        ? (this.inlineStyleToggler = true)
        : (this.inlineStyleToggler = false);
    } else {
      //On smaller devices hide the left cards
      this.toggler = false;
      //The state should be final, so as not to trigger any animation - final animation works only if transitions from start - check the animation
      this.animeStates = 'final';
      //This one adds other inline styles (when there is no left card)
      this.inlineStyleToggler = false;
      this.leftCardState.emit(this.toggler);
    }
  }
  //This function starts only when the inlineStyleToggler is true, i.e. when the left card is visible > 541
  //The function returns inline styles in that case - see HTML. The function returns styles both on the left and right sides.
  checkItem(index: number, leftOrRight: string) {
    //My dynamic style object
    let myStyle = {
      padding:
        this.toggler && leftOrRight === 'left'
          ? '0'
          : this.toggler && leftOrRight !== 'left'
          ? '0 0 0 2rem'
          : null,
      position: this.toggler && index > 0 ? 'absolute' : 'relative',
      left: this.toggler && index > 0 ? 'calc(150% - 1rem)' : null,
      visibility: this.toggler && index > 0 ? 'hidden' : null,
    };
    //Returning the final, updated object - online style
    return myStyle;
  }
  //After the animation (the start part) ends, do th efollowing
  tidyUpAfterAnimation(e: any) {
    this.inlineStyleToggler = false;
    this.animeStates = 'final';
    this.toggler = false;
    this.leftCardState.emit(this.toggler);
    this.innerWidth > 541
      ? smoothScroll(this.howItWorks.nativeElement, 1000)
      : null;
  }
  //Works when the inlineStyleToggler is false - this is when the toggler is also false and the left cards are not visible, we apply specific paddings, based on what is the device width.
  updateStyle(index: number) {
    let updatedstyle = {
      padding: '0 2rem',
      marginRight: this.innerWidth > 541 && index % 2 === 0 ? '1rem' : null,
      width: this.innerWidth > 541 ? 'calc(50% - 1rem)' : null,
      // boxShadow:this.innerWidth<542?"inset 0px -1rem 2rem -2rem #004a7c":null,
      borderRadius: '10px',
    };
    return updatedstyle;
  }

  trackbyID(index: number) {
    return index ? index : Number;
  }

  ngOnInit(): void {
    this.adjustCards();
  }
}
