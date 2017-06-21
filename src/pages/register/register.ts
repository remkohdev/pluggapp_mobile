import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//, UserDetails, IDetailedError
import { Auth, User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class RegisterPage {

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController, public auth: Auth, public user: User) {}

	register() {
		console.log('process register');

	}

}
