import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private api: ApiService) {}

  loginUser(success, body) {
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
      body,
      httpOptions
    });
  }

  error(error) {
    console.log('error', error);
  }
}
