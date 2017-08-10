import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DataServiceProvider } from '../../providers/data/data-service';
import { BusinessDetailPage } from './business-detail';

@IonicPage()
@Component({
  selector: 'page-business-list',
  templateUrl: 'business-list.html',
})

export class BusinessListPage {

  businesses: Object = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public dataService: DataServiceProvider) {

      this.businesses = this.dataService.getBusinesses()
      .then( (businesses) => {
        this.businesses = businesses;
      },
      (error) => {
        console.log("error: "+ error);
      });

  }

  itemSelected(item) {
    this.navCtrl.push(BusinessDetailPage, { business: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessListPage');
  }

}
