import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { ApiService } from '../api/api.service';
import { BusService } from '../bus/bus.service';

describe('LoginService', () => {
  const apiStub = {
    post: () => {}
  }
  const busStub = {
    subscribe: () => {},
    unsubscribe: () => {}
  }

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ApiService, useValue: apiStub },
      { provide: BusService, useValue: busStub } 

    ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
