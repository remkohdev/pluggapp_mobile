import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfluencerDetailPage } from './influencer-detail';

@NgModule({
  declarations: [
    InfluencerDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InfluencerDetailPage),
  ],
  exports: [
    InfluencerDetailPage
  ]
})
export class InfluencerDetailPageModule {}
