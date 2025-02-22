import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForgetpassService } from '../../../../core/services/auth/forgetpass.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgetpassword',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent {
     
    private forgetpassService= inject(ForgetpassService)
    private router = inject(Router)
    private toastrService  : ToastrService = inject(ToastrService)

    forgetForm : FormGroup = new FormGroup ({
         email :new FormControl(null, [Validators.required ,Validators.email]) ,
    })

  

    forgetSubmit(){
      this.forgetpassService.forgetPassword(this.forgetForm.value).subscribe({
         next : (res) => {
           if(res.statusMsg == 'success'){  
            this.toastrService.success(res.message)
            this.router.navigate(['/verify-code'])
           }
         }
      })
    }
}
