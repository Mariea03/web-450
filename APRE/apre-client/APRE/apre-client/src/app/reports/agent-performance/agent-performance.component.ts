/**
 * Author: Professor Krasso
 * Date: 10 September 2024
 * File: agent-performance.component.ts
 * Description: Agent performance component
 */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentPerformanceService } from './agent-performance.service';

@Component({
  selector: 'app-agent-performance',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2> Agent Performance by Year & Customer Feedback</h2>

    <table *ngIf="data.length">
      <tr>
        <th>Agent</th>
        <th>Year</th>
        <th>Feedback</th>
        <th>Score</th>
      </tr>
      <tr *ngFor="let item of data">
        <td>{{ item.agent }}</td>
        <td>{{ item.year }}</td>
        <td>{{ item.feedback }}</td>
        <td>{{ item.score }}</td>
      </tr>
    </table>
  `,
  styles: ``
})
export class AgentPerformanceComponent implements OnInit {
  data: any[] = [];

  constructor(private service: AgentPerformanceService) {}

  ngOnInit(): void {
    this.service.getAgentPerformance(2024, 'positive')
      .subscribe(res => this.data = res);
  }
}
