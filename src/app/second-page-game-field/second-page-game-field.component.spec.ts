import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageGameFieldComponent } from './second-page-game-field.component';

describe('SecondPageGameFieldComponent', () => {
  let component: SecondPageGameFieldComponent;
  let fixture: ComponentFixture<SecondPageGameFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageGameFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageGameFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
