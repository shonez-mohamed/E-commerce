import { isPlatformBrowser } from '@angular/common';
import { afterNextRender, Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(@Inject(PLATFORM_ID) private platFormId : object ) { }
   
   checkPlatform():boolean{

    if( isPlatformBrowser(this.platFormId) ){
      
      return true
    
    }
      
    return false
  
    }



}
