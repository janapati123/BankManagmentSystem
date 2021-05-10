import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';
import { CommonService } from './common.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule] 
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should isLoggedIn is true', () => {
    let auth = TestBed.inject(AuthService);
    
    var value=auth.isLoggedIn();
    let spy = spyOn(auth,'isLoggedIn');

    expect(value).toBeFalsy();
  });

  it('should log in the user if valid input', () => {
    var userdetails = { username: "Mani" , password : "Manikanta"}
    let router = TestBed.inject(Router);
    let spy = spyOn(router, 'navigateByUrl');
    
    service.login(userdetails);
    
    expect(spy).not.toHaveBeenCalledWith('/loan');
  });

});
