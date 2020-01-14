import { Injectable } from '@angular/core';

import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  data: any;

  constructor(
    private api: ApiService
  ) { }

  loginUser(success, body) {
    return this.api.post(
      {
        url: '/api/login',
        handlers: {
          success,
          error: this.error.bind(this)
        },
        body
      }
    )
  }

  setData(data) {
    this.data = data;
  }

  getData () {
    return this.data;
  }

  error (error) {
    console.log('error', error)
  }
}