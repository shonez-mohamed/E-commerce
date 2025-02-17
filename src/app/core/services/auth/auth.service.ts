import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { PlatformService } from './../platForm/platform.service';
import { Env } from '../../Environment/Environment';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

   private http= inject(HttpClient)
   private platformService = inject(PlatformService)

  userData : BehaviorSubject<any> = new BehaviorSubject(null);


  constructor() {
    if(this.platformService.checkPlatform()){
       this.getUserData();
    }
   }


  sendRegistertoAPI(data:object):Observable<any>{
    return this.http.post(`${Env.baseURL}/api/v1/auth/signup`, data)
  }

  sendLogintoAPI(data:object):Observable<any>{
    return this.http.post(`${Env.baseURL}/api/v1/auth/signin`, data)
  }
  
  getUserData(){
    this.userData.next( jwtDecode( JSON.stringify(localStorage.getItem('userToken')) ))
  }

}
