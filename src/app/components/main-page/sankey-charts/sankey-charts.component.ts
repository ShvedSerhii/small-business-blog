import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sankey-charts',
  templateUrl: './sankey-charts.component.html',
  styleUrls: ['./sankey-charts.component.scss']
})
export class SankeyChartsComponent implements OnInit {
  title = '';
  type = 'Sankey';
  data = [
     ['Brazil', 'Portugal', 5],
     ['Brazil', 'France', 1],
     ['Brazil', 'Spain', 1],
     ['Brazil', 'England', 1],
     ['Canada', 'Portugal', 1],
     ['Canada', 'France', 5],
     ['Canada', 'England', 1],
     ['Mexico', 'Portugal', 1],
     ['Mexico', 'France', 1],
     ['Mexico', 'Spain', 5],
     ['Mexico', 'England', 1],
     ['USA', 'Portugal', 1],
     ['USA', 'France', 1],
     ['USA', 'Spain', 1],
     ['USA', 'England', 5]
  ];
  columnNames = ['From', 'To', 'Weight'];
  options = {
  };
  width = 550;
  height = 400;
  constructor() { }

  ngOnInit() {
  }

}
