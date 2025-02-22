import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../Environment/Environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  private httpClient:HttpClient = inject(HttpClient)
  constructor() { }


  getAllCategiries():Observable<any>{
     return this.httpClient.get(`${Env.baseURL}/api/v1/categories`)
  }

  getSpecificCategiry(Id:string|null):Observable<any>{
    return this.httpClient.get(`${Env.baseURL}/api/v1/categories/${Id}`)
 }
}
