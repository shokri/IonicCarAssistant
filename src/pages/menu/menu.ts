import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { CategoryPage, SignupPage, LoginPage, CartPage } from '../pages';

@Component({
	selector: 'page-menu',
	templateUrl: 'menu.html',
})
export class MenuPage {
	@ViewChild('content') childNavCtrl: NavController;
	rootPage:any = CategoryPage;
	LogoUrl = [];
	errorMessage : string;
	
	constructor(
		public navCtrl: NavController,
		private modalCtrl: ModalController,
		public navParams: NavParams,
		public api: ApiProvider
		) { }

	ionViewDidLoad() {
		this.loadLogo();
	}

	loadLogo() {
		this.api.getLogoUrl()
			.subscribe(
				logoUrl => {
					this.LogoUrl = logoUrl;
				},
				error => {
					this.errorMessage = error;
				}
			);
	}

	openPage(page: string) {
		switch (page) {
			case "signup":
				this.navCtrl.push(SignupPage);
				break;
			case "cart":
				this.modalCtrl.create(CartPage).present();
				break;
			case "login":
				this.navCtrl.push(LoginPage);
				break;
		}
	}

}
