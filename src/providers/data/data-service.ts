import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataServiceProvider {

  public influencersApiHost: string = './assets/data/influencers.json';
  public businessesApiHost: string = './assets/data/businesses.json';
  public campaignsApiHost: string = './assets/data/plugs.json';

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

  public getCampaigns(): Promise<Object> {
    return this.http.get(this.campaignsApiHost)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
