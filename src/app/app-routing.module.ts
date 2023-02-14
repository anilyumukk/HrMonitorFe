import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UsersComponent } from './component/users/users.component';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';
import { PermissionsGuard } from './guards/permissions.guard';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
 
  { path: '', component:LoginComponent, pathMatch: 'full'},

  // { path: 'users',canActivate:[PermissionsGuard],component:UsersComponent, pathMatch: 'full'}
  { path: 'users',component:UsersComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
