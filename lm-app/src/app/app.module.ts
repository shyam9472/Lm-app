import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { AppComponent } from './app.component';
import { Pipe, PipeTransform } from '@angular/core';
import { HttpModule } from '@angular/http';

import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpShowComponent } from './emp-show/emp-show.component';
import { EmployeeService } from './employee.service';
import { EmpMgrShowComponent } from './emp-mgr-show/emp-mgr-show.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { FormsModule } from '@angular/forms';
import { PendingNewComponent } from './pending-new/pending-new.component';
import { HistoryComponent } from './history/history.component';
import { ApproveDenyComponent } from './approve-deny/approve-deny.component';
import { LoginComponent } from './login/login.component';

import { LeaveDetailsService } from './leave-details.service';

import { GrdFilterPipe } from './grdfilter.pipe';



const appRoutes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'pending/:empId', component: PendingNewComponent },
  { path: 'applyLeave', component: ApplyLeaveComponent },
  { path: 'history', component: HistoryComponent },
  { path : 'approve', component: ApproveDenyComponent},
  { path: 'empShow/:empId', component: EmpShowComponent },
  { path: 'empMgrShow/:empMgrId', component: EmpMgrShowComponent },
  { path: 'Dashboard/:empId/:empMgrId', component: DashboardComponent },

];

@NgModule({
  declarations: [
    AppComponent,

    EmployeeComponent,
    DashboardComponent,
    EmpShowComponent,
    EmpMgrShowComponent,
    ApplyLeaveComponent,
    PendingNewComponent,
    HistoryComponent,
    ApproveDenyComponent,
    LoginComponent,
    
    GrdFilterPipe
    
  ],
  imports: [
    BrowserModule, 
    
    HttpModule, FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, LeaveDetailsService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
