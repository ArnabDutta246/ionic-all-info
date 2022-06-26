import { TestBed } from '@angular/core/testing';

import { CartTestService } from './cart-test.service';

describe('CartTestService', () => {
  let service: CartTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
