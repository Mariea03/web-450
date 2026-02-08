/**
 * Author: Mariea Nies
 * Date: 2/5/26
 * File: agent-by-performance-by-team.service.spect.ts
 * Description:
 */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgentPerformanceByTeamService } from './agent-performance-by-team.service';

describe('AgentPerformanceByTeamService', () => {
  let service: AgentPerformanceByTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(AgentPerformanceByTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should define getAgentPerformanceByTeam method', () => {
    expect(service.getAgentPerformanceByTeam).toBeDefined();
  });

  it('should return an Observable', () => {
    const result = service.getAgentPerformanceByTeam('Sales');
    expect(result.subscribe).toBeDefined();
  });
});