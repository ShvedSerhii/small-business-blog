import { TestBed } from '@angular/core/testing';

import { RegistrationService } from './registration.service';
import { ApiService } from '../api/api.service';
import { BusService } from '../bus/bus.service';

describe('RegistrationService', () => {
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
    const service: RegistrationService = TestBed.get(RegistrationService);
    expect(service).toBeTruthy();
  });
});
