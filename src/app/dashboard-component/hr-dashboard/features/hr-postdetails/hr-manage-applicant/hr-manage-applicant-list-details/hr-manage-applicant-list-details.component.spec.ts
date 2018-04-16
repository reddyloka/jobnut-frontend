import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManageApplicantListDetailsComponent } from './hr-manage-applicant-list-details.component';

describe('HrManageApplicantListDetailsComponent', () => {
  let component: HrManageApplicantListDetailsComponent;
  let fixture: ComponentFixture<HrManageApplicantListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrManageApplicantListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManageApplicantListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
