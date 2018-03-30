import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrPostListSummaryComponent } from './hr-post-list-summary.component';

describe('HrPostListSummaryComponent', () => {
  let component: HrPostListSummaryComponent;
  let fixture: ComponentFixture<HrPostListSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrPostListSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrPostListSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
