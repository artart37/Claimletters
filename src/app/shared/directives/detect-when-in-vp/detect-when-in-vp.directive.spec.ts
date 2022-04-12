import { ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetectWhenInViewPort } from './detect-when-in-vp.directive';

const MOCK_ELEMENT: ElementRef = { nativeElement: {} };
const MOCK_ROUTE: ActivatedRoute = new ActivatedRoute();

describe('DetectWhenInVpDirective', () => {
  it('should create an instance', () => {
    const directive = new DetectWhenInViewPort(MOCK_ELEMENT, MOCK_ROUTE);
    expect(directive).toBeTruthy();
  });
});
