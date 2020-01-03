import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent implements OnInit {
  title = 'Age vs Weight';
  type = 'BubbleChart';
  data = [
     ["", 8, 12],
     ["", 4, 5.5],
     ["", 11, 14],
     ["", 3, 3.5],
     ["", 6.5, 7]
  ];
  columnNames = ['Id', 'Age','Weight'];
  options = { };
  width = 550;
  height = 400;
  constructor() { }

  ngOnInit() {
  }

}
