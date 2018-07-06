import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaSampleModel } from '../../models/media-sample.model';
import { ApiProvider } from '../../providers/api/api';
import { ModelPage } from '../../pages/pages';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  mediaSamples : Array<MediaSampleModel> = [];
  errorMessage : string;
  isLoading: boolean;

  constructor(
    public navCtrl: NavController,
    public api: ApiProvider
  ) {}

  ionViewDidLoad() {
    this.loadMediaSamples();
  }

  loadMediaSamples() {
    this.isLoading = true;
    this.api.getMediaSamples()
      .subscribe(
        mediaSamples => {
          this.isLoading = false;
          this.mediaSamples = mediaSamples;
          this.errorMessage = null;
        },
        error => {
          this.isLoading = false;
          this.errorMessage = error;
        }
      );
  }

  openModel(category) {
    this.navCtrl.push(ModelPage, {'category': category})
  }
}
