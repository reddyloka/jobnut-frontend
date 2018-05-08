import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HrPostDetail } from '../models/hrpostdetails';
import { Hrbase } from '../models/hrbase';
// import { promise } from 'protractor';

@Injectable()
export class HrbaseService {
  hrpostdetails: any;
  hrpostdetail: HrPostDetail;
  hrdostdetails: HrPostDetail[];
  constructor(private http: Http) { }


  getAllHrPost(user: string): Promise<HrPostDetail[]> {
    user = localStorage['id_token'];
    return this.http.get(`${environment.USER_SERVER}/api/posts`, {
      params: {
        'token': user
      }
    })
      .toPromise()
      .then((response) => {
        console.log('data get: ', response.json());
        return response.json().data;
      });
  }

  HrPostUpdate(updateDetails: any, user: string): Promise<HrPostDetail> {
    console.log('hr_id', user);
    console.log('hr update details', updateDetails);
    return this.http.put(`${environment.USER_SERVER}/api/posts/update`, updateDetails, {
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

  getHrPostById(hrpost_id): Promise<HrPostDetail> {
    console.log(' :: ', hrpost_id);
    return this.http.get(`${environment.USER_SERVER}/api/posts/${hrpost_id}`, {
      params: { token : localStorage['id_token']}
    })
      .toPromise()
      .then((response) => {
        console.log('id data:', response.json().data);
        return response.json().data;
      });
  }

  addNewPost(hrpostdetail: HrPostDetail, user: string): Promise<any> {
    // this.hrpostdetails.unshift(hrpostdetail);
    console.log('data123', hrpostdetail);
    user = localStorage['id_token'];
    return this.http.put(`${environment.USER_SERVER}/api/posts/new-post`, hrpostdetail, {
      params: {
        'token': user
      }
    })
      .toPromise()
      .then((response) => {
        console.log(' 123 : ', response.json());
        return response.json();
      });
  }



  getAllUserViewPost(): Promise<HrPostDetail[]> {
    return this.http.get(`${environment.USER_SERVER}/api/posts/all/post`)
      .toPromise()
      .then((response) => {
        console.log('data get post: ', response.json());

        return response.json().data;
      });
  }


  getHrDetailsById(user: string): Promise<any> {
    console.log('user_id', user);
    return this.http.get(`${environment.USER_SERVER}/api/hrs`, {
      params: {
        'id': user
      }
    })
      .toPromise()
      .then((response) => {
        console.log('data get of hrs: ', response.json());
        return response.json();
      });

  }

  updateHrDetailsById(updateDetails: Hrbase, user: string): Promise<Hrbase> {
    console.log('hr_id', user);
    console.log('hr update details', updateDetails);
    return this.http.put(`${environment.USER_SERVER}/api/hrs/update`, updateDetails, {
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

  updateHrExpDetailsById(updateDetails: any, user: string): Promise<Hrbase> {
    console.log('hr_id', user);
    console.log('hr update details', updateDetails);
    return this.http.put(`${environment.USER_SERVER}/api/hrs/expUpdate`, updateDetails, {
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

  hrShortlist(data: any, postid: string, userid: string): Promise<Boolean> {
    console.log('post_id', postid);
    return this.http.put(`${environment.USER_SERVER}/api/posts/shortlist`, data, {
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

