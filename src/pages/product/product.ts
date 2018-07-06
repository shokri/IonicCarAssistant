import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { CartPage } from '../pages';

@Component({
	selector: 'page-product',
	templateUrl: 'product.html',
})
export class ProductPage {
	products: any;
	model: string;
	errorMessage: string;
	isLoading: boolean;

	constructor(
		private navParams: NavParams,
		private api: ApiProvider,
		public modalCtrl: ModalController
		) { this.model = this.navParams.get('product'); }

	ionViewDidLoad() {
		this.loadProduct(this.model);
	}

	loadProduct(param) {
		this.isLoading = true;
		this.api.getProduct()
		.subscribe(
			product => {
				this.isLoading = false;
				this.products = product.filter(f =>  f.tab == param.title ).map(m => m.list)[0];
				this.errorMessage = null;
			},
			error => {
				this.isLoading = false;
				this.errorMessage = error;
			}
			)
	}


	openCart() {
		this.modalCtrl.create(CartPage).present();
	}
}
