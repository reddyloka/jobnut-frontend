import { Injectable } from '@angular/core';
import 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { ApplicantBase } from '../../model/applicantbase';
import { environment } from '../../../environments/environment';
import { Userbase } from '../../model/userbase';

// const USER_SERVER = 'http://localhost:3000';

@Injectable()
export class UserBaseService {

  constructor(private http: Http) { }

  addNewUser(userDetail: any, files: {}): Promise<boolean> {
    console.log('SSSSSSSSSSSS', userDetail);
    return this.http.post(environment.USER_SERVER + `/api/hr`, userDetail)
      .toPromise()
      .then((response) => {
        console.log(' 123 : ', response);
        return true;
        // const final_userDetail =
      });
  }
  experiencedetailsUpdate(expdetails: any) {
    return this.http.post(environment.USER_SERVER + `/api/hr`, expdetails);
  }

  getUserDetailsById(user: string): Promise<ApplicantBase> {
    console.log('user_id', user);
    return this.http.get(`${environment.USER_SERVER}/api/users`, {
      params: {
        'id': user
      }
    })
      .toPromise()
      .then((response) => {
        console.log('data get of user: ', response.json());
        return response.json();
      });

  }

  updateUserDetailsById(updateDetails: any, user: string): Promise<ApplicantBase> {
    console.log('user_id', user);
    console.log('user update details', updateDetails);
    return this.http.put(`${environment.USER_SERVER}/api/users/update`, updateDetails, {
      params: {
        'id': user
      }
    })
      .toPromise()
      .then((response) => {
        console.log('data get of user: ', response.json());
        return response.json();
      });

  }






}
