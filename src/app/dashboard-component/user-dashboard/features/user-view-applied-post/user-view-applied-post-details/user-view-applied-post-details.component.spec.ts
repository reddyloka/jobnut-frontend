import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAppliedPostDetailsComponent } from './user-view-applied-post-details.component';

describe('UserViewAppliedPostDetailsComponent', () => {
  let component: UserViewAppliedPostDetailsComponent;
  let fixture: ComponentFixture<UserViewAppliedPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewAppliedPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAppliedPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
