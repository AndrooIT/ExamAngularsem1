import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageGameComponent } from './second-page-game.component';

describe('SecondPageGameComponent', () => {
  let component: SecondPageGameComponent;
  let fixture: ComponentFixture<SecondPageGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
