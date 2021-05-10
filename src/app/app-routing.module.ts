import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { LoanComponent } from './loan/loan.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'loan', component: LoanComponent, canActivate: [AuthGuard]},
    {path: 'update', component: UpdateComponent,canActivate: [AuthGuard]}
]
@NgModule({
    imports:[RouterModule,
            RouterModule.forRoot(routes)],
    exports : [RouterModule]
     
})

export class AppRoutingModule{ 
    
}