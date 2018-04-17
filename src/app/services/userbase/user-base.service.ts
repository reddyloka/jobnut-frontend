import { Injectable } from '@angular/core';
import 'rxjs/operator/toPromise';
import { Http } from '@angular/http';
import { ApplicantBase } from '../../model/applicantbase';
import { environment } from '../../../environments/environment';
import { Hrbase } from '../../model/hrbase';
import { HrPostDetail } from '../../model/hrpostdetails';

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
      });
  }
  experiencedetailsUpdate(expdetails: any) {
    return this.http.post(environment.USER_SERVER + `/api/hr`, expdetails);
  }

  getUserDetailsById(user: string): Promise<ApplicantBase> {
    // console.log('user_id', user);
    return this.http.get(`${environment.USER_SERVER}/api/users`, {
      params: {
        'id': user
      }
    })
      .toPromise()
      .then((response) => {
        // console.log('data get of user: ', response.json());
        return response.json();
      });

  }

  getUserApplyPost(user: string): Promise<HrPostDetail[]> {
    console.log('user_id', user);
    return this.http.get(`${environment.USER_SERVER}/api/users/appliedposts`, {
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

  updateUserEduDetailsById(updateDetails: any, user: string): Promise<ApplicantBase> {
    console.log('user_id', user);
    console.log('user update details', updateDetails);
    return this.http.put(`${environment.USER_SERVER}/api/users/eduUpdate`, updateDetails, {
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
  updateUserExpDetailsById(updateDetails: any, user: string): Promise<ApplicantBase> {
    console.log('user_id', user);
    console.log('user update details', updateDetails);
    return this.http.put(`${environment.USER_SERVER}/api/users/expUpdate`, updateDetails, {
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

  updateUserApplyPost(postid: string, userid: string): Promise<Boolean> {
    console.log('post_id', postid);
    console.log('user_id', userid);
    return this.http.put(`${environment.USER_SERVER}/api/users/apply`, {}, {
      params: {
        'id': postid,
        'hrRef': userid
      }
    })
      .toPromise()
      .then((response) => {
        console.log('data get of user: ', response.json());
        return response.json();
      });
  }


}
