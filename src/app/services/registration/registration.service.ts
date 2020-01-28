import { Injectable, OnDestroy } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { BusService } from '../bus/bus.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService implements OnDestroy {
  constructor(private api: ApiService, private bus: BusService) {
    bus.subscribe('register', this.registerUser, this);
  }

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
      body,
      httpOptions
    });
  }

  public error(error): void {
    console.log('error', error);
  }

  ngOnDestroy() {
    this.bus.unsubscribe('register', this.registerUser);
  }
}
