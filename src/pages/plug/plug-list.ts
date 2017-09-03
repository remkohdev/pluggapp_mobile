import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data/data-service';

import { PlugDetailPage } from './plug-detail';
import { PlugModel } from '../../models/plug-model';

@IonicPage()
@Component({
  selector: 'page-plug-list',
  templateUrl: 'plug-list.html',
  providers: [  ]
})

export class PlugListPage {

  plugs: any = null;
  plugsArray: Array<PlugModel> = new Array<PlugModel>();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: DataServiceProvider) {

      // currently plugs are read-only from file
      this.plugs = this.dataService.getPlugs()
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
