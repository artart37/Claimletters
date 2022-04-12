import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjectKeyPipe } from '../../pipes/generic/object-key/object-key.pipe';
import { MagicChipsComponent } from './magic-chips.component';

describe('MagicChipsComponent', () => {
  let component: MagicChipsComponent;
  let fixture: ComponentFixture<MagicChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagicChipsComponent, ObjectKeyPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
