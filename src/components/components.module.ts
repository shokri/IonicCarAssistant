import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
import { MediaSampleItemComponent } from './media-sample-item/media-sample-item';
import { ModelTabItemComponent } from './model-tab-item/model-tab-item';
import { ProductListItemComponent } from './product-list-item/product-list-item';

@NgModule({
	declarations: [
	MediaSampleItemComponent,
	ModelTabItemComponent,
	ProductListItemComponent
	],
	imports: [
	IonicModule.forRoot(MediaSampleItemComponent),
	PipesModule
	],
	exports: [
	MediaSampleItemComponent,
	ModelTabItemComponent,
	ProductListItemComponent
	]
})
export class ComponentsModule {}
