import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Auth } from '@ionic/cloud-angular';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public auth: Auth) {}

  // LOGOUT
	logout() {

    //this.push.unregister().then(() => {});

		this.auth.logout();
		this.navCtrl.setRoot(LoginPage);
	}

}
