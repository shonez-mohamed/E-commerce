import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { IProducts } from '../../interfaces/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/ecomm/cart/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  
private cartService:CartService = inject(CartService)
private toastrService: ToastrService = inject(ToastrService)

  @Input({required:true}) cardProduct!:IProducts
 
  addToCart(productID:string){
     this.cartService.addToCart(productID).subscribe({
      next : (res) => {
           this.toastrService.success(res.message , "Cart Operations!")
      },
      error : (err) => {
          console.log(err)
      }
     })
  }
}
