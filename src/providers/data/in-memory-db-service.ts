import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { DataServiceProvider } from './data-service';

@Injectable()
export class InMemoryDbServiceProvider implements InMemoryDbService {

  constructor(public http: Http,
              public dataService: DataServiceProvider) {
    console.log('Hello InMemoryDbServiceProvider Provider');
  }

  createDb() {
    let plugs = [ {
          "id" : 1,
          "name" : "Summer Paninis for Greg in Brooklyn",
          "influencer_id" : 1,
          "influencer_username" : "Greg",
          "business_id" : 1,
          "business_name" : "Anthony & Son Panini Shoppe",
          "campaign_details" : "10 post(s) over 5 weeks",
          "campaign_slogan" : "Check out these panini's!",
          "campaign_picture" : "",
          "plug_date" : "2017-07-15",
          "startdate" : "2017-06-21",
          "enddate" : "2017-08-25",
          "amount" : 750,
          "platform" : "Instagram"
        },
        {
          "id" : 2,
          "name" : "$1 Discount on Falafel Sandwich at Gyro World",
          "influencer_id" : 5,
          "influencer_username" : "Cy_Eats",
          "business_id" : 2,
          "business_name" : "Gyro World",
          "campaign_details" : "5 post(s) over 2 weeks",
          "campaign_slogan" : "Get 1 dollar off on every falafel pita",
          "campaign_picture" : "",
          "plug_date" : "2017-07-21",
          "startdate" : "2017-07-24",
          "enddate" : "2017-08-07",
          "amount" : 300,
          "platform" : "Instagram"
        }
      ];
      return plugs ;
  }

}
