import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from 'src/app/services/login/login.service';
import { CookiesService } from 'src/app/services/cookies/cookies.service';
import { Router } from '@angular/router';
import { BusService } from 'src/app/services/bus/bus.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const loginServiceStub = {  }
  const cookieStub = {
    deleteCookie: () => {}
  }
  const routerStub = {
    navigate: () => {}
  }
  const busStub = {
    publish: () => {}
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: LoginService, useValue: loginServiceStub},
        {provide: CookiesService, useValue: cookieStub},
        {provide: Router, useValue: routerStub},
        {provide: BusService, useValue: busStub}, 
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
