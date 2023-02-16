import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiservicesService } from '../services/apiservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  users: any;
  Id: any;
  P_PERSON_ID: any;
  P_LANG: any;

  constructor(private router: Router, private api: ApiservicesService) {}

  // go() {
  //   this.router.navigateByUrl('/users');
  // }

  user() {
    let body = {
      UserName: this.username,
      password: this.password,
    };
    return this.api.LoginUser(body).subscribe((res) => {
      console.log(res.result.result);

      localStorage.setItem('O_AD', res.result.result.O_AD);
      localStorage.setItem('EPOSTA', res.result.result.O_EPOSTA);
      localStorage.setItem('O_GRUPKODU', res.result.result.O_GRUPKODU);
      localStorage.setItem('O_SICILNO', res.result.result.O_SICILNO);
      localStorage.setItem('SOYAD', res.result.result.O_SOYAD);
      localStorage.setItem('TELNO', res.result.result.O_TELNO);
      localStorage.setItem('USERID', res.result.result.O_USERID);
      localStorage.setItem('personid', res.result.result.P_PERSON_ID);
      if (res.result.result.O_AD != '' && res.result.result.O_EPOSTA != '') {
        this.router.navigateByUrl('/users');
      }
    });
  }

  // userpdks(){
  //   let body={
  //     P_PERSON_ID:this.P_PERSON_ID,
  //     P_LANG:this.P_LANG
  //   }
  //   console.log(body)

  //   return this.api.SelectedUserPdks(body)
  //   .subscribe(res=>{
  //     console.log(res.result)
  //     localStorage.setItem('P_PERSON_ID',(res.result.result.P_PERSON_ID));

  //   })
  // }
}
