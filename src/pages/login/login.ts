import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../pages';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signup() {
  	this.navCtrl.push(SignupPage);
  }

}
