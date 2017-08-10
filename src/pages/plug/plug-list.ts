import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data/data-service';

/**
 * Generated class for the PlugListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlugListPage');
  }

}
