import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/ecomm/product/product.service';
import { IProducts } from '../../../shared/interfaces/products';
import { CardComponent } from '../../../shared/components/card/card.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CardComponent , CarouselModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   
   private productService = inject(ProductService)

   allProducts : IProducts[] = []
   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 10
      }
    },
    nav: true
  }
 
  customOptions1: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }


  ngOnInit(): void {
    
    this.getAllProductsHome();
    
  }
  
  getAllProductsHome(){
    this.productService.getAllProducts().subscribe({
      next : (res)=>{
        this.allProducts = res.data
        console.log(res)
      },
      error : (err)=>{
        console.log(err)
      }
    })
  }

}
