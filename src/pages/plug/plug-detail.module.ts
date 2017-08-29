import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { PlugDetailPage } from './plug-detail';

@NgModule({
  declarations: [
    PlugDetailPage
  ],
  imports: [
    IonicPageModule.forChild(PlugDetailPage)
  ],
  exports: [
    PlugDetailPage
  ]
})

export class PlugDetailPageModule {}
