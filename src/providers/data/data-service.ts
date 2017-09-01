import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';/* Response */
import 'rxjs/add/operator/toPromise';
//import { Observable } from 'rxjs/Rx';
//import { PlugModel } from '../../models/plug-model';

@Injectable()
export class DataServiceProvider {

  public influencersFilePath: string = './assets/data/influencers.json';
  public businessesFilePath: string = './assets/data/businesses.json';
  public plugsFilePath: string = './assets/data/plugs.json';
  public plugsUrl = 'api/plugs';

  public plugs: any;

  constructor(private http: Http) { }

  /**
    * Read Plugs from file
    */
  public getPlugs(): Promise<Object> {
    return this.http.get(this.plugsFilePath)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
    * Read Influencers from file
    */
  public getInfluencers(): Promise<Object> {
    return this.http.get(this.influencersFilePath)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
    * Read Businesses from file
    */
  public getBusinesses(): Promise<Object> {
    return this.http.get(this.businessesFilePath)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
