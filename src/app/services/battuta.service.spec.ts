import { TestBed, inject } from '@angular/core/testing';

import { BattutaService } from './battuta.service';

describe('BattutaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattutaService]
    });
  });

  it('should be created', inject([BattutaService], (service: BattutaService) => {
    expect(service).toBeTruthy();
  }));
});
