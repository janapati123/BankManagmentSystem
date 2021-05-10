import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  __router : Router;
  isSubmitted  =  false;
  invalidCredentials =false;

  constructor(public formBuilder: FormBuilder,private authService: AuthService,public router: Router) {  }

  loginForm = this.formBuilder.group({
        username : ['',Validators.required],
        password : ['',Validators.required]
  })

  ngOnInit(): void {
  }

  get formControls() { 
    return this.loginForm.controls; 
  }

  checkInvalidCredentials(){
    var check =  this.authService.invalid();
    if(check)
    this.invalidCredentials = true;
  }

  goToRegister(){
    this.router.navigateByUrl("/register");
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
