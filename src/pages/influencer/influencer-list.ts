import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data/data-service';

import { InfluencerDetailPage } from './influencer-detail';

@IonicPage()
@Component({
  selector: 'page-influencer-list',
  templateUrl: 'influencer-list.html'
})

export class InfluencerListPage {

  influencers: Object = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: DataServiceProvider
              ) {

    this.influencers = this.dataService.getInfluencers()
    .then( (influencers) => {
      this.influencers = influencers;
    },
    (error) => {
      console.log("error: "+ error);
    });

  }

  itemSelected(item) {
    this.navCtrl.push(InfluencerDetailPage, { influencer: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfluencerListPage');
  }

}
