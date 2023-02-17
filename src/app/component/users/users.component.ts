import { DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { User } from 'src/app/model/user.model';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  Id: any;
  pUsers: any;
  users!: User[];
  pdks: any;
  usersTimes: any;
  value: any;
  userpermit: any;
  permit: any;
  firsttime: [] = [];
  lasttime: [] = [];

  userid = localStorage.getItem('USERID');
  username = localStorage.getItem('O_AD');
  eposta = localStorage.getItem('EPOSTA');
  grupkodu = localStorage.getItem('O_GRUPKODU');
  sicilno = localStorage.getItem('O_SICILNO');
  soyad = localStorage.getItem('SOYAD');
  telno = localStorage.getItem('TELNO');

  panelOpenState = false;

  constructor(private router: Router, private api: ApiservicesService) {}

  ngOnInit(): void {
    this.parentUser();
  }
  parentUser() {
    let body = {
      getId: localStorage.getItem('USERID'),
      tName: localStorage.getItem('O_AD'),
      tSurname: localStorage.getItem('SOYAD'),
      tEmail: localStorage.getItem('EPOSTA'),
    };
    return this.api.SelectedUserUnderList(body).subscribe((res) => {
      this.users = res.result;
      console.log(this.users);

      //kullanıcılar
      this.users.forEach((keyy: User, value: any) => {
        //izin
        this.userpermit = this.api
          .GetUserPermits({ USER_ID: keyy.id })
          .subscribe((res) => {
            keyy.permit = res.result.result.IZIN_GUN;
          });
        //jira
        this.api.GetNumberOfUserItems(keyy.email).subscribe((res) => {
          keyy.jira = res;
        });
        //pdks
        this.api.SelectedUserPdks({ P_PERSON_ID: keyy.id }).subscribe((res) => {
          keyy.pdks = res.result;
          console.log(keyy.pdks);
        });
      });
      //kullanıcılar
    });
  }

  logout() {
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
