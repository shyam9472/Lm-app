import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { LeaveDetailsService } from '../leave-details.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  leavedetails: Observable<LeaveDetails[]>;
  empId :number;
  flagp : number;
  employee : Observable<Employee[]>
  lead : LeaveDetails[] = [];
  constructor(private employeeService : EmployeeService,private route:ActivatedRoute,private router : Router,
              private leavedetailsService : LeaveDetailsService) {
    this.employee = employeeService.getEmployee();
    this.empId = parseInt(localStorage.getItem("empId"));

    localStorage.setItem("empId1",this.route.snapshot.params["empId"]);
    this.leavedetailsService.showHistory(this.empId).subscribe(c=> this.lead = c);
    this.empId=parseInt(this.route.snapshot.params["empId"]);
    // alert(this.empId);
    this.leavedetails = leavedetailsService.showHistory(this.empId);
    this.flagp = parseInt(this.route.snapshot.params["empId"]);
    // alert(this.flagp);
  }

  newLeave() {
    this.router.navigate(['/applyLeave']);
  }
  back() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}