import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
   
   private httpClient = inject(HttpClient)



  constructor() { }

  checkout(cartID:string , data:object):Observable<any> {
     return this.httpClient.post(`${Env.baseURL}/api/v1/orders/checkout-session/${cartID}?url=${Env.webURL}` , {shippingAddress : data })
  }
}
