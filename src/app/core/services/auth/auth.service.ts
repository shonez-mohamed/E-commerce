import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { PlatformService } from './../platForm/platform.service';
import { Env } from '../../Environment/Environment';



@Injectable({
  providedIn: 'root'
})

export class AuthService {

   private http= inject(HttpClient)
   private platformService = inject(PlatformService)

  userData : WritableSignal<string|null> =  signal<string|null>(null);


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
    this.userData.set( jwtDecode( JSON.stringify(localStorage.getItem('userToken')) ))
  }

}
