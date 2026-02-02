import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AgentPerformanceComponent } from './agent-performance.component';
import { AgentPerformanceService } from './agent-performance.service';

describe('AgentPerformanceComponent', () => {
  let component: AgentPerformanceComponent;
  let fixture: ComponentFixture<AgentPerformanceComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        AgentPerformanceComponent,
        HttpClientTestingModule
      ],
      providers: [AgentPerformanceService]
    }).compileComponents();

    fixture = TestBed.createComponent(AgentPerformanceComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the agent performance API on init', () => {
    const req = httpMock.expectOne(req =>
      req.url === '/api/reports/agent-performance/team' &&
      req.params.get('team') === 'Support'
    );
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should render table rows when data is returned', () => {
    const mockData = [
      { agent: 'Alice', year: 'Support', ticketsResolved: 120, avgScore: 4.6 }
    ];

    const req = httpMock.expectOne(r =>
      r.url === '/api/reports/agent-performance/team' &&
      r.params.get('team') === 'Support'
    );

    fixture.detectChanges();
    const rows = fixture.nativeElement.querySelectorAll('tr');
    expect(rows.length).toBe(2); // header + data row
  });

  afterEach(() => {
    httpMock.verify();
  });
});
