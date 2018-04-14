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
    return this.http.post(environment.USER_SERVER + `/api/hr`, userDetail)
    .toPromise()
    .then(async (response) => {
      const final_data = response.json().data as any;
      console.log(final_data);
      this.updateProfilePicture(final_data, files);
      return true;
      // const profile_details = response;
      // console.log('respoonse is : ', final_data);
      // const formData: FormData = new FormData();
      // // console.log(' 123 : ', response);
      // // if (files['profile_photo']) {
      // const file: File = files['profile_photo'];
      //   // formData.append('profile_photo', file, file.name);
      // // }
      // console.log('AAAAA', file);
      // const d = formData.append('profile_photo', file, file.name);
      // // return Http.call('POST', `${environment.USER_SERVER}/api/user/upload-profile`, {formData});
      //   return this.http.post(`${environment.USER_SERVER}/api/user/upload-profile`, formData, {
      //     params: {
      //       id: final_data._id,
      //       isHr: final_data.isHr,
      //       isApplicant: final_data.isApplicant
      //     }
      //   })
      //     .toPromise()
      //     .then(image_response => {
      //       console.log(image_response);
      //       return false;
      //     })
      //     .catch();

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

  updateProfilePicture(final_data: any, files: any) {
      console.log('respoonse is : ', final_data, files);
      const formData: FormData = new FormData();
      // console.log(' 123 : ', response);
      // if (files['profile_photo']) {
      const file: File = files['profile_photo'];
        // formData.append('profile_photo', file, file.name);
      // }
      console.log('AAAAA', file);
      const d = formData.append('profile_photo', file, file.name);
      // return Http.call('POST', `${environment.USER_SERVER}/api/user/upload-profile`, {formData});
        return this.http.post(`${environment.USER_SERVER}/api/user/upload-profile`, formData, {
          params: {
            id: final_data._id,
            isHr: final_data.isHr,
            isApplicant: final_data.isApplicant
          }
        })
          .toPromise()
          .then((image_response: any) => {
            console.log('lml: ', image_response._body);
            return image_response._body;
          })
          .catch();

        // const final_userDetail =
      // });
  }






}
