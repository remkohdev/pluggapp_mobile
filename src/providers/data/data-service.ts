import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';
//import { PlugModel } from '../models/plug-model';

@Injectable()
export class DataServiceProvider {

  public influencersApiHost: string = './assets/data/influencers.json';
  public businessesApiHost: string = './assets/data/businesses.json';
  public plugsApiHost: string = './assets/data/plugs.json';
  public plugsUrl = 'api/plugs';

  constructor(private http: Http) { }

  public getInfluencers(): Promise<Object> {
    return this.http.get(this.influencersApiHost)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public getBusinesses(): Promise<Object> {
    return this.http.get(this.businessesApiHost)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // READ PLUGS FROM JSON FILE
  public getCampaigns(): Promise<Object> {
    return this.http.get(this.plugsApiHost)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
  // READ PLUGS FROM IN-MEMORY-DB-SERVICE
  getPlugs(): Promise<PlugModel[]> {
    return this.http.get(this.plugsUrl)
       .toPromise()
       .then( response => response.json().data as PlugModel[] )
       .catch();
  }
  */
}
