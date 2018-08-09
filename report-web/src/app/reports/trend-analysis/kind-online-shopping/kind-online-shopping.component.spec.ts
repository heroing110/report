import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KindOnlineShoppingComponent} from './kind-online-shopping.component';

describe('KindOnlineShoppingComponent', () => {
  let component: KindOnlineShoppingComponent;
  let fixture: ComponentFixture<KindOnlineShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KindOnlineShoppingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KindOnlineShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
