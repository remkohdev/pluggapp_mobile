import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfluencerListPage } from './influencer-list';

@NgModule({
  declarations: [
    InfluencerListPage
  ],
  imports: [
    IonicPageModule.forChild(InfluencerListPage)
  ],
  exports: [
    InfluencerListPage
  ]
})
export class InfluencerListPageModule {}
