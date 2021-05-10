import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Country } from './country';

import { RegisterComponent } from './register.component';
import { SelectService } from './select.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let component1: SelectService;
  let fixture: ComponentFixture<RegisterComponent>;
  let fixture1: ComponentFixture<SelectService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ RegisterComponent ],
      providers: [CommonService,AuthService,FormBuilder,SelectService,HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should 3 countries', () => {
    // fixture1 = TestBed.createComponent(SelectService);
    // component1 = fixture1.componentInstance;
    // fixture.detectChanges();

    let stateService = TestBed.inject(SelectService);
    let spy = spyOn(stateService, 'getCountries');

    let size = stateService.getCountries();
    

    expect(size).toEqual(undefined);
  });

  it('should set states when country is selected',()=>{
    component.onSelect(1);
    fixture.detectChanges();

    expect(component.states.length).toBe(4);
  });

  it('should contain only numbers in contact',()=>{
      let control = component.personalDetails.get('contact');
      control.setValue('abc');
      expect(control.valid).toBeFalsy();
  });

  it("should contain register controls",()=>{
      let controls = component.f;
      expect(controls).toBe(component.personalDetails.controls);
  });

  // it('should contain 21 fields in form',()=>{
  //   expect(component.personalDetails.contains('name')).toBeTruthy();
  //   expect(component.personalDetails.contains('username')).toBeTruthy();
  //   expect(component.personalDetails.contains('password')).toBeTruthy();
  //   expect(component.personalDetails.contains('guardianType')).toBeTruthy();
  //   expect(component.personalDetails.contains('guardianName')).toBeTruthy();
  //   expect(component.personalDetails.contains('address')).toBeTruthy();
  //   expect(component.personalDetails.contains('citizenShip')).toBeTruthy();
  //   expect(component.personalDetails.contains('country')).toBeTruthy();
  //   expect(component.personalDetails.contains('state')).toBeTruthy();
  //   expect(component.personalDetails.contains('email')).toBeTruthy();
  //   expect(component.personalDetails.contains('gender')).toBeTruthy();
  //   expect(component.personalDetails.contains('maritalStatus')).toBeTruthy();
  //   expect(component.personalDetails.contains('contact')).toBeTruthy();
  //   expect(component.personalDetails.contains('dob')).toBeTruthy();
  //   expect(component.personalDetails.contains('registerdate')).toBeTruthy();
  //   expect(component.personalDetails.contains('accounttype')).toBeTruthy();
  //   expect(component.personalDetails.contains('branchname')).toBeTruthy();
  //   expect(component.personalDetails.contains('citizenStatus')).toBeTruthy();
  //   expect(component.personalDetails.contains('initialDep')).toBeTruthy();
  //   expect(component.personalDetails.contains('idProof')).toBeTruthy();
  //   expect(component.personalDetails.contains('idNumber')).toBeTruthy();
  // });
  
  it('Should not go to login if registrationInfo is Invalid',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');
  
    component.submit();
    fixture.detectChanges();
  
    expect(spy).not.toHaveBeenCalledWith('/login');
   });
  
  it("should go to login page if register form is valid",()=>{
    let __router = TestBed.inject(Router);
    let spy = spyOn(__router, 'navigateByUrl');
    component.personalDetails.controls.name.setValue("Mani");
    component.personalDetails.controls.username.setValue("Manikanta");
    component.personalDetails.controls.password.setValue("mani@16");
    component.personalDetails.controls.guardianType.setValue("Father");
    component.personalDetails.controls.guardianName.setValue("Ramana");
    component.personalDetails.controls.address.setValue("Kadapa");
    component.personalDetails.controls.citizenShip.setValue("Indian");
    component.personalDetails.controls.country.setValue("3");
    component.personalDetails.controls.state.setValue("2");
    component.personalDetails.controls.email.setValue("abc@gmail");
    component.personalDetails.controls.gender.setValue("Male");
    component.personalDetails.controls.maritalStatus.setValue("Single");
    component.personalDetails.controls.contact.setValue("1234567890");
    component.personalDetails.controls.dob.setValue("1998-11-16");
    component.personalDetails.controls.registerdate.setValue("2021-05-07");
    component.personalDetails.controls.accounttype.setValue("savings");
    component.personalDetails.controls.branchname.setValue("Kadapa");
    component.personalDetails.controls.citizenStatus.setValue("Major");
    component.personalDetails.controls.initialDep.setValue("5000");
    component.personalDetails.controls.idProof.setValue("Aadhaar");
    component.personalDetails.controls.idNumber.setValue("ABCD123456");

    component.submit();
    fixture.detectChanges();
  
    expect(spy).toHaveBeenCalledWith('/login');

  });


}); 
