import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-show',
  templateUrl: './emp-show.component.html',
  styleUrls: ['./emp-show.component.css']
})
export class EmpShowComponent implements OnInit {

  employee : Observable<Employee>
  empId : number;
  empMgrId : number;
  empl : Employee;
  constructor( private route : ActivatedRoute, private employeeServices : EmployeeService) {
    this.empId = this.route. snapshot.params["empId"];
 
    // alert(this.empId);
    localStorage.setItem("empId",this.route. snapshot.params["empId"]);
    
    
    this.employee = employeeServices.showEmploy(this.empId);
    this.employeeServices.showEmploy(this.empId).subscribe(c=> this.empl = c);
  }

  ngOnInit() {
  }

}
