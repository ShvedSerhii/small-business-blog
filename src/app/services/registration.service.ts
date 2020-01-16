import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  data: any;

  constructor(private api: ApiService) {}

  registerUser(success, body) {
    const httpOptions = {
      headers: new HttpHeaders({
        value: 'application/json'
      })
    };

    return this.api.post({
      url: '/api/registration',
      handlers: {
        success,
        error: this.error.bind(this)
      },
      body: JSON.parse(body.toString()),
      httpOptions
    });
  }

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  error(error) {
    console.log('error', error);
  }
}
