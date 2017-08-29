import { Component } from '@angular/core';

/**
 * Generated class for the PlugDetailFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'plug-detail-form',
  templateUrl: 'plug-detail-form.html'
})
export class PlugDetailFormComponent {

  text: string;

  constructor() {
    console.log('Hello PlugDetailFormComponent Component');
    this.text = 'Hello World';
  }

}
