// import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { SelectService } from '../register/select.service';
// import { AuthService } from '../services/auth.service';
// import { CommonService } from '../services/common.service';

// import { UpdateComponent } from './update.component';

// describe('UpdateComponent', () => {
//   let component: UpdateComponent;
//   let fixture: ComponentFixture<UpdateComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule,RouterTestingModule],
//       declarations: [ UpdateComponent ],
//       providers: [CommonService,AuthService,FormBuilder,SelectService,HttpClientModule]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(UpdateComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   // it('should create', () => {
//   //   expect(component).toBeTruthy();
//   // });
    
//   it('should go to login page after logout button clicked',()=>{
//     let router = TestBed.inject(Router);
//     let spy = spyOn(router, 'navigateByUrl');
  
//     component.logout();
//     fixture.detectChanges();
  
//     expect(spy).toHaveBeenCalledWith('/login'); 
//   });

//   it('should go to login page after logout button clicked',()=>{
//     let router = TestBed.inject(Router);
//     let spy = spyOn(router, 'navigateByUrl');
  
//     component.submit();
//     fixture.detectChanges();
  
//     expect(spy).not.toHaveBeenCalledWith('/update'); 
//   });

// });
