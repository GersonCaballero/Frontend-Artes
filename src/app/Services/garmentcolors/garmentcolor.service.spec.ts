import { TestBed } from '@angular/core/testing';

import { GarmentcolorService } from './garmentcolor.service';

describe('GarmentcolorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GarmentcolorService = TestBed.get(GarmentcolorService);
    expect(service).toBeTruthy();
  });
});
