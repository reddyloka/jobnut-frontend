import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QulComponent } from './qul.component';

describe('QulComponent', () => {
  let component: QulComponent;
  let fixture: ComponentFixture<QulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
