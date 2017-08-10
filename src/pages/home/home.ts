import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Push } from '@ionic/cloud-angular';

import { PromotionModel } from '../../../models/promotion-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  promotion:PromotionModel = null;
  title: string = null;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public push: Push) {

      //this.promotion = new PromotionModel('Promotion One');
      this.title = "Home";

  }
}
