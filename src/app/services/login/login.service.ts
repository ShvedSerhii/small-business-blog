import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private api: ApiService) {}

  public loginUser(success, body): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        value: 'application/json'
      })
    };

    return this.api.post({
      url: '/api/login',
      handlers: {
        success,
        error: this.error.bind(this)
      },
      body: JSON.stringify(body),
      httpOptions
    });
  }

  public error(error): void {
    console.log('error', error);
  }
}
