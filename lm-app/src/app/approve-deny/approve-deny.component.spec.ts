import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveDenyComponent } from './approve-deny.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('ApproveDenyComponent', () => {
  let component: ApproveDenyComponent;
  let fixture: ComponentFixture<ApproveDenyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule, FormsModule
        ,HttpModule
      ],
      declarations: [ ApproveDenyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveDenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
