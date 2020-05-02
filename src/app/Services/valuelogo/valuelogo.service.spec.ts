import { TestBed } from '@angular/core/testing';

import { ValuelogoService } from './valuelogo.service';

describe('ValuelogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValuelogoService = TestBed.get(ValuelogoService);
    expect(service).toBeTruthy();
  });
});
