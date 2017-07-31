import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Auth, AuthLoginResult, UserDetails, AuthModuleId, IDetailedError } from '@ionic/cloud-angular';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http, public auth: Auth) {
    console.log('Hello AuthServiceProvider Provider');
  }

  isAuthenticated(): boolean {
        return this.auth.isAuthenticated();
  }

  /**
   * http://legacy.docs.ionic.io/docs/user-authentication
   */
   
  login(moduleId: AuthModuleId, details: UserDetails): any {

    return this.auth.login(moduleId, details)
    .then((user: AuthLoginResult) => {
      return user;
    }, (err) => {
      return {error: err};
    });

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
