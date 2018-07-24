import {inject, TestBed} from '@angular/core/testing';

import {CommonDataService} from './common-data.service';

describe('CommonDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonDataService]
    });
  });

  it('should be created', inject([CommonDataService], (service: CommonDataService) => {
    expect(service).toBeTruthy();
  }));
});
