import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { shareReplay } from 'rxjs/operator/shareReplay';
import { Userbase } from '../../model/userbase';
import * as moment from 'moment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/shareReplay';
import { JwtService } from '../../_helper/jwt.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


const USER_SERVER = 'http://localhost:3000';
@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtservice: JwtService
  ) { }

  login(formData): Observable<any> {
    console.log('inside', formData);
<<<<<<< HEAD
    return this.http.post(USER_SERVER + '/api/login', formData)
      .do(res => {
        // console.log('response is: ', res);
=======
    return this.http.post(
      USER_SERVER + '/api/login', formData)
      .catch(error => {
        console.log('message is: ', error.error.errors);
        return Observable.throw(error.error.errors);
      })
      .do((res: Response) => {
        // if (res.errors) {
        // return;
        // }
        console.log('response is: ');
        console.log('response is: ', res);
        if (res.status) {
          return res;
        }
>>>>>>> 0ea74ece3ad5bb2791741107f147c3c9f2ce59f3
        return this.setSession(res);
      })
      .shareReplay();
  }

  private setSession(authResult) {
<<<<<<< HEAD
    console.log(' authResult is : ', authResult.user);
=======
    console.log(' authResult is : ');
    console.log(' authResult is : ', authResult.user.id);
>>>>>>> 0ea74ece3ad5bb2791741107f147c3c9f2ce59f3
    // const expiresAt = moment().add(authResult.expiresIn, 'second');
    // if (authResult.user.id) {
    window.localStorage['uuid'] = authResult.user.id;
    if (authResult.user.isHr) {
      window.localStorage['isHr'] = authResult.user.isHr;
    }
    if (authResult.user.isApplicant) {
      window.localStorage['isApplicant'] = authResult.user.isApplicant;
    }
    // }
    this.jwtservice.saveToken(authResult.user.token);
    return {
      status: authResult.user.status,
      isHr: authResult.user.isHr,
      isApplicant: authResult.user.isApplicant
    };
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    console.log(window.localStorage['uuid']);
    this.jwtservice.destroyToken();
    localStorage.removeItem('uuid');
    // localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    console.log('you got this : ', this.jwtservice.getToken());
    if (this.jwtservice.getToken() && this.jwtservice.getToken().length) {
      return true;
    }
    return false;
    // return moment().isBefore(this.getExpiration());
  }

  // getExpiration() {
  //   const expiration = localStorage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration);

  //   return moment(expiresAt);
  // }
}
