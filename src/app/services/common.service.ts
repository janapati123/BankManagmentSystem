import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  constructor(private __http:HttpClient) { }

  createUser(user){
    user['cid']='R-'+Math.floor(Math.random()*(999-100+1)+100);
    return this.__http.post("http://localhost:3000/users",user);
  }

  getAllUser(){
    return this.__http.get("http://localhost:3000/users");
  }

  updateUser(URl,updateDetails){
    return this.__http.put<any>(URl,updateDetails).subscribe();
  }
}
