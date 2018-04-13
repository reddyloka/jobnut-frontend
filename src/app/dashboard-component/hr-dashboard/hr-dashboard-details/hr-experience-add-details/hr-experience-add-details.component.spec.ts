import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrExperienceAddDetailsComponent } from './hr-experience-add-details.component';

describe('HrExperienceAddDetailsComponent', () => {
  let component: HrExperienceAddDetailsComponent;
  let fixture: ComponentFixture<HrExperienceAddDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrExperienceAddDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrExperienceAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
