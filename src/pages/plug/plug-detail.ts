import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlugDetailModelHelper } from './plug-detail-model-helper';

@IonicPage()
@Component({
  selector: 'page-plug-detail',
  templateUrl: 'plug-detail.html',
  providers: [
    PlugDetailModelHelper
  ]
})

export class PlugDetailPage {

  plug: Object = null;
  edit: boolean = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public plugDetailModelHelper: PlugDetailModelHelper) {

    this.plug = navParams.get("plug");

    this.edit = false;
  }

  toggleEdit(toggle){
    if(this.edit==true){
      // save edits

    }
    this.edit = toggle;
  }

  /** datepicker
  showCalendar(plugDate){
    var options = {
      date: new Date(plugDate),
      mode: 'date'
    };
    function onSuccess(date) {
      plugDate = date;
      console.log('Selected date: ' + plugDate);
      return date;
    }
    function onError(error) {
      console.log('Error: ' + error);
    }
    this.datePicker.show(options).then(onSuccess, onError);
  }
  */

}
