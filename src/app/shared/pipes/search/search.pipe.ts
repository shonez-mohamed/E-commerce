import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from '../../interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allproducts: IProducts[], searchword: string): IProducts[] {
    
    
    return allproducts.filter(ele => ele.title.toLowerCase().includes(searchword.toLowerCase()))

  }

}
