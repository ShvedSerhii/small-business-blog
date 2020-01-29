import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsTabComponent } from './events-tab.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EventsTabComponent', () => {
  let component: EventsTabComponent;
  let fixture: ComponentFixture<EventsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsTabComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
