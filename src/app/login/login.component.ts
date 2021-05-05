import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  __router : Router;
  isSubmitted  =  false;
  invalidCredentials =false;

  constructor(private fb: FormBuilder,private authService: AuthService,private router: Router) {  }

  loginForm = this.fb.group({
        username : ['',Validators.required],
        password : ['',Validators.required]
  })

  ngOnInit(): void {
  }
  goToRegister(){
    this.__router.navigateByUrl("/register");
  }
  get formControls() { 
    return this.loginForm.controls; 
  }

  checkInvalidCredentials(){
    var check =  this.authService.invalid();
    if(check)
    this.invalidCredentials = true;
  }


  login(){ 

    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }

    this.checkInvalidCredentials();
    this.authService.login(this.loginForm.value);
    //this.router.navigateByUrl('/loan');
   
  }
}
