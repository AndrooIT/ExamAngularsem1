import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageNavbarComponent } from './second-page-navbar.component';

describe('SecondPageNavbarComponent', () => {
  let component: SecondPageNavbarComponent;
  let fixture: ComponentFixture<SecondPageNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
