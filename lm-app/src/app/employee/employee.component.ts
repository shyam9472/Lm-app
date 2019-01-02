import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  empId : number;
  empMgrId : number;
  employee : Observable<Employee[]>;
  employ : Employee[] = [];
  public searchText : string;
  constructor( private route : ActivatedRoute, private employeeService : EmployeeService, private router : Router) {
    this.employee = employeeService.getEmployee();
    this.employeeService.getEmployee().subscribe(c=> this.employ = c);
    this.empId=parseInt(this.route.snapshot.params["empId"]);
  }
  
  showAll(empId,empMgrId)
  {
    this.empId = empId;
    localStorage.setItem("empId",empId);
    localStorage.setItem("empMgrId",empMgrId);
    // alert(empMgrId);
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
  }

}
