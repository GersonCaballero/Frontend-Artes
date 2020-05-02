import { TestBed } from '@angular/core/testing';

import { CompanytypeService } from './companytype.service';

describe('CompanytypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanytypeService = TestBed.get(CompanytypeService);
    expect(service).toBeTruthy();
  });
});
