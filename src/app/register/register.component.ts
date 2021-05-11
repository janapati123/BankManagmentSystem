import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonService } from '../services/common.service';
import { Country } from './country';
import { SelectService } from './select.service';
import { State } from './state';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //genders = ['male', 'female'];
  isSubmitted = false;

  selectedCountry: Country = new Country(3, 'India');
  countries: Country[];
  states: State[];
  cid;
  allUser: Object;
  date = new Date;
  age;
  
  
  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
    //this.cid='R-'+Math.floor(Math.random()*(999-100+1)+100);
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

  constructor(private authService: AuthService,private formBuilder: FormBuilder,
    private selectService: SelectService,private router: Router,private commonService:CommonService) { }

  personalDetails = this.formBuilder.group({
    name : ['', [Validators.required,
                 Validators.pattern('^[a-zA-Z ]+$')]],
    username : ['', [Validators.required,
                      Validators.minLength(4)]],
    password : ['', [Validators.required,Validators.minLength(6)]],
    guardianType : ['', Validators.required],
    guardianName : ['', [Validators.required, Validators.minLength(3)]],
    address : ['', Validators.required],
    citizenShip : ['', Validators.required],
    country : ['', Validators.required],
    state : ['', Validators.required],
    email : ['', [Validators.required, Validators.email]],
    gender : ['', Validators.required],
    maritalStatus : ['', Validators.required],
    contact : ['',  [Validators.required, Validators.pattern("[0-9]{10}")]],
    dob : ['', Validators.required],
    registerdate : [(new Date()).toISOString().substring(0,10), Validators.required],
    accounttype : ['',Validators.required],
    branchname : ['', Validators.required],
    citizenStatus : ['', Validators.required],
    initialDep : ['', Validators.required],
    idProof : ['', Validators.required],
    idNumber : ['', [Validators.required,Validators.pattern("[A-Z0-9]{10}")]],
  })

  get f(){
    return this.personalDetails.controls;
  }

  calculateAge(dob)
  {
    var date1 = new Date(dob);
    var date2 = new Date(); 
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    this.age=Math.round(Difference_In_Days/360);
    console.log(this.age);

    if (this.age < 18 ){
      this.personalDetails.patchValue({ citizenStatus:'Minor' })
    }
    else if(this.age > 18 && this.age <=60){
      this.personalDetails.patchValue({ citizenStatus:'Normal' })
    }
    else{
      this.personalDetails.patchValue({ citizenStatus:'Senior' })
    }

  }

  submit(){
    
    console.log(this.personalDetails.value);
   
    this.isSubmitted = true;
    if(this.personalDetails.invalid){
      return;
    }
    this.commonService.createUser(this.personalDetails.value).subscribe((response)=>{
      // console.log("User Has been added");     
    })
    //this.authService.adduser(this.personalDetails.value);
    this.router.navigateByUrl('/login');
  }
  
}
