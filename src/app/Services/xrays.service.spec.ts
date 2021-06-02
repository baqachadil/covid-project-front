import { TestBed } from '@angular/core/testing';

import { XraysService } from './xrays.service';

describe('XraysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XraysService = TestBed.get(XraysService);
    expect(service).toBeTruthy();
  });
});
