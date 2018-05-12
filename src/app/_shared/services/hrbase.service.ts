import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HrPostDetail } from '../models/hrpostdetails';
import { Hrbase } from '../models/hrbase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';


@Injectable()
export class HrbaseService {
  hrpostdetails: any;
  hrpostdetail: HrPostDetail;
  hrdostdetails: HrPostDetail[];
  constructor(private http: Http) { }


  getAllHrPost(user: string): Observable<HrPostDetail[]> {
    user = localStorage['id_token'];
    return this.http.get(`${environment.USER_SERVER}/api/posts`, {
      params: {
        'token': user
      }
    }).map((res)=>{let data = res.json();
      return data || {};
    }).catch((error: any) =>{
      return new ErrorObservable(error.error);
    });
  }

  HrPostUpdate(updateDetails: any, user: string): Observable<HrPostDetail> {
    console.log('hr_id', user);
    console.log('hr update details', updateDetails);
    return this.http.put(`${environment.USER_SERVER}/api/posts/update`, updateDetails, {
      params: {
        'id': user
      }
    }).map((res)=>{let data = res.json();
      return data || {};
    }).catch((error: any) =>{
      return new ErrorObservable(error.error);
    });
  }

  getHrPostById(hrpost_id): Observable<HrPostDetail> {
    console.log(' :: ', hrpost_id);
    return this.http.get(`${environment.USER_SERVER}/api/posts/${hrpost_id}`, {
      params: { token : localStorage['id_token']}
    }).map((res)=>{let data = res.json();
      return data || {};
    }).catch((error: any) =>{
      return new ErrorObservable(error.error);
    });
  }

  addNewPost(hrpostdetail: HrPostDetail, user: string): Observable<any> {
    // this.hrpostdetails.unshift(hrpostdetail);
    console.log('data123', hrpostdetail);
    user = localStorage['id_token'];
    return this.http.put(`${environment.USER_SERVER}/api/posts/new-post`, hrpostdetail, {
      params: {
        'token': user
      }
    }).map((res)=>{let data = res.json();
      return data || {};
    }).catch((error: any) =>{
      return new ErrorObservable(error.error);
    });
  }



  getAllUserViewPost(): Observable<HrPostDetail[]> {
    return this.http.get(`${environment.USER_SERVER}/api/posts/all/post`).map((res)=>{let data = res.json();
      return data || {};
    }).catch((error: any) =>{
      return new ErrorObservable(error.error);
    });
  }


  getHrDetailsById(user: string): Observable<any> {
    console.log('user_id', user);
    return this.http.get(`${environment.USER_SERVER}/api/hrs`, {
      params: {
        'id': user
      }
    }).map((res)=>{let data = res.json();
      return data || {};
    }).catch((error: any) =>{
      return new ErrorObservable(error.error);
    });

  }

  updateHrDetailsById(updateDetails: Hrbase, user: string): Observable<Hrbase> {
    console.log('hr_id', user);
    console.log('hr update details', updateDetails);
    return this.http.put(`${environment.USER_SERVER}/api/hrs/update`, updateDetails, {
      params: {
        'id': user
      }
    }).map((res)=>{let data = res.json();
      return data || {};
    }).catch((error: any) =>{
      return new ErrorObservable(error.error);
    });

  }



  hrShortlist(data: any, postid: string, userid: string): Observable<Boolean> {
    console.log('post_id', postid);
    return this.http.put(`${environment.USER_SERVER}/api/posts/shortlist`, data, {
        params: {
          'id': postid,
          'hrRef': userid
        }
      }).map((res)=>{let body = res.json();
        return body.data || {};
      }).catch((error: any) =>{
        return new ErrorObservable(error.error);
      });
  }

  deleteHrPost(id:string):Observable<boolean>{
    console.log('id',id);
    return this.http.put(`${environment.USER_SERVER}/api/posts/deleteHrPost`,{},
     {params: {
      'id': id
    }}).map((res)=>{let data = res.json();
      return data || {};
    }).catch((error: any) =>{
      return new ErrorObservable(error.error);
    });
  }

}

