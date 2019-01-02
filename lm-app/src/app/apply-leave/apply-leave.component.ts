import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { LeaveDetails } from '../leave-details';
import { LeaveDetailsService } from '../leave-details.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor( private route : ActivatedRoute,public applyLeaveService:EmployeeService, public router : Router,
    private leavedetailsService : LeaveDetailsService) {
    this.empId=parseInt(localStorage.getItem("empId"));
    // alert(this.empId);
   }
  model=new LeaveDetails();
  message:string;
  msg:String;
  empId : number;
  empMgrId : number;
  isValidFormSubmitted = false;
  calculateDays() {
    let date1: string=this.model.sdate.toString();
    let date2: string=this.model.edate.toString();
    let diffInMs: number = Date.parse(date2) - Date.parse(date1);
    let diffInHours: number = diffInMs / 1000 / 60 / 60/24;
    this.model.ndays=diffInHours + 1;
    
  //  alert(diffInHours);
    console.log(diffInHours);

    // alert("Event Fired");
}

applyLeave(form: NgForm)
{
  // alert("Hi");
    this.isValidFormSubmitted=false;
    if(form.invalid){
   //     alert("Invalid");
     return; 
  }  
    console.log ('end date component' + this.model.edate);
    this.leavedetailsService.applyLeave(this.model,this.empId).subscribe(
        success => {
            this.msg=success;
            
        },
        err => { 
            this.msg=err;
            console.log(err); 
        }
    )
    this.isValidFormSubmitted = true;
}
cancel() {
  this.empMgrId=parseInt(localStorage.getItem("empMgrId"));
  // alert(this.empId);
  this.router.navigate(['/Dashboard',this.empId,this.empMgrId]);
}

  ngOnInit() {
  }

}