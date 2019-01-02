import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empId : number;
  empMgrId : number;
  passWord : string;
  constructor(private router : Router) {
    this.empId = parseInt(localStorage.getItem("empId"));
    
    }
   login(empId) {
    this.empMgrId = parseInt(localStorage.getItem("empMgrId"));
    if(this.passWord == " ") {
      this.router.navigate(["/Dashboard",empId,this.empMgrId]);
    } else {
      alert("Invalid");
    // } else if (this.passWord == null) {
    //   alert("")
    }

    }
    cancel() {
      this.router.navigate(['/']);
    }
  ngOnInit() {
  }

}
