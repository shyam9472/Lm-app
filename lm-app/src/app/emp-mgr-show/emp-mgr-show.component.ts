import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-mgr-show',
  templateUrl: './emp-mgr-show.component.html',
  styleUrls: ['./emp-mgr-show.component.css']
})
export class EmpMgrShowComponent implements OnInit {

  employee : Observable<Employee>
  empMgrId : number;
  empl : Employee;
  constructor( private route : ActivatedRoute, private employeeServices : EmployeeService) {
    this.empMgrId = this.route.snapshot.params["empMgrId"];
    
    // alert(this.empMgrId);
    // alert(this.empMgrId);
    //this.empMgrId = parseInt(localStorage.getItem("empMgrId"));
    if(this.empMgrId != 0) {
    this.employee = employeeServices.showEmploy(this.empMgrId);
    this.employeeServices.showEmploy(this.empMgrId).subscribe(c=> this.empl = c);
    } else {
      // alert("No Manager");
    }
  }

  ngOnInit() {
  }

}
