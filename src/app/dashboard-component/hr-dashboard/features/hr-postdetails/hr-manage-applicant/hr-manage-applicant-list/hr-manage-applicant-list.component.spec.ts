import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManageApplicantListComponent } from './hr-manage-applicant-list.component';

describe('HrManageApplicantListComponent', () => {
  let component: HrManageApplicantListComponent;
  let fixture: ComponentFixture<HrManageApplicantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrManageApplicantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManageApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
