import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  typesOfShoes: string[] = [
    'Business conference',
    'Management courses',
    'Marketing courses',
    'Personal development training',
    'IT conference'
  ];
  constructor() {}

  ngOnInit() {}
}
