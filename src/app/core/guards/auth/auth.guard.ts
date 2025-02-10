import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PlatformService } from '../../services/platForm/platform.service';

export const authGuard: CanActivateFn = (route, state) => {
  let platForm = inject(PlatformService) 

  let router = inject(Router)
  if(platForm.checkPlatform()){
    if(localStorage.getItem('userToken')!= null){
    return true;
    } 
  }

  
    router.navigate(['/login'])
    return false

  
};
