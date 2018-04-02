import { Injectable } from '@angular/core';

import 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { Userbase } from '../../model/userbase';

const USER_SERVER = 'http://localhost:3000';

@Injectable()
export class UserBaseService {

  constructor(private http: Http) { }

  addNewUser(userDetail: any, files: {}): Promise<boolean> {
    return this.http.post(USER_SERVER + `/api/hr`, userDetail)
      .toPromise()
      .then((response) => {
        console.log(' 123 : ', response);
        return true;
        // const final_userDetail =
      });
  }

}
