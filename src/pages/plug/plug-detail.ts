import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-plug-detail',
  templateUrl: 'plug-detail.html',
})

export class PlugDetailPage {

  plug: Object = null;
  edit: boolean = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.plug = navParams.get("plug");
    this.edit = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlugDetailPage');
  }

}
