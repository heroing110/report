import {inject, TestBed} from '@angular/core/testing';

import {LocalProductService} from './local-product.service';

describe('LocalProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalProductService]
    });
  });

  it('should be created', inject([LocalProductService], (service: LocalProductService) => {
    expect(service).toBeTruthy();
  }));
});
