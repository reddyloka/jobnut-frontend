import { TestBed, inject } from '@angular/core/testing';

import { HrbaseService } from './hrbase.service';

describe('HrbaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HrbaseService]
    });
  });

  it('should be created', inject([HrbaseService], (service: HrbaseService) => {
    expect(service).toBeTruthy();
  }));
});
