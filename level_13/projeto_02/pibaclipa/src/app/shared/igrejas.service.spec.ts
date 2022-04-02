import { TestBed } from '@angular/core/testing';

import { IgrejasService } from './igrejas.service';

describe('IgrejasService', () => {
  let service: IgrejasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IgrejasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
