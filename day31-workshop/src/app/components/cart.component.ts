import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { ItemOrder } from '../model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  @Input()
  cart?: ItemOrder[];

  @Output()
  updateCart = new Subject<number>();

  deleteItemFromCart(idx: number) {
    this.updateCart.next(idx);
  }

}
