import { TestBed } from '@angular/core/testing';

import { LogtrackerService } from './logtracker.service';

describe('LogtrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogtrackerService = TestBed.get(LogtrackerService);
    expect(service).toBeTruthy();
  });
});
