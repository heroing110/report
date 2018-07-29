import {inject, TestBed} from '@angular/core/testing';

import {WindowResizeService} from './window-resize.service';

describe('WindowResizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowResizeService]
    });
  });

  it('should be created', inject([WindowResizeService], (service: WindowResizeService) => {
    expect(service).toBeTruthy();
  }));
});
