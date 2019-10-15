import { TestBed } from '@angular/core/testing';

import { CpanelService } from './cpanel.service';

describe('CpanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CpanelService = TestBed.get(CpanelService);
    expect(service).toBeTruthy();
  });
});
