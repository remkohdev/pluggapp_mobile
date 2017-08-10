import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlugListPage } from './plug-list';

@NgModule({
  declarations: [
    PlugListPage,
  ],
  imports: [
    IonicPageModule.forChild(PlugListPage),
  ],
  exports: [
    PlugListPage
  ]
})
export class PlugListPageModule {}
