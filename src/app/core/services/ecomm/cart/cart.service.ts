import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private httpClient = inject(HttpClient)

  private userHeaders:any = {token : localStorage.getItem('userToken')}

  constructor() { }

  addToCart(productID:string):Observable<any> {
     return this.httpClient.post(`${Env.baseURL}/api/v1/cart` , {productId : productID} , {headers : this.userHeaders})
  }

  updateCart(productID:string , productCount:number):Observable<any>{
    return this.httpClient.put(`${Env.baseURL}/api/v1/cart/${productID}` , {count : productCount} , {headers : this.userHeaders})

  }

  getAllCart():Observable<any>{
    return this.httpClient.get(`${Env.baseURL}/api/v1/cart` , {headers : this.userHeaders})

  }

  removeSpecCartItem(productID:string):Observable<any>{
    return this.httpClient.delete(`${Env.baseURL}/api/v1/cart/${productID}` , {headers : this.userHeaders})

  }

  clearCart():Observable<any>{
    return this.httpClient.delete(`${Env.baseURL}/api/v1/cart` , {headers : this.userHeaders})
  }
  
}
