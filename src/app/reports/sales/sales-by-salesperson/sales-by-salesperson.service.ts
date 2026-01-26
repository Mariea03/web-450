/**
 * Author: Mariea Nies
 * Date: January 25, 2026
 * File: sales-by-salesperson.component.ts
 * Description: Sales by salesperson component
 */

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalesBySalespersonService {

  private mockSales = [
    { salesperson: 'Daphne Greene', date: '2025-09-15', amount: 12000 },
    { salesperson: 'Daphne Greene', date: '2025-11-02', amount: 8500 },
    { salesperson: 'Stephen Kirk', date: '2025-10-10', amount: 6500 },
    { salesperson: 'Stephen Kirk', date: '2025-12-05', amount: 9600 },
    { salesperson: 'Christmas Snow', date: '2025-08-20', amount: 14600 }
  ];

  getSalespeople(): Observable<string[]> {
    const names = [...new Set(this.mockSales.map(s => s.salesperson))];
    return of(names);
  }

  getSalesForLastSixMonths(salesperson: string): Observable<any[]> {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const results = this.mockSales.filter(s =>
      s.salesperson === salesperson &&
      new Date(s.date) >= sixMonthsAgo
    );
    return of(results);
  }

}
