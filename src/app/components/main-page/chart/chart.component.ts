import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() data: any;
  @Input() columnNames: any;
  @Input() options: any;

}
