import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LeaveDetailsService } from '../leave-details.service';

const historyServiceStub = {
  showHistory() {
    console.log('came inside the userserivce');
    const history = [
      { "leaId" : 99,
      "sdate" : "2050-12-31",
      "edate" : "2051-01-01",
      "ndays" : 2,
      "leatype" : "ML",
      "leaSta" : "APPROVED",
      "leaRea" : "Just",
      "leaAppOn" : "2019-01-01",
      "leaMgrCom" : "Go to hell",
      "empId" : 9999
    },

    { "leaId" : 199,
      "sdate" : "2050-12-31",
      "edate" : "2051-13-01",
      "ndays" : 20,
      "leatype" : "ML",
      "leaSta" : "PENDING",
      "leaRea" : "Wrong month",
      "leaAppOn" : "2019-02-01",
      "leaMgrCom" : "Go to the zoo",
      "empId" : 8999
    },

    { "leaId" : 299,
      "sdate" : "2050-12-31",
      "edate" : "2051-13-90",
      "ndays" : 25,
      "leatype" : "PL",
      "leaSta" : "DENIED",
      "leaRea" : "Wrong day of the month",
      "leaAppOn" : "2019-03-01",
      "leaMgrCom" : "Go to the library",
      "empId" : 7999
    },


  ];
  return of( history );
 }
};

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      declarations: [ HistoryComponent ],
      providers: [{provide: LeaveDetailsService, 
        useValue: historyServiceStub},
        HttpClient,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Check Leave Id for Emp Id 9999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[0].leaId).toEqual(99);
  });

  it('should Check Leave Id for Emp Id 8999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[1].leaId).toEqual(199);
  });

  it('should Check Leave Id for Emp Id 7999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[2].leaId).toEqual(299);
  });

  it('should Check Start date for Emp Id 9999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[0].sdate).toEqual("2050-12-31");
  });

  it('should Check End date for Emp Id 8999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[1].edate).toEqual("2051-13-01");
  });

  it('should Check Number of days for Emp Id 7999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[2].ndays).toEqual(25);
  });

  it('should Check Leave Type for Emp Id 7999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[2].leatype).toEqual("PL");
  });

  it('should Check Leave Type for Emp Id 9999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[2].leatype).toEqual("PL");
  });

  it('should Check Leave Status for Emp Id 7999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[2].leaSta).toEqual("DENIED");
  });

  it('should Check Leave Reason for Emp Id 8999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[1].leaRea).toEqual("Wrong month");
  });

  it('should Check Applied on for Emp Id 9999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[0].leaAppOn).toEqual("2019-01-01");
  });

  it('should Check Manager comments for Emp Id 7999', () => {
    const fixture = TestBed.createComponent(HistoryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.lead[2].leaMgrCom).toEqual("Go to the library");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});