import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing'
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';
import { CommonService } from '../services/common.service';
import { AuthService } from '../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [CommonService,AuthService,FormBuilder]
      //schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the customer to the register page',()=>{
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');
  
    component.goToRegister();
    fixture.detectChanges();
  
    expect(spy).toHaveBeenCalledWith('/register');

    });


    it('should not go to loan page',()=>{
      let router = TestBed.inject(Router);
      let spy = spyOn(router, 'navigateByUrl');
    
      component.login();
      fixture.detectChanges();
    
      expect(spy).not.toHaveBeenCalledWith('/loan'); 
    });

    // it('should  go to loan page',()=>{
    //   let router = TestBed.inject(Router);
    //   let spy = spyOn(router, 'navigateByUrl');
    
    //   component.login();
    //   fixture.detectChanges();
    
    //   expect(spy).toHaveBeenCalledWith('/loan'); 
    // });

    // it('should  go to loan page',()=>{
    //   let auth = TestBed.inject(AuthService);
    //   spyOn(auth, 'login');
    
    //   component.login();
    //   let value = component.checkInvalidCredentials();
    //   fixture.detectChanges();

    //   component.loginForm.controls.username.setValue("Mani");
    //   component.loginForm.controls.password.setValue("Manikanta");
      
    //  // expect(value).toHaveBeenCalled();
    //   expect(auth.login({username:"Manikanta",password:"Manikanta"})).toHaveBeenCalled();
    // });


    it('should return true when invalid function called',()=>{
      let auth = TestBed.inject(AuthService);
      let spy = spyOn(auth, 'invalid');
    
      component.checkInvalidCredentials();
      fixture.detectChanges();
    
      expect(spy).toBeTruthy();
    });

    it('should have invalidcredentials as true if user is not valid',()=>{
      
      let value=component.invalidCredentials=true;
      component.checkInvalidCredentials();
      fixture.detectChanges();
    
      expect(value).toBeTruthy();
    });


});


describe('LoginComponent',()=>{
  let component : LoginComponent;
  
  beforeEach( async () => {
    component = new LoginComponent(new FormBuilder,null,null);
  });

  it('should contain username ,password fields in the form', ()=>{
    expect(component.loginForm.contains('username')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the forms controls required', ()=>{
      let username = component.loginForm.get('username');
      let password = component.loginForm.get('username');

      username.setValue('');
      password.setValue('');

      expect(username.valid).toBeFalsy();
      expect(password.valid).toBeFalsy();
  });

  it('should create a FormGroup comprised of FormControls',()=>{
      component.ngOnInit();
      expect(component.formBuilder instanceof FormBuilder).toBe(true);
  });

  
  
  
})
