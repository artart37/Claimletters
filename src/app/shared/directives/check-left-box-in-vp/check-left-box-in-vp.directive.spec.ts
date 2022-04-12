import { ElementRef } from '@angular/core';
import { CheckLeftBoxInVpDirective } from './check-left-box-in-vp.directive';

const MOCK_ELEMENT: ElementRef = { nativeElement: {} };

describe('CheckLeftBoxInVpDirective', () => {
  it('should create an instance', () => {
    const directive = new CheckLeftBoxInVpDirective(MOCK_ELEMENT);
    expect(directive).toBeTruthy();
  });
});
