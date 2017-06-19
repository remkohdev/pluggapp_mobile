import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

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

  	login() {
  		console.log('process login');
  		this.showLogin = true;
  		/**
	  	let details = {'email': 'hi@ionic.io', 'password': 'puppies123'};
		this.auth.login('basic', details).then( () => {

		} );
		*/
	}

	signup() {
		console.log('process signup');
		/**
	  	let details: UserDetails = {'email': 'user1@email.com', 'password': 'passw0rd'};
		this.auth.signup(details).then( () => {
			// 'this.user' is now registered
		}, (err: IDetailedError<string[]>) => {
		  	for (let e of err.details) {
		    	if (e === 'conflict_email') {
		      		alert('Email already exists.');
		    	} else {
		      		// handle other errors
		    	}
		  	}
		} );
		*/
	}

	// LOGOUT
	logout() {
		this.auth.logout();
	}

}
