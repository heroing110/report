import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NetworkSellOutComponent} from './network-sell-out.component';

describe('NetworkSellOutComponent', () => {
  let component: NetworkSellOutComponent;
  let fixture: ComponentFixture<NetworkSellOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkSellOutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkSellOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
