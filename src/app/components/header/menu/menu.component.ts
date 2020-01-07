import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public homeActive = 'active';
  public eventsActive = '';
  public galleryActive = '';
  public articlesActive = '';

  constructor() {}

  ngOnInit() {}
}
