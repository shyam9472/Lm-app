import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpShowComponent } from './emp-show.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { of } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const userServiceStub1 = {
  showEmploy() {
    const users1 = 
      { "empId" : 1,
      "empName" : "Anshu Bhat",
      "empEmail" : "anshu@gmail.com",
      "empGender" : "Female",
      "empMob" : 9898098165,
      "empDob" : "1996-02-02",
      "empJdate" : "2018-10-04",
      "empDept" : "Testing",
      "empLbal" : "20",
      "empMgrId" : 0
    };
    return of( users1 );
  }
};

describe('EmpShowComponent', () => {
  let component: EmpShowComponent;
  let fixture: ComponentFixture<EmpShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      declarations: [ EmpShowComponent ],
      providers: [{provide: EmployeeService, 
        useValue: userServiceStub1},
        HttpClientModule,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Check Name for Anshu', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empName).toEqual('Anshu Bhat');
  });

  it('should Check Name for Employee Id', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empId).toEqual(1);
  });

  it('should Check for Email', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empEmail).toEqual('anshu@gmail.com');
  });
  
  it('should Check Gender ', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empGender).toEqual('Female');
  });

  it('should Check for Mobile', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empMob).toEqual(9898098165);
  });

  it('should Check for Date of Birth', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empDob).toEqual("1996-02-02");
  });

  it('should Check for Date of Joining', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empJdate).toEqual("2018-10-04");
  });

  it('should Check for Department', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empDept).toEqual("Testing");
  });

  it('should Check for Available Leave Balance', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empLbal).toEqual("20");
  });

  it('should Check for Manager', () => {
    const fixture = TestBed.createComponent(EmpShowComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.empl.empMgrId).toEqual(0);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
