import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEducationAddDetailsComponent } from './user-education-add-details.component';

describe('UserEducationAddDetailsComponent', () => {
  let component: UserEducationAddDetailsComponent;
  let fixture: ComponentFixture<UserEducationAddDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEducationAddDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEducationAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
