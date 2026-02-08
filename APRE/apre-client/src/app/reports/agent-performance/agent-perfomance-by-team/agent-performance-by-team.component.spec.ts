/**
 * Author: Mariea Nies
 * Date: 2/5/26
 * File:
 * Description:
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AgentPerformanceByTeamComponent } from './agent-performance-by-team.component';

describe('AgentPerformanceByTeamComponent', () => {
  let component: AgentPerformanceByTeamComponent;
  let fixture: ComponentFixture<AgentPerformanceByTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AgentPerformanceByTeamComponent,
        HttpClientTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentPerformanceByTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty agentPerformance as an array', () =>{
    expect(Array.isArray(component.agentPerformance)).toBeTrue();
  });

  it('should have an empty agentPerformance array on load', () => {
    expect(component.agentPerformance.length).toBe(0);
  });
});