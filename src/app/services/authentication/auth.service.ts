import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { shareReplay } from 'rxjs/operator/shareReplay';
import { Userbase } from '../../model/userbase';
import * as moment from 'moment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';


const USER_SERVER = 'http://localhost:3000';
@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(formData) {
    console.log('inside', formData);
    return this.http.post(
      USER_SERVER + '/v1/hr', formData)
      .do((res) => {
        return this.setSession;
      })
      .shareReplay();
  }

  private setSession(authResult) {
    console.log(' authResult is : ');
    console.log(' authResult is : ', authResult);
    // const expiresAt = moment().add(authResult.expiresIn, 'second');
    localStorage.setItem('id_token', authResult.token);
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('id_token');
    // localStorage.removeItem('expires_at');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }
}
