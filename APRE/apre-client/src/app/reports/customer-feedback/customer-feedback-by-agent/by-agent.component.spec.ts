

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ByAgentComponent } from './by-agent.component';
import { CustomerFeedbackService } from './customer-feedback.service';
import { of } from 'rxjs';

describe('ByAgentComponent', () => {
  let component: ByAgentComponent;
  let fixture: ComponentFixture<ByAgentComponent>;
  let service: CustomerFeedbackService;

  const mockData = [
    { agentName: 'Alice', totalFeedbacks: 5, averageRating: 4.2 },
    { agentName: 'Bob', totalFeedbacks: 3, averageRating: 3.8 }
  ];

  beforeEach(async () => {
    const serviceStub ={
      getFeedbackByAgent: () => of(mockData)
    };

    await TestBed.configureTestingModule({
      declarations: [ByAgentComponent],
      providers: [{ provide: CustomerFeedbackService, useValue: serviceStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(ByAgentComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CustomerFeedbackService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  })

  it('should fetch feedback data on init', () => {
    expect(component.feedback.length).toBe(2);
    expect(component.feedback[0].agentName).toBe('Alice');
  });

  it('should display data in table', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-table')).toBeTruthy();
  });
});