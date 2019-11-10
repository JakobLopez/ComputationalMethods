import { TestBed } from '@angular/core/testing';

import { PermutationService } from './permutation.service';

describe('PermutationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermutationService = TestBed.get(PermutationService);
    expect(service).toBeTruthy();
  });
});
