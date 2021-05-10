import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule]
    });
    guard = TestBed.inject(AuthGuard);
   
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be call canActivate created', () => {
    //let fixture = TestBed.createComponent(AuthGuard);
    //let component = fixture.componentInstance;
    //fixture.detectChanges();   
    guard = TestBed.inject(AuthGuard);
    let value = guard.canActivate();
    let spy = spyOn(guard,'canActivate');
    
    expect(value).toBeFalsy();
  });

});
