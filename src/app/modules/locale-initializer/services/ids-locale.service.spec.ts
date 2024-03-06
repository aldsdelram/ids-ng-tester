import { TestBed } from '@angular/core/testing';

import { IdsLocaleService } from './ids-locale.service';

describe('IdsLocaleService', () => {
  let service: IdsLocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdsLocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
