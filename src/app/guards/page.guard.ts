import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CookiesService } from '../services/cookies.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageGuard implements CanActivate {

  constructor(private cookie: CookiesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

      if (this.cookie.getCookie('token')) { return true; }
      alert('View only for authorized users!');
      this.router.navigate(['/login']);
      return false;
  }
}
