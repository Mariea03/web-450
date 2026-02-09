

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CustomerFeedbackService, FeedbackByAgent } from './customer-feedback.service';

describe('CustomerFeedbackService', () => {
  let service: CustomerFeedbackService;
  let httpMock: HttpTestingController;

  const mockResponse: FeedbackByAgent[] = [
    {
      agentName: 'Alice NChains',
      totalFeedback: 12,
      averageRating: 4.6
    },
    {
      agentName: 'Bob Dillon',
      totalFeedback: 8,
      averageRating: 4.2
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerFeedbackService]
    });

    service = TestBed.inject(CustomerFeedbackService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch customer feedback by agent', () => {
    service.getFeedbackByAgent().subscribe(data => {
      expect(data).toEqual(mockResponse);
      expect(data.length).toBe(2);
    });

    const req = httpMock.expectOne('/api/customer-feedback/by-agent');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle an empty response', () => {
    service.getFeedbackByAgent().subscribe(data => {
      expect(data).toEqual([]);
    });

    const req = httpMock.expectOne('/api/customer-feedback/by-agent');
    req.flush([]);
  });
});