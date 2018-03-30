import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViewPostComponent } from './login-view-post.component';

describe('LoginViewPostComponent', () => {
  let component: LoginViewPostComponent;
  let fixture: ComponentFixture<LoginViewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginViewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
