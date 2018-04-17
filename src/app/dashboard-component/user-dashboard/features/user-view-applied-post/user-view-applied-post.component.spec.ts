import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewAppliedPostComponent } from './user-view-applied-post.component';

describe('UserViewAppliedPostComponent', () => {
  let component: UserViewAppliedPostComponent;
  let fixture: ComponentFixture<UserViewAppliedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewAppliedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewAppliedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
