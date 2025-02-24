import { Component, effect, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { TranslationService } from './../../../core/services/translate/translation.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive , TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  private authService = inject(AuthService)
  private translationService = inject(TranslationService)
  private router = inject(Router)
  isLogin : boolean = false;

  constructor(){
    effect(()=>{
      if(this.authService.userData() == null){
        this.isLogin = false
       }
       else{
         this.isLogin = true
       }
   })
  }

 // ngOnInit(): void {

    // this.authService.userData.subscribe(()=>{
      
    //   if(this.authService.userData.getValue() == null){
    //     this.isLogin = false 
    //   }
    //   else{
    //     this.isLogin = true 
    //   }

    // })
    
  //}

  logout(){
    localStorage.removeItem('userToken')
    this.router.navigate(['/login']);
    this.authService.userData.set(null)
  }

  changeLang(lang: string) {
    this.translationService.changeLang(lang);
  }

}
