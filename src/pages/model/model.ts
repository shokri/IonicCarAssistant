import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-model',
  templateUrl: 'model.html',
})
export class ModelPage {
	models: any;
  category: string;
	errorMessage: string;
	isLoading: boolean;

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
  	public api: ApiProvider
  	) { this.category = this.navParams.get('category'); }

  ionViewDidLoad() {
    this.loadModel(this.category);
  }

  loadModel(param) {
    this.isLoading = true;
    this.api.getModel()
    .subscribe(
      model => {
        this.isLoading = false;
        this.models = model.filter(f =>  f.category == param.title ).map(m => m.tab)[0];
        this.errorMessage = null;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = error;
      }
     )
  }


  goBack() {
    this.navCtrl.pop();
  }
}
