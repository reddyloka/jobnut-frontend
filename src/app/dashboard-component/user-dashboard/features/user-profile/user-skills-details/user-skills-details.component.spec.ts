import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSkillsDetailsComponent } from './user-skills-details.component';

describe('UserSkillsDetailsComponent', () => {
  let component: UserSkillsDetailsComponent;
  let fixture: ComponentFixture<UserSkillsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSkillsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSkillsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
