import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('EmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule, FormsModule,HttpModule
    ],
  }));

  it('should be created', () => {
    const service: EmployeeService = TestBed.get(EmployeeService);
    expect(service).toBeTruthy();
  });
});
