/**
 * Author: Mariea Nies
 * Date: January 25, 2026
 * File: sales-by-salesperson.component.ts
 * Description: Sales by salesperson component
 */


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SalesBySalespersonComponent } from './sales-by-salesperson.component';

describe('SalesBySalespersonComponent', () => {
  let component: SalesBySalespersonComponent;
  let fixture: ComponentFixture<SalesBySalespersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SalesBySalespersonComponent,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesBySalespersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should define salesBySalesperson array', () => {
    expect(component.salesData).toBeDefined();
  });

  it('should start with an emppty salesBySalesperson array', ()=> {
    expect(component.salesData.length).toBe(0);
  });
});
