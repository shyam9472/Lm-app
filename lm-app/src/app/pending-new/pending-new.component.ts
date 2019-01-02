import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from '../leave-details';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveDetailsService } from '../leave-details.service';

@Component({
  selector: 'app-pending-new',
  templateUrl: './pending-new.component.html',
  styleUrls: ['./pending-new.component.css']
})
export class PendingNewComponent implements OnInit {
  pends : number[] =[] ;
  lds : number;
  ld = new LeaveDetails();
  leavedetails: Observable<LeaveDetails[]>;
  empId :number;
  leaId : number;
  showButton : boolean = false;
  flagp : number;
  empMgrId : number;
  msg  : String;
  employee : Observable<Employee[]>
  lead : LeaveDetails[] = [];
  public searchText1 : string;
  constructor(private leavedetailsService : LeaveDetailsService, private employeesService : EmployeeService,
              private router : Router, private route:ActivatedRoute) {
    this.employee = employeesService.getEmployee();
    this.empId=parseInt(this.route.snapshot.params["empId"]);

    this.leavedetailsService.showPending(this.empId).subscribe(c=> this.lead = c);
    this.empId=parseInt(this.route.snapshot.params["empId"]);
    // alert(this.empMgrId);
    this.leavedetails = leavedetailsService.showPending(this.empId);
    this.flagp = parseInt(this.route.snapshot.params["empId"]);
    // alert(this.flagp);
  }
  selectBadge (e, id ) {
    if (e.target.checked) {
      this.pends.push(id);
      //alert(this.pends);
    }  else {
      this.pends.splice(this.pends.indexOf(id), 1);
    }
   }


   approveall() {
     this.lds = 0;
     while(this.lds < this.pends.length){
    // this.ld.leaveId=parseInt(localStorage.getItem("leaveId"));
    this.ld.leaId = this.pends[this.lds];
    this.ld.leaMgrCom = "Congratulations";
     this.ld.leaSta="APPROVED";
     this.ld.empId=parseInt(localStorage.getItem("empId1"));
    //alert(this.ld.leaId + " " + " "+ this.empId + " "+ this.ld.leaMgrCom + " " +this.ld.leaSta + " " +this.ld.empId); 
     this.leavedetailsService.approveDeny(this.ld,this.empId).subscribe(
         success => {
             this.msg=success;
         },
         err => {
             this.msg=err;
             console.log(err);
         }
         
     )
     this.lds++ ;
     
   }
   alert("leave approved Successfully ");
   window.location.reload();
  }

  clickRow(x,e) {
    this.leaId=x.leaId; 
    //alert(this.leavId);
    localStorage.setItem("leaId",x.leaId); 
    //alert(e.empId);
    localStorage.setItem("empId",e.empId);
    this.showButton=true;
   //alert(localStorage.getItem("leaveId"));
  }
  cancel(){
    this.router.navigate(['/']);
  }
  doApproveDeny() { 
    this.router.navigate(["/approve"]);
  }
  ngOnInit() {
  }

}