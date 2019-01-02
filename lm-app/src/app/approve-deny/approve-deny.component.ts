import { Component, OnInit } from '@angular/core';
import { LeaveDetails } from '../leave-details';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { LeaveDetailsService } from '../leave-details.service';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {
  
  employee : Observable<Employee>;
  leavedetails : Observable<LeaveDetails[]>;
  empId : number;
  empId1 : number;
  leaId:number;
  empMgrId : number;
  msg : String;
  constructor(public employeesService:EmployeeService, public router : Router,
    private leavedetailsService : LeaveDetailsService) {
    this.empId=parseInt(localStorage.getItem("empId"));
    this.empId1=parseInt(localStorage.getItem("empId1"));
    // alert(this.empId1);

    this.empMgrId=parseInt(localStorage.getItem("empMgrId"));
    // alert(this.empId1);
    this.employee=employeesService.showEmploy(this.empId);

    this.leaId=parseInt(localStorage.getItem("leaId"));
    this.leavedetails=leavedetailsService.getLeave(this.leaId);
   }
  ld = new LeaveDetails(); 
  // ed = new Employee(); 
  approve() {
    this.ld.leaId=parseInt(localStorage.getItem("leaId")); 
    this.ld.leaSta="APPROVED"; 
   // alert(this.ld.leaveManagerComm + " " +this.ld.leaveId + " " +this.mgrId);
    alert(this.empId1)
    this.leavedetailsService.approveDeny(this.ld,this.empId1).subscribe(
        success => {
            this.msg=success;
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
  }
  reject() {
    this.ld.leaId=parseInt(localStorage.getItem("leaId")); 
    this.ld.leaSta="DENIED";
    this.empId1=parseInt(localStorage.getItem("empId1"));
   // alert(this.ld.leaveManagerComm + " " +this.ld.leaveId + " " +this.mgrId);
   if(this.ld.leaMgrCom != null || this.ld.leaMgrCom != undefined) {
    this.leavedetailsService.approveDeny(this.ld,this.empId1).subscribe(
        success => {
            this.msg=success;
        },
        err => { 
            this.msg=err;
            console.log(err);
        }
    )
   }
   else {
       alert("Manager Comments are Required!");
   }
    
  }
  cancel(){
    this.empId1=parseInt(localStorage.getItem("empId1"));
    this.router.navigate(['/Dashboard',this.empId1,this.empMgrId]);
  }
  ngOnInit() {
  }

}