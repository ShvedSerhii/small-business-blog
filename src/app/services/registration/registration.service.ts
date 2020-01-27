import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
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

  error(error) {
    console.log('error', error);
  }
}
