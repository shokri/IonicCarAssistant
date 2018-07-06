import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModelTabItemModel } from '../../models/model-tab-item.model';
import { ProductPage } from '../../pages/pages';

@Component({
	selector: 'model-tab-item',
	templateUrl: 'model-tab-item.html'
})
export class ModelTabItemComponent {

	@Input() model: ModelTabItemModel;

	constructor(public navCtrl: NavController) { }

	openProduct(tab) {
		this.navCtrl.push(ProductPage, {'product': tab});
	}
}