import {inject, TestBed} from '@angular/core/testing';

import {ChainMapService} from './chain-map.service';

describe('ChainMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChainMapService]
    });
  });

  it('should be created', inject([ChainMapService], (service: ChainMapService) => {
    expect(service).toBeTruthy();
  }));
});
