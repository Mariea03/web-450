import { TestBed } from '@angular/core/testing';

import { AgentPerformance } from './agent-performance';

describe('AgentPerformance', () => {
  let service: AgentPerformance;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentPerformance);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
