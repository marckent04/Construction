import { TestBed, async, inject } from '@angular/core/testing';

import { IsCnnectedGuard } from './is-cnnected.guard';

describe('IsCnnectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsCnnectedGuard]
    });
  });

  it('should ...', inject([IsCnnectedGuard], (guard: IsCnnectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
