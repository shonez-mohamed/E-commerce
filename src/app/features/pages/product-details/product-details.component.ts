import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/ecomm/product/product.service';
import { IProducts } from '../../../shared/interfaces/products';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

private activatedRoute = inject(ActivatedRoute)
private productService = inject(ProductService)
productID : string | null = ""
pSpec !: IProducts

ngOnInit(): void {
  
  this.activatedRoute.paramMap.subscribe((p)=>{
    this.productID = p.get('productID')  
    this.productService.getSpecificProducts(this.productID).subscribe({
      next :(res)=>{
        this.pSpec = res.data
      },
      error:(err)=>{
        console.log(err)
      }
    })
  })
  
}


}
