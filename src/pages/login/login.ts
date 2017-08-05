import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { User, UserDetails, AuthModuleId, Push, PushToken  } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController,
              public authService: AuthServiceProvider,
              public user: User,
              public alertCtrl: AlertController,
              public loadingCtrl:LoadingController,
              public push: Push) {

    if (this.authService.isAuthenticated()) {
      this.navCtrl.push(HomePage);
    }

  }

	login(type) {

    let loader = this.loadingCtrl.create({
        content: "Logging in..."
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
    }, 5000);

    console.log('process login');
    this.showLogin = true;
    
    let moduleId: AuthModuleId = type;
    let details: UserDetails = { 'email':this.email, 'password':this.password };

    this.authService.login(moduleId, details)
    .then( (user) => {

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

    }, (errors) => {

    });

	}

	signup() {

		console.log('process signup');
		this.showLogin = false;

    let details: UserDetails = {
	  		'email': this.email,
	  		'password': this.password
    };

		this.authService.signup(details).then( () => {
			// 'this.user' is now registered
			this.showLogin = true;
      let alert = this.alertCtrl.create({
        title:'You successfully signed up',
        buttons:['OK']
      });
      alert.present();
		}, (errors) => {

    });

	}

}
