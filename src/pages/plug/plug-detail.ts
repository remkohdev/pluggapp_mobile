import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlugModel } from '../../models/plug-model';

@IonicPage()
@Component({
  selector: 'page-plug-detail',
  templateUrl: 'plug-detail.html',
  providers: []
})

export class PlugDetailPage {

  selectedPlug: PlugModel = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.selectedPlug = navParams.get("plug");

  }


}
