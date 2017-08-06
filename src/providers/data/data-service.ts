import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

  public apiHost: string = './assets/data/influencers.json';

  constructor(private http: Http) { }

  public getInfluencers(): Promise<Object> {
    return this.http.get(this.apiHost)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
