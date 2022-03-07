import { TestBed } from '@angular/core/testing';

import { ProtectGuard } from './protect.guard';

describe('ProtectGuard', () => {
  let guard: ProtectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
