import { TestBed } from '@angular/core/testing';

import { ListReproduccionServiceService } from './list-reproduccion-service.service';

describe('ListReproduccionServiceService', () => {
  let service: ListReproduccionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListReproduccionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
