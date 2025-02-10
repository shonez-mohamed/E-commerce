import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  
  private authService = inject(AuthService)
  private router = inject(Router)
  isLogin : boolean = false;

  ngOnInit(): void {
    this.authService.userData.subscribe(()=>{
      
      if(this.authService.userData.getValue() == null){
        this.isLogin = false 
      }
      else{
        this.isLogin = true 
      }

    })
    
  }

  logout(){
    localStorage.removeItem('userToken')
    this.router.navigate(['/login']);
    this.authService.userData.next(null)
  }

}
