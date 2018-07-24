import {inject, TestBed} from '@angular/core/testing';

import {CatShopService} from './cat-shop.service';

describe('CatShopService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatShopService]
    });
  });

  it('should be created', inject([CatShopService], (service: CatShopService) => {
    expect(service).toBeTruthy();
  }));
});
