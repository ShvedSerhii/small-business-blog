import { Component } from '@angular/core';
import { CookiesService } from 'src/app/services/cookies/cookies.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(public cookie: CookiesService) { }

  public logout(): void {
    this.cookie.deleteCookie('token');
  }
 }
