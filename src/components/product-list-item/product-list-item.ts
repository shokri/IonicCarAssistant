import { Component, Input } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ProductListItemModel } from '../../models/product-list-item.model';
import { Storage } from '@ionic/storage';
import { ProductDetailsPage } from '../../pages/pages';

@Component({
	selector: 'product-list-item',
	templateUrl: 'product-list-item.html'
})
export class ProductListItemComponent {
	empty: string = 'ناموجود';

	@Input() prods: ProductListItemModel;

	constructor(
		private toastCtrl: ToastController,
		private navCtrl: NavController,
		private storage: Storage
	) { }

	Empty(price) {
		if (price == this.empty) return true;
	}

	productDetails(detail) {
		this.navCtrl.push(ProductDetailsPage, {'detail': detail});
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
			console.log(data);

				let added = 0;

				for (let i = 0; i < data.length; i++) {
					if (prod.link == data[i].product.link) {
						let qty = data[i].qty;
						data[i].qty = qty + 1;
						data[i].amount = data[i].amount + data[i].product.price;
						added = 1;
					}
				}

				// data.forEach( function(e, i) {
				// 	if (prod.link == e.product.link) {
				// 		this.toastCtrl.create({
				// 			message: 'Cart Updated',
				// 			duration: 3000
				// 		}).present();

				// 		console.log('product is already in the cart');
				// 		let qty = e.qty;

				// 		e.qty = qty + 1;
				// 		e.amount += e.product.price;
				// 		added = 1;
				// 	}
				// })

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