import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPostComponent } from './hr-post.component';

describe('HrPostComponent', () => {
  let component: HrPostComponent;
  let fixture: ComponentFixture<HrPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
