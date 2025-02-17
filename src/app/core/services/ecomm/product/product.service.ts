import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private httpClient : HttpClient = inject(HttpClient)
 

  constructor() { }

   
   getAllProducts():Observable<any>{
     return this.httpClient.get(`${Env.baseURL}/api/v1/products`)
   }

   getSpecificProducts(Id:string|null):Observable<any>{
    return this.httpClient.get(`${Env.baseURL}/api/v1/products/${Id}`)
  }

}
