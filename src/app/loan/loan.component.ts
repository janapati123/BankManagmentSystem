import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  cid;
  date = new Date;
  constructor(private fb: FormBuilder,public authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.cid=localStorage.getItem('CID');
  }
  
  loanDetails = this.fb.group({
      loanType : ['',Validators.required],
      loanAmount : ['',Validators.required],
      loanApDate : ['',Validators.required],
      loanISDate : ['',Validators.required],
      roInterest : ['',Validators.required],
      duration   : ['',Validators.required],
      coursefee : [''],
      course   : [''],
      fName   : [''],
      foccupation   : [''],
      Fxperience   : [''],
      Fcxperience   : [''],
      rationNo   : [''],
      aIncome   : [''],
      paIncome   : [''],
      cName   : [''],
      designation   : [''],
      experience   : [''],
      cexperience   : [''],
  })

  selectedType :any ;

  get f(){
    return this.loanDetails.controls;
  }

  // onChange(event) {
  //   this.selectedType = event.target.value;
  // }

  onSubmit(){
    //console.log(this.loanDetails.value);
    alert("Your Loan Applied Succesfully");
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
