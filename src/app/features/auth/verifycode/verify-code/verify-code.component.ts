import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForgetpassService } from '../../../../core/services/auth/forgetpass.service';

@Component({
  selector: 'app-verify-code',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

   private forgetpassService = inject(ForgetpassService)

   private router = inject(Router)

   verifyCode : FormGroup = new FormGroup ({
       code : new FormControl(null, [Validators.required , Validators.pattern(/^([0-9]{6})$/)])
   })

   codeSubmit(){
     this.forgetpassService.resetCode(this.verifyCode.value).subscribe({
       next : (res) => {
          if(res.status == 'Success'){
             this.router.navigate(['resetpass'])
          }
       }
     })
   }
}
