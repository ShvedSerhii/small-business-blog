import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SankeyChartsComponent } from './sankey-charts.component';

describe('SankeyChartsComponent', () => {
  let component: SankeyChartsComponent;
  let fixture: ComponentFixture<SankeyChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SankeyChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SankeyChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
