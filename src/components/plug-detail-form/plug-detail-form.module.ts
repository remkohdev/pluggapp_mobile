import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlugDetailFormComponent } from './plug-detail-form';

@NgModule({
  declarations: [
    PlugDetailFormComponent,
  ],
  imports: [
    IonicPageModule.forChild(PlugDetailFormComponent),
  ],
  exports: [
    PlugDetailFormComponent
  ]
})
export class PlugDetailFormComponentModule {}
