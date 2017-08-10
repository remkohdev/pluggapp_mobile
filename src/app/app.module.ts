import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';

import { PlugListPage } from '../pages/plug/plug-list';
import { PlugDetailPage } from '../pages/plug/plug-detail';
import { BusinessListPage } from '../pages/business/business-list';
import { BusinessDetailPage } from '../pages/business/business-detail';
import { InfluencerListPage } from '../pages/influencer/influencer-list';
import { InfluencerDetailPage } from '../pages/influencer/influencer-detail';
import { CampaignListPage } from '../pages/campaign/campaign-list';
import { NotificationListPage } from '../pages/notification/notification-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';

import { AuthServiceProvider } from '../providers/auth/auth-service';
import { DataServiceProvider } from '../providers/data/data-service';
import { GlobalServiceProvider } from '../providers/global/global-service';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'a1e969ec'
  },
  'push': {
    'sender_id': '86595768696',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PlugListPage,
    PlugDetailPage,
    BusinessListPage,
    BusinessDetailPage,
    InfluencerListPage,
    InfluencerDetailPage,
    CampaignListPage,
    NotificationListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    PlugListPage,
    PlugDetailPage,
    BusinessListPage,
    BusinessDetailPage,
    InfluencerListPage,
    InfluencerDetailPage,
    CampaignListPage,
    NotificationListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    DataServiceProvider,
    GlobalServiceProvider
  ]
})
export class AppModule {}
