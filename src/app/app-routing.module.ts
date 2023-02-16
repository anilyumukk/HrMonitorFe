import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';


import { LoginComponent } from './login/login.component';



const routes: Routes = [
 
  { path: '', component:LoginComponent},

  
  { path: 'login', component:LoginComponent},


  // { path: 'users',canActivate:[PermissionsGuard],component:UsersComponent, pathMatch: 'full'}
  { path: 'users',component:UsersComponent,
  canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
