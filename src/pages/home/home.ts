import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Auth, Push } from '@ionic/cloud-angular';

import { LoginPage } from '../login/login';
import { PromotionModel } from '../../../models/promotion-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';
  promotion:PromotionModel = null; 

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public auth: Auth, public push: Push) {

      this.promotion = new PromotionModel('Promotion One');

    }

  // LOGOUT
	logout() {

    this.push.unregister();
    // .then(() => {})

		this.auth.logout();
		this.navCtrl.setRoot(LoginPage);
	}

}
