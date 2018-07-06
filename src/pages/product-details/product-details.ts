import { Component } from '@angular/core';
import { NavParams, ModalController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from '../pages';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {
	empty: string = 'ناموجود';
	product: any;

	constructor(
		public modalCtrl: ModalController,
		private toastCtrl: ToastController,
		private navParams: NavParams,
		private storage: Storage
		) { this.product = this.navParams.get('detail'); }

	ionViewDidLoad() { 
	}

	openCart() {
		this.modalCtrl.create(CartPage).present();
	}

	Empty(price) {
		if (price == this.empty) return true;
	}

	addToCart(prod) {
		this.storage.get('cart')
		.then(data => {
			if(data == null || data.length == 0) {
				data = [];
				data.push({
					'product': prod,
					'qty': 1,
					'amount': prod.price
				});

			} else {

				let added = 0;

				for (let i = 0; i < data.length; i++) {
					if (prod.link == data[i].product.link) {
						let qty = data[i].qty;
						data[i].qty = qty + 1;
						data[i].amount = data[i].amount + data[i].product.price;
						added = 1;
					}
				}

				if (added == 0) {
					data.push({
						'product': prod,
						'qty': 1,
						'amount': prod.price
					});

				}
			}

				this.storage.set('cart', data).then( () => {
					this.toastCtrl.create({
						message: 'ارسال به سبد محصولات',
						duration: 1000
					}).present();
				})

		})
	}

}
