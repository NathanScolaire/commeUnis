import { TestBed } from '@angular/core/testing';

import { RetroactionService } from './retroaction.service';

describe('RetroactionService', () => {
  let service: RetroactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetroactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
