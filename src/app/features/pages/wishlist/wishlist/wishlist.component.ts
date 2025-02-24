import { Component, inject } from '@angular/core';
import { WishlistService } from './../../../../core/services/ecomm/wishlist/wishlist.service';
import { ToastrService } from 'ngx-toastr';
import { IProductWishlist } from '../../../../shared/interfaces/product-wishlist';
import { CartService } from '../../../../core/services/ecomm/cart/cart.service';

@Component({
  selector: 'app-wishlist',
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {
  private cartService:CartService= inject(CartService)   
  private wishlistService:WishlistService = inject(WishlistService)
  private toastrService:ToastrService   = inject(ToastrService)

    wishlistProducts : IProductWishlist[] = []


   ngOnInit(): void {
    this.getMyWishlist()
   }
    
   getMyWishlist(){
    this.wishlistService.getLoggedUserWishlist().subscribe({
      next: (res)=>{
         this.wishlistProducts = res.data
         console.log(res)
      }
    })
   }

   removeProduct(productId:string){
    this.wishlistService.removeSpecWishlistItem(productId).subscribe({
      next:(res)=>{
        if(res.status == "success"){
           this.toastrService.success("Item Deleted Successfully" , "Wishlist Operations!")
           this.getMyWishlist()
        }
      },
      error:(err)=>(err)
    })
  }


  addToCart(productId:string){
     this.cartService.addToCart(productId).subscribe({
      next : (res) => {
        this.toastrService.success(res.message , "Cart Operations!")
      }
     })
  }
 
  

}
