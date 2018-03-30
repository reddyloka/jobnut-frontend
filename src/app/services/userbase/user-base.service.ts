import { Injectable } from '@angular/core';

import 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { Userbase } from '../../model/userbase';

const USER_SERVER = 'http://localhost:3000';

@Injectable()
export class UserBaseService {

  constructor(private http: Http) { }

  addNewUser(userDetail: Userbase, files: {}): Promise<boolean> {
    return this.http.put(USER_SERVER + `/v1/jobnut.json`, userDetail)
      .toPromise()
      .then((response) => {
        return true;
        // const final_userDetail =
      });
  }

}
