import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-business-detail',
  templateUrl: 'business-detail.html',
})

export class BusinessDetailPage {

  business: Object = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.business = navParams.get("business");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessDetailPage');
  }

}
