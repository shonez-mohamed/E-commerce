import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../../../core/services/ecomm/allOrders/orders.service';
@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
     private activatedRoute = inject(ActivatedRoute);
     private ordersService = inject(OrdersService);

     cartID :string = ''

    addressForm:FormGroup = new FormGroup({
      details : new FormControl(null),  
      phone : new FormControl(null),  
      city : new FormControl(null),  
    })


    addressSubmit(){
      this.activatedRoute.paramMap.subscribe((p)=>{ this.cartID = p.get('cartID')!})
      this.ordersService.checkout(this.cartID , this.addressForm.value).subscribe({
        next:(res)=> {
          
          window.location.href = res.session.url

        },
        error:(err)=> {
          console.log(err)
        } 
      }) 
    }
}
