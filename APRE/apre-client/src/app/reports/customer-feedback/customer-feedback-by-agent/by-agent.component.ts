

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TableComponent } from '../../../shared/table/table.component';
import { CustomerFeedbackService, FeedbackByAgent } from './customer-feedback.service';

@Component({
  selector: 'app-by-agent',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,TableComponent],
  template:`
    <h1>Customer Feedback by Agent</h1>

    <div class="feedback-container">

      <!-- Agent selection form -->
      <form [formGroup]="feedbackForm" (ngSubmit)="onSubmit()" class="form">
        <div class="form_group">
          <label class="label" for="agent">Select Agent</label>
          <select id="agent" formControlName="agent" class="select">
            <option value="">-- Select an Agent --</option>
            <option *ngFor="let agent of agents" [value]="agent">{{ agent }}</option>
          </select>
        </div>

        <div class="form_actions">
          <button type="submit" class="button button--primary" [disabled]="feedbackForm.invalid">
            Submit
          </button>
        </div>
      </form>


      <!-- Table card -->
      <div class="card table-card" *ngIf="feedback.length > 0">
        <app-table
          [title]="'Feedback Summary'"
          [data]="feedback"
          [headers]="['Agent Name', 'Total Feedbacks', 'Average Rating']"
          [headerBackground]="'secondary'">
        </app-table>
      </div>

      <div *ngIf="submitted && tableData.length === 0" class="no-data">
        No feedback data available.
      </div>
    </div>
  `,
  styles: [`
    .feedback-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .form {
      width: 50%;
      margin: 20px 0;
    }

    .table-card {
      width: 60%;
      margin: 20px 0;
    }

    .no-data {
      text-align: center;
      color: #888;
      font-style: italic;
      margin-top: 1rem;
    }

    h1 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
  `]
})
export class ByAgentComponent implements OnInit {
  feedbackForm!: FormGroup;
  agents: string[] = [];
  feedback: FeedbackByAgent[] = [];
  tableData: { [key: string]: string | number }[] = [];

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private feedbackService: CustomerFeedbackService
  ) {}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      agent: ['', Validators.required]
    });

    this.feedbackService.getAllAgents().subscribe({
      next: (data: string[]) => this.agents = data,
      error: err => console.error(err)
    });
  }

  onSubmit(): void {
    const agent = this.feedbackForm.get('agent')?.value;
    if (!agent) return;

    this.submitted = true;

    this.feedbackService.getFeedbackByAgent(agent).subscribe({
      next: (data: FeedbackByAgent[]) => {
         this.feedback = data,

         this.tableData = data.map(item => ({
          'Agent Name': item.agentName,
          'Total Feedbacks': item.totalFeedback,
          'Average Rating': item.averageRating.toFixed(2)
         }));
      },
      error: (err: unknown) => console.error('Error fetching feedback', err)
    });
  }
}