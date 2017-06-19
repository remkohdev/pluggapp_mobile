import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

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

  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {}

  	// LOGOUT
	logout() {
		this.auth.logout();
		this.navCtrl.setRoot(LoginPage); 
	}

}
