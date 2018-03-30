import { TestBed, inject } from '@angular/core/testing';

import { UserBaseService } from './user-base.service';

describe('UserBaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserBaseService]
    });
  });

  it('should be created', inject([UserBaseService], (service: UserBaseService) => {
    expect(service).toBeTruthy();
  }));
});
