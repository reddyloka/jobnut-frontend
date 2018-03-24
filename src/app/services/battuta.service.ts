import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/Observable';
import 'rxjs/Rx';
import { IGeoDetail } from '../models/battuta';

@Injectable()
export class BattutaService {
 apiURL: string;
  constructor( private http: Http) {
    // this.apiURL = `https://battuta.medunes.net/api/country/all/?key=00000000000000000000000000000000`;
    this.apiURL = `http://battuta.medunes.net/api/country/all/?key=2e63eb6666e06e7238fc7de74571d177`;
   }

  getCountries() {
    return this.http.get(this.apiURL)
      .map(data => data.json())
      .catch(err => err.json);
      // .toPromise().then((response) => {
      //   console.log(response);
      // }
      //   )
      // .catch(this.handleError);
    // .map( (res: Response) => res.json());
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
