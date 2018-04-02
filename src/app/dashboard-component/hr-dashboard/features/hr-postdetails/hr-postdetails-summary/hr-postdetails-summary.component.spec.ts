import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPostdetailsSummaryComponent } from './hr-postdetails-summary.component';

describe('HrPostdetailsSummaryComponent', () => {
  let component: HrPostdetailsSummaryComponent;
  let fixture: ComponentFixture<HrPostdetailsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPostdetailsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPostdetailsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
