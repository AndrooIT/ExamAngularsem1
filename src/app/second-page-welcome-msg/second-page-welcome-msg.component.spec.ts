import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageWelcomeMsgComponent } from './second-page-welcome-msg.component';

describe('SecondPageWelcomeMsgComponent', () => {
  let component: SecondPageWelcomeMsgComponent;
  let fixture: ComponentFixture<SecondPageWelcomeMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageWelcomeMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageWelcomeMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
