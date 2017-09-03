import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl }            from '@angular/forms';
import { PlugModel } from '../../models/plug-model';

@IonicPage()
@Component({
  selector: 'page-plug-detail',
  templateUrl: 'plug-detail.html',
  providers: []
})

export class PlugDetailPage {

  plug: PlugModel = null;
  edit: boolean = null;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {

    this.plug = navParams.get("plug");

    this.edit = false;
  }

  toggleEdit(toggle){
    if(this.edit==true){
      // save edits

    }
    this.edit = toggle;
  }

  onSubmit(formValue: any){
    console.log(formValue);
    //this.plug = formValue;
  }

}
