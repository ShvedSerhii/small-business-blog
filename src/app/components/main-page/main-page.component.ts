import { Component } from '@angular/core';
import { ChartsModel } from '../../models/ChartsModel';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  public model: ChartsModel = new ChartsModel();
}
