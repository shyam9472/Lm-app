import { TestBed } from '@angular/core/testing';

import { LeaveDetailsService } from './leave-details.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



describe('LeaveDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule, FormsModule,HttpModule
    ],
  }));

  it('should be created', () => {
    const service: LeaveDetailsService = TestBed.get(LeaveDetailsService);
    expect(service).toBeTruthy();
  });
});
