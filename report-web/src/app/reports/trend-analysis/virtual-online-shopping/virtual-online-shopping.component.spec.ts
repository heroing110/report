import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VirtualOnlineShoppingComponent} from './virtual-online-shopping.component';

describe('VirtualOnlineShoppingComponent', () => {
  let component: VirtualOnlineShoppingComponent;
  let fixture: ComponentFixture<VirtualOnlineShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VirtualOnlineShoppingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualOnlineShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
