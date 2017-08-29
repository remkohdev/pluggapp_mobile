import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-influencer-detail',
  templateUrl: 'influencer-detail.html'
})

export class InfluencerDetailPage {

  influencer: Object = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.influencer = navParams.get("influencer");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfluencerDetailPage');
  }

}
