import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { CookiesService } from '../services/cookies.service';

@Injectable({
  providedIn: 'root'
})
export class EventsGuard implements CanActivate {

  constructor(private cookie: CookiesService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

      if (this.cookie.getCookie('token')) { return true; }
      confirm('View events only for authorized users!');
      return false;
  }
}
