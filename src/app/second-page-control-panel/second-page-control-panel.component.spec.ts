import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageControlPanelComponent } from './second-page-control-panel.component';

describe('SecondPageControlPanelComponent', () => {
  let component: SecondPageControlPanelComponent;
  let fixture: ComponentFixture<SecondPageControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPageControlPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondPageControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
