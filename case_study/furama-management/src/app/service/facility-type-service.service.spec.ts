import { TestBed } from '@angular/core/testing';

import { FacilityTypeService } from './facility-type-service.service';

describe('FacilityTypeServiceService', () => {
  let service: FacilityTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
