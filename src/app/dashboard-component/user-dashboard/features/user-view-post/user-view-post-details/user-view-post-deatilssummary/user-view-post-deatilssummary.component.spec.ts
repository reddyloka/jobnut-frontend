import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewPostDeatilssummaryComponent } from './login-view-post-deatilssummary.component';

describe('LoginViewPostDeatilssummaryComponent', () => {
  let component: LoginViewPostDeatilssummaryComponent;
  let fixture: ComponentFixture<LoginViewPostDeatilssummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginViewPostDeatilssummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewPostDeatilssummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
