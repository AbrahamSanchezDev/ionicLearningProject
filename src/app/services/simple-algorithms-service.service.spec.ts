import { TestBed } from '@angular/core/testing';

import { SimpleAlgorithmsServiceService } from './simple-algorithms-service.service';

describe('SimpleAlgorithmsServiceService', () => {
  let service: SimpleAlgorithmsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleAlgorithmsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
