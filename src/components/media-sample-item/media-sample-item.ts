import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MediaSampleModel } from '../../models/media-sample.model';

@Component({
  selector: 'media-sample-item',
  templateUrl: 'media-sample-item.html'
})
export class MediaSampleItemComponent {

  @Input() mediaSample: MediaSampleModel;

  constructor(public navCtrl: NavController) {}

}
