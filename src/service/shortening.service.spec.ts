import { TestBed } from '@angular/core/testing';

import { ShorteningService } from './shortening.service';

describe('ShorteningService', () => {
  let service: ShorteningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShorteningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
