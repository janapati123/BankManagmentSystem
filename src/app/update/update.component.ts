import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Country } from './country';
import { State } from './state';
import { SelectService } from '../register/select.service';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


  selectedCountry: Country = new Country(2, 'Brazil');
  countries: Country[];
  states: State[];
  updatedDetails;
  printDetails;
  isSubmitted=false;

  updateDetails : FormGroup;

  constructor(private fb: FormBuilder,private selectService: SelectService,
    private router: Router,private commonService: CommonService,private authService : AuthService) { }

  
//custId : ['', Validators.required],
  get f(){
    return this.updateDetails.controls;
  }

  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);

    this.updateDetails = this.fb.group({
      name : ["",[Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      username : ['',[Validators.required, Validators.minLength(4)]],
      password : ['',[Validators.required, Validators.minLength(6)]],
      guardianType : ['',Validators.required],
      guardianName : ['',[Validators.required, Validators.minLength(3)]],
      address : ['',Validators.required],
      citizenShip : ['',Validators.required],
      country : ['',Validators.required],
      state : ['',Validators.required],
      email : ['',[Validators.required, Validators.email]],
      gender : ['',Validators.required],
      maritalStatus : ['',Validators.required],
      contact : ['',[Validators.required, Validators.pattern("[0-9]{10}")]],
      dob : ['', Validators.required],
      registerdate : [(new Date()).toISOString().substring(0,10),Validators.required],
      accounttype : ['',Validators.required],
      branchname : ['',Validators.required],
      citizenStatus : ['',Validators.required],
      initialDep : ['',Validators.required],
      idProof : ['',Validators.required],
      idNumber : ['',[Validators.required,Validators.pattern("[A-Z0-9]{10}")]],
      //Register : ['', Validators.required],  
      // ,Validators.pattern('/[A-Z]{5}[0-9]{4}[A-Z]{1}$/')]
    })
    
    this.commonService.getAllUser().subscribe((result)=>{
          this.updatedDetails = result;
          console.log(result);
          for(let loggedUserDetails of this.updatedDetails){
            console.log(loggedUserDetails.username);
            if(loggedUserDetails.username == localStorage.getItem('ACCESS_TOKEN')){
              this.printDetails=loggedUserDetails;
              console.log(this.printDetails)
            }
          }
    })
  }

  onSelect(countryid) {
    this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
  }

  navigate(){
    this.router.navigateByUrl("/update");
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  submit(){
      console.log(this.printDetails);
      var URl = "http://localhost:3000/users/"+this.printDetails.id;
      this.commonService.updateUser(URl,this.printDetails);

      if(this.updateDetails.invalid){
        return;
      }
  
      this.router.navigateByUrl("/update");
  }
}
