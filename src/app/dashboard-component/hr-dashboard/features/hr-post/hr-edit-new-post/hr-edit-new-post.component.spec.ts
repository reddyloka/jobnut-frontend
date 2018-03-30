import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEditNewPostComponent } from './hr-edit-new-post.component';

describe('HrEditNewPostComponent', () => {
  let component: HrEditNewPostComponent;
  let fixture: ComponentFixture<HrEditNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEditNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEditNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
