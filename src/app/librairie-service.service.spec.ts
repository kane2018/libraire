import { TestBed } from '@angular/core/testing';

import { LibrairieServiceService } from './librairie-service.service';

describe('LibrairieServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibrairieServiceService = TestBed.get(LibrairieServiceService);
    expect(service).toBeTruthy();
  });
});
