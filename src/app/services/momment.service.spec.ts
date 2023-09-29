import { TestBed } from '@angular/core/testing';

import { MommentService } from './momment.service';

describe('MomentService', () => {
  let service: MommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
