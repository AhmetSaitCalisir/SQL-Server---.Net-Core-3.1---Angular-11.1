import { TestBed } from '@angular/core/testing';

import { DukkanService } from './dukkan.service';

describe('DukkanService', () => {
  let service: DukkanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DukkanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
