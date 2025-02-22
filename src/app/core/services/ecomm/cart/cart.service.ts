import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private httpClient = inject(HttpClient)


  constructor() { }

  addToCart(productID:string):Observable<any> {
     return this.httpClient.post(`${Env.baseURL}/api/v1/cart` , {productId : productID})
  }

  updateCart(productID:string , productCount:number):Observable<any>{
    return this.httpClient.put(`${Env.baseURL}/api/v1/cart/${productID}` , {count : productCount})

  }

  getAllCart():Observable<any>{
    return this.httpClient.get(`${Env.baseURL}/api/v1/cart`)

  }

  removeSpecCartItem(productID:string):Observable<any>{
    return this.httpClient.delete(`${Env.baseURL}/api/v1/cart/${productID}`)

  }

  clearCart():Observable<any>{
    return this.httpClient.delete(`${Env.baseURL}/api/v1/cart`)
  }
  
}
