import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageDashboardComponent } from './second-page-dashboard.component';

describe('SecondPageDashboardComponent', () => {
  let component: SecondPageDashboardComponent;
  let fixture: ComponentFixture<SecondPageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
