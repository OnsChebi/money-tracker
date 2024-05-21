import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { blockGuardGuard } from './block-guard.guard';

describe('blockGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => blockGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
