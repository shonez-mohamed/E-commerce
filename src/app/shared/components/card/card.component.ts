import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { IProducts } from '../../interfaces/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/ecomm/cart/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistService } from '../../../core/services/ecomm/wishlist/wishlist.service';
import { ChangecolorDirective } from '../../directives/changecolor/changecolor.directive';

@Component({
  selector: 'app-card',
  imports: [RouterLink , ChangecolorDirective],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  
  
private cartService:CartService = inject(CartService)
private wishlistService:WishlistService = inject(WishlistService)
private toastrService: ToastrService = inject(ToastrService)

  @Input({required:true}) cardProduct!:IProducts
 
  isInWishlist : boolean = false;

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


  addToWishlist(productId : string){
    this.wishlistService.addToWishlist(productId).subscribe({
      next : (res) => {
           this.toastrService.success(res.message , "Wishlist Operations!")
           this.isInWishlist = true ;
      }
     })
  }
}
