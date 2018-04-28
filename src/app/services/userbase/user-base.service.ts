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

checkMailId(checkDetails:any):Promise<any> {
  let emailDetails={
    email:checkDetails.userEmail,
    isHr:checkDetails.isHr
  }
return this.http.post(environment.USER_SERVER + `/api/checkMailId`,emailDetails)
.toPromise()
    .then((data)=>{
     data=data.json();
     console.log('returned data ',data.status)
      return data.status;
    })
  }

  passwordUpdate(emailDetails:any,password:any):Promise<boolean>{
    let personalDetails={
      email:emailDetails.userEmail,
      isHr:emailDetails.isHr,
      password:password
    }
return this.http.post(environment.USER_SERVER + `/api/resetPassword`,personalDetails)
    .toPromise()
    .then(()=>{
      console.log('returned');
      return true;
    })
  }

  addNewUser(userDetail: any, files: {}): Promise<boolean> {
    return this.http.post(environment.USER_SERVER + `/api/hr`, userDetail)
      .toPromise()
      .then(async (response) => {
        const final_data = response.json().data as any;
        console.log(final_data);
        this.updateProfilePicture(final_data, files);
        return final_data;
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

  async updateProfilePicture(final_data: any, files: any) {
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
    const image_response = await this.http.post(`${environment.USER_SERVER}/api/user/upload-profile`, formData, {
      params: {
        id: final_data._id,
        isHr: final_data.isHr,
        isApplicant: final_data.isApplicant
      }
    }).toPromise();
    console.log('lml: ', image_response.json());
    return image_response.json();

    // const final_userDetail =
    // });
  }

}
