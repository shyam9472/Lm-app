import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { GrdFilterPipe } from '../grdfilter.pipe';

const userServiceStub = {
  getEmployee() {
    const users = [
      { "empId" : 1,
      "empName" : "Sravanthi Bommu",
      "empEmail" : "sravanthi@gmail.com",
      "empGender" : "Female",
      "empMob" : 9898098765,
      "empDob" : "1996-02-03",
      "empJdate" : "2018-10-04",
      "empDept" : "FTP",
      "empLbal" : "30",
      "empMgrId" : 0
    },

    { "empId" : 2,
    "empName" : "Rashmi Jadhav",
    "empEmail" : "rashmi80@gmail.com",
    "empGender" : "Female",
    "empMob" : 8909876543,
    "empDob" : "1996-04-12",
    "empJdate" : "2018-06-12",
    "empDept" : "Java",
    "empLbal" : "10",
    "empMgrId" : 1
  },

  { "empId" : 3,
  "empName" : "ShivaKumar",
  "empEmail" : "shivaishere@gmail.com",
  "empGender" : "Male",
  "empMob" : 7890987657,
  "empDob" : "1996-01-01",
  "empJdate" : "2018-12-10",
  "empDept" : "Hexavarsity",
  "empLbal" : "40",
  "empMgrId" : 2
  },
    ];
    return of( users );
  }
};
describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => { 
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      declarations: [ EmployeeComponent,GrdFilterPipe ],
      providers: [{provide: EmployeeService, 
        useValue: userServiceStub},
        HttpClient,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should Check Name for Sravanthi', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[0].empName).toEqual('Sravanthi Bommu');
  });

  it('should Check Name for Rashmi', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[1].empName).toEqual('Rashmi Jadhav');
  });

  it('should Check Name for Shivakumar', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[2].empName).toEqual('ShivaKumar');
  });

  it('should Check Id for Rashmi', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[1].empId).toEqual(2);
  });

  it('should Check Id for Sravanthi', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[0].empId).toEqual(1);
  });

  it('should Check Id for ShivaKumar', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[2].empId).toEqual(3);
  });

  it('should Check EmailId for Shiva', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[2].empEmail).toEqual("shivaishere@gmail.com");
  });

  it('should Check EmailId for Sravanthi', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[0].empEmail).toEqual("sravanthi@gmail.com");
  });

  it('should Check EmailId for Rashmi', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[1].empEmail).toEqual("rashmi80@gmail.com");
  });

  it('should Check Gender for ShivaKumar', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[2].empGender).toEqual("Male");
  });

  it('should Check Gender for Rashmi', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[1].empGender).toEqual("Female");
  });

  it('should Check Gender for Sravanthi', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[0].empGender).toEqual("Female");
  });

  it('should Check Mobile number for Employee Id 1', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[0].empMob).toEqual(9898098765);
  });

  it('should Check Mobile number for Employee Id 2', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[1].empMob).toEqual(8909876543);
  });

  it('should Check Mobile number for Employee Id 3', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[2].empMob).toEqual(7890987657);
  });

  it('should Check Joining date for Employee Id 2', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[1].empJdate).toEqual("2018-06-12");
  });

  it('should Check Joining date for Employee Id 1', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[0].empJdate).toEqual("2018-10-04");
  });

  it('should Check Joining date for Employee Id 3', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[2].empJdate).toEqual("2018-12-10");
  });

  it('should Check department for Employee Id 1', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[0].empDept).toEqual("FTP");
  });

  it('should Check department for Employee Id 2', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[1].empDept).toEqual("Java");
  });

  it('should Check department for Employee Id 3', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[2].empDept).toEqual("Hexavarsity");
  });

  it('should Check department for Employee Id 3', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.employ[2].empDept).toEqual("Hexavarsity");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
