import { TestBed } from '@angular/core/testing';

import { SendrequestService } from './sendrequest.service';

describe('SendrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendrequestService = TestBed.get(SendrequestService);
    expect(service).toBeTruthy();
  });
});
