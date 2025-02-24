import { HttpClient } from '@angular/common/http';
import { Injectable , inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private httpClient = inject(HttpClient)

  constructor() { }


  addToWishlist(productId: string):Observable<any>{
    return this.httpClient.post(`${Env.baseURL}/api/v1/wishlist` , {productId : productId})
  }

  removeSpecWishlistItem(productId: string):Observable<any>{
    return this.httpClient.delete(`${Env.baseURL}/api/v1/wishlist/${productId}`)
  }

  getLoggedUserWishlist():Observable<any>{
    return this.httpClient.get(`${Env.baseURL}/api/v1/wishlist`)
  }

  
}
