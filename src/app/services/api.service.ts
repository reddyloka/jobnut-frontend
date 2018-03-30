import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JwtService } from '../_helper/jwt.service';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators/catchError';

@Injectable()
export class ApiServiceService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtService
  ) { }

  private formatErrors(error: any) {
    return new ErrorObservable(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.USER_SERVER}${path}`, {
      params
    })
    .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.USER_SERVER}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.USER_SERVER}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.USER_SERVER}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
