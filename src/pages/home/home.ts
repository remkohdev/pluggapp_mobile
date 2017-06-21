import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

//UserDetails, IDetailedError, PushToken 
import { Auth, User } from '@ionic/cloud-angular';

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

    this.push.unregister();

		this.auth.logout();
		this.navCtrl.setRoot(LoginPage); 
	}

}
