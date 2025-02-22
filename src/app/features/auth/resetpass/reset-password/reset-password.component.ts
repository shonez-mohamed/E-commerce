import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForgetpassService } from '../../../../core/services/auth/forgetpass.service';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

   private forgetpassService= inject(ForgetpassService)
   private router = inject(Router)


  resetPassForm : FormGroup = new FormGroup ({
         
    email :new FormControl(null, [Validators.required ,Validators.email]) ,
    password :new FormControl(null, [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,20}$/)]) ,
       
  })


  resetSubmit(){
    this.forgetpassService.resetPassword(this.resetPassForm.value).subscribe({
       next : (res) => {
        localStorage.setItem('userToken' , res.token)
        this.router.navigate(['/home'])
       }
    })
  }
}
