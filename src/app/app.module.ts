import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { MyApp } from './app.component';

import { MenuPage, CategoryPage, CartPage, ModelPage, ProductPage, ProductDetailsPage, SignupPage, LoginPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FileChooser } from '@ionic-native/file-chooser';

import { ComponentsModule } from '../components/components.module';
import { ApiProvider } from '../providers/api/api';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    MenuPage,
    CategoryPage,
    CartPage,
    ModelPage,
    ProductPage,
    ProductDetailsPage,
    SignupPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    FormsModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MenuPage,
    CategoryPage,
    CartPage,
    ModelPage,
    ProductPage,
    ProductDetailsPage,
    SignupPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileChooser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
