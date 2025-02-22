import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Env } from '../../Environment/Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {
   
   private httpClient = inject(HttpClient)

  constructor() { }

   forgetPassword(data:object):Observable<any>{
     return this.httpClient.post(`${Env.baseURL}/api/v1/auth/forgotPasswords`, data)
   }
   resetCode(data:object):Observable<any>{
     return this.httpClient.post(`${Env.baseURL}/api/v1/auth/verifyResetCode`, data)
   }
   resetPassword(data:object):Observable<any>{
     return this.httpClient.put(`${Env.baseURL}/api/v1/auth/resetPassword`, data)
   }

}
