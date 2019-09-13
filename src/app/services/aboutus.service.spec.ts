import { TestBed } from '@angular/core/testing';

import { AboutusService } from './aboutus.service';

describe('AboutusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AboutusService = TestBed.get(AboutusService);
    expect(service).toBeTruthy();
  });
});
