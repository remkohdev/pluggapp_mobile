import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data/data-service';

import { PlugDetailPage } from './plug-detail';

@IonicPage()
@Component({
  selector: 'page-plug-list',
  templateUrl: 'plug-list.html',
})

export class PlugListPage {

  plugs: Object = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: DataServiceProvider) {

      this.plugs = this.dataService.getCampaigns()
      .then( (plugs) => {
        this.plugs = plugs;
      },
      (error) => {
        console.log("error: "+ error);
      });
  }

  itemSelected(item) {
    this.navCtrl.push(PlugDetailPage, { plug: item });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlugListPage');
  }

}
