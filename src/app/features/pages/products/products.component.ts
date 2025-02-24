import { ChangeDetectionStrategy, Component, inject, signal, WritableSignal } from '@angular/core';
import { ProductService } from '../../../core/services/ecomm/product/product.service';
import { CardComponent } from '../../../shared/components/card/card.component';
import { SearchPipe } from '../../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms';
import { IProducts } from '../../../shared/interfaces/products';

@Component({
  selector: 'app-products',
  imports: [CardComponent , SearchPipe , FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
   searchWord : string = ""
   
   private productService = inject(ProductService)

   allProducts : WritableSignal<IProducts[]> = signal<IProducts[]>([])

   ngOnInit(): void {
    
     this.getAllProducts();
    
   }
   getAllProducts(){
     this.productService.getAllProducts().subscribe({
       next : (res) => {
         this.allProducts.set(res.data)
       }
     })
   }
}
