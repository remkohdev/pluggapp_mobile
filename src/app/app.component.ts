import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

import { Auth } from '@ionic/cloud-angular';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public auth:Auth) {

    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      if(this.auth.isAuthenticated()){
          this.rootPage = HomePage;
      }else{
          this.rootPage = LoginPage;
      }

    });

  }
}
