import { Component } from '@angular/core';
import { INVENTORY } from './constants';
import { Item, ItemOrder } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31-workshop Inventory';

  inventory: Item[] = INVENTORY;

  myCart: ItemOrder[] = [];
  
  addItem(idx: number) {
    console.info(">> item to add", this.inventory[idx]);
    const itemDesc = this.inventory[idx].desc;
    // check if myCart exists
    const existing = this.checkCartForItem(itemDesc);

    if (existing) {
      console.info(">>> Existing found: ", existing);
      existing.qty += 1;
    } else {
      // console.info(">>> Existing found: ", false)
      // add new item to list
      const newItem: ItemOrder = {
        image: this.inventory[idx].image,
        desc: this.inventory[idx].desc,
        qty: 1
      }
      this.myCart.push(newItem);
    }

    console.info(">>> Cart Contents: ", this.myCart);
  }

  checkCartForItem(desc: string) {
    console.info(">>>> Checking Cart")
    // FIXME: change inventory to myCart
    return this.myCart.find(item => item.desc === desc);
     
  }

}
