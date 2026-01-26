/**
 * Author: Mariea Nies
 * Date: January 25, 2026
 * File: sales-by-salesperson.component.ts
 * Description: Sales by salesperson component
 */
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableComponent } from '../../../shared/table/table.component';
import { NgIf } from '@angular/common';
import { SalesBySalespersonService } from './sales-by-salesperson.service';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-sales-by-salesperson',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, NgIf],
  template:`
    <h1>Sales by Salesperson</h1>

      <div class="salesperson-container">
        <form class="form" [formGroup]="salespersonForm" (ngSubmit)="onSubmit()">
          <div class="form_group">
            <label class="label" for="salesperson">Salesperson</label>
            <select
              class="select"
              formControlName="salesperson"
              id="salesperson"
              name="salesperson">

              @for (person of salesPeople; track person) {
                <option [value]="person">{{ person }}</option>
              }
            </select>
          </div>

          <div class="form_actions">
            <button class="button button--primary" type="submit">
              Submit
            </button>
          </div>
        </form>

        @if (salesData.length > 0) {
          <div class="card table-card">
            <app-table
              [title]="'Sales (Last 6 Months)'"
              [data]="salesData"
              [headers]="['Sales Person', 'Total Sales']"
              [sortableColumns]="['Sales Person','Total Sales']"
              [headerBackground]="'secondary'">
            </app-table>
          </div>
        }

  `,
  styles:[ `
    .salesperson-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form, .table-card {
      width: 50%;
      margin: 20px 0;
    }
  `]
})
export class SalesBySalespersonComponent {

  salesPeople: string[] = [];
  salesData: any[] = [];

  salespersonForm = this.fb.group({
    salesperson: [null, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private service: SalesBySalespersonService

  ) {
    this.service.getSalespeople().subscribe((data: any[]) => {
      this.salesPeople = data;
    });
  }

  onSubmit(): void {
    const name = this.salespersonForm.value.salesperson;

    if (!name){
      return;
    }
    this.service.getSalesForLastSixMonths(name).subscribe((data: any[]) => {
      this.salesData = data;
    });
  }
}
