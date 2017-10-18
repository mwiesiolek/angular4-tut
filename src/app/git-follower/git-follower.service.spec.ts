import { TestBed, inject } from '@angular/core/testing';

import { GitFollowerService } from './git-follower.service';

describe('GitFollowerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitFollowerService]
    });
  });

  it('should be created', inject([GitFollowerService], (service: GitFollowerService) => {
    expect(service).toBeTruthy();
  }));
});
