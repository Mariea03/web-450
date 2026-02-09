

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

// Define the data structure for feedback by agent
export interface FeedbackByAgent {
  agentName: string;
  totalFeedback: number;
  averageRating: number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerFeedbackService {
  private apiUrl = `${environment.apiBaseUrl}/customer-feedback/by-agent`;

  constructor(private http: HttpClient) {}

  // Fetch feedback data from the server
  getFeedbackByAgent(agent?: string): Observable<FeedbackByAgent[]> {
    const url = agent ? `${this.apiUrl}?agent=${agent}` : this.apiUrl;
    return this.http.get<FeedbackByAgent[]>(url);
  }

  getAllAgents(): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiBaseUrl}/customer-feedback/agents`);
  }
}