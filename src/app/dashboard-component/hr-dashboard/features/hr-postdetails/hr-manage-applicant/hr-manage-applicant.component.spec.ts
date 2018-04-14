import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManageApplicantComponent } from './hr-manage-applicant.component';

describe('HrManageApplicantComponent', () => {
  let component: HrManageApplicantComponent;
  let fixture: ComponentFixture<HrManageApplicantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrManageApplicantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManageApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
