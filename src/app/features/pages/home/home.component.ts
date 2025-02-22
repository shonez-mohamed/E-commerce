import { Component, inject } from '@angular/core';
import { ProductService } from '../../../core/services/ecomm/product/product.service';
import { IProducts } from '../../../shared/interfaces/products';
import { CardComponent } from '../../../shared/components/card/card.component';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  imports: [CardComponent , SearchPipe , FormsModule  , CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   
  searchWord : string = ""

   private productService = inject(ProductService)


   

   allProducts : IProducts[] = []

   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    rtl:true,     
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
    rtl: true,
    items: 1,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }


  images = [
    "/images/img1.avif",
    "/images/img2.avif",
    "/images/img3.avif",
    "/images/img4.avif",
    "/images/img5.avif",
    "/images/img6.avif",
    "/images/img7.avif",

  ];

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
