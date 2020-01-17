import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(
    private cookieService: CookieService
  ) { }

  setCookie (key: string, value: string, expires: number | Date = 365, secure: boolean = true) {
    this.cookieService.set(key, value, expires, secure)
  }

  getCookie (key: string) {
    this.cookieService.get(key)
  }

  deleteCookie (key: string) {
    this.cookieService.delete(key)
  }
}
