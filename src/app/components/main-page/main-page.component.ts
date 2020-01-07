import { Component, OnInit } from '@angular/core';
import { ChartsModel } from '../models/ChartsModel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public model: ChartsModel = new ChartsModel();

  constructor() {}

  ngOnInit() {}
}
