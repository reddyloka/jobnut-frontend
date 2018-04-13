import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExperienceAddDetailsComponent } from './user-experience-add-details.component';

describe('UserExperienceAddDetailsComponent', () => {
  let component: UserExperienceAddDetailsComponent;
  let fixture: ComponentFixture<UserExperienceAddDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExperienceAddDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExperienceAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
