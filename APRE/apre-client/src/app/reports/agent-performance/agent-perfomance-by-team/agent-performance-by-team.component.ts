/**
 * Author: Mariea Nies
 * Date: 2/5/26
 * File: agent-performance-by-team.component.ts
 * Description: Displays agent performance data grouped by team
 */

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableComponent } from '../../../shared/table/table.component'
import { AgentPerformanceByTeamService } from './agent-performance-by-team.service';


@Component({
  selector: 'app-agent-performance-by-team',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,TableComponent],
  template: `
    <h3>Agent Performance by Team</h3>

    <div class="agent-performance-container">
      <form class="form" [formGroup]="teamForm" (ngSubmit)="onSubmit()">
        <div class="form_group">
          <label class="label" for="team">Team</label>
          <select
            class="select"
            id="team"
            formControlName="team">

            @for (team of teams; track team) {
              <option [value]="team">{{ team }}</option>
            }
          </select>
        </div>

        <div class="form_actions">
          <button class="button--primary" type="submit">
            Submit
          </button>
        </div>
      </form>

      @if (agentPerformance.length > 0) {
        <div class="card table-card">
          <app-table
            [title]="'Agent Performance'"
            [data]="agentPerformance"
            [headers]="['Agent', 'Team', 'Tickets Resolved', 'Average Score']"
            [sortableColumns]="['Agent', 'Tickets Resolved', 'Average Score']"
            [headerBackground]="'secondary'">
          </app-table>
        </div>
      }
    </div>
    `,
  styles: [`
    .agent-performance-container {
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

export class AgentPerformanceByTeamComponent {

  teams: string[] = ['Support', 'Sales', 'Engineering', 'HR',];

  agentPerformance: any[] = [];

  teamForm = this.fb.group({
    team: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private service: AgentPerformanceByTeamService
  ) {}

  onSubmit(): void {
    const team = this.teamForm.value.team;

    if (!team) {
      return;
    }

    this.service.getAgentPerformanceByTeam(team)
      .subscribe(data => {
        this.agentPerformance = data;
      });
  }
}