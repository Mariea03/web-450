import { TestBed } from '@angular/core/testing';

import { SalesBySalesperson } from './reports/sales/sales-by-salesperson.service';

describe('SalesBySalesperson', () => {
  let service: SalesBySalesperson;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesBySalesperson);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
