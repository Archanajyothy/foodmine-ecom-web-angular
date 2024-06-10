import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartQuantity = 0;
  constructor(private cartService : CartService){
    this.cartService.getCartObservable().subscribe((cart => {
      this.cartQuantity = cart.totalCount;
    }))
  }
}
