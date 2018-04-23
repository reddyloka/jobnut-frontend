import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPostdetailsEditListComponent } from './hr-postdetails-edit-list.component';

describe('HrPostdetailsEditListComponent', () => {
  let component: HrPostdetailsEditListComponent;
  let fixture: ComponentFixture<HrPostdetailsEditListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPostdetailsEditListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPostdetailsEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
