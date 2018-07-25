import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StoreSalesDistributionComponent} from './store-sales-distribution.component';

describe('StoreSalesDistributionComponent', () => {
  let component: StoreSalesDistributionComponent;
  let fixture: ComponentFixture<StoreSalesDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoreSalesDistributionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSalesDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
