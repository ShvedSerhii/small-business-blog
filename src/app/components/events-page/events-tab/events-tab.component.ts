import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.scss']
})
export class EventsTabComponent implements OnInit {
  title = '';
  type = 'Table';
  data = [
     ['Business conference',  {v: 1000, f: '$1,000'}, true],
     ['Management courses',   {v: 8000,   f: '$8,000'},  false],
     ['Marketing courses', {v: 12500, f: '$12,500'}, true],
     ['Personal development training',   {v: 7000,  f: '$7,000'},  true],
     ['IT conference',   {v: 2500,  f: '$2,500'},  false],
  ];
  columnNames = ['Event', 'Price', 'This month'];
  options = {
    alternatingRowStyle: true,
    showRowNumber: true
  };
  width = 550;
  height = 330;
  constructor() { }

  ngOnInit() {
  }

}
