import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { ApiservicesService } from 'src/app/services/apiservices.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

Id:any;
pUsers:any;
users!:User[];
pdks:any;
usersTimes:any;
value:any;
userpermit:any;
permit:any;




userid = localStorage.getItem('USERID')
username=localStorage.getItem('O_AD')
eposta=localStorage.getItem('EPOSTA')
grupkodu=localStorage.getItem('O_GRUPKODU')
sicilno=localStorage.getItem('O_SICILNO')
soyad=localStorage.getItem('SOYAD')
telno=localStorage.getItem('TELNO')


  constructor(private router: Router,private api: ApiservicesService){}


  ngOnInit(): void {
    this.parentUser();
   
       
  }  
parentUser(){
  let body = {
    getId: localStorage.getItem('USERID')
  }
return this.api.SelectedUserUnderList(body)
.subscribe(res=>{
  this.users = res.result;  
  
  this.users.forEach((key:any, index:any) => {
    this.usersTimes = this.api.SelectedUserPdks({P_PERSON_ID:key.id}).subscribe(res=>{
      this.pdks=res.result});
  
     
     
     
});

  this.users.forEach((keyy:any,value:any)=>{
    console.log(this.users)
    this.userpermit=this.api.GetUserPermits({USER_ID:keyy.id}).subscribe(res=>{
      this.permit=res.result;

      this.api.GetNumberOfUserItems(keyy.email).subscribe(res=>{
           keyy.jira=res
  
      
  });

      
 
  });
 
  });
  
 
})}


logout(){
  this.router.navigateByUrl('');
  localStorage.removeItem('userName');
  localStorage.removeItem('EPOSTA');
  localStorage.removeItem('O_GRUPKODU');
  localStorage.removeItem('O_SICILNO');
  localStorage.removeItem('SOYAD');
  localStorage.removeItem('TELNO');
  localStorage.removeItem('USERID');
}

}
