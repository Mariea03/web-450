/**
 * Author: Mariea Nies
 * Date: 2/5/26
 * File: agent-performance-by-team.service.ts
 * Description: Handles API calls for agent performance by team
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentPerformanceByTeamService {

  private readonly apiUrl =
   `${environment.apiBaseUrl}/reports/agent-performance/team`;

  constructor(private http: HttpClient) {}

  /**
   * Fetches agent performance data for a given team
   */
  getAgentPerformanceByTeam(team: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?team=${team}`);
  }
}