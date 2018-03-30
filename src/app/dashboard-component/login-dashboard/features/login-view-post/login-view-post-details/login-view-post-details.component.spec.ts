import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewPostDetailsComponent } from './login-view-post-details.component';

describe('LoginViewPostDetailsComponent', () => {
  let component: LoginViewPostDetailsComponent;
  let fixture: ComponentFixture<LoginViewPostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginViewPostDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewPostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
