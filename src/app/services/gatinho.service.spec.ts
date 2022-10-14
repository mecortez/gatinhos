import { TestBed } from '@angular/core/testing';

import { GatinhoService } from './gatinho.service';

describe('GatinhoService', () => {
  let service: GatinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
