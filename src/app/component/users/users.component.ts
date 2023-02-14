import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from 'src/app/services/apiservices.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

Id:any;
pUsers:any;
users:any;
pdks:any;
useridd:any;
usersTimes:any;
key:any;
index:any;
value:any;
keyy:any;
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
    //this.UserTimes(2);
       
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
      this.pdks=res.result;
      console.log(this.pdks);
    });   
     
});
  this.users.forEach((keyy:any,value:any)=>{
    console.log(value);
    this.userpermit=this.api.GetUserPermits({USER_ID:keyy.id}).subscribe(res=>{
      this.permit=res.result;
      console.log(this.permit);
    })
  })
  

 
  
  
})}

/*UserTimes(useridd:number){
// let body={
//   P_PERSON_ID:localStorage.getItem('USERID')
// }

let body={
  P_PERSON_ID:useridd
}
return this.api.SelectedUserPdks(body).subscribe(res=>{
  this.pdks=res.result;
  console.log(this.pdks);
})}*/

// userPacs(){
//   let a!: any;

//   a = localStorage.getItem('P_PERSON_ID');

//   console.log(a);
//   let body={
//     userpdks:parseFloat(a)   
//   }
//   console.log(body)
//   console.log(localStorage.getItem('P_PERSON_ID'))

//   return this.api.SelectedUserPdks(body)
//   .subscribe(res=>{
//     this.pdks=res.result;
//     console.log(this.pdks);
//   })
// }
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
