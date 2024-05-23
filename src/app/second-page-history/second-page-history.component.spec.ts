import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageHistoryComponent } from './second-page-history.component';

describe('SecondPageHistoryComponent', () => {
  let component: SecondPageHistoryComponent;
  let fixture: ComponentFixture<SecondPageHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
