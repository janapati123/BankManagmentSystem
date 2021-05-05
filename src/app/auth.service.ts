import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './common.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  object1={};
  registerusers;
  cid1;
  flag=0;
  constructor(private commonService:CommonService,private router:Router) { }

  public login(userInfo: User){
    
    this.commonService.getAllUser().subscribe((result)=>{
      this.registerusers = result;
    
      for(let ruser of this.registerusers){
        console.log(ruser.username == userInfo['username'] && ruser.password == userInfo['password']);
        if( ruser.username == userInfo['username'] && ruser.password == userInfo['password']){
          localStorage.setItem('ACCESS_TOKEN', ruser.username);
          localStorage.setItem('CID', ruser.cid);

         // localStorage.setItem('ACCESS_TOKEN', "access_token");
          this.router.navigateByUrl('/loan');
          this.invalid();
        }   
      }
    })     
  }
  public invalid(){
    return true;
  }

  public isLoggedIn(){

    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
  
  public adduser(user1){
    this.commonService.createUser(user1).subscribe((response)=>{
      console.log("User Has been added");     
    })

    this.object1=user1;
    console.log(this.object1)
  }

  public cust(cid){
    this.cid1=cid;
    console.log(this.cid1)
  }
  
}
