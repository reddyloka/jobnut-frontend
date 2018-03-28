import { Injectable } from '@angular/core';
import * as auth0 from 'auth0-js';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { shareReplay } from 'rxjs/operator/shareReplay';
import { Userbase } from '../../model/userbase';

const USER_SERVER = 'http://localhost:3000';
@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    console.log('inside');
    return this.http.post<Userbase>(
      USER_SERVER + '/v1/hr', { email, password }
    );
  }
}





































 // auth0 = new auth0.WebAuth({
  //   clientID: 'Osz2IAntzF_-3wiH8WEL04ZWY8B6BjNq',
  //   domain: 'abhishek-mittal.auth0.com',
  //   responseType: 'token id_token',
  //   audience: 'https://abhishek-mittal.auth0.com/userinfo',
  //   redirectUri: 'http://localhost:3000/callback',
  //   scope: 'openid'
  // });

  // constructor(private router: Router) { }

  // public login(): void {
  //   this.auth0.authorize();
  // }

  // // handleAuthentication: looks for the result of authentication in the URL hash. Then, the result is processed with the parseHash method from auth0.js.

  // public handleAuthentication(): void {
  //   this.auth0.parseHash((err, authResult) => {
  //     if ( authResult && authResult.accessToken && authResult.idToken) {
  //       window.location.hash = '';
  //       this.setSession(authResult);
  //       this.router.navigate(['/']);
  //     } else if (err) {
  //       this.router.navigate(['/signin']);
  //       console.log(err);
  //     }
  //   });
  // }

  // private setSession( authResult ): void {
  //   // Set the time that the Access Token will expire at
  //   const expiresAt = JSON.stringify((authResult.expiresIn * 1000 ) + new Date().getTime());
  //   localStorage.setItem('access_token', authResult.accessToken);
  //   localStorage.setItem('id_token', authResult.idToken);
  //   localStorage.setItem('expires_at', expiresAt);
  // }

  // public logout(): void {
  //   // Remove tokens and expiry time from localStorage
  //   localStorage.removeItem('access_token');
  //   localStorage.removeItem('id_token');
  //   localStorage.removeItem('expires_at');
  //   // Go back to the home route
  //   this.router.navigate(['/']);
  // }

  // public isAuthenticated(): boolean {
  //   // Check whether the current time is past the
  //   // Access Token's expiry time
  //   const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  //   return new Date().getTime() < expiresAt;
  // }