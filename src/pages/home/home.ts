import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Push } from '@ionic/cloud-angular';

import { LoginPage } from '../login/login';
import { PromotionModel } from '../../../models/promotion-model';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DataService } from '../../providers/data/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  promotion:PromotionModel = null;
  title: string = null;
  influencers: Object = null;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public dataService: DataService,
              public authService: AuthServiceProvider,
              public push: Push) {

      //this.promotion = new PromotionModel('Promotion One');
      this.title = "Influencers";

      this.influencers = this.dataService.getInfluencers()
        .then( (influencers) => {
          console.log("influencers: "+influencers);
          this.influencers = influencers;
        },
        (error) => {
          console.log("error: "+ error);
        });
  }

	logout() {

		this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
	}

}
