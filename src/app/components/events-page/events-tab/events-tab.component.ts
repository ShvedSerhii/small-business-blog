import { Component } from '@angular/core';

@Component({
  selector: 'app-events-tab',
  templateUrl: './events-tab.component.html',
  styleUrls: ['./events-tab.component.scss']
})
export class EventsTabComponent {
  public title = '';
  public type = 'Table';
  public data = [
    ['Business conference', { v: 1000, f: '$1,000' }, true],
    ['Management courses', { v: 8000, f: '$8,000' }, false],
    ['Marketing courses', { v: 12500, f: '$12,500' }, true],
    ['Personal development training', { v: 7000, f: '$7,000' }, true],
    ['IT conference', { v: 2500, f: '$2,500' }, false]
  ];
  public columnNames = ['Event', 'Price', 'This month'];
  public options = {
    alternatingRowStyle: true,
    showRowNumber: true
  };
  public width = 550;
  public height = 330;
}
