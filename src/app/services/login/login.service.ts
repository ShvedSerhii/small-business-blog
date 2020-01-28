import { Injectable, OnDestroy } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { BusService } from '../bus/bus.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnDestroy {
  constructor(private api: ApiService, private bus: BusService) {
    bus.subscribe('login', this.loginUser, this);
  }

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

  ngOnDestroy() {
    this.bus.unsubscribe('login', this.loginUser);
  }
}
