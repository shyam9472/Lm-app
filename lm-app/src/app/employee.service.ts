  import { Injectable } from '@angular/core';
  import { Http, Response } from '@angular/http';
  import { Observable } from 'rxjs';
  import { Employee } from "./employee";
  import 'rxjs/add/operator/map';
  import { LeaveDetails } from './leave-details';

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {

    constructor(private http: Http) { }
    getEmployee(): Observable<Employee[]> {
      return this.http.get
      ("http://localhost:8080/ftp85/api/employees")
        .map((res: Response) => res.json());
    }
    showEmploy(empId): Observable<Employee> {
      if(empId != 0) {
      return this.http.get
      ("http://localhost:8080/ftp85/api/employees/" +empId)
        .map((res: Response) => res.json());
      } else {
        return this.http.get
        ("No Manager" +empId)
        .map((res: Response) => res.json());
      }
    }
  }
