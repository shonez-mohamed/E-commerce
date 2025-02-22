import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../../core/services/ecomm/categories/categories.service';
import { Category } from '../../../shared/interfaces/products';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
    private categoriesService= inject(CategoriesService)

    allCategories : Category[] = []

    ngOnInit(): void {
        this.getAllCategories();
      
    }


    getAllCategories(){
       this.categoriesService.getAllCategiries().subscribe({
         next: (res) => {
           this.allCategories = res.data
         }
       })
    };
}
