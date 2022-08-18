import { TestBed } from '@angular/core/testing';

import { FacilityTypeServiceService } from './facility-type-service.service';

describe('FacilityTypeServiceService', () => {
  let service: FacilityTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
