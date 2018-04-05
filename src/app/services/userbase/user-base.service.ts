import { Injectable } from '@angular/core';

import 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

// const USER_SERVER = 'http://localhost:3000';

@Injectable()
export class UserBaseService {

  constructor(private http: Http) { }

  addNewUser(userDetail: any, files: {}): Promise<boolean> {
    console.log('SSSSSSSSSSSS');
    console.log(environment.USER_SERVER + `/api/hr`);
    return this.http.post(environment.USER_SERVER + `/api/hr`, userDetail)
      .toPromise()
      .then((response) => {
        console.log(' 123 : ', response);
        return true;
        // const final_userDetail =
      });
  }

}
