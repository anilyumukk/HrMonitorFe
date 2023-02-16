import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Response } from '../model/Response.model';


@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http: HttpClient) { }

  LoginUser(body: any){
    return this.http.post<any>("https://localhost:7107/api/User/LoginController", body)
  }

  SelectedUserUnderList(body:any){
    return this.http.post<any>("https://localhost:7107/api/User/DBGetUserProfileList",body)
  }

  SelectedUserPdks(body:any){
    return this.http.post<any>("https://localhost:7107/api/User/GetUserPacs",body)
  }
  GetUserPermits(body:any){
    return this.http.post<any>("https://localhost:7107/api/User/GetPermits",body)
  }
  GetNumberOfUserItems(mail:string){
    return this.http.get<any>("https://localhost:7107/api/User/GetNumberOfUserItems?mail="+mail)
  }
}
