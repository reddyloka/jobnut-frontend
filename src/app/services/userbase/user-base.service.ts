import { Injectable } from '@angular/core';

import 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { Userbase } from '../../model/userbase';
import { environment } from '../../../environments/environment';

// const USER_SERVER = 'http://localhost:3000';

@Injectable()
export class UserBaseService {

  constructor(private http: Http) { }

  addNewUser(userDetail: Userbase, files: {}): Promise<boolean> {
    return this.http.put(environment.USER_SERVER + `/v1/hr`, userDetail)
      .toPromise()
      .then((response) => {
        return true;
        // const final_userDetail =
      });
  }

}
