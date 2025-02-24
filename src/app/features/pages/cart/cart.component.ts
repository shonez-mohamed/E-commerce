import { Component, inject, signal, WritableSignal } from '@angular/core';
import { CartService } from '../../../core/services/ecomm/cart/cart.service';
import { ICartProduct } from '../../../shared/interfaces/product-cart';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
 
   private cartServices:CartService = inject(CartService)
 
   private toastrService  : ToastrService = inject(ToastrService)

    cartID : string = ''

   totalPrice : WritableSignal<number> = signal<number>(0)

   cartProducts :ICartProduct[] = []
  ngOnInit(): void {
    this.getMyCart()
  }

  getMyCart(){
    this.cartServices.getAllCart().subscribe({
      next: (res)=> {
        this.cartProducts = res.data.products
        this.totalPrice.set(res.data.totalCartPrice)
        this.cartID = res.cartId
      },
      error : (err)=>{
        console.log(err)
      }
    })
     
  }

  removeProduct(productID:string){
    this.cartServices.removeSpecCartItem(productID).subscribe({
      next:(res)=>{
        if(res.status == "success"){
           this.toastrService.success("Item Deleted Successfully" , "Cart Operations!")
           this.getMyCart()
        }
      },
      error:(err)=>(err)
    })
  }

  changeCount(productID:string ,productCount:number){

    if(productCount <= 0){
      this.removeProduct(productID)
      return
    }

       this.cartServices.updateCart(productID , productCount).subscribe({
         next: (res)=>{
          this.toastrService.success("Item Updated" , "Cart Operations!");
          this.getMyCart()
        },
         error:(err)=>{
          console.log(err)
        }
       })
  }
  clear(){
    this.cartServices.clearCart().subscribe({
      next: (res)=>{
        this.toastrService.success("Clear Cart Successfully" , "Cart Operations!");
        this.getMyCart()
      },
       error:(err)=>{
        console.log(err)
      }
    })
  }

}
