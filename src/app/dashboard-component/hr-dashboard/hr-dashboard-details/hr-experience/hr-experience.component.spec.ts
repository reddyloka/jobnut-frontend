import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrExperienceComponent } from './hr-experience.component';

describe('HrExperienceComponent', () => {
  let component: HrExperienceComponent;
  let fixture: ComponentFixture<HrExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
