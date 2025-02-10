import { Component, inject } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

   private authService = inject(AuthService);
   private router = inject(Router)

   errorMessage :string = "";
   isLoading : boolean = false; 

   registerForm : FormGroup = new FormGroup ({

       name :new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20) ]) ,
       email :new FormControl(null, [Validators.required ,Validators.email]) ,
       password :new FormControl(null, [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,20}$/)]) ,
       rePassword :new FormControl(null ,  [Validators.required , Validators.pattern(/^[A-Z][a-zA-Z0-9]{6,20}$/)]) ,
       phone :new FormControl(null ,  [Validators.required , Validators.pattern(/^(01)[0125][0-9]{8}$/)]) ,
       
   }, this.confirmPassword)

   confirmPassword(g: AbstractControl){
     if(g.get('password')?.value === g.get('rePassword')?.value){
       return null
     }else{
      return{'mismatched': true}
     }
   }

   RegisterSubmit(){
    if(this.registerForm.valid){
        this.isLoading = true;

        this.authService.sendRegistertoAPI(this.registerForm.value).subscribe({
          next : (res)=>{
            if(res.message == 'success'){
              this.router.navigate(['/login'])
            }
            console.log(res)
            this.isLoading = false;
          },
          error : (err)=>{
            
           this.errorMessage =  err.error.message;
            
            console.log(err)
            this.isLoading = false;
          },

        })
    }
   }
}