import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public homeActive:string = 'active';
  public eventsActive:string = '';
  public galleryActive:string = '';
  public articlesActive:string = '';

  constructor() { }

  ngOnInit() {
  }

}
