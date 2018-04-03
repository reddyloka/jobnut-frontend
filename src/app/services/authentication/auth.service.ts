import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { shareReplay } from 'rxjs/operator/shareReplay';
import { Userbase } from '../../model/userbase';
import * as moment from 'moment';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/shareReplay';
import { JwtService } from '../../_helper/jwt.service';


const USER_SERVER = 'http://localhost:3000';
@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtservice: JwtService
  ) { }

  login(formData) {
    console.log('inside', formData);
    return this.http.post(
      USER_SERVER + '/api/login', formData)
      .do(res => {
        // console.log('response is: ', res);
        return this.setSession(res);
      })
      .shareReplay();
  }

  private setSession(authResult) {
    console.log(' authResult is : ');
    console.log(' authResult is : ', authResult.user);
    // const expiresAt = moment().add(authResult.expiresIn, 'second');
    this.jwtservice.saveToken(authResult.user.token);
    return true;
    // localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    this.jwtservice.destroyToken();
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
