import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cartItems: any[] = [];
  total: any;
  emptyCartMessage: boolean = false;

  constructor(
  	private navCtrl: NavController,
    private viewCtrl: ViewController,
    private storage: Storage
  	) {
    this.total = 0;

    this.storage.ready().then(() => {
      this.storage.get('cart').then((data) => {
        this.cartItems = data;

        if(this.cartItems.length > 0) {

          this.cartItems.forEach((e, i) => {
            this.total += (e.product.price * e.qty)
          })

        } else {
          this.emptyCartMessage = true;
        }

      })
    })

  }

  removeFromCart(item, i) {
    let price = item.product.price;
    let qty = item.qty;

    this.cartItems.splice(i, 1);

    this.storage.set('cart', this.cartItems).then( () => {
      this.total = this.total - (price * qty);
    });

    if (this.cartItems.length == 0) {
      this.emptyCartMessage = true;
    }

  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

  changeQty(item, i, change) {
    let price = 0;
    let qty = 0;

    price = item.product.price;
    qty = item.qty;

    if(change < 0 && item.qty == 1) {
      return;
    }

    qty += change;
    item.qty = qty;
    item.amount = qty * price;
    this.cartItems[i] = item;
    this.total = 0;
    this.cartItems.forEach((e, i) => {
      this.total += (e.product.price * e.qty)
    });
    this.storage.set('cart', this.cartItems);

  }

  checkout() {
    this.navCtrl.push(LoginPage);
  }

}
