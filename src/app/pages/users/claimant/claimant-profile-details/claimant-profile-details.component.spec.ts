import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaimantProfileDetailsComponent } from './claimant-profile-details.component';

describe('ClaimantProfileDetailsComponent', () => {
  let component: ClaimantProfileDetailsComponent;
  let fixture: ComponentFixture<ClaimantProfileDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClaimantProfileDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimantProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
