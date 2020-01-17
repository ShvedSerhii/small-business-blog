import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public homeActive = '';
  public eventsActive = '';
  public galleryActive = '';
  public articlesActive = '';
  public loginActive = '';
}
