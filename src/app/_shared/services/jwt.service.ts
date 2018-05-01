import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {


  getToken(): String {
    return window.localStorage['id_token'];
  }

  saveToken(token: String) {
    window.localStorage['id_token'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('id_token');
  }


}
