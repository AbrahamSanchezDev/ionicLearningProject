import { TestBed } from '@angular/core/testing';

import { InfinitescrolladataService } from './infinitescrolladata.service';

describe('InfinitescrolladataService', () => {
  let service: InfinitescrolladataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfinitescrolladataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
