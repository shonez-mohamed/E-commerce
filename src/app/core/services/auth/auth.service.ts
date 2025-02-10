import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData : BehaviorSubject<any> = new BehaviorSubject(null);


  constructor(private http:HttpClient) { }


  sendRegistertoAPI(data:object):Observable<any>{
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signup', data)
  }

  sendLogintoAPI(data:object):Observable<any>{
    return this.http.post('https://ecommerce.routemisr.com/api/v1/auth/signin', data)
  }
  
  saveData(){
    this.userData.next( jwtDecode( JSON.stringify(localStorage.getItem('userToken')) ))
  }

}
