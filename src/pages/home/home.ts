import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Push } from '@ionic/cloud-angular';

import { LoginPage } from '../login/login';
import { PromotionModel } from '../../../models/promotion-model';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  promotion:PromotionModel = null;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public authService: AuthServiceProvider, public push: Push) {

      this.promotion = new PromotionModel('Promotion One');
  }

	logout() {

		this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
	}

}
