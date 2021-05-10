import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';

import { LoanComponent } from './loan.component';

describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ LoanComponent ],
      providers: [FormBuilder,AuthService,CommonService,HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to login page after logout button clicked',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');
  
    component.logout();
    fixture.detectChanges();
  
    expect(spy).toHaveBeenCalledWith('/login'); 
  });

  it('should alert message',()=>{
  
    let spy = spyOn(window, "alert")
    
    component.onSubmit();
    fixture.detectChanges();
  
    expect(spy).toHaveBeenCalledWith("Your Loan Applied Succesfully");
  });
});
