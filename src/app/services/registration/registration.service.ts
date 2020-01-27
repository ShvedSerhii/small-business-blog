import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private api: ApiService) {}

  public registerUser(success, body): Observable<any> {
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

  public error(error): void {
    console.log('error', error);
  }
}
