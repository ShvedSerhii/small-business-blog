import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {
  typesOfShoes: string[] = [
    'Business conference',
    'Management courses',
    'Marketing courses',
    'Personal development training',
    'IT conference'
  ];
}
