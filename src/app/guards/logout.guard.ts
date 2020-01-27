import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CookiesService } from '../services/cookies/cookies.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogoutGuard implements CanActivate {

  constructor(private cookie: CookiesService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

      if (!this.cookie.getCookie('token')) { 
        return true; 
      }
      this.router.navigate(['/home']);
      return false;
  }
}
