import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { Auth, User, UserDetails, IDetailedError, Push, PushToken  } from '@ionic/cloud-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController, public auth: Auth, public user: User, public alertCtrl: AlertController, public loadingCtrl:LoadingController, public push: Push) {}


  	login() {
  		console.log('process login');
  		this.showLogin = true;

  		// login input validation
  		if(this.email === '' || this.password === '') {
        let alert = this.alertCtrl.create({
	        	title:'Register Error', 
	        	subTitle:'All fields are rquired',
	        	buttons:['OK']
	        });
	        alert.present();
	        return;
	    }     

	    // 
	    let loader = this.loadingCtrl.create({
	        content: "Logging in..."
	    });
	    loader.present();

		this.auth.login('basic', { 'email':this.email, 'password':this.password } )
		.then( () => {

        	console.log('user successfully logged in');

		  	// register app to the Ionic Push service
		  	// save push token to authenticated user.
			this.push.register().then((t: PushToken) => {
			  // https://docs.ionic.io/api/client/push/#saveToken
			  // token is associated with user
			  return this.push.saveToken(t);
			}).then((t: PushToken) => {
			  console.log('Token saved:', t.token);
			});

			// subscribe to Ionic Push notifications
			this.push.rx.notification().subscribe( (msg) => {
			    console.log(msg.title + ': ' + msg.text);

			    // handle notifications
				let alert = this.alertCtrl.create({
		            title:'Push Notification on Register Callback: '+msg.title, 
		            subTitle: msg.text,
		            buttons:['OK']
		        });
		        alert.present();

			});

        	loader.dismissAll();
        	this.navCtrl.setRoot(HomePage);        
      	}, 
      	(err) => {
        	loader.dismissAll();

        	console.log(err.message);

        	let errors = '';

        	if(err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid.<br/>';
        	if(err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';

        	let alert = this.alertCtrl.create({
          		title:'Login Error', 
          		subTitle:errors,
          		buttons:['OK']
        	});
        	alert.present();
      	});
	}


	signup() {
		console.log('process signup');
		this.showLogin = false;
		
	  	let details: UserDetails = {
	  		'email': this.email, 
	  		'password': this.password
	  	};

		this.auth.signup(details).then( () => {
			// 'this.user' is now registered
			this.showLogin = true;
			
		}, (err: IDetailedError<string[]>) => {
		  	for (let e of err.details) {
		    	if (e === 'conflict_email') {
		      		alert('Email already exists.');
		    	} else {
		      		// handle other errors
		    	}
		  	}
		} );
		
	}

}
