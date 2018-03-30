import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPostdetailsComponent } from './hr-postdetails.component';

describe('HrPostdetailsComponent', () => {
  let component: HrPostdetailsComponent;
  let fixture: ComponentFixture<HrPostdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPostdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
