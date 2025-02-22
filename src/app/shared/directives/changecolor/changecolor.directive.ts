import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {
 
  @Input() isInWishlist : boolean = true;

  constructor(private el:ElementRef) { }

   @HostListener('click') changeColor(){
    if(this.isInWishlist){
    this.el.nativeElement.style.color = 'red'
    }
    else{
      this.el.nativeElement.style.color = 'black'
    }
   }
}
