import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() data: any;
  @Input() columnNames: any;
  @Input() options: any;

  constructor() { }

  ngOnInit() {
  }

}
