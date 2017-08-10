import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AlertController } from 'ionic-angular';

import { Auth, AuthLoginResult, UserDetails, AuthModuleId, IDetailedError } from '@ionic/cloud-angular';

@Injectable()
export class AuthServiceProvider {

  constructor(public alertCtrl: AlertController,
              public http: Http,
              public auth: Auth) {
    console.log('Hello AuthServiceProvider Provider');
  }

  isAuthenticated(): boolean {
        return this.auth.isAuthenticated();
  }

  /**
   * http://legacy.docs.ionic.io/docs/user-authentication
   */

  login(moduleId: AuthModuleId, details: UserDetails): any {

    if(moduleId == 'instagram'){

      return this.auth.login(moduleId)
      .then((user: AuthLoginResult) => {
        return user;
      }, (err) => {
        return {error: err};
      });

    }else{

      // login input validation
      if(details.email === '' || details.password === '') {
          let alert = this.alertCtrl.create({
              title:'Register Error',
              subTitle:'All fields are required',
              buttons:['OK']
          });
          alert.present();
          return;
      }

      return this.auth.login(moduleId, details)
      .then((user: AuthLoginResult) => {
        return user;
      }, (err) => {
        return {error: err};
      });

    }
  }

  signup(details): any {

      // 'this.user' is now registered
      return this.auth.signup(details).then(() => {
        return {error: null};
      }, (err: IDetailedError<string[]>) => {
        return {error: err};
      });
  }

  logout(): any {
      return this.auth.logout();
  }

}
