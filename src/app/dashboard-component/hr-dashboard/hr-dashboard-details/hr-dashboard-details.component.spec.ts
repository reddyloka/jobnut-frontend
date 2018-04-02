import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrDashboardDetailsComponent } from './hr-dashboard-details.component';

describe('HrDashboardDetailsComponent', () => {
  let component: HrDashboardDetailsComponent;
  let fixture: ComponentFixture<HrDashboardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrDashboardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrDashboardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
