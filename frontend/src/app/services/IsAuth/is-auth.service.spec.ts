import { TestBed } from '@angular/core/testing';

import { IsAuthService } from './is-auth.service';

describe('IsAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsAuthService = TestBed.get(IsAuthService);
    expect(service).toBeTruthy();
  });
});
