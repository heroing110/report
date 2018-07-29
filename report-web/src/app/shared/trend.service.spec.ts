import {inject, TestBed} from '@angular/core/testing';

import {TrendService} from './trend.service';

describe('TrendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrendService]
    });
  });

  it('should be created', inject([TrendService], (service: TrendService) => {
    expect(service).toBeTruthy();
  }));
});
