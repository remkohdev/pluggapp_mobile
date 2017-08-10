import { Component, ViewChild } from '@angular/core';
// Tab
import { Tabs } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import { PlugListPage } from '../plug/plug-list';
import { BusinessListPage } from '../business/business-list';
//import { BusinessDetailPage } from '../business/business-detail';
import { InfluencerListPage } from '../influencer/influencer-list';
//import { InfluencerDetailPage } from '../influencer/influencer-detail';
//import { CampaignListPage } from '../campaign/campaign-list';
import { NotificationListPage } from '../notification/notification-list';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {

  private isAndroid: boolean = false;
  @ViewChild('myTabs') myTabs: Tabs;

  tab1Root = PlugListPage;
  tab2Root = BusinessListPage;
  tab3Root = InfluencerListPage;
  //tab4Root = CampaignListPage;
  tab4Root = NotificationListPage;

  constructor(public platform: Platform) {
    this.isAndroid = this.platform.is('android');
  }

  ionViewDidEnter() {
    //let tabs: Tab[] = this.myTabs._tabs;
    //console.log(tabs);
    //for(let i in tabs){
      //console.log(tabs[i].tabTitle);
    //}
  }

}
