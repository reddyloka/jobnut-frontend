import { TestBed, inject } from '@angular/core/testing';

import { JwtServiceService } from './jwt-service.service';

describe('JwtServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtServiceService]
    });
  });

  it('should be created', inject([JwtServiceService], (service: JwtServiceService) => {
    expect(service).toBeTruthy();
  }));
});
