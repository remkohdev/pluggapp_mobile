import { Component, Input } from '@angular/core';

import { PlugModel } from '../../models/plug-model';

@Component({
  selector: 'plug-detail-form',
  templateUrl: 'plug-detail-form.html'
})

export class PlugDetailFormComponent {

  @Input() plug: PlugModel = null;
  edit: boolean = null;

  constructor(){

      this.edit = false;
  }

  toggleEdit(toggle){
    if(this.edit==true){
      // @todo save edits
    }
    this.edit = toggle;
  }

  onSubmit(formValue: any){
    console.log(formValue);
    //this.plug = formValue;
  }

}
