import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonsModule } from '../../shared/components/button/modules/buttons.module';
import { HowItWorksModule } from '../../shared/components/how-it-works/modules/how-it-works.module';
import { CheckLeftBoxInVpDirective } from '../../shared/directives/check-left-box-in-vp/check-left-box-in-vp.directive';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        ButtonsModule,
        HowItWorksModule,
      ],
      declarations: [HomeComponent, CheckLeftBoxInVpDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
