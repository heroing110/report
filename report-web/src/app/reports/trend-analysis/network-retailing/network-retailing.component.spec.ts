import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NetworkRetailingComponent} from './network-retailing.component';

describe('NetworkRetailingComponent', () => {
  let component: NetworkRetailingComponent;
  let fixture: ComponentFixture<NetworkRetailingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NetworkRetailingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworkRetailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
